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
if (session_status() === PHP_SESSION_NONE) {
    session_start();
}
session_destroy();
echo '<script type="text/javascript">
var page=parent.location.href.replace(/.*\//,"");
if(page && page!="index.php"){
	window.location.href="index.php";
	}

</script>';
?>
<!DOCTYPE html>
<html lang="sq">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Instaluesi SIA</title>
        <link href="../assets/css/icons/fontawesome/styles.min.css" rel="stylesheet">
        <link rel="stylesheet" type="text/css" href="../assets/css/bootstrap.min.css">
        <link rel="stylesheet" href="assets/css/installer.css?v=<?php echo rand(000, 999); ?>" type="text/css" />
        <noscript><META http-equiv=REFRESH content='0;url=../EnableJavascript.php' /></noscript>
    </head>
    <body class="outer-body">
        <section class="login">
            <div class="login-wrapper">
                <div class="panel">
                    <div class="panel-heading">
                        <div class="logo">
                            <img src="assets/images/opensis_logo.png" alt="SIA (Sistemi Inteligjences Arsimore)">
                        </div>   
                        <h3>Instalimi i SIA</h3>                 
                    </div>
                    <div class="panel-body">
                        <div class="installation-steps-wrapper">
                            <div class="installation-instructions">
                                <ul class="installation-steps-label">
                                    <li class="active">Zgjidhni Paketën</li>
                                    <li>Kërkesat e Sistemit</li>
                                    <li>Lidhja me Bazën e të Dhënave</li>
                                    <li>Përzgjedhja e Bazës së të Dhënave</li>
                                    <li>Të Dhënat e Shkollës</li>
                                    <li>Konfigurimi i Administratorit</li>
                                    <li>Gati për Përdorim!</li>
                                </ul>
                                <!--<h4 class="no-margin">Kushtet Paraprake të Instalimit</h4>
                                <p>Përpara se të instaloni SIA (Sistemi Inteligjences Arsimore), duhet të keni të konfiguruar serverin e uebit Apache, serverin e bazës së të dhënave MySQL dhe gjuhën e skripteve PHP në pajisjen tuaj.</p>
                                <p>Mund të shkarkoni një paketë të plotë nga: <a href="https://www.apachefriends.org/download.html">https://www.apachefriends.org/download.html</a></p>
                                <p>Zgjidhni paketën e shkarkimit për sistemin operativ që përdorni në kompjuterin tuaj. Instalojeni atë fillimisht dhe më pas nisni instaluesin e SIA (Sistemi Inteligjences Arsimore).</p>-->
                            </div>
                            <div class="installation-steps">
                                <table style="height:270px; width: 70%;" border="0" cellspacing="12" cellpadding="12" align="center">
                                    <tr>
                                        <?php
                                        if (isset($_REQUEST['upreq']) && $_REQUEST['upreq'] == 'true') {
                                            echo '<td>U ridrejtuat në këtë faqe sepse nevojitet një përditësim.<br> Ju lutemi, vazhdoni duke përdorur veprimin më poshtë.</td>';
                                            echo '</tr><tr>';
                                            echo '<td valign="middle" align="center"><a href="Step0.1.php?mod=upgrade"><img src="assets/images/icon-upgrade.png" alt="Përditëso SIA" /><br/><h5 class="text-black"><b>Përditësim</b><br/><small>(Nga ver 4.7 deri 6.0)</small></h5></a></td>';
                                        } else {
                                            echo '<td valign="middle" align="center"><a href="SystemCheck.php"><img src="assets/images/icon-package.png" alt="Instalim i Ri" /><br/><h5 class="text-black"><b>Instalim i Ri</b><br/><small>(Ver 9.3)</small></h5></a></td>';
                                            echo '<td valign="middle" align="center"><a href="Step0.1.php?mod=upgrade"><img src="assets/images/icon-upgrade.png" alt="Përditëso SIA"/><br/><h5 class="text-black"><b>Përditësim</b><br/><small>(Nga ver 7.1 e lart)</small></h5></a></td>';
                                        }
                                        ?>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <footer>
                    Copyright &copy; Open Solutions for Education, Inc. (<a href="http://www.os4ed.com">OS4ED</a>).
                </footer>
            </div>
        </section>
    </body>
</html>

