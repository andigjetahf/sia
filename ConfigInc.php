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

if (!defined('CONFIG_INC')) {
    define('CONFIG_INC', 1);
    // IgnoreFiles should contain any names of files or folders
    // which should be ignored by the function inclusion system.
    $IgnoreFiles = array('.DS_Store', 'CVS', '.svn');
    $openSISPath = dirname(__FILE__) . '/';
    if (file_exists($openSISPath . "Data.php")) {
        include($openSISPath . "Data.php");
    }
    include_once($openSISPath . "DatabaseInc.php");
    include_once($openSISPath . "UpgradeInc.php");
    include_once($openSISPath . "functions/DbGetFnc.php");
    #  Set Build Date and Version Number here.

    $b_date_sql = "select value from app where name='date'";
    $b_date_res = DBQuery($b_date_sql);
    $b_date_row = DBGet($b_date_res);

    $version_sql = "select value from app where name='version'";
    $version_res = DBQuery($version_sql);
    $version_row = DBGet($version_res);
    $openSISVersion = $version_row[1]['VALUE'] ?? '8.0';
    $builddate = $b_date_row[1]['VALUE'] ?? date('Y-m-d');
    $htmldocPath = "";
    $OutputType = "HTML"; //options are HTML or PDF
    $htmldocPath = '';
    $htmldocAssetsPath = '';        // way htmldoc accesses the assets/ directory, possibly different than user - empty string means no translation
    //    $StudentPicturesPath = 'assets/studentphotos/';
    //    $UserPicturesPath = 'assets/userphotos/';
    $openSISTitle = "SIA - Sistemi i Inteligjencës Arsimore";
    $openSISAdmins = '1';            // can be list such as '1,23,50' - note, these should be id's in the DefaultSyear, otherwise they can't login anyway
    $openSISNotifyAddress = '';
    $msgFlag = '';

    $openSISModules = array(
        'schoolsetup' => true,
        'students' => true,
        'users' => true,
        'scheduling' => true,
        'grades' => true,
        'attendance' => true,
        'eligibility' => true,
        'Discipline' => false,
        'Billing' => false,
        'EasyCom' => false,
        'Library' => false,
        'messaging' => true,
        'tools' => true,
    );

    // If session isn't started, start it.
    if (!isset($SessionStart))
        $SessionStart = 1;
}
