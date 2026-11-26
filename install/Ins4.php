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

ini_set('display_errors', 0);
error_reporting(0);
if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

require_once "../functions/PasswordHashFnc.php";

$_SESSION['admin_name'] = $_POST['auname'];
$_SESSION['admin_pwd'] = GenerateNewHash($_POST['apassword']);

require_once "../functions/PragRepFnc.php";
mysqli_report(MYSQLI_REPORT_OFF);
$port = !empty($_SESSION['port']) ? (int)$_SESSION['port'] : 3306;
$dbconn = @new mysqli($_SESSION['server'], $_SESSION['username'], $_SESSION['password'], $_SESSION['db'], $port);
if ($dbconn && !$dbconn->connect_errno) {
    $dbconn->set_charset('utf8mb4');
    @$dbconn->query("SET SESSION sql_mode = ''");
}
if (!$dbconn || $dbconn->connect_errno != 0)
{
    echo "<h2>" . ($dbconn ? $dbconn->connect_error : mysqli_connect_error()) . "</h2>\n";
    exit;
}

$_POST['fname'] = $dbconn->real_escape_string(strip_tags(urldecode($_POST['fname'])));
$_POST['lname'] = $dbconn->real_escape_string(strip_tags(urldecode($_POST['lname'])));
$_POST['mname'] = $dbconn->real_escape_string(strip_tags(urldecode($_POST['mname'])));
$_POST['emailid'] = $dbconn->real_escape_string(strip_tags(urldecode($_POST['emailid'])));

$sql = "UPDATE staff SET first_name = '" . $_POST['fname'] . "', last_name = '" . $_POST['lname'] . "', middle_name = '" . $_POST['mname'] . "', email = '" . $_POST['emailid'] . "',  profile_id = 0 WHERE staff_id = 1";
$result = $dbconn->query($sql);

$sql = "UPDATE login_authentication SET username='".$_SESSION['admin_name']."', password='".$_SESSION['admin_pwd']."' WHERE user_id=1 AND profile_id=0";
$dbconn->query($sql);

$dbconn->close();
//mysqli_close($dbconn);

header('Location: Step5.php');

?>
