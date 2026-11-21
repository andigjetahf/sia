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

function setPaginationRequisites(_modname, _searchModfunc, _nextModname, _columns, _singular, _plural, _link, _LOGroup, _options, _ListOutputFunction, _ProgramTitle = false) {

	if(_ListOutputFunction != '') {
		_pagi_mods = array();

		if(_modname != '') {
			_pagi_mods['modname'] = _modname;
		}

		if(_searchModfunc != '') {
			_pagi_mods['search_modfunc'] = _searchModfunc;
		}

		if(_nextModname != '') {
			_pagi_mods['next_modname'] = _nextModname;
		}

		unset(__SESSION['PEGI_MODS']);
		__SESSION['PEGI_MODS'] = _pagi_mods;

		unset(__SESSION['PEGI_COLS']);
		__SESSION['PEGI_COLS'] = _columns;

		unset(__SESSION['PEGI_SINGULAR']);
		__SESSION['PEGI_SINGULAR'] = _singular;

		unset(__SESSION['PEGI_PLURAL']);
		__SESSION['PEGI_PLURAL'] = _plural;

		unset(__SESSION['PEGI_LINK']);
		__SESSION['PEGI_LINK'] = _link;

		unset(__SESSION['PEGI_LOGRP']);
        __SESSION['PEGI_LOGRP'] = _LOGroup;

        unset(__SESSION['PEGI_OPTION']);
        __SESSION['PEGI_OPTION'] = _options;

        unset(__SESSION['LISTOUTPUT_FUNC']);
        __SESSION['LISTOUTPUT_FUNC'] = _ListOutputFunction;

        unset(__SESSION['PROGRAM_TITLE']);
        if(_ProgramTitle != '') {
        	__SESSION['PROGRAM_TITLE'] = _ProgramTitle;
        } else {
        	__SESSION['PROGRAM_TITLE'] = 'openSIS';
        }
	}
}

function keepRequestParams(_requests) {
	unset(__SESSION['PEGI_REQUESTS']);

	__SESSION['PEGI_REQUESTS'] = array();
	
	__SESSION['PEGI_REQUESTS'] = _requests;
}

function keepExtraParams(_extra) {
	unset(__SESSION['PEGI_EXTRA']);
	
	__SESSION['PEGI_EXTRA'] = _extra;
}

function checkPagesForPrint(_modname) {
	if(_modname != '') {
		_pagesForPrint = array(
	        // Students
	        'students/MailingLabels.php', 
	        'students/StudentLabels.php', 
	        'students/PrintStudentInfo.php', 
	        'students/PrintStudentContactInfo.php', 
	        'students/GoalReport.php', 
	        // Scheduling
	        'scheduling/PrintSchedules.php', 
	        // Grades
	        'grades/ReportCards.php', 
	        'grades/AdminProgressReports.php', 
	        'grades/ProgressReports.php', 
	        'grades/Transcripts.php'
	    );

		if(in_array(_modname, _pagesForPrint)) {
			return true;
		} else {
			return false;
		}

	} else {
		return false;
	}
}

function checkNoNeedPaging(_modname) {
	if(_modname != '') {
		_noNeedPaging = array(
	        // Teacher Programs
	        'users/TeacherPrograms.php?include=grades/InputFinalGrades.php', 
	        'users/TeacherPrograms.php?include=grades/Grades.php', 
	        'users/TeacherPrograms.php?include=grades/ProgressReports.php', 
	        // Grades
	        'grades/ProgressReports.php', 
	        'grades/Transcripts.php', 
	        // Users
	        'users/TeacherPrograms.php?include=eligibility/EnterEligibility.php', 
	        // Eligibility
	        'eligibility/EnterEligibility.php', 
	        // Attendance
	        'attendance/DailySummary.php'
	    );

		if(in_array(_modname, _noNeedPaging)) {
			return true;
		} else {
			return false;
		}

	} else {
		return false;
	}
}

?>