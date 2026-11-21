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
$conn_string = $_SESSION['conn'];

// Helper function to create mysqli connection with strict mode disabled
function createConnectionSelectDb($server, $username, $password, $database = '', $port = 3306) {
    if ($database != '') {
        $conn = new mysqli($server, $username, $password, $database, $port);
    } else {
        $conn = new mysqli($server, $username, $password);
    }
    if ($conn && !$conn->connect_errno) {
        $conn->query("SET SESSION sql_mode = ''");
    }
    return $conn;
}
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
                        <h3>Instalimi i SIA - Përzgjedhja e Bazës së të Dhënave</h3>                 
                    </div>
                    <div class="panel-body">
                        <div class="installation-steps-wrapper">
                            <div class="installation-instructions">
                                <ul class="installation-steps-label">
                                    <li>Zgjidhni Paketën</li>
                                    <li>Lidhja me Bazën e të Dhënave</li>
                                    <li class="active">Përzgjedhja e Bazës së të Dhënave</li>
                                    <li>Konfigurimi i Administratorit</li>
                                    <li>Gati për Përdorim!</li>
                                </ul>
                                <!--<h4 class="no-margin">Kushtet Paraprake të Instalimit</h4>
                                <p>Përpara se të instaloni SIA (Sistemi Inteligjences Arsimore), duhet të keni të konfiguruar serverin e uebit Apache, serverin e bazës së të dhënave MySQL dhe gjuhën e skripteve PHP në pajisjen tuaj.</p>
                                <p>Mund të shkarkoni një paketë të plotë nga: <a href="https://www.apachefriends.org/download.html">https://www.apachefriends.org/download.html</a></p>
                                <p>Zgjidhni paketën e shkarkimit për sistemin operativ që përdorni në kompjuterin tuaj. Instalojeni atë fillimisht dhe më pas nisni instaluesin e SIA (Sistemi Inteligjences Arsimore).</p>-->
                            </div>
                            <div class="installation-steps valign-top">
                                <h2 class="text-center">Faleminderit që vendosët të dhënat e lidhjes me MySQL</h2><br/>
                                <h5 class="text-center">Ju lutemi zgjidhni nga lista bazën e të dhënave<br/>që dëshironi të përditësoni.</h5><br/>

                                <form name='selectdb' class="form-horizontal" id='selectdb' method='post' action="UpgradeProcessingMsg.php">
                                    <?php
                                    $connection = createConnectionSelectDb($_SESSION['host_mod'], $_SESSION['username'], $_SESSION['password']) or die();

                                    if ($connection->connect_errno > 0)
                                        die('Not connected');
                                    $sql = "show databases;";
                                    $res = $connection->query($sql);
                                    echo '<div class="form-group text-center">';
                                    echo "<select name='sdb' id='sdb' class='form-control' style=\"width: auto; display: inline-block;\">";
                                    while ($row = $res->fetch_row()) {
                                        if ($row[0] != 'information_schema' && $row[0] != 'mysql' && $row[0] != 'performance_schema' && $row[0] != 'phpmyadmin')
                                            echo "<option>" . $row[0] . "</option>";
                                    }
                                    echo "</select>";
                                    echo '</div>';
                                    ?>
                                    <div class="text-center">
                                        <input type="submit" value="Ruaj & Vazhdo" class="btn btn-primary" name="Add_DB"  />
                                    </div>
                                    <br/>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <footer>
                    Copyright &copy; Open Solutions for Education, Inc. (<a href="http://www.os4ed.com">OS4Ed</a>).
                </footer>
            </div>
        </section>
    </body>
</html>
