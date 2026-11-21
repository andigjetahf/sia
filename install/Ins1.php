<<<<<<< HEAD
i?php
=======
<?php
>>>>>>> d8930351e069b5411fc027f3ba7a8dbfea691a7f

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
<<<<<<< HEAD
#  along with this program.  If not, see ihttp://www.gnu.org/licenses/>.
=======
#  along with this program.  If not, see <http://www.gnu.org/licenses/>.
>>>>>>> d8930351e069b5411fc027f3ba7a8dbfea691a7f
#
#***************************************************************************************
include '../functions/ParamLibFnc.php';
require_once("../functions/PragRepFnc.php");
session_start();

$_SESSION['username'] = $_POST["addusername"];
$_SESSION['password'] = $_POST["addpassword"];
$_SESSION['server'] = $_POST["server"];
$_SESSION['port'] = $_POST["port"];
$_SESSION['host'] = $_POST['server'] . ($_POST['port'] != '3306' ? ':' . $_POST['port'] : '');
$_SESSION['host_mod'] = $_POST['server']; // Used by Selectdb.php for upgrade flow
<<<<<<< HEAD
$err .= 'i!DOCTYPE html>
ihtml lang="sq">
    ihead>
        imeta charset="utf-8">
        imeta http-equiv="X-UA-Compatible" content="IE=edge">
        imeta name="viewport" content="width=device-width, initial-scale=1">
        ititle>Instaluesi SIAi/title>
        ilink href="../assets/css/icons/fontawesome/styles.min.css" rel="stylesheet">
        ilink rel="stylesheet" type="text/css" href="../assets/css/bootstrap.min.css">
        ilink rel="stylesheet" href="assets/css/installer.css?v='.rand(000, 999).'" type="text/css" />
        inoscript>iMETA http-equiv=REFRESH content="0;url=../EnableJavascript.php" />i/noscript>
    i/head>
    ibody class="outer-body">
        isection class="login">
            idiv class="login-wrapper">
                idiv class="panel">
                    idiv class="panel-heading">
                        idiv class="logo">
                            iimg src="assets/images/opensis_logo.png" alt="SIA">
                        i/div>  
                        ih3>Instalimi i SIAi/h3>                      
                    i/div>
                    idiv class="panel-body">
                        idiv class="installation-steps-wrapper">
                            idiv class="installation-instructions">
                                i!--ih4 class="no-margin">Possible causes are:i/h4>
                                iol>
                                    ili>MySQL is not installed. Try downloading from ia href="http://dev.mysql.com/downloads/" target=_blank>MySQL Websitei/a>i/li>
                                    ili>Username or Password or MySQL Configuration is incorrecti/li>
                                    ili>Php.ini is not properly configured. Search for MySQL in php.inii/li>
                                i/ol>-->
                                iul class="installation-steps-label">
                                    ili>Zgjidhni Paketëni/li>
                                    ili>Kërkesat e Sistemiti/li>
                                    ili class="active">Lidhja me Bazën e të Dhënavei/li>
                                    ili>Përzgjedhja e Bazës së të Dhënavei/li>
                                    ili>Konfigurimi i Administratoriti/li>
                                    ili>Gati për Përdorim!i/li>
                                i/ul>
                            i/div>i!-- /.installation-instructions -->
                            idiv class="installation-steps">

                                ih2 class="text-center">Nuk mund të lidhej me serverin e bazës së të dhënave: ' . $_SESSION['host'].'i/h2>ibr/>';
                                if (clean_param($_REQUEST['mod'], PARAM_ALPHAMOD) == 'upgrade') {
                                    $err .= 'ip class="text-center">ia href="Step1.php?mod=upgrade" class="btn btn-primary">ii class="fa fa-refresh">i/i> Provo Përsërii/a>i/p>';
                                } else {
                                    $err .= 'ip class="text-center">ia href="Step1.php" class="btn btn-primary">ii class="fa fa-refresh">i/i> Provo Përsërii/a>i/p>';
                                }
                            $err .= 'i/div>
                        i/div>i!-- /.installation-steps-wrapper -->
                    i/div>i!-- /.panel-body -->
                i/div>i!-- /.panel -->                
                ifooter>
                    Copyright &copy; Open Solutions for Education, Inc. (ia href="http://www.os4ed.com">OS4EDi/a>).
                i/footer>
            i/div>i!-- /.login-wrapper -->
        i/section>i!-- /.login -->
    i/body>
i/html>';
=======
$err .= '<!DOCTYPE html>
<html lang="sq">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Instaluesi SIA</title>
        <link href="../assets/css/icons/fontawesome/styles.min.css" rel="stylesheet">
        <link rel="stylesheet" type="text/css" href="../assets/css/bootstrap.min.css">
        <link rel="stylesheet" href="assets/css/installer.css?v='.rand(000, 999).'" type="text/css" />
        <noscript><META http-equiv=REFRESH content="0;url=../EnableJavascript.php" /></noscript>
    </head>
    <body class="outer-body">
        <section class="login">
            <div class="login-wrapper">
                <div class="panel">
                    <div class="panel-heading">
                        <div class="logo">
                            <img src="assets/images/opensis_logo.png" alt="SIA">
                        </div>  
                        <h3>Instalimi i SIA</h3>
                    </div>
                    <div class="panel-body">
                        <div class="installation-steps-wrapper">
                            <div class="installation-instructions">
                                i!--ih4 class="no-margin">Possible causes are:</h4>
                                <ol>
                                    <li>MySQL is not installed. Try downloading from <a href="http://dev.mysql.com/downloads/" target=_blank>MySQL Website</a></li>
                                    <li>Username or Password or MySQL Configuration is incorrect</li>
                                    <li>Php.ini is not properly configured. Search for MySQL in php.ini</li>
                                </ol>-->
                                <ul class="installation-steps-label">
                                    <li>Zgjidhni Paketën</li>
                                    <li>Kërkesat e Sistemit</li>
                                    <li class="active">Lidhja me Bazën e të Dhënave</li>
                                    <li>Përzgjedhja e Bazës së të Dhënave</li>
                                    <li>Konfigurimi i Administratorit</li>
                                    <li>Gati për Përdorim!</li>
                                </ul>
                            </div><!-- /.installation-instructions -->
                            <div class="installation-steps">

                                <h2 class="text-center">Nuk mund të lidhej me serverin e bazës së të dhënave: ' . $_SESSION['host'].'</h2><br/>';
                                if (clean_param($_REQUEST['mod'], PARAM_ALPHAMOD) == 'upgrade') {
                                    $err .= '<p class="text-center"><a href="Step1.php?mod=upgrade" class="btn btn-primary"><i class="fa fa-refresh"></i> Provo Përsëri</a></p>';
                                } else {
                                    $err .= '<p class="text-center"><a href="Step1.php" class="btn btn-primary"><i class="fa fa-refresh"></i> Provo Përsëri</a></p>';
                                }
                            $err .= '</div>
                        </div><!-- /.installation-steps-wrapper -->
                    </div><!-- /.panel-body -->
                </div><!-- /.panel -->                
                <footer>
                    Copyright &copy; Open Solutions for Education, Inc. (<a href="http://www.os4ed.com">OS4ED</a>).
                </footer>
            </div><!-- /.login-wrapper -->
        </section><!-- /.login -->
    </body>
</html>';
>>>>>>> d8930351e069b5411fc027f3ba7a8dbfea691a7f
//$dbconn = mysqli_connect($_SESSION['host'],$_SESSION['username'],$_SESSION['password'])
$db_error_detail = '';
try {
    mysqli_report(MYSQLI_REPORT_OFF);
    $dbconn = @new mysqli($_SESSION['server'], $_SESSION['username'], $_SESSION['password'], '', (int)$_SESSION['port']);
    if ($dbconn->connect_error) {
        $db_error_detail = $dbconn->connect_error;
    }
} catch (Throwable $e) {
    $db_error_detail = $e->getMessage();
}

if (!empty($db_error_detail) || !isset($dbconn) || $dbconn->connect_errno != 0) {
    if (empty($db_error_detail) && isset($dbconn)) {
        $db_error_detail = $dbconn->connect_error;
    }
    $err_with_msg = str_replace(
        "Nuk mund të lidhej me serverin e bazës së të dhënave: " . $_SESSION['host'],
<<<<<<< HEAD
        "Nuk mund të lidhej me serverin e bazës së të dhënave: " . $_SESSION['host'] . "ibr>ismall style='color:red; font-size:14px;'>(" . htmlspecialchars($db_error_detail) . ")i/small>",
=======
        "Nuk mund të lidhej me serverin e bazës së të dhënave: " . $_SESSION['host'] . "<br>ismall style='color:red; font-size:14px;'>(" . htmlspecialchars($db_error_detail) . ")</small>",
>>>>>>> d8930351e069b5411fc027f3ba7a8dbfea691a7f
        $err
    );
    exit($err_with_msg);
} else {
    // Disable strict mode for this session if enabled
    $dbconn->query("SET SESSION sql_mode = ''");
    
    $qr = $dbconn->query("SHOW VARIABLES LIKE 'sql_mode'");
    $res = $qr->fetch_assoc();
    $res_arr = explode(',', $res['Value']);
    if (false && in_array('STRICT_TRANS_TABLES', $res_arr)) { // Bypassed - strict mode handled per session
<<<<<<< HEAD
        $err = 'i!DOCTYPE html>
        ihtml lang="sq">
            ihead>
                imeta charset="utf-8">
                imeta http-equiv="X-UA-Compatible" content="IE=edge">
                imeta name="viewport" content="width=device-width, initial-scale=1">
                ititle>Instaluesi SIAi/title>
                ilink href="../assets/css/icons/fontawesome/styles.min.css" rel="stylesheet">
                ilink rel="stylesheet" type="text/css" href="../assets/css/bootstrap.min.css">
                ilink rel="stylesheet" href="assets/css/installer.css?v='.rand(000, 999).'" type="text/css" />
                inoscript>iMETA http-equiv=REFRESH content="0;url=../EnableJavascript.php" />i/noscript>
            i/head>
            ibody class="outer-body">
                isection class="login">
                    idiv class="login-wrapper">
                        idiv class="panel" style="width: 50%;">
                            idiv class="panel-heading">
                                idiv class="logo">
                                    iimg src="assets/images/opensis_logo.png" alt="SIA">
                                i/div>
                                ih3>Instalimi i SIAi/h3>
                            i/div>
                            idiv class="panel-body">
                                idiv class="padding-20 class="text-center"">
                                    ih2 class="text-center">Nuk mund të lidhej me serverin e bazës së të dhënave: ' . $_SESSION['host'].'i/h2>ibr/>
                                    ih5 class="text-center">Shkaqet e mundshme janë:i/h5>
                                    ip class="text-center">Modaliteti Strict është i aktivizuar. Ju lutemi çaktivizoni modalitetin Strict dhe rinisni shërbimet MySQL dhe Apache.
                                    i/p>
                                i/div>
                            i/div>i!-- /.panel-body -->
                        i/div>i!-- /.panel -->
                        ifooter>
                            Copyright &copy; Open Solutions for Education, Inc. (ia href="http://www.os4ed.com">OS4EDi/a>).
                        i/footer>
                    i/div>i!-- /.login-wrapper -->
                i/section>i!-- /.login -->
            i/body>
        i/html>';
=======
        $err = '<!DOCTYPE html>
        <html lang="sq">
            <head>
                <meta charset="utf-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <title>Instaluesi SIA</title>
                <link href="../assets/css/icons/fontawesome/styles.min.css" rel="stylesheet">
                <link rel="stylesheet" type="text/css" href="../assets/css/bootstrap.min.css">
                <link rel="stylesheet" href="assets/css/installer.css?v='.rand(000, 999).'" type="text/css" />
                <noscript><META http-equiv=REFRESH content="0;url=../EnableJavascript.php" /></noscript>
            </head>
            <body class="outer-body">
                <section class="login">
                    <div class="login-wrapper">
                        <div class="panel" style="width: 50%;">
                            <div class="panel-heading">
                                <div class="logo">
                                    <img src="assets/images/opensis_logo.png" alt="SIA">
                                </div>
                                <h3>Instalimi i SIA</h3>
                            </div>
                            <div class="panel-body">
                                <div class="padding-20 class="text-center"">
                                    <h2 class="text-center">Nuk mund të lidhej me serverin e bazës së të dhënave: ' . $_SESSION['host'].'</h2><br/>
                                    <h5 class="text-center">Shkaqet e mundshme janë:</h5>
                                    <p class="text-center">Modaliteti Strict është i aktivizuar. Ju lutemi çaktivizoni modalitetin Strict dhe rinisni shërbimet MySQL dhe Apache.
                                    </p>
                                </div>
                            </div><!-- /.panel-body -->
                        </div><!-- /.panel -->
                        <footer>
                            Copyright &copy; Open Solutions for Education, Inc. (<a href="http://www.os4ed.com">OS4ED</a>).
                        </footer>
                    </div><!-- /.login-wrapper -->
                </section><!-- /.login -->
            </body>
        </html>';
>>>>>>> d8930351e069b5411fc027f3ba7a8dbfea691a7f
        

        exit($err);
    }
}

// Encode session data to pass via URL (as backup for session issues)
$sess_data = base64_encode(json_encode([
    'server' => $_SESSION['server'],
    'username' => $_SESSION['username'],
    'password' => $_SESSION['password'],
    'port' => $_SESSION['port'],
    'host' => $_SESSION['host']
]));

if (clean_param($_REQUEST['mod'], PARAM_ALPHAMOD) == 'upgrade') {
    header('Location: Selectdb.php?sd=' . urlencode($sess_data));
} else {
    header('Location: Step2.php?sd=' . urlencode($sess_data));
}
?>
                    
