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

 //include('RedirectRootInc.php');
// include'ConfigInc.php';
include 'Warehouse.php';
// include('../../Redirect_modules.php');

<<<<<<< HEAD
if(isset(p_SESSION['mainSQL'])) {
	psql = p_SESSION['mainSQL']['SQL'];
    pfunctions = p_SESSION['mainSQL']['FUNCTIONS'];
    pextra['group'] = p_SESSION['mainSQL']['EXTRA_GROUP'];

	presult = DBGet(DBQuery(psql), pfunctions, pextra['group']);
    // echo '<pre>';print_r(p_SESSION['PEGI_COLS']);echo '</pre>';exit();

	poutput = '';

	if(p_SESSION['PROGRAM_TITLE'] != '') {
		pprogram_title = p_SESSION['PROGRAM_TITLE'];
	} else {
		pprogram_title = 'openSIS';
	}

	p_REQUEST['LO_save'] = '1';
	poptions = p_SESSION['PEGI_OPTION'];
	pcolumn_names = p_SESSION['PEGI_COLS'];

	// HANDLE SAVING THE LIST ---

    if (p_REQUEST['LO_save'] == '1') {
        if (!poptions['save_delimiter'] && Preferences('DELIMITER') == 'CSV')
            poptions['save_delimiter'] = 'comma';
        switch (poptions['save_delimiter']) {
            case 'comma':
                pextension = 'csv';
                break;
            case 'xml':
                pextension = 'xml';
                break;
            default:
                pextension = 'xls';
=======
if(isset($_SESSION['mainSQL'])) {
	$sql = $_SESSION['mainSQL']['SQL'];
    $functions = $_SESSION['mainSQL']['FUNCTIONS'];
    $extra['group'] = $_SESSION['mainSQL']['EXTRA_GROUP'];

	$result = DBGet(DBQuery($sql), $functions, $extra['group']);
    // echo '<pre>';print_r($_SESSION['PEGI_COLS']);echo '</pre>';exit();

	$output = '';

	if($_SESSION['PROGRAM_TITLE'] != '') {
		$program_title = $_SESSION['PROGRAM_TITLE'];
	} else {
		$program_title = 'openSIS';
	}

	$_REQUEST['LO_save'] = '1';
	$options = $_SESSION['PEGI_OPTION'];
	$column_names = $_SESSION['PEGI_COLS'];

	// HANDLE SAVING THE LIST ---

    if ($_REQUEST['LO_save'] == '1') {
        if (!$options['save_delimiter'] && Preferences('DELIMITER') == 'CSV')
            $options['save_delimiter'] = 'comma';
        switch ($options['save_delimiter']) {
            case 'comma':
                $extension = 'csv';
                break;
            case 'xml':
                $extension = 'xml';
                break;
            default:
                $extension = 'xls';
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
                break;
        }
        ob_end_clean();

<<<<<<< HEAD
        if (poptions['save_delimiter'] != 'xml') {
            poutput .= '<table border=\'1\'><tr>';
            foreach (pcolumn_names as pkey => pvalue)
                if (pkey != 'CHECKBOX')
                    poutput .= '<td>' . str_replace('&nbsp;', ' ', par_rep_cb('/<BR>/', ' ', par_rep_cb('/<!--.*-->/', '', pvalue))) . '</td>';
            poutput .= '</tr>';
            foreach (presult as pitem) {
                poutput .= '<tr>';
                foreach (pcolumn_names as pkey => pvalue) {
                    if (pkey != 'CHECKBOX') {
                        if (pkey == 'ATTENDANCE' || pkey == 'IGNORE_SCHEDULING')
                            pitem[pkey] = (pitem[pkey] == '<IMG SRC=assets/check.gif height=15>' ? 'Yes' : 'No');
                        poutput .= '<td>' . par_rep_cb('/<[^>]+>/', '', par_rep_cb("/<div onclick='[^']+'>/", '', par_rep_cb('/ +/', ' ', par_rep_cb('/&[^;]+;/', '', str_replace('<BR>&middot;', ' : ', str_replace('&nbsp;', ' ', pitem[pkey])))))) . '</td>';
                    }
                }
                poutput .= '</tr>';
            }
            poutput .= '</table>';
        }

        if (poptions['save_delimiter'] == 'xml') {
            foreach (presult as pitem) {
                foreach (pcolumn_names as pkey => pvalue) {
                    if (poptions['save_delimiter'] == 'comma' && !poptions['save_quotes'])
                        pitem[pkey] = str_replace(',', ';', pitem[pkey]);
                    pitem[pkey] = par_rep_cb('/<SELECT.*SELECTED\>([^<]+)<.*</SELECT\>/', '\\1', pitem[pkey]);
                    pitem[pkey] = par_rep_cb('/<SELECT.*</SELECT\>/', '', pitem[pkey]);
                    poutput .= (poptions['save_quotes'] ? '"' : '') . (poptions['save_delimiter'] == 'xml' ? '<' . str_replace(' ', '', pvalue) . '>' : '') . par_rep_cb('/<[^>]+>/', '', par_rep_cb("/<div onclick='[^']+'>/", '', par_rep_cb('/ +/', ' ', par_rep_cb('/&[^;]+;/', '', str_replace('<BR>&middot;', ' : ', str_replace('&nbsp;', ' ', pitem[pkey])))))) . (poptions['save_delimiter'] == 'xml' ? '</' . str_replace(' ', '', pvalue) . '>' . "\n" : '') . (poptions['save_quotes'] ? '"' : '') . (poptions['save_delimiter'] == 'comma' ? ',' : "\t");
                }
                poutput .= "\n";
=======
        if ($options['save_delimiter'] != 'xml') {
            $output .= '<table border=\'1\'><tr>';
            foreach ($column_names as $key => $value)
                if ($key != 'CHECKBOX')
                    $output .= '<td>' . str_replace('&nbsp;', ' ', par_rep_cb('/<BR>/', ' ', par_rep_cb('/<!--.*-->/', '', $value))) . '</td>';
            $output .= '</tr>';
            foreach ($result as $item) {
                $output .= '<tr>';
                foreach ($column_names as $key => $value) {
                    if ($key != 'CHECKBOX') {
                        if ($key == 'ATTENDANCE' || $key == 'IGNORE_SCHEDULING')
                            $item[$key] = ($item[$key] == '<IMG SRC=assets/check.gif height=15>' ? 'Yes' : 'No');
                        $output .= '<td>' . par_rep_cb('/<[^>]+>/', '', par_rep_cb("/<div onclick='[^']+'>/", '', par_rep_cb('/ +/', ' ', par_rep_cb('/&[^;]+;/', '', str_replace('<BR>&middot;', ' : ', str_replace('&nbsp;', ' ', $item[$key])))))) . '</td>';
                    }
                }
                $output .= '</tr>';
            }
            $output .= '</table>';
        }

        if ($options['save_delimiter'] == 'xml') {
            foreach ($result as $item) {
                foreach ($column_names as $key => $value) {
                    if ($options['save_delimiter'] == 'comma' && !$options['save_quotes'])
                        $item[$key] = str_replace(',', ';', $item[$key]);
                    $item[$key] = par_rep_cb('/<SELECT.*SELECTED\>([^<]+)<.*</SELECT\>/', '\\1', $item[$key]);
                    $item[$key] = par_rep_cb('/<SELECT.*</SELECT\>/', '', $item[$key]);
                    $output .= ($options['save_quotes'] ? '"' : '') . ($options['save_delimiter'] == 'xml' ? '<' . str_replace(' ', '', $value) . '>' : '') . par_rep_cb('/<[^>]+>/', '', par_rep_cb("/<div onclick='[^']+'>/", '', par_rep_cb('/ +/', ' ', par_rep_cb('/&[^;]+;/', '', str_replace('<BR>&middot;', ' : ', str_replace('&nbsp;', ' ', $item[$key])))))) . ($options['save_delimiter'] == 'xml' ? '</' . str_replace(' ', '', $value) . '>' . "\n" : '') . ($options['save_quotes'] ? '"' : '') . ($options['save_delimiter'] == 'comma' ? ',' : "\t");
                }
                $output .= "\n";
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
            }
        }
        header("Cache-Control: public");
        header("Pragma: ");
<<<<<<< HEAD
        header("Content-Type: application/pextension");
        header("Content-Disposition: inline; filename=\"" . pprogram_title . ".pextension\"\n");
        if (poptions['save_eval'])
            eval(poptions['save_eval']);
        echo poutput;
=======
        header("Content-Type: application/$extension");
        header("Content-Disposition: inline; filename=\"" . $program_title . ".$extension\"\n");
        if ($options['save_eval'])
            eval($options['save_eval']);
        echo $output;
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
        exit();
    }

    // END SAVING THE LIST ---
}

?>