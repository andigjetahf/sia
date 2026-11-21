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
session_destroy();
echo '<script type="text/javascript">
var page=parent.location.href.replace(/.*\//,"");
if(page && page!="index.php"){
	window.location.href="index.php";
	}

</script>';

function _isCurl() {
    return function_exists('curl_version');
}

function apacheVer() {
    $version = explode("/", $_SERVER['SERVER_SOFTWARE']);
    $softNum = explode(" ", $version[1]);
    $num = explode(".", $softNum[0]);
    return $num[0] . '.' . $num[1];
}

$err = 0;
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
                    <div class="panel-heading clearfix">
                        <div class="logo">
                            <img src="assets/images/opensis_logo.png" alt="SIA (Sistemi Inteligjences Arsimore)">
                        </div>   
                        <h3>Instalimi i SIA - Kërkesat e Sistemit</h3>                 
                    </div>
                    <div class="panel-body">
                        <div class="installation-steps-wrapper">
                            <div class="installation-instructions">
                                <ul class="installation-steps-label">
                                    <li>Zgjidhni Paketën</li>
                                    <li class="active">Kërkesat e Sistemit</li>
                                    <li>Lidhja me Bazën e të Dhënave</li>
                                    <li>Përzgjedhja e Bazës së të Dhënave</li>
                                    <li>Konfigurimi i Administratorit</li>
                                    <li>Gati për Përdorim!</li>
                                </ul>
                                <!--<h4 class="no-margin">Kushtet Paraprake të Instalimit</h4>
                                <p>Përpara se të instaloni SIA (Sistemi Inteligjences Arsimore), duhet të keni të konfiguruar serverin e uebit Apache, serverin e bazës së të dhënave MySQL dhe gjuhën e skripteve PHP në pajisjen tuaj.</p>
                                <p>Mund të shkarkoni një paketë të plotë nga: <a href="https://www.apachefriends.org/download.html">https://www.apachefriends.org/download.html</a></p>
                                <p>Zgjidhni paketën e shkarkimit për sistemin operativ që përdorni në kompjuterin tuaj. Instalojeni atë fillimisht dhe më pas nisni instaluesin e SIA (Sistemi Inteligjences Arsimore).</p>-->
                            </div>
                            <div class="installation-steps valign-top">
                                <h4 class="m-t-0 m-b-25">Le të kontrollojmë konfigurimin e sistemit tuaj:</h4>
                                <div class="row">
                                    <div class="col-xs-8">
                                        Versioni i PHP 5.4 ose më i lartë
                                        <?php
                                        if (phpversion() <= 5.4) {
                                            echo '<p class="text-danger">Përditësoni versionin e PHP nga këtu <A href="http://php.net/downloads.php.">http://php.net/downloads.php.</a></p>';
                                        }
                                        ?>
                                    </div>
                                    <div class="col-xs-4 text-right">
                                        <?php
                                        if (phpversion() > 5.4) {
                                            echo '<span class="text-success"><b>OK</b></span>';
                                        } else {
                                            echo '<span class="text-danger"><b>FAIL</b></span>';
                                            $err = 1;
                                        }
                                        ?>
                                    </div>
                                </div><br/>
                                <div class="row">
                                    <div class="col-xs-8">
                                        cURL
                                        <?php
                                        if (_isCurl() != 1) {
                                            echo '<p class="text-danger">Përditësoni cURL nga këtu <a href="https://curl.haxx.se/download.html">https://curl.haxx.se/download.html</a></p>';
                                        }
                                        ?>
                                    </div>
                                    <div class="col-xs-4 text-right">
                                        <?php
                                        if (_isCurl() == 1) {
                                            echo '<span class="text-success"><b>OK</b></span>';
                                        } else {
                                            echo '<span class="text-warning"><b>Paralajmërim</b></span>';
                                            //$err = 1;
                                        }
                                        ?>
                                    </div>
                                </div><br/>
                                <div class="row">
                                    <div class="col-xs-8">
                                        Versioni i Apache 2.4 ose më i lartë
                                        <?php
                                       if (intval(apacheVer())>1 && apacheVer() < 2.4) {
                                            echo '<p class="text-danger">Përditësoni Apache nga këtu <A href="https://httpd.apache.org/download.cgi">https://httpd.apache.org/download.cgi</a></p>';
                                        }
                                        ?>
                                    </div>
                                    <div class="col-xs-4 text-right">
                                        <?php
                                       if (intval(apacheVer())>1 && apacheVer()< 2.4) {
                                                echo '<span class="text-danger"><b>FAIL</b></span>';
                                        } else {
                                            echo '<span class="text-success"><b>OK</b></span>';
                                           // $err = 1;
                                        }
                                        ?>
                                    </div>
                                </div>

                                <br/>
                                <br/>

                                <?php
                                if ($err == 1) {
                                    echo '<div class="text-danger text-italic"><i class="fa fa-info-circle"></i> Duket se disa nga kërkesat e sistemit nuk plotësohen për të vazhduar instalimin. Ju lutemi plotësoni parakushtet dhe klikoni <b>Kontrollo Përsëri</b>.</div>';
                                } else {
                                    echo '<div class="text-success text-italic">Urime! Sistemi juaj i plotëson kërkesat për instalimin e SIA.</div>';
                                }
                                ?>
                                <hr/>

                                <div class="text-right">
                                    <?php
                                    if ($err == 1) {
                                        echo '<a href="SystemCheck.php" class="btn btn-danger"><i class="fa fa-refresh"></i> Kontrollo Përsëri</a> &nbsp; ';
                                        echo '<a href="#" class="btn btn-default" disabled>Vazhdo</a>';
                                    } else {
                                        echo '<a href="Step1.php" class="btn btn-success">Vazhdo</a>';
                                    }
                                    ?>
                                </div>
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

