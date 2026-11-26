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
include_once(dirname(__FILE__) . '/RedirectRootInc.php');
error_reporting(0);

$data_file = dirname(__FILE__) . '/Data.php';
if (file_exists($data_file)) {
    include_once($data_file);
}

$db_server = $DatabaseServer ?? '';
if (empty($db_server)) {
    if (is_dir('install')) {
        header('Location: install/index.php');
        exit;
    } else {
        echo "<!DOCTYPE html><html lang='sq'><head><meta charset='utf-8'><title>SIA - Konfigurimi Mungon</title><link rel='stylesheet' type='text/css' href='assets/css/bootstrap.min.css'></head><body style='padding:50px; text-align:center;'><h3>Skedari i konfigurimit Data.php nuk u gjet.</h3><p>Ju lutemi kontrolloni konfigurimin e sistemit ose rivendosni dosjen e instalimit për të vazhduar.</p></body></html>";
        exit;
    }
} else {
    // Server Names and Paths
    $connection = db_start();

    if ($connection && ($connection instanceof mysqli)) {
        $sql = DBQuery("SELECT value FROM app WHERE name='build'");
        if ($sql && ($sql instanceof mysqli_result)) {
            $build = $sql->fetch_assoc();
            if ($build && !empty($build['value']) && strlen($build['value']) >= 11) {
                $month = substr($build['value'], 0, 2);
                $day = substr($build['value'], 2, 2);
                $year = substr($build['value'], 4, 4);
                $revision = substr($build['value'], 8, 3);

                $build_date = mktime(0, 0, 0, (int)$month, (int)$day, (int)$year);
                if ($build_date < mktime(0, 0, 0, 5, 28, 2009)) {
                    if ($revision == '000' && is_dir('install')) {
                        header('Location: install/index.php?upreq=true');
                        exit;
                    }
                }
            }
        }
    }
}
?>
