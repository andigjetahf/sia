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
// Establish MySQL DB connection.
if (function_exists('mysqli_report')) {
    mysqli_report(MYSQLI_REPORT_OFF);
}

class ConnectDBOpensis
{
    public $auto_init = true;
    public $last_error = '';
    
    function init($DatabaseServer, $DatabaseUsername, $DatabasePassword, $DatabaseName, $DatabasePort = 3306)
    {
        $port = !empty($DatabasePort) ? (int)$DatabasePort : 3306;
        $this->last_error = '';
        try {
            $conn = @new mysqli($DatabaseServer, $DatabaseUsername, $DatabasePassword, $DatabaseName, $port);
            if ($conn && !$conn->connect_errno) {
                @$conn->query("SET SESSION sql_mode = ''");
                return $conn;
            }
            if ($conn && $conn->connect_errno) {
                $this->last_error = $conn->connect_error ?: mysqli_connect_error();
                @$conn->close();
                return null;
            }
        } catch (Throwable $e) {
            $this->last_error = $e->getMessage();
            return null;
        }
        return null;
    }
}
