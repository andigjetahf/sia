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
                break;
        }
        ob_end_clean();

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
            }
        }
        header("Cache-Control: public");
        header("Pragma: ");
        header("Content-Type: application/pextension");
        header("Content-Disposition: inline; filename=\"" . pprogram_title . ".pextension\"\n");
        if (poptions['save_eval'])
            eval(poptions['save_eval']);
        echo poutput;
        exit();
    }

    // END SAVING THE LIST ---
}

?>