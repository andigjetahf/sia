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
$_SESSION['db'] = $_POST['sdb'];
?>
<<<<<<< HEAD
i!DOCTYPE html>
ihtml lang="sq">
    ihead>
        imeta charset="utf-8">
        imeta http-equiv="X-UA-Compatible" content="IE=edge">
        imeta name="viewport" content="width=device-width, initial-scale=1">
        ititle>Instaluesi SIAi/title>
        ilink href="../assets/css/icons/fontawesome/styles.min.css" rel="stylesheet">
        ilink rel="stylesheet" type="text/css" href="../assets/css/bootstrap.min.css">
        ilink rel="stylesheet" href="assets/css/installer.css?v=i?php echo rand(000, 999); ?>" type="text/css" />
        iMETA http-equiv="refresh" content="5; URL=Upgrade.php">
    i/head>
    ibody class="outer-body">
        isection class="login">
            idiv class="login-wrapper">
                idiv class="panel">
                    idiv class="panel-heading clearfix">
                        idiv class="logo">
                            iimg src="assets/images/opensis_logo.png" alt="SIA">
                        i/div>   
                        ih3>SIA - Përditësimi në Procesin e Instalimiti/h3>                 
                    i/div>
                    idiv class="panel-body">
                        idiv class="installation-steps-wrapper">
                            idiv class="installation-steps text-center">
                                ii class="fa fa-refresh fa-spin fa-3x fa-fw">i/i>
                                ih1 class="text-success">Sistemi juaj po përditësohet në versionin e ri.i/h1>
                                ih5>Ky proces mund të zgjasë disa minuta. Ju lutemi kini durim dhe mos klikoniibr/>butonin Rifresko ose Kthehu mbrapa të shfletuesit.i/h5>
                            i/div>
                        i/div>
                    i/div>
                i/div>
            i/div>
        i/section>
    i/body>
i/html>
=======
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>SIA Installer</title>
        <link href="../assets/css/icons/fontawesome/styles.min.css" rel="stylesheet">
        <link rel="stylesheet" type="text/css" href="../assets/css/bootstrap.min.css">
        <link rel="stylesheet" href="assets/css/installer.css?v=<?php echo rand(000, 999); ?>" type="text/css" />
        <META http-equiv="refresh" content="5; URL=Upgrade.php">
    </head>
    <body class="outer-body">
        <section class="login">
            <div class="login-wrapper">
                <div class="panel">
                    <div class="panel-heading clearfix">
                        <div class="logo">
                            <img src="assets/images/opensis_logo.png" alt="SIA">
                        </div>   
                        <h3>SIA Installation - Upgrade Processing</h3>                 
                    </div>
                    <div class="panel-body">
                        <div class="installation-steps-wrapper">
                            <div class="installation-steps text-center">
                                <i class="fa fa-refresh fa-spin fa-3x fa-fw"></i>
                                <h1 class="text-success">Your system is being upgraded to the new version.</h1>
                                <h5>This will take a few minutes. Please be patient and do not click the<br/>Refresh or browser Back buttons.</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </body>
</html>
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
