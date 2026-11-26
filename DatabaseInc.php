<?php
#**************************************************************************
#  openSIS is a free student information system for public and non-public
#  schools from Open Solutions for Education, Inc. web: www.os4ed.com
#
#  openSIS is  web-based, open source, and comes packed with features that
#  include student demographic info, scheduling, grade book, attendance,
#  report cards, eligibility, transcripts, parent portal,
#  student portal and more.
#
#  Visit the openSIS web site at http://www.opensis.com to learn more.
#  If you have question regarding this system or the license, please send
#  an email to info@os4ed.com.
#
#  This program is released under the terms of the GNU General Public License as
#  published by the Free Software Foundation, version 2 of the License.
#  See license.txt.
#
#  This program is distributed in the hope that it will be useful,
#  but WITHOUT ANY WARRANTY; without even the implied warranty of
#  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
#  GNU General Public License for more details.
#
#  You should have received a copy of the GNU General Public License
#  along with this program.  If not, see <http://www.gnu.org/licenses/>.
#
#***************************************************************************************
// Establish MySQL DB connection.
if (function_exists('mysqli_report')) {
    mysqli_report(MYSQLI_REPORT_OFF);
}
include 'RedirectRootInc.php';
include 'ConnectionClass.php';
require_once "functions/PragRepFnc.php";
function db_start()
{
    global $DatabaseServer, $DatabaseUsername, $DatabasePassword, $DatabaseName, $DatabasePort, $DatabaseType, $connection;
    $db_helper = new ConnectDBOpensis();
    $connection = null;
    switch ($DatabaseType) {
        case 'mysqli':

            if ($db_helper->auto_init == true) {
                $connection = $db_helper->init($DatabaseServer, $DatabaseUsername, $DatabasePassword, $DatabaseName, $DatabasePort ?? 3306);
                if ($connection instanceof mysqli && !$connection->connect_errno) {
                    mysqli_set_charset($connection, "utf8");
                }
            }
            break;
    }

    // Error code for both.
    if (!$connection || !($connection instanceof mysqli) || $connection->connect_errno) {
        $errormessage = ($connection instanceof mysqli && $connection->connect_errno)
            ? $connection->connect_error
            : ($db_helper->last_error ?: (mysqli_connect_error() ?: 'Lidhja dështoi'));
        $couldNotConnect = defined('_couldNotConnectToDatabase') ? _couldNotConnectToDatabase : 'Nuk mund të lidhet me bazën e të dhënave';
        db_show_error("", "" . $couldNotConnect . ": $DatabaseServer", $errormessage);
    }
    return $connection;
}


##### Connection help #####
if (!empty($DatabaseServer) && !empty($DatabaseUsername) && !empty($DatabaseName)) {
    try {
        $port = !empty($DatabasePort) ? (int)$DatabasePort : 3306;
        $connection = @mysqli_connect($DatabaseServer, $DatabaseUsername, $DatabasePassword, $DatabaseName, $port);

        if ($connection) {
            $result = @$connection->query("SHOW VARIABLES WHERE VARIABLE_NAME = 'event_scheduler'");
            if ($result && mysqli_num_rows($result) > 0) {
                $row = mysqli_fetch_assoc($result);
                if (strtolower($row['Value'] ?? '') !== 'on') {
                    @$connection->query("SET GLOBAL event_scheduler = ON");
                }
            }
            $result = @mysqli_query($connection, "SELECT @@GLOBAL.sql_mode AS sql_mode");
            if ($result && mysqli_num_rows($result) > 0) {
                $row = mysqli_fetch_assoc($result);
                if (strtoupper($row['sql_mode'] ?? '') !== 'NO_ENGINE_SUBSTITUTION') {
                    @$connection->query("SET @@GLOBAL.sql_mode = 'NO_ENGINE_SUBSTITUTION'");
                }
            }
            $result = @mysqli_query($connection, "SELECT @@GLOBAL.log_bin_trust_function_creators AS lbtfc");
            if ($result && mysqli_num_rows($result) > 0) {
                $row = mysqli_fetch_assoc($result);
                if ((int)($row['lbtfc'] ?? 0) !== 1) {
                    @$connection->query("SET @@GLOBAL.log_bin_trust_function_creators = 1");
                }
            }
        }
    } catch (Throwable $e) {
        // Silently catch permission or connection errors
    }
}

# ---------- #
#  Debugger  #
# ---------- #
// if (!$connection)
// {
// 	die('Could Not Connect: ' . mysqli_error($connection) . mysqli_errno($connection));
// }

// // Do Database Stuff Here
// mysqli_close($connection);


// This function connects, and does the passed query, then returns a connection identifier.
// Not receiving the return == unusable search.
//        ie, $processable_results = DBQuery("select * from students");
function DBQuery($sql)
{
    global $DatabaseType, $_openSIS, $connection;

    if (!$connection || !($connection instanceof mysqli)) {
        $connection = db_start();
    }
    if (!$connection || !($connection instanceof mysqli)) {
        return false;
    }

    if (!empty($_SESSION['STAFF_ID'])) {
        $userId = $_SESSION['STAFF_ID'];
    } elseif (!empty($_SESSION['STUDENT_ID'])) {
        $userId = $_SESSION['STUDENT_ID'];
    } else {
        $userId = '';
    }
    if (!empty($userId)) {
        @$connection->query("set @userId= $userId;");
    }
    switch ($DatabaseType) {
        case 'mysqli':

            $sql = str_replace('&amp;', "", $sql);
            $sql = str_replace('&quot', "", $sql);
            $sql = str_replace('&#039;', "", $sql);
            $sql = str_replace('&lt;', "", $sql);
            $sql = str_replace('&gt;', "", $sql);
            $sql = par_rep("/([,\(=])[\r\n\t ]*''/", '\\1NULL', $sql);
            if (preg_match_all("/'(\d\d-[A-Za-z]{3}-\d{2,4})'/", $sql, $matches)) {
                foreach ($matches[1] as $match) {
                    $date_cheker_mod = explode('-', $match);
                    if (strlen($date_cheker_mod[2]) == 4 && $date_cheker_mod[2] < 1970) {
                        $month_names = array('JAN' => '01', 'FEB' => '02', 'MAR' => '03', 'APR' => '04', 'MAY' => '05', 'JUN' => '06', 'JUL' => '07', 'AUG' => '08', 'SEP' => '09', 'OCT' => '10', 'NOV' => '11', 'DEC' => '12');
                        $date_cheker_mod[1] = $month_names[$date_cheker_mod[1]];
                        $dt = $date_cheker_mod[2] . '-' . $date_cheker_mod[1] . '-' . $date_cheker_mod[0];
                    } else {
                        $dt = date('Y-m-d', strtotime($match));
                    }

                    $sql = par_rep("/'$match'/", "'$dt'", $sql);
                }
            }
            if (substr($sql, 0, 6) == "BEGIN;") {
                $array = explode(";", $sql);

                foreach ($array as $value) {
                    if ($value != "") {
                        $result = $connection->query($value);
                        if (!$result) {
                            $connection->query("ROLLBACK");
                            $fail_lbl = defined('_dbExecuteFailed') ? _dbExecuteFailed : 'Ekzekutimi i pyetjes në DB dështoi';
                            die(db_show_error($sql, $fail_lbl, mysqli_error($connection)));
                        }
                    }
                }
            } else {
                try {
                    $result = $connection->query($sql);
                } catch (Throwable $e) {
                    $err_msg = ($connection instanceof mysqli) ? mysqli_error($connection) : $e->getMessage();
                    $fail_lbl = defined('_dbExecuteFailed') ? _dbExecuteFailed : 'Ekzekutimi i pyetjes në DB dështoi';
                    die(db_show_error($sql, $fail_lbl, $err_msg));
                }
            }
            break;
    }
    return $result ?? false;
}
function DBQuery_assignment($sql)
{
    global $DatabaseType, $_openSIS, $connection;

    $connection = db_start();

    switch ($DatabaseType) {
        case 'mysqli':
            $sql = par_rep("/([,\(=])[\r\n\t ]*''/", '\\1NULL', $sql);
            if (preg_match_all("/'(\d\d-[A-Za-z]{3}-\d{2,4})'/", $sql, $matches)) {
                foreach ($matches[1] as $match) {
                    $date_cheker_mod = explode('-', $match);
                    if (strlen($date_cheker_mod[2]) == 4 && $date_cheker_mod[2] < 1970) {
                        $month_names = array('JAN' => '01', 'FEB' => '02', 'MAR' => '03', 'APR' => '04', 'MAY' => '05', 'JUN' => '06', 'JUL' => '07', 'AUG' => '08', 'SEP' => '09', 'OCT' => '10', 'NOV' => '11', 'DEC' => '12');
                        $date_cheker_mod[1] = $month_names[$date_cheker_mod[1]];
                        $dt = $date_cheker_mod[2] . '-' . $date_cheker_mod[1] . '-' . $date_cheker_mod[0];
                    } else {
                        $dt = date('Y-m-d', strtotime($match));
                    }

                    $sql = par_rep("/'$match'/", "'$dt'", $sql);
                }
            }
            if (substr($sql, 0, 6) == "BEGIN;") {
                $array = explode(";", $sql);
                foreach ($array as $value) {
                    if ($value != "") {
                        try {
                            $result = $connection->query($value);
                        } catch (Throwable $e) {
                            $result = false;
                        }
                        if (!$result) {
                            try {
                                $connection->query("ROLLBACK");
                            } catch (Throwable $re) {
                            }
                            die(db_show_error($sql, _dbExecuteFailed, mysqli_error($connection)));
                        }
                    }
                }
            } else {
                try {
                    $result = $connection->query($sql);
                } catch (Throwable $e) {
                    $result = false;
                }
                if (!$result) {
                    die(db_show_error($sql, _dbExecuteFailed, mysqli_error($connection)));
                }
            }
            break;
    }
    return $result ?? false;
}
function DBQueryMod($sql)
{
    global $DatabaseType, $_openSIS, $connection;

    $connection = db_start();

    switch ($DatabaseType) {
        case 'mysqli':
            $sql = str_replace('&amp;', "", $sql);
            $sql = str_replace('&quot', "", $sql);
            $sql = str_replace('&#039;', "", $sql);
            $sql = str_replace('&lt;', "", $sql);
            $sql = str_replace('&gt;', "", $sql);

            if (preg_match_all("/'(\d\d-[A-Za-z]{3}-\d{2,4})'/", $sql, $matches)) {
                foreach ($matches[1] as $match) {
                    $dt = date('Y-m-d', strtotime($match));
                    $sql = par_rep("/'$match'/", "'$dt'", $sql);
                }
            }
            if (substr($sql, 0, 6) == "BEGIN;") {
                $array = explode(";", $sql);
                foreach ($array as $value) {
                    if ($value != "") {
                        try {
                            $result = $connection->query($value);
                        } catch (Throwable $e) {
                            $result = false;
                        }
                        if (!$result) {
                            try {
                                $connection->query("ROLLBACK");
                            } catch (Throwable $re) {
                            }
                            die(db_show_error($sql, _dbExecuteFailed, mysqli_error($connection)));
                        }
                    }
                }
            } else {
                try {
                    $result = $connection->query($sql);
                } catch (Throwable $e) {
                    $result = false;
                }
                if (!$result) {
                    die(db_show_error($sql, _dbExecuteFailed, mysqli_error($connection)));
                }
            }
            break;
    }
    return $result ?? false;
}

// return next row.
function db_fetch_row($result)
{
    global $DatabaseType;
    $return = null;

    switch ($DatabaseType) {
        case 'mysqli':
            if ($result instanceof mysqli_result) {
                $return = $result->fetch_assoc();
                if (is_array($return)) {
                    foreach ($return as $key => $value) {
                        if (is_int($key)) {
                            unset($return[$key]);
                        }
                    }
                }
            }
            break;
    }
    return is_array($return) ? array_change_key_case($return, CASE_UPPER) : $return;
}

// returns code to go into SQL statement for accessing the next value of a sequence function db_seq_nextval($seqname)
function db_seq_nextval($seqname)
{
    global $DatabaseType;

    if ($DatabaseType == 'mysqli') {
        $seq = "fn_" . strtolower($seqname) . "()";
    }

    return $seq;
}

// DECODE and CASE-WHEN support

function db_case($array)
{
    global $DatabaseType;

    $counter = 0;
    if ($DatabaseType == 'mysqli') {
        $array_count = count($array);
        $string = " CASE WHEN $array[0] =";
        $counter++;
        $arr_count = count($array);
        for ($i = 1; $i < $arr_count; $i++) {
            $value = $array[$i];

            if ($value == "''" && substr($string, -1) == '=') {
                $value = ' IS NULL';
                $string = substr($string, 0, -1);
            }

            $string .= "$value";
            if ($counter == ($array_count - 2) && $array_count % 2 == 0) {
                $string .= " ELSE ";
            } elseif ($counter == ($array_count - 1)) {
                $string .= " END ";
            } elseif ($counter % 2 == 0) {
                $string .= " WHEN $array[0]=";
            } elseif ($counter % 2 == 1) {
                $string .= " THEN ";
            }

            $counter++;
        }
    }

    return $string;
}

function db_properties($table)
{
    global $DatabaseType, $DatabaseUsername;

    switch ($DatabaseType) {
        case 'mysqli':
            $result = DBQuery("SHOW COLUMNS FROM $table");
            while ($row = db_fetch_row($result)) {
                //$properties[strtoupper($row['FIELD'])]['TYPE'] = strtoupper($row['TYPE'], strpos($row['TYPE'], '('));
                $properties[strtoupper($row['FIELD'])]['TYPE'] = strpos(strtoupper($row['TYPE']), '(');
                if (!$pos = strpos($row['TYPE'], ',')) {
                    $pos = strpos($row['TYPE'], ')');
                } else {
                    $properties[strtoupper($row['FIELD'])]['SCALE'] = substr($row['TYPE'], $pos + 1);
                }

                $properties[strtoupper($row['FIELD'])]['SIZE'] = substr($row['TYPE'], strpos($row['TYPE'], '(') + 1, $pos);

                if ($row['NULL'] != '') {
                    $properties[strtoupper($row['FIELD'])]['NULL'] = "Y";
                } else {
                    $properties[strtoupper($row['FIELD'])]['NULL'] = "N";
                }
            }
            break;
    }
    return $properties;
}

function db_show_error($sql, $failnote, $additional = '')
{
    global $openSISTitle, $openSISVersion, $openSISNotifyAddress;

    $err_lbl = defined('_error') ? _error : 'Gabim';
    $hasPopTable = function_exists('PopTable');
    if ($hasPopTable) {
        PopTable('header', $err_lbl);
    }
    $tb = debug_backtrace();
    $error = (isset($tb[1]['file']) ? $tb[1]['file'] : '') . " at " . (isset($tb[1]['line']) ? $tb[1]['line'] : '');
    $date_lbl = defined('_date') ? _date : 'Data';
    $fail_lbl = defined('_failureNotice') ? _failureNotice : 'Njoftim dështimi';
    $sql_lbl = defined('_sql') ? _sql : 'SQL';
    $trace_lbl = defined('_traceback') ? _traceback : 'Gjurmimi';
    $add_lbl = defined('_additionalInformation') ? _additionalInformation : 'Informacion shtesë';
    $err_msg1 = defined('_openSisHasEncounteredAnErrorThatCouldHaveResultedFromAnyOfTheFollowing') ? _openSisHasEncounteredAnErrorThatCouldHaveResultedFromAnyOfTheFollowing : 'SIA hashi në një problem';
    $inv_input = defined('_invalidDataInput') ? _invalidDataInput : 'Të dhëna të pavlefshme';
    $db_err = defined('_databaseSqlError') ? _databaseSqlError : 'Gabim SQL në bazën e të dhënave';
    $prog_err = defined('_programError') ? _programError : 'Gabim programi';
    $contact_msg = defined('_pleaseTakeThisScreenShotAndSendItToYourOpenSisRepresentativeForDebuggingAndResolution') ? _pleaseTakeThisScreenShotAndSendItToYourOpenSisRepresentativeForDebuggingAndResolution : 'Ju lutemi kontaktoni administratorin e sistemit me këtë pamje ekrani';
    echo "
		<TABLE CELLSPACING=10 BORDER=0>
			<TD align=right><b>" . $date_lbl . ":</b></TD>
			<TD><pre>" . date("m/d/Y h:i:s") . "</pre></TD>
		</TR><TR>
			<TD align=right><b>" . $fail_lbl . ":</b></TD>
			<TD><pre> $failnote </pre></TD>
		</TR><TR>
			<TD align=right><b>" . $sql_lbl . ":</b></TD>
			<TD>$sql</TD>
		</TR>
		</TR><TR>
			<TD align=right><b>" . $trace_lbl . ":</b></TD>
			<TD>$error</TD>
		</TR>
		</TR><TR>
			<TD align=right><b>" . $add_lbl . ":</b></TD>
			<TD>$additional</TD>
		</TR>
		</TABLE>";
    echo "
		<TABLE CELLSPACING=10 BORDER=0>
			<TR><TD align=right><b>" . $date_lbl . ":</TD>
			<TD><pre>" . date("m/d/Y h:i:s") . "</pre></TD>
		</TR><TR>
			<TD align=right></TD>
			<TD>" . $err_msg1 . ":
			<br/>
			<ul>
			<li>" . $inv_input . "</li>
			<li>" . $db_err . "</li>
			<li>" . $prog_err . "</li>
			</ul>

			" . $contact_msg . ".
			</TD>
		</TR>

		</TABLE>";
    if ($hasPopTable) {
        PopTable('footer');
    }
    echo "<!-- " . (defined('_sqlStatement') ? _sqlStatement : 'SQL') . ": \n\n $sql \n\n -->";

    if ($openSISNotifyAddress) {
        $message = "System : " . $openSISTitle . " \n";
        $message .= "" . (defined('_date') ? _date : 'Data') . ": " . date("m/d/Y h:i:s") . "\n";
        $message .= " Page : " . $_SERVER['PHP_SELF'] . ' ' . (function_exists('ProgramTitle') ? ProgramTitle() : '') . " \n\n";
        $message .= "" . (defined('_failureNotice') ? _failureNotice : 'Njoftim dështimi') . ":  $failnote \n";
        $message .= "" . (defined('_additionalInfo') ? _additionalInfo : 'Informacion shtesë') . ": $additional \n";
        $message .= "\n $sql \n";
        $message .= "" . (defined('_requestArray') ? _requestArray : 'Kërkesa') . ": \n" . (function_exists('ShowVar') ? ShowVar($_REQUEST, 'Y', 'N') : print_r($_REQUEST, true));
        $message .= "\n\n" . (defined('_sessionArray') ? _sessionArray : 'Sesioni') . ": \n" . (function_exists('ShowVar') ? ShowVar($_SESSION, 'Y', 'N') : print_r($_SESSION, true));
        @mail($openSISNotifyAddress, defined('_openSisDatabaseError') ? _openSisDatabaseError : 'Gabim i bazës së të dhënave SIA', $message);
    }

    die();
}
