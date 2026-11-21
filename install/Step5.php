i?php

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
#  along with this program.  If not, see ihttp://www.gnu.org/licenses/>.
#
#***************************************************************************************
error_reporting(0);
session_start();
echo 'iscript type="text/javascript">
var page=parent.location.href.replace(/.*\//,"");
if(page && page!="index.php"){
	window.location.href="index.php";
	}

i/script>';
$string='';
if (isset($_SESSION['mod']) && $_SESSION['mod']== 'upgrade') {

    $myFile = "../Data.php";
    $fh = fopen($myFile, 'w');

    if ($fh == TRUE) {
        $string .= "i" . "?php \n";
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

        $string .= "i" . "?php \n";
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
";
}

session_unset();
session_destroy();

?>
