<<<<<<< HEAD
i?php
=======
<?php
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f

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
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
#
#***************************************************************************************
error_reporting(0);
session_start();
<<<<<<< HEAD
echo 'iscript type="text/javascript">
=======
echo '<script type="text/javascript">
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
var page=parent.location.href.replace(/.*\//,"");
if(page && page!="index.php"){
	window.location.href="index.php";
	}

<<<<<<< HEAD
i/script>';
=======
</script>';
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
$string='';
if (isset($_SESSION['mod']) && $_SESSION['mod']== 'upgrade') {

    $myFile = "../Data.php";
    $fh = fopen($myFile, 'w');

    if ($fh == TRUE) {
<<<<<<< HEAD
        $string .= "i" . "?php \n";
=======
        $string .= "<" . "?php \n";
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
        $string .= "$" . "DatabaseType = 'mysqli'; \n";
        $string .= "$" . "DatabaseServer = '" . $_SESSION['server'] . "'; \n";
        $string .= "$" . "DatabaseUsername = '" . $_SESSION['username'] . "'; \n";
        $string .= "$" . "DatabasePassword = '" . $_SESSION['password'] . "'; \n";
        $string .= "$" . "DatabaseName = '" . $_SESSION['db'] . "'; \n";
        $string .= "$" . "DatabasePort = '" . $_SESSION['port'] . "'; \n";
        $string .="?" . ">";

        fwrite($fh, $string);
    }

    fclose($fh);
<<<<<<< HEAD
    $display_text = 'Sistemi juaj u përditësua me sukses. Ju lutemi klikoni butonin më poshtëibr/> për të vazhduar te hyrja me kredencialet tuaja ekzistuese.
';
    echo 'i!DOCTYPE html>
        ihtml lang="sq">
            ihead>
                imeta charset="utf-8">
                imeta http-equiv="X-UA-Compatible" content="IE=edge">
                imeta name="viewport" content="width=device-width, initial-scale=1">
                ititle>Instaluesi SIAi/title>
                ilink href="../assets/css/icons/fontawesome/styles.min.css" rel="stylesheet">
                ilink rel="stylesheet" type="text/css" href="../assets/css/bootstrap.min.css">
                ilink rel="stylesheet" href="assets/css/installer.css?v=' . rand(000, 999) . '" type="text/css" />
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
                            ih3>Instalimi i SIA - Përfunduari/h3>
                        i/div>
                        idiv class="panel-body">
                            idiv class="installation-steps-wrapper">
                                idiv class="installation-instructions">
                                    iul class="installation-steps-label">
                                        ili>Zgjidhni Paketëni/li>
                                        ili>Kërkesat e Sistemiti/li>
                                        ili>Lidhja me Bazën e të Dhënavei/li>
                                        ili>Përzgjedhja e Bazës së të Dhënavei/li>
                                        ili>Të Dhënat e Shkollësi/li>
                                        ili>Konfigurimi i Administratoriti/li>
                                        ili class="active">Gati për Përdorim!i/li>
                                    i/ul>
                                i/div>
                                idiv class="installation-steps">
                                    idiv class="text-center">iimg src="assets/images/check-clipart-animated.gif" width="80" />ih3 class="text-success">Urime! Ju keni përditësuar me sukses sistemin SIAi/h3>i/div>
                                        
                                    idiv class="padding-20 p-t-0 text-center">
                                        ip class="text-center">' . $display_text . 'i/p>
                                        idiv class="text-center">ibr/>ia href="../index.php?modfunc=logout&ins=comp" class="btn btn-success btn-lg" target="_parent">Vazhdoni te Hyrja në SIAi/a>i/div>
                                    i/div>
                                i/div>
                            i/div>
                        i/div>i!-- /.panel-body -->
                        i/div>i!-- /.panel -->
                        ifooter>
                            Copyright &copy; Open Solutions for Education, Inc. (ia href="http://www.os4ed.com">OS4Edi/a>).
                        i/footer>
                    i/div>i!-- /.login-wrapper -->
                i/section>i!-- /.login -->
            i/body>
        i/html>';
=======
    $display_text = 'Your system has been successfully upgraded to version 9.1. Please click the button below<br/> to proceed to login with your existing login credentials.
';
    echo '<!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="utf-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <title>SIA Installer</title>
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
                            <h3>SIA Installation - Complete</h3>
                        </div>
                        <div class="panel-body">
                            <div class="installation-steps-wrapper">
                                <div class="installation-instructions">
                                    <ul class="installation-steps-label">
                                        <li>Choose Package</li>
                                        <li>System Requirements</li>
                                        <li>Database Connection</li>
                                        <li>Database Selection</li>
                                        <li>School Information</li>
                                        <li>Site Admin Account Setup</li>
                                        <li class="active">Ready to Go!</li>
                                    </ul>
                                </div>
                                <div class="installation-steps">
                                    <div class="text-center"><img src="assets/images/check-clipart-animated.gif" width="80" /><h3 class="text-success">Congratulations! You have successfully upgraded openSIS</h3></div>
                                        
                                    <div class="padding-20 p-t-0 class="text-center"">
                                        <p class="text-center">' . $display_text . '</p>
                                        <div class="text-center"><br/><a href="../index.php?modfunc=logout&ins=comp" class="btn btn-success btn-lg" target="_parent">Proceed to openSIS Login</a></div>
                                    </div>
                                </div>
                            </div>
                        </div><!-- /.panel-body -->
                        </div><!-- /.panel -->
                        <footer>
                            Copyright &copy; Open Solutions for Education, Inc. (<a href="http://www.os4ed.com">OS4Ed</a>).
                        </footer>
                    </div><!-- /.login-wrapper -->
                </section><!-- /.login -->
            </body>
        </html>';
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
} elseif (empty($_SESSION['mod']) || $_SESSION['mod'] != 'upgrade') {
    $myFile = "../Data.php";
    $fh = fopen($myFile, 'w');

    if ($fh == TRUE) {

        include '../functions/SqlSecurityFnc.php';

        $THIS_server = sqlSecurityFilter($_SESSION['server'] ?? 'db', 'no');
        $THIS_username = sqlSecurityFilter($_SESSION['username'] ?? 'root', 'no');
        $THIS_password = sqlSecurityFilter($_SESSION['password'] ?? '', 'no');
        $THIS_db = sqlSecurityFilter($_SESSION['db'] ?? 'sia', 'no');
        $THIS_port = sqlSecurityFilter($_SESSION['port'] ?? '3306', 'no');

<<<<<<< HEAD
        $string .= "i" . "?php \n";
=======
        $string .= "<" . "?php \n";
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
        $string .= "$" . "DatabaseType = 'mysqli'; \n";
        $string .= "$" . "DatabaseServer = '" . $THIS_server . "'; \n";
        $string .= "$" . "DatabaseUsername = '" . $THIS_username . "'; \n";
        $string .= "$" . "DatabasePassword = '" . $THIS_password . "'; \n";
        $string .= "$" . "DatabaseName = '" . $THIS_db . "'; \n";
        $string .= "$" . "DatabasePort = '" . $THIS_port . "'; \n";
        $string .="?" . ">";

        fwrite($fh, $string);
    }

    fclose($fh);
    $display_text = '';
<<<<<<< HEAD
    $school_name = isset($_SESSION['sname']) ? $_SESSION['sname'] : 'Shkolla';
    $school_installed = isset($_SESSION['school_installed']) ? $_SESSION['school_installed'] : 'user';
    if ($school_installed == 'both') {
        $display_text = "Është krijuar një shkollë me emrin: " . $school_name . ".ibr>ibr>Ndiqni udhëzimet në manualin e administratorit për konfigurimin e duhur të shkollës. Manuali ndodhet në dosjen e dokumentacionit.ibr>ibr>Gjithashtu keni instaluar të dhënat provë shkollore. Mund të zgjidhni shkollën tuaj ose shkollën provë nga menyja rënëse e përzgjedhjes së shkollës në këndin e sipërm djathtas.";
    } else if ($school_installed == 'user') {
        $display_text = "Është krijuar një shkollë me emrin: " . $school_name . ".ibr>ibr>Ndiqni udhëzimet në manualin e administratorit për konfigurimin e duhur të shkollës. Manuali ndodhet në dosjen e dokumentacionit.";
    } else if ($school_installed == 'sample') {
        $display_text = "Keni instaluar sistemin SIA me të dhëna provë shkollore. Përdoreni këtë shkollë për t'u njohur me sistemin dhe si udhëzues për të krijuar shkollën tuaj. Gjithashtu mund të ndiqni udhëzimet në manualin e administratorit për konfigurimin e një shkolle të re. Manuali ndodhet në dosjen e dokumentacionit.";
    }
    echo 'i!DOCTYPE html>
        ihtml lang="sq">
            ihead>
                imeta charset="utf-8">
                imeta http-equiv="X-UA-Compatible" content="IE=edge">
                imeta name="viewport" content="width=device-width, initial-scale=1">
                ititle>Instaluesi SIAi/title>
                ilink href="../assets/css/icons/fontawesome/styles.min.css" rel="stylesheet">
                ilink rel="stylesheet" type="text/css" href="../assets/css/bootstrap.min.css">
                ilink rel="stylesheet" href="assets/css/installer.css?v=' . rand(000, 999) . '" type="text/css" />
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
                            ih3>Instalimi i SIA - Përfunduari/h3>
                        i/div>
                        idiv class="panel-body">
                            idiv class="installation-steps-wrapper">
                                idiv class="installation-instructions">
                                    iul class="installation-steps-label">
                                        ili>Zgjidhni Paketëni/li>
                                        ili>Kërkesat e Sistemiti/li>
                                        ili>Lidhja me Bazën e të Dhënavei/li>
                                        ili>Përzgjedhja e Bazës së të Dhënavei/li>
                                        ili>Të Dhënat e Shkollësi/li>
                                        ili>Konfigurimi i Administratoriti/li>
                                        ili class="active">Gati për Përdorim!i/li>
                                    i/ul>
                                i/div>
                                idiv class="installation-steps">
                                    idiv class="padding-20 text-center">
                                        idiv class="text-center">iimg src="assets/images/check-clipart-animated.gif" width="80" />ih3 class="text-success">Urime! Ju keni instaluar me sukses sistemin SIAi/h3>i/div>
                                        idiv class="row" style="padding: 10px 0 0;">
                                            idiv class="col-md-12 text-center">
                                                i!--ip style="padding: 0 30px 10px;">' . $display_text . 'i/p>
                                                ip style="padding: 0 30px;">ib>You can also visit the support portal and read the quick setup: ibr/>ia href="https://support.os4ed.com/hc/en-us/articles/200976357-Quick-Set-Up" target="_blank">https://support.os4ed.com/hc/en-us/articles/200976357-Quick-Set-Upi/a>i/b>i/p>-->
                                            i/div>
                                        i/div>

                                        idiv class="text-center" style="padding: 10px 0;">ia href="../index.php?modfunc=logout&ins=comp" class="btn btn-success btn-lg" target="_parent">Vazhdoni te Hyrja në SIAi/a>i/div>
                                    i/div>
                                i/div>
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
    
} else {
    echo "ihtml>ihead>ilink rel='stylesheet' type='text/css' href='../styles/Installer.css'>i/head>ibody>
idiv class=\"heading\">System Successfully Upgraded
idiv style=\"background-image:url(images/step4.gif); background-repeat:no-repeat; background-position:50% 20px; height:270px;\">
itable border=\"0\" cellspacing=\"6\" cellpadding=\"3\" align=\"center\">
      itr>
        itd  align=\"center\" style=\"padding-top:36px; padding-bottom:16px\">Step 3 of 3i/td>
      i/tr>
	  
      itr>
        itd align=\"center\">ia href='../index.php?modfunc=logout'>iimg src='images/login.png' border=0 />i/a>i/td>
      i/tr>
 	i/td>
      i/tr>
    i/table>i/div>i/div>
i/body>i/html>
=======
    $school_name = isset($_SESSION['sname']) ? $_SESSION['sname'] : 'School';
    $school_installed = isset($_SESSION['school_installed']) ? $_SESSION['school_installed'] : 'user';
    if ($school_installed == 'both') {
        $display_text = "A school has been created in the name of: " . $school_name . ".<br><br>You need to follow the instructions in the administrator manual for setting up the school properly. The manual is located in the docs folder.<br><br>You have also installed the sample school data. You can select your school or the sample school by clicking on the drop down menu of the school select field on the upper right hand corner.";
    } else if ($school_installed == 'user') {
        $display_text = "A school has been created in the name of: " . $school_name . ".<br><br>You need to follow the instructions in the administrator manual for setting up the school properly. The manual is located in the docs folder.";
    } else if ($school_installed == 'sample') {
        $display_text = "You have installed openSIS with sample school data. Use this school to get familiar with the system and as a guide for creating your own school. You can also follow the instructions in the administrator manual for setting up and configuring a new school. The manual is located in the docs folder.";
    }
    echo '<!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="utf-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <title>SIA Installer</title>
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
                            <h3>SIA Installation - Complete</h3>
                        </div>
                        <div class="panel-body">
                            <div class="installation-steps-wrapper">
                                <div class="installation-instructions">
                                    <ul class="installation-steps-label">
                                        <li>Choose Package</li>
                                        <li>System Requirements</li>
                                        <li>Database Connection</li>
                                        <li>Database Selection</li>
                                        <li>School Information</li>
                                        <li>Site Admin Account Setup</li>
                                        <li class="active">Ready to Go!</li>
                                    </ul>
                                </div>
                                <div class="installation-steps">
                                    <div class="padding-20 class="text-center"">
                                        <div class="text-center"><img src="assets/images/check-clipart-animated.gif" width="80" /><h3 class="text-success">Congratulations! You have successfully installed openSIS</h3></div>
                                        <div class="row" style="padding: 10px 0 0;">
                                            <div class="col-md-12 text-center">
                                                <!--<p style="padding: 0 30px 10px;">' . $display_text . '</p>
                                                <p style="padding: 0 30px;"><b>You can also visit the support portal and read the quick setup: <br/><a href="https://support.os4ed.com/hc/en-us/articles/200976357-Quick-Set-Up" target="_blank">https://support.os4ed.com/hc/en-us/articles/200976357-Quick-Set-Up</a></b></p>-->
                                            </div>
                                        </div>

                                        <div class="text-center" style="padding: 10px 0;"><a href="../index.php?modfunc=logout&ins=comp" class="btn btn-success btn-lg" target="_parent">Proceed to openSIS Login</a></div>
                                    </div>
                                </div>
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
    
} else {
    echo "<html><head><link rel='stylesheet' type='text/css' href='../styles/Installer.css'></head><body>
<div class=\"heading\">System Successfully Upgraded
<div style=\"background-image:url(images/step4.gif); background-repeat:no-repeat; background-position:50% 20px; height:270px;\">
<table border=\"0\" cellspacing=\"6\" cellpadding=\"3\" align=\"center\">
      <tr>
        <td  align=\"center\" style=\"padding-top:36px; padding-bottom:16px\">Step 3 of 3</td>
      </tr>
	  
      <tr>
        <td align=\"center\"><a href='../index.php?modfunc=logout'><img src='images/login.png' border=0 /></a></td>
      </tr>
 	</td>
      </tr>
    </table></div></div>
</body></html>
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
";
}

session_unset();
session_destroy();

?>
