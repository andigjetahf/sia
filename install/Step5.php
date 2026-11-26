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
error_reporting(0);
session_start();
echo '<script type="text/javascript">
var page=parent.location.href.replace(/.*\//,"");
if(page && page!="index.php"){
	window.location.href="index.php";
	}

</script>';
$string='';
if (isset($_SESSION['mod']) && $_SESSION['mod']== 'upgrade') {

    $myFile = "../Data.php";
    $fh = fopen($myFile, 'w');

    if ($fh == TRUE) {
        $string = "<?php\n";
        $string .= "\$DatabaseType = 'mysqli';\n";
        $string .= "\$DatabaseServer = " . var_export((string)($_SESSION['server'] ?? 'db'), true) . ";\n";
        $string .= "\$DatabaseUsername = " . var_export((string)($_SESSION['username'] ?? 'root'), true) . ";\n";
        $string .= "\$DatabasePassword = " . var_export((string)($_SESSION['password'] ?? ''), true) . ";\n";
        $string .= "\$DatabaseName = " . var_export((string)($_SESSION['db'] ?? 'sia'), true) . ";\n";
        $string .= "\$DatabasePort = " . var_export((string)($_SESSION['port'] ?? '3306'), true) . ";\n";
        $string .= "?>";

        $written = fwrite($fh, $string);
        fclose($fh);
    } else {
        $written = false;
    }
    if (!$written || !file_exists($myFile) || filesize($myFile) < 20) {
        die('<!DOCTYPE html><html lang="sq"><head><meta charset="utf-8"><title>Gabim në Instalim</title></head><body style="font-family:sans-serif;padding:40px;text-align:center;"><h2>Nuk u arrit të shkruhej skedari Data.php</h2><p>Ju lutemi kontrolloni lejet e shkrimit (permissions) në dosjen rrënjësore të SIA dhe provoni përsëri.</p></body></html>');
    }
    $display_text = 'Sistemi juaj u përditësua me sukses. Ju lutemi klikoni butonin më poshtë<br/> për të vazhduar te hyrja me kredencialet tuaja ekzistuese.
';
    echo '<!DOCTYPE html>
        <html lang="sq">
            <head>
                <meta charset="utf-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <title>Instaluesi SIA</title>
                <link href="../assets/css/icons/fontawesome/styles.min.css" rel="stylesheet">
                <link rel="stylesheet" type="text/css" href="../assets/css/bootstrap.min.css">
                <link rel="stylesheet" href="assets/css/installer.css?v=' . rand(000, 999) . '" type="text/css" />
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
                            <h3>Instalimi i SIA - Përfunduar</h3>
                        </div>
                        <div class="panel-body">
                            <div class="installation-steps-wrapper">
                                <div class="installation-instructions">
                                    <ul class="installation-steps-label">
                                        <li>Zgjidhni Paketën</li>
                                        <li>Kërkesat e Sistemit</li>
                                        <li>Lidhja me Bazën e të Dhënave</li>
                                        <li>Përzgjedhja e Bazës së të Dhënave</li>
                                        <li>Të Dhënat e Shkollës</li>
                                        <li>Konfigurimi i Administratorit</li>
                                        <li class="active">Gati për Përdorim!</li>
                                    </ul>
                                </div>
                                <div class="installation-steps">
                                    <div class="text-center"><img src="assets/images/check-clipart-animated.gif" width="80" /><h3 class="text-success">Urime! Ju keni përditësuar me sukses sistemin SIA</h3></div>
                                        
                                    <div class="padding-20 p-t-0 text-center">
                                        <p class="text-center">' . $display_text . '</p>
                                        <div class="text-center"><br/><a href="../index.php?modfunc=logout&ins=comp" class="btn btn-success btn-lg" target="_parent">Vazhdoni te Hyrja në SIA</a></div>
                                    </div>
                                </div>
                            </div>
                        </div><!-- /.panel-body -->
                        </div><!-- /.panel -->
                        <footer>
                            Të gjitha të drejtat të rezervuara &copy; ' . date('Y') . ' SIA - Sistemi i Inteligjencës Arsimore.
                        </footer>
                    </div><!-- /.login-wrapper -->
                </section><!-- /.login -->
            </body>
        </html>';
} elseif (empty($_SESSION['mod']) || $_SESSION['mod'] != 'upgrade') {
    $myFile = "../Data.php";
    $fh = fopen($myFile, 'w');

    if ($fh == TRUE) {
        $THIS_server = (string)($_SESSION['server'] ?? 'db');
        $THIS_username = (string)($_SESSION['username'] ?? 'root');
        $THIS_password = (string)($_SESSION['password'] ?? '');
        $THIS_db = (string)($_SESSION['db'] ?? 'sia');
        $THIS_port = (string)($_SESSION['port'] ?? '3306');

        $string = "<?php\n";
        $string .= "\$DatabaseType = 'mysqli';\n";
        $string .= "\$DatabaseServer = " . var_export($THIS_server, true) . ";\n";
        $string .= "\$DatabaseUsername = " . var_export($THIS_username, true) . ";\n";
        $string .= "\$DatabasePassword = " . var_export($THIS_password, true) . ";\n";
        $string .= "\$DatabaseName = " . var_export($THIS_db, true) . ";\n";
        $string .= "\$DatabasePort = " . var_export($THIS_port, true) . ";\n";
        $string .= "?>";

        $written = fwrite($fh, $string);
        fclose($fh);
    } else {
        $written = false;
    }
    if (!$written || !file_exists($myFile) || filesize($myFile) < 20) {
        die('<!DOCTYPE html><html lang="sq"><head><meta charset="utf-8"><title>Gabim në Instalim</title></head><body style="font-family:sans-serif;padding:40px;text-align:center;"><h2>Nuk u arrit të shkruhej skedari Data.php</h2><p>Ju lutemi kontrolloni lejet e shkrimit (permissions) në dosjen rrënjësore të SIA dhe provoni përsëri.</p></body></html>');
    }
    $display_text = '';
    $school_name = isset($_SESSION['sname']) ? $_SESSION['sname'] : 'Shkolla';
    $school_installed = isset($_SESSION['school_installed']) ? $_SESSION['school_installed'] : 'user';
    if ($school_installed == 'both') {
        $display_text = "Është krijuar një shkollë me emrin: " . $school_name . ".<br><br>Ndiqni udhëzimet në manualin e administratorit për konfigurimin e duhur të shkollës. Manuali ndodhet në dosjen e dokumentacionit.<br><br>Gjithashtu keni instaluar të dhënat provë shkollore. Mund të zgjidhni shkollën tuaj ose shkollën provë nga menyja rënëse e përzgjedhjes së shkollës në këndin e sipërm djathtas.";
    } else if ($school_installed == 'user') {
        $display_text = "Është krijuar një shkollë me emrin: " . $school_name . ".<br><br>Ndiqni udhëzimet në manualin e administratorit për konfigurimin e duhur të shkollës. Manuali ndodhet në dosjen e dokumentacionit.";
    } else if ($school_installed == 'sample') {
        $display_text = "Keni instaluar sistemin SIA me të dhëna provë shkollore. Përdoreni këtë shkollë për t'u njohur me sistemin dhe si udhëzues për të krijuar shkollën tuaj. Gjithashtu mund të ndiqni udhëzimet në manualin e administratorit për konfigurimin e një shkolle të re. Manuali ndodhet në dosjen e dokumentacionit.";
    }
    echo '<!DOCTYPE html>
        <html lang="sq">
            <head>
                <meta charset="utf-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <title>Instaluesi SIA</title>
                <link href="../assets/css/icons/fontawesome/styles.min.css" rel="stylesheet">
                <link rel="stylesheet" type="text/css" href="../assets/css/bootstrap.min.css">
                <link rel="stylesheet" href="assets/css/installer.css?v=' . rand(000, 999) . '" type="text/css" />
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
                            <h3>Instalimi i SIA - Përfunduar</h3>
                        </div>
                        <div class="panel-body">
                            <div class="installation-steps-wrapper">
                                <div class="installation-instructions">
                                    <ul class="installation-steps-label">
                                        <li>Zgjidhni Paketën</li>
                                        <li>Kërkesat e Sistemit</li>
                                        <li>Lidhja me Bazën e të Dhënave</li>
                                        <li>Përzgjedhja e Bazës së të Dhënave</li>
                                        <li>Të Dhënat e Shkollës</li>
                                        <li>Konfigurimi i Administratorit</li>
                                        <li class="active">Gati për Përdorim!</li>
                                    </ul>
                                </div>
                                <div class="installation-steps">
                                    <div class="padding-20 text-center">
                                        <div class="text-center"><img src="assets/images/check-clipart-animated.gif" width="80" /><h3 class="text-success">Urime! Ju keni instaluar me sukses sistemin SIA</h3></div>
                                        <div class="row" style="padding: 10px 0 0;">
                                            <div class="col-md-12 text-center">
                                                <p style="padding: 0 30px 10px; font-size: 15px; line-height: 1.6;">' . $display_text . '</p>
                                            </div>
                                        </div>

                                        <div class="text-center" style="padding: 10px 0;"><a href="../index.php?modfunc=logout&ins=comp" class="btn btn-success btn-lg" target="_parent">Vazhdoni te Hyrja në SIA</a></div>
                                    </div>
                                </div>
                            </div>
                        </div><!-- /.panel-body -->
                        </div><!-- /.panel -->
                        <footer>
                            Të gjitha të drejtat të rezervuara &copy; ' . date('Y') . ' SIA - Sistemi i Inteligjencës Arsimore.
                        </footer>
                    </div><!-- /.login-wrapper -->
                </section><!-- /.login -->
            </body>
        </html>';
    
} else {
    echo "<html><head><link rel='stylesheet' type='text/css' href='../styles/Installer.css'></head><body>
<div class=\"heading\">Sistemi u përditësua me sukses
<div style=\"background-image:url(images/step4.gif); background-repeat:no-repeat; background-position:50% 20px; height:270px;\">
<table border=\"0\" cellspacing=\"6\" cellpadding=\"3\" align=\"center\">
      <tr>
        <td  align=\"center\" style=\"padding-top:36px; padding-bottom:16px\">Hapi 3 nga 3</td>
      </tr>
	  
      <tr>
        <td align=\"center\"><a href='../index.php?modfunc=logout'><img src='images/login.png' border=0 /></a></td>
      </tr>
 	</td>
      </tr>
    </table></div></div>
</body></html>
";
}

session_unset();
session_destroy();

?>
