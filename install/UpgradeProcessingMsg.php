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
$_SESSION['db'] = $_POST['sdb'];
?>
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
