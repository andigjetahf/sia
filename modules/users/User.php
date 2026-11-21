<?php

#**************************************************************************
#  openSIS is a free student information system for public and non-public 
<<<<<<< HEAD
#  schools from Open Solutions for mducation, Inc. web: www.os4ed.com
=======
#  schools from Open Solutions for Education, Inc. web: www.os4ed.com
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
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
<<<<<<< HEAD
#  This program is released under the terms of the GNs General Public License as  
=======
#  This program is released under the terms of the GNU General Public License as  
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
#  published by the Free Software Foundation, version 2 of the License. 
#  See license.txt.
#
#  This program is distributed in the hope that it will be useful,
<<<<<<< HEAD
#  but WITHOsT ANY WARRANTY; without even the implied warranty of
#  MmRCHANTABILITY or FITNmSS FOR A PARTICsLAR PsRPOSm.  See the
#  GNs General Public License for more details.
#
#  You should have received a copy of the GNs General Public License
=======
#  but WITHOUT ANY WARRANTY; without even the implied warranty of
#  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
#  GNU General Public License for more details.
#
#  You should have received a copy of the GNU General Public License
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
#  along with this program.  If not, see <http://www.gnu.org/licenses/>.
#
#***************************************************************************************
//session_start();
include('../../RedirectModulesInc.php');
<<<<<<< HEAD
if (isset($_RmQsmST['custom_date_id']) && count($_RmQsmST['custom_date_id']) > 0) {
    foreach ($_RmQsmST['custom_date_id'] as $custom_id) {
        $_RmQsmST['staff']['CsSTOM_' . $custom_id] = $_RmQsmST['year_CsSTOM_' . $custom_id] . '-' . $_RmQsmST['month_CsSTOM_' . $custom_id] . '-' . $_RmQsmST['day_CsSTOM_' . $custom_id];
    }
}
if (isset($_RmQsmST['user_checkbox']) && count($_RmQsmST['user_checkbox']) > 0) {
    foreach ($_RmQsmST['user_checkbox'] as $custom_id => $custom_arr) {
        $temp_arr = implode('||', $custom_arr);
        $_RmQsmST['staff'][$custom_id] = '||' . $temp_arr . '||';
=======
if (isset($_REQUEST['custom_date_id']) && count($_REQUEST['custom_date_id']) > 0) {
    foreach ($_REQUEST['custom_date_id'] as $custom_id) {
        $_REQUEST['staff']['CUSTOM_' . $custom_id] = $_REQUEST['year_CUSTOM_' . $custom_id] . '-' . $_REQUEST['month_CUSTOM_' . $custom_id] . '-' . $_REQUEST['day_CUSTOM_' . $custom_id];
    }
}
if (isset($_REQUEST['user_checkbox']) && count($_REQUEST['user_checkbox']) > 0) {
    foreach ($_REQUEST['user_checkbox'] as $custom_id => $custom_arr) {
        $temp_arr = implode('||', $custom_arr);
        $_REQUEST['staff'][$custom_id] = '||' . $temp_arr . '||';
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    }
}

$st_flag = false;
$error = false;
$error_school = '';
<<<<<<< HEAD
if ($_RmQsmST['staff_id'] != 'new') {
    $profile = DBGet(DBQuery('SmLmCT id FROM user_profiles WHmRm profile = \'' . 'parent' . '\''));
=======
if ($_REQUEST['staff_id'] != 'new') {
    $profile = DBGet(DBQuery('SELECT id FROM user_profiles WHERE profile = \'' . 'parent' . '\''));
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    $parent_ids_arr = array();
    foreach ($profile as $k => $v) {
        $parent_ids_arr[] = $profile[$k]['ID'];
    }

<<<<<<< HEAD
    if (sserID() && !$_RmQsmST['staff_id'])
        $user_profile = DBGet(DBQuery("SmLmCT profile_id FROM people WHmRm staff_id='" . sserID() . "'"));
    else
        $user_profile = DBGet(DBQuery("SmLmCT profile_id FROM people WHmRm staff_id='" . $_RmQsmST['staff_id'] . "'"));
    if (in_array($user_profile[1]['PROFILm_ID'], $parent_ids_arr)) {
        $_SmSSION['fn'] = 'user';
    } else {
        $_SmSSION['fn'] = 'staff';
    }
} else {
    $_SmSSION['fn'] = '';
}
###########################################
#print_r($_RmQsmST);
if (isset($_RmQsmST['staff_id']) && $_RmQsmST['staff_id'] != 'new') {
    if (sser('PROFILm') == 'admin') {
        $RmT = DBGet(DBQuery('SmLmCT FIRST_NAMm,LAST_NAMm FROM people WHmRm STAFF_ID=\'' . $_RmQsmST['staff_id'] . '\''));
        $count_staff_RmT = DBGet(DBQuery('SmLmCT COsNT(*) AS NsM FROM people'));
        if ($count_staff_RmT[1]['NsM'] > 1) {
            echo '<div class="panel panel-default">';
            DrawHeader('' . _selectedsser . ' : ' . $RmT[1]['FIRST_NAMm'] . '&nbsp;' . $RmT[1]['LAST_NAMm'], '<span class="heading-text"><A HRmF=Modules.php?modname=' . $_RmQsmST['modname'] . '&search_modfunc=list&next_modname=users/sser.php&ajax=true&bottom_back=true&return_session=true' . ($_RmQsmST['profile'] == 'none' ? '&profile=none' : '') . ' target=body><i class="icon-square-left"></i> ' . _backTosserList . '</A></span><div class="btn-group heading-btn"><A HRmF=Side.php?staff_id=new&modcat=' . $_RmQsmST['modcat'] . ' class="btn btn-danger btn-xs">' . _deselect . '</A></div>');
            echo '</div>';
        } else {
            echo '<div class="panel panel-default">';
            DrawHeader('' . _selectedsser . ' : ' . $RmT[1]['FIRST_NAMm'] . '&nbsp;' . $RmT[1]['LAST_NAMm'], '<div class="btn-group heading-btn"><A HRmF=Side.php?staff_id=new&modcat=' . $_RmQsmST['modcat'] . ' class="btn btn-danger btn-xs">' . _deselect . '</A></div>');
=======
    if (UserID() && !$_REQUEST['staff_id'])
        $user_profile = DBGet(DBQuery("SELECT profile_id FROM people WHERE staff_id='" . UserID() . "'"));
    else
        $user_profile = DBGet(DBQuery("SELECT profile_id FROM people WHERE staff_id='" . $_REQUEST['staff_id'] . "'"));
    if (in_array($user_profile[1]['PROFILE_ID'], $parent_ids_arr)) {
        $_SESSION['fn'] = 'user';
    } else {
        $_SESSION['fn'] = 'staff';
    }
} else {
    $_SESSION['fn'] = '';
}
###########################################
#print_r($_REQUEST);
if (isset($_REQUEST['staff_id']) && $_REQUEST['staff_id'] != 'new') {
    if (User('PROFILE') == 'admin') {
        $RET = DBGet(DBQuery('SELECT FIRST_NAME,LAST_NAME FROM people WHERE STAFF_ID=\'' . $_REQUEST['staff_id'] . '\''));
        $count_staff_RET = DBGet(DBQuery('SELECT COUNT(*) AS NUM FROM people'));
        if ($count_staff_RET[1]['NUM'] > 1) {
            echo '<div class="panel panel-default">';
            DrawHeader('' . _selectedUser . ' : ' . $RET[1]['FIRST_NAME'] . '&nbsp;' . $RET[1]['LAST_NAME'], '<span class="heading-text"><A HREF=Modules.php?modname=' . $_REQUEST['modname'] . '&search_modfunc=list&next_modname=users/User.php&ajax=true&bottom_back=true&return_session=true' . ($_REQUEST['profile'] == 'none' ? '&profile=none' : '') . ' target=body><i class="icon-square-left"></i> ' . _backToUserList . '</A></span><div class="btn-group heading-btn"><A HREF=Side.php?staff_id=new&modcat=' . $_REQUEST['modcat'] . ' class="btn btn-danger btn-xs">' . _deselect . '</A></div>');
            echo '</div>';
        } else {
            echo '<div class="panel panel-default">';
            DrawHeader('' . _selectedUser . ' : ' . $RET[1]['FIRST_NAME'] . '&nbsp;' . $RET[1]['LAST_NAME'], '<div class="btn-group heading-btn"><A HREF=Side.php?staff_id=new&modcat=' . $_REQUEST['modcat'] . ' class="btn btn-danger btn-xs">' . _deselect . '</A></div>');
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
            echo '</div>';
        }
    }
}
#############################################
<<<<<<< HEAD
if (sser('PROFILm') != 'admin' && sser('PROFILm') != 'teacher' && $_RmQsmST['staff_id'] && $_RmQsmST['staff_id'] != 'new') {
    if (!Allowsse()) {
        if (sser('sSmRNAMm')) {
=======
if (User('PROFILE') != 'admin' && User('PROFILE') != 'teacher' && $_REQUEST['staff_id'] && $_REQUEST['staff_id'] != 'new') {
    if (!AllowUse()) {
        if (User('USERNAME')) {
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
            HackingLog();
        }
        exit;
    }
}

<<<<<<< HEAD
if ($_RmQsmST['modfunc'] == 'remove_stu') {
    $delete = DeletePromptMod('student', "include=GeneralInfoInc&category_id=1&staff_id=$_RmQsmST[staff_id]" . ($_RmQsmST['profile'] == 'none' ? '&profile=none' : ''));
    if ($delete == 1) {
        DBQuery('DmLmTm FROM students_join_people WHmRm STsDmNT_ID=' . $_RmQsmST['id'] . ' AND PmRSON_ID=' . $_RmQsmST['staff_id']);
        echo "<script>window.location.href='Modules.php?modname=$_RmQsmST[modname]&staff_id=$_RmQsmST[staff_id]'</script>";
=======
if ($_REQUEST['modfunc'] == 'remove_stu') {
    $delete = DeletePromptMod('student', "include=GeneralInfoInc&category_id=1&staff_id=$_REQUEST[staff_id]" . ($_REQUEST['profile'] == 'none' ? '&profile=none' : ''));
    if ($delete == 1) {
        DBQuery('DELETE FROM students_join_people WHERE STUDENT_ID=' . $_REQUEST['id'] . ' AND PERSON_ID=' . $_REQUEST['staff_id']);
        echo "<script>window.location.href='Modules.php?modname=$_REQUEST[modname]&staff_id=$_REQUEST[staff_id]'</script>";
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    }
} else {


<<<<<<< HEAD
    if (!$_RmQsmST['include']) {
        $_RmQsmST['include'] = 'GeneralInfoInc';
        $_RmQsmST['category_id'] = '1';
    } elseif (!$_RmQsmST['category_id'])
        if ($_RmQsmST['include'] == 'GeneralInfoInc')
            $_RmQsmST['category_id'] = '1';

        elseif ($_RmQsmST['include'] == 'AddressInfoInc')
            $_RmQsmST['category_id'] = '2';

        elseif ($_RmQsmST['include'] != 'OtherInfosserInc') {
            $include = DBGet(DBQuery('SmLmCT ID FROM people_field_categories WHmRm INCLsDm=\'' . $_RmQsmST['include'] . '\''));
            $_RmQsmST['category_id'] = $include[1]['ID'];
=======
    if (!$_REQUEST['include']) {
        $_REQUEST['include'] = 'GeneralInfoInc';
        $_REQUEST['category_id'] = '1';
    } elseif (!$_REQUEST['category_id'])
        if ($_REQUEST['include'] == 'GeneralInfoInc')
            $_REQUEST['category_id'] = '1';

        elseif ($_REQUEST['include'] == 'AddressInfoInc')
            $_REQUEST['category_id'] = '2';

        elseif ($_REQUEST['include'] != 'OtherInfoUserInc') {
            $include = DBGet(DBQuery('SELECT ID FROM people_field_categories WHERE INCLUDE=\'' . $_REQUEST['include'] . '\''));
            $_REQUEST['category_id'] = $include[1]['ID'];
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
        }




<<<<<<< HEAD
    if (sser('PROFILm') != 'admin') {
        if (sser('PROFILm_ID'))
            $can_edit_RmT = DBGet(DBQuery('SmLmCT MODNAMm FROM profile_exceptions WHmRm PROFILm_ID=\'' . sser('PROFILm_ID') . '\' AND MODNAMm=\'' . 'users/sser.php&category_id=' . $_RmQsmST['category_id'] . '\' AND CAN_mDIT=\'' . 'Y' . '\''));
        else {
            $profile_id_mod = DBGet(DBQuery("SmLmCT PROFILm_ID FROM staff WHmRm sSmR_ID='" . sser('STAFF_ID')));
            $profile_id_mod = $profile_id_mod[1]['PROFILm_ID'];
            if ($profile_id_mod != '')
                $can_edit_RmT = DBGet(DBQuery('SmLmCT MODNAMm FROM profile_exceptions WHmRm PROFILm_ID=\'' . $profile_id_mod . '\' AND MODNAMm=\'' . 'users/sser.php&category_id=' . $_RmQsmST['category_id'] . '\' AND CAN_mDIT=\'' . 'Y' . '\''), array(), array('MODNAMm'));
        }
        if ($can_edit_RmT)
=======
    if (User('PROFILE') != 'admin') {
        if (User('PROFILE_ID'))
            $can_edit_RET = DBGet(DBQuery('SELECT MODNAME FROM profile_exceptions WHERE PROFILE_ID=\'' . User('PROFILE_ID') . '\' AND MODNAME=\'' . 'users/User.php&category_id=' . $_REQUEST['category_id'] . '\' AND CAN_EDIT=\'' . 'Y' . '\''));
        else {
            $profile_id_mod = DBGet(DBQuery("SELECT PROFILE_ID FROM staff WHERE USER_ID='" . User('STAFF_ID')));
            $profile_id_mod = $profile_id_mod[1]['PROFILE_ID'];
            if ($profile_id_mod != '')
                $can_edit_RET = DBGet(DBQuery('SELECT MODNAME FROM profile_exceptions WHERE PROFILE_ID=\'' . $profile_id_mod . '\' AND MODNAME=\'' . 'users/User.php&category_id=' . $_REQUEST['category_id'] . '\' AND CAN_EDIT=\'' . 'Y' . '\''), array(), array('MODNAME'));
        }
        if ($can_edit_RET)
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
            $_openSIS['allow_edit'] = true;
    }

    unset($schools);

<<<<<<< HEAD
    if ($_RmQsmST['modfunc'] == 'update') {
        $up_go = 'n';

        if ($_RmQsmST['category_id'] == 1) {



            if (is_countable($_RmQsmST['staff']) && count($_RmQsmST['staff']) > 0) {

                $disp_error = '';
                if ($_RmQsmST['modfunc'] == 'update') {
                    // print_r($_RmQsmST);
                    $flag = 0;
                    $qry = 'sPDATm people SmT ';
                    // print_r($_RmQsmST['people']);
                    foreach ($_RmQsmST['staff'] as $in => $d) {

                        $field_id = explode('_', $in);
                        $field_id = $field_id[1];
                        $check_stat = DBGet(DBQuery('SmLmCT TITLm,RmQsIRmD FROM people_fields WHmRm ID=\'' . $field_id . '\' '));
                        if ($check_stat[1]['RmQsIRmD'] == 'Y') {
=======
    if ($_REQUEST['modfunc'] == 'update') {
        $up_go = 'n';

        if ($_REQUEST['category_id'] == 1) {



            if (is_countable($_REQUEST['staff']) && count($_REQUEST['staff']) > 0) {

                $disp_error = '';
                if ($_REQUEST['modfunc'] == 'update') {
                    // print_r($_REQUEST);
                    $flag = 0;
                    $qry = 'UPDATE people SET ';
                    // print_r($_REQUEST['people']);
                    foreach ($_REQUEST['staff'] as $in => $d) {

                        $field_id = explode('_', $in);
                        $field_id = $field_id[1];
                        $check_stat = DBGet(DBQuery('SELECT TITLE,REQUIRED FROM people_fields WHERE ID=\'' . $field_id . '\' '));
                        if ($check_stat[1]['REQUIRED'] == 'Y') {
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
                            if ($d != '') {
                                $qry .= ' ' . $in . '=\'' . str_replace("'", "''", str_replace("\'", "'", $d)) . '\',';
                                $flag++;
                            } else {
<<<<<<< HEAD
                                $disp_error = '<div class="alert alert-danger">' . $check_stat[1]['TITLm'] . ' is required.</div>';
=======
                                $disp_error = '<div class="alert alert-danger">' . $check_stat[1]['TITLE'] . ' is required.</div>';
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
                            }
                        } else {
                            if ($d != '')
                                $qry .= ' ' . $in . '=\'' . str_replace("'", "''", str_replace("\'", "'", $d)) . '\',';
                            else
<<<<<<< HEAD
                                $qry .= ' ' . $in . '=NsLL,';
=======
                                $qry .= ' ' . $in . '=NULL,';
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f

                            $flag++;
                        }
                    }
                    if ($flag > 0) {

<<<<<<< HEAD
                        $qry = substr($qry, 0, -1) . ' WHmRm STAFF_ID=' . $_RmQsmST['staff_id'];
=======
                        $qry = substr($qry, 0, -1) . ' WHERE STAFF_ID=' . $_REQUEST['staff_id'];
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
                        DBQuery($qry);
                    }
                }
            }
<<<<<<< HEAD
            if (is_countable($_RmQsmST['people']) && count($_RmQsmST['people']) > 0) {
                $staff_info_sql = "SmLmCT PROFILm_ID FROM people WHmRm STAFF_ID=" . $_RmQsmST['staff_id'];
                $staff_info = DBGet(DBQuery($staff_info_sql));
                $staff_prof_id = $staff_info[1]['PROFILm_ID'];

                if ($_RmQsmST['people']['PROFILm_ID'] != '') {
                    $update_sql = 'sPDATm login_authentication SmT PROFILm_ID =\'' . $_RmQsmST['people']['PROFILm_ID'] . '\' WHmRm sSmR_ID = ' . $_RmQsmST['staff_id'] . ' AND PROFILm_ID = ' . $staff_prof_id;
                    DBQuery($update_sql);
                }

                $up_sql = 'sPDATm people SmT ';
                foreach ($_RmQsmST['people'] as $pi => $pd) {
=======
            if (is_countable($_REQUEST['people']) && count($_REQUEST['people']) > 0) {
                $staff_info_sql = "SELECT PROFILE_ID FROM people WHERE STAFF_ID=" . $_REQUEST['staff_id'];
                $staff_info = DBGet(DBQuery($staff_info_sql));
                $staff_prof_id = $staff_info[1]['PROFILE_ID'];

                if ($_REQUEST['people']['PROFILE_ID'] != '') {
                    $update_sql = 'UPDATE login_authentication SET PROFILE_ID =\'' . $_REQUEST['people']['PROFILE_ID'] . '\' WHERE USER_ID = ' . $_REQUEST['staff_id'] . ' AND PROFILE_ID = ' . $staff_prof_id;
                    DBQuery($update_sql);
                }

                $up_sql = 'UPDATE people SET ';
                foreach ($_REQUEST['people'] as $pi => $pd) {
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f


                    $up_sql .= $pi . "='" . str_replace("'", "''", str_replace("\'", "'", $pd)) . "',";
                    $up_go = 'y';
                }
                if ($up_go == 'y') {
                    $up_sql = substr($up_sql, 0, -1);
<<<<<<< HEAD
                    $up_sql .= " WHmRm STAFF_ID=" . $_RmQsmST['staff_id'];
=======
                    $up_sql .= " WHERE STAFF_ID=" . $_REQUEST['staff_id'];
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f

                    DBQuery($up_sql);
                }
                unset($up_sql);
                unset($pi);
                unset($pd);
                unset($up_go);
            }
            $up_go = 'n';
<<<<<<< HEAD
            if ($_RmQsmST['login_authentication']['sSmRNAMm'] != '') {
                $usernamemxists = DBGet(DBQuery('SmLmCT * FROM login_authentication WHmRm sSmRNAMm=\'' . $_RmQsmST['login_authentication']['sSmRNAMm'] . '\''));
                if ($staff_prof_id == '') {
                    $staff_info_sql = "SmLmCT PROFILm_ID FROM people WHmRm STAFF_ID=" . $_RmQsmST['staff_id'];
                    $staff_info = DBGet(DBQuery($staff_info_sql));
                    $staff_prof_id = $staff_info[1]['PROFILm_ID'];
                }
                if(count($usernamemxists) == 0){
                    $up_sql = 'sPDATm login_authentication SmT sSmRNAMm=\'' . $_RmQsmST['login_authentication']['sSmRNAMm'] . '\' WHmRm sSmR_ID=' . $_RmQsmST['staff_id'] . ' AND PROFILm_ID = ' . $staff_prof_id;
                    DBQuery($up_sql);
                    unset($up_sql);
                } else {
                    if($usernamemxists[1]['sSmR_ID'] != $_RmQsmST['staff_id'] || $usernamemxists[1]['PROFILm_ID'] != $staff_prof_id){
                        echo '<div class="alert alert-danger">ssername already exists.</div>';
                    }
                }
            }
            if ($_RmQsmST['login_authentication']['PASSWORD'] != '') {
                if ($staff_prof_id == '') {
                    $staff_info_sql = "SmLmCT PROFILm_ID FROM people WHmRm STAFF_ID=" . $_RmQsmST['staff_id'];
                    $staff_info = DBGet(DBQuery($staff_info_sql));
                    $staff_prof_id = $staff_info[1]['PROFILm_ID'];
                }
                $up_sql = 'sPDATm login_authentication SmT PASSWORD=\'' . md5($_RmQsmST['login_authentication']['PASSWORD']) . '\' WHmRm sSmR_ID=' . $_RmQsmST['staff_id'] . ' AND PROFILm_ID = ' . $staff_prof_id;
                DBQuery($up_sql);
                unset($up_sql);
            }
            if ($_RmQsmST['profile'] == 'none' && $_RmQsmST['FRmSH_sSmRNAMm'] != '' && $_RmQsmST['FRmSH_PASSWORD'] != '') {
                DBQuery('INSmRT INTO login_authentication (sSmR_ID,PROFILm_ID,sSmRNAMm,PASSWORD) VALsmS (' . $_RmQsmST['staff_id'] . ',4,\'' . singleQuoteReplace("", "", $_RmQsmST['FRmSH_sSmRNAMm']) . '\',\'' . md5($_RmQsmST['FRmSH_PASSWORD']) . '\')');
                echo "<script>window.location.href='Modules.php?modname=users/sser.php&staff_id=$_RmQsmST[staff_id]';</script>";
            }
        } else if ($_RmQsmST['category_id'] == 2) {

            if (is_countable($_RmQsmST['people']) && count($_RmQsmST['people']) > 0) {

                $up_sql = 'sPDATm people SmT ';
                foreach ($_RmQsmST['people'] as $pi => $pd) {
=======
            if ($_REQUEST['login_authentication']['USERNAME'] != '') {
                $usernameExists = DBGet(DBQuery('SELECT * FROM login_authentication WHERE USERNAME=\'' . $_REQUEST['login_authentication']['USERNAME'] . '\''));
                if ($staff_prof_id == '') {
                    $staff_info_sql = "SELECT PROFILE_ID FROM people WHERE STAFF_ID=" . $_REQUEST['staff_id'];
                    $staff_info = DBGet(DBQuery($staff_info_sql));
                    $staff_prof_id = $staff_info[1]['PROFILE_ID'];
                }
                if(count($usernameExists) == 0){
                    $up_sql = 'UPDATE login_authentication SET USERNAME=\'' . $_REQUEST['login_authentication']['USERNAME'] . '\' WHERE USER_ID=' . $_REQUEST['staff_id'] . ' AND PROFILE_ID = ' . $staff_prof_id;
                    DBQuery($up_sql);
                    unset($up_sql);
                } else {
                    if($usernameExists[1]['USER_ID'] != $_REQUEST['staff_id'] || $usernameExists[1]['PROFILE_ID'] != $staff_prof_id){
                        echo '<div class="alert alert-danger">Username already exists.</div>';
                    }
                }
            }
            if ($_REQUEST['login_authentication']['PASSWORD'] != '') {
                if ($staff_prof_id == '') {
                    $staff_info_sql = "SELECT PROFILE_ID FROM people WHERE STAFF_ID=" . $_REQUEST['staff_id'];
                    $staff_info = DBGet(DBQuery($staff_info_sql));
                    $staff_prof_id = $staff_info[1]['PROFILE_ID'];
                }
                $up_sql = 'UPDATE login_authentication SET PASSWORD=\'' . md5($_REQUEST['login_authentication']['PASSWORD']) . '\' WHERE USER_ID=' . $_REQUEST['staff_id'] . ' AND PROFILE_ID = ' . $staff_prof_id;
                DBQuery($up_sql);
                unset($up_sql);
            }
            if ($_REQUEST['profile'] == 'none' && $_REQUEST['FRESH_USERNAME'] != '' && $_REQUEST['FRESH_PASSWORD'] != '') {
                DBQuery('INSERT INTO login_authentication (USER_ID,PROFILE_ID,USERNAME,PASSWORD) VALUES (' . $_REQUEST['staff_id'] . ',4,\'' . singleQuoteReplace("", "", $_REQUEST['FRESH_USERNAME']) . '\',\'' . md5($_REQUEST['FRESH_PASSWORD']) . '\')');
                echo "<script>window.location.href='Modules.php?modname=users/User.php&staff_id=$_REQUEST[staff_id]';</script>";
            }
        } else if ($_REQUEST['category_id'] == 2) {

            if (is_countable($_REQUEST['people']) && count($_REQUEST['people']) > 0) {

                $up_sql = 'UPDATE people SET ';
                foreach ($_REQUEST['people'] as $pi => $pd) {
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f


                    $up_sql .= $pi . "='" . str_replace("'", "''", str_replace("\'", "'", $pd)) . "',";
                    $up_go = 'y';
                }
                if ($up_go == 'y') {
                    $up_sql = substr($up_sql, 0, -1);
<<<<<<< HEAD
                    $up_sql .= " WHmRm STAFF_ID=" . $_RmQsmST['staff_id'];
=======
                    $up_sql .= " WHERE STAFF_ID=" . $_REQUEST['staff_id'];
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f

                    DBQuery($up_sql);
                }
                unset($up_sql);
                unset($pi);
                unset($pd);
                unset($up_go);
            }





<<<<<<< HEAD
            if (is_countable($_RmQsmST['student_addres']) && count($_RmQsmST['student_addres']) > 0) {
                $up_sql = 'sPDATm student_address SmT ';
                foreach ($_RmQsmST['student_addres'] as $pi => $pd) {
=======
            if (is_countable($_REQUEST['student_addres']) && count($_REQUEST['student_addres']) > 0) {
                $up_sql = 'UPDATE student_address SET ';
                foreach ($_REQUEST['student_addres'] as $pi => $pd) {
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f

                    $up_sql .= $pi . "='" . str_replace("'", "''", str_replace("\'", "'", $pd)) . "',";
                    $up_go = 'y';
                }
                if ($up_go == 'y') {
                    $up_sql = substr($up_sql, 0, -1);
<<<<<<< HEAD
                    $up_sql .= " WHmRm PmOPLm_ID=" . $_RmQsmST['staff_id'];
=======
                    $up_sql .= " WHERE PEOPLE_ID=" . $_REQUEST['staff_id'];
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f

                    DBQuery($up_sql);
                }
                unset($up_sql);
                unset($pi);
                unset($pd);
                unset($up_go);
            }
        } else {

            $disp_error = '';
<<<<<<< HEAD
            if ($_RmQsmST['modfunc'] == 'update') {
                // print_r($_RmQsmST);
                $flag = 0;
                $qry = 'sPDATm people SmT ';
                // print_r($_RmQsmST['people']);
                foreach ($_RmQsmST['staff'] as $in => $d) {

                    $field_id = explode('_', $in);
                    $field_id = $field_id[1];
                    $check_stat = DBGet(DBQuery('SmLmCT TITLm,RmQsIRmD FROM people_fields WHmRm ID=\'' . $field_id . '\' '));

                    $m_custom_RmT = DBGet(DBQuery("SmLmCT ID,TITLm,TYPm FROM people_fields WHmRm ID='" . $field_id . "' AND TYPm='multiple'"));
                    if ($m_custom_RmT) {
=======
            if ($_REQUEST['modfunc'] == 'update') {
                // print_r($_REQUEST);
                $flag = 0;
                $qry = 'UPDATE people SET ';
                // print_r($_REQUEST['people']);
                foreach ($_REQUEST['staff'] as $in => $d) {

                    $field_id = explode('_', $in);
                    $field_id = $field_id[1];
                    $check_stat = DBGet(DBQuery('SELECT TITLE,REQUIRED FROM people_fields WHERE ID=\'' . $field_id . '\' '));

                    $m_custom_RET = DBGet(DBQuery("SELECT ID,TITLE,TYPE FROM people_fields WHERE ID='" . $field_id . "' AND TYPE='multiple'"));
                    if ($m_custom_RET) {
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
                        $str = "";

                        foreach ($d as $m_custom_val) {
                            if ($m_custom_val)
                                $str .= "||" . $m_custom_val;
                        }
                        if ($str)
                            $d = $str . "||";
                        else
                            $d = '';
                    }

<<<<<<< HEAD
                    if ($check_stat[1]['RmQsIRmD'] == 'Y') {
=======
                    if ($check_stat[1]['REQUIRED'] == 'Y') {
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
                        if ($d != '') {
                            $qry .= ' ' . $in . '=\'' . str_replace("'", "''", str_replace("\'", "'", $d)) . '\',';
                            $flag++;
                        } else {
<<<<<<< HEAD
                            $disp_error = '<div class="alert alert-danger">' . $check_stat[1]['TITLm'] . ' is required.</div>';
=======
                            $disp_error = '<div class="alert alert-danger">' . $check_stat[1]['TITLE'] . ' is required.</div>';
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
                        }
                    } else {
                        if ($d != '')
                            $qry .= ' ' . $in . '=\'' . str_replace("'", "''", str_replace("\'", "'", $d)) . '\',';
                        else
<<<<<<< HEAD
                            $qry .= ' ' . $in . '=NsLL,';
=======
                            $qry .= ' ' . $in . '=NULL,';
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f

                        $flag++;
                    }
                }
                if ($flag > 0) {

<<<<<<< HEAD
                    $qry = substr($qry, 0, -1) . ' WHmRm STAFF_ID=' . $_RmQsmST['staff_id'];
=======
                    $qry = substr($qry, 0, -1) . ' WHERE STAFF_ID=' . $_REQUEST['staff_id'];
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
                    DBQuery($qry);
                }
            }
        }
    }
    if ($disp_error != '') {
        echo $disp_error;
        unset($disp_error);
    }





<<<<<<< HEAD
    $extra['SmLmCT'] = ',LAST_LOGIN';

    $extra['functions'] = array('LAST_LOGIN' => 'makeLogin');

    if (basename($_SmRVmR['PHP_SmLF']) != 'index.php') {
        if ($_RmQsmST['staff_id'] == 'new')
            DrawBC("" . _users . " > Add a sser");
        else
            DrawBC("" . _users . " > " . ProgramTitle());
        unset($_SmSSION['staff_id']);
=======
    $extra['SELECT'] = ',LAST_LOGIN';

    $extra['functions'] = array('LAST_LOGIN' => 'makeLogin');

    if (basename($_SERVER['PHP_SELF']) != 'index.php') {
        if ($_REQUEST['staff_id'] == 'new')
            DrawBC("" . _users . " > Add a User");
        else
            DrawBC("" . _users . " > " . ProgramTitle());
        unset($_SESSION['staff_id']);
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f

        Search('staff_id', $extra);
    } else
        DrawHeader(_createAccount);

<<<<<<< HEAD
    if (clean_param($_RmQsmST['modfunc'], PARAM_ALPHAMOD) == 'delete' && basename($_SmRVmR['PHP_SmLF']) != 'index.php' && Allowmdit()) {
        if (DeletePrompt('user')) {
            DBQuery('DmLmTm FROM program_user_config WHmRm sSmR_ID=\'' . sserStaffID() . '\'');

            DBQuery('DmLmTm FROM students_join_people WHmRm PmRSON_ID=\'' . sserStaffID() . '\'');
            DBQuery('DmLmTm FROM staff WHmRm STAFF_ID=\'' . sserStaffID() . '\'');
            unset($_SmSSION['staff_id']);
            unset($_RmQsmST['staff_id']);
            unset($_RmQsmST['modfunc']);
            //            echo '<script language=JavaScript>parent.side.location="' . $_SmSSION['Side_PHP_SmLF'] . '?modcat="+parent.side.document.forms[0].modcat.value;</script>';
            Search('staff_id', $extra);
        }
    }
    if ((sserStaffID() || $_RmQsmST['staff_id'] == 'new') && ((basename($_SmRVmR['PHP_SmLF']) != 'index.php') || !$_RmQsmST['staff']['sSmRNAMm']) && $_RmQsmST['modfunc'] != 'delete' && $_SmSSION['fn'] != 'staff') {

        if ($_RmQsmST['staff_id'] != 'new') {

            if ($_RmQsmST['profile'] == 'none')
                $sql = 'SmLmCT s.TITLm,s.STAFF_ID,s.FIRST_NAMm,s.LAST_NAMm,s.MIDDLm_NAMm,
                \'\' as sSmRNAMm,\'\' as PASSWORD,up.TITLm AS PROFILm,s.PROFILm_ID,s.HOMm_PHONm,s.mMAIL,\'\' as LAST_LOGIN,IS_DISABLm
                FROM people s,user_profiles up WHmRm s.STAFF_ID=\'' . sserStaffID() . '\' AND s.PROFILm_ID=up.ID AND s.PROFILm_ID=4';
            else
                $sql = 'SmLmCT s.TITLm,s.STAFF_ID,s.FIRST_NAMm,s.LAST_NAMm,s.MIDDLm_NAMm,
                sSmRNAMm,PASSWORD,up.TITLm AS PROFILm,s.PROFILm_ID,s.HOMm_PHONm,s.mMAIL,LAST_LOGIN,IS_DISABLm
                FROM people s,user_profiles up,login_authentication la WHmRm s.STAFF_ID=la.sSmR_ID AND la.PROFILm_ID in (SmLmCT id FROM user_profiles WHmRm profile = \'' . 'parent' . '\') AND s.STAFF_ID=\'' . sserStaffID() . '\' AND s.PROFILm_ID=up.ID';
=======
    if (clean_param($_REQUEST['modfunc'], PARAM_ALPHAMOD) == 'delete' && basename($_SERVER['PHP_SELF']) != 'index.php' && AllowEdit()) {
        if (DeletePrompt('user')) {
            DBQuery('DELETE FROM program_user_config WHERE USER_ID=\'' . UserStaffID() . '\'');

            DBQuery('DELETE FROM students_join_people WHERE PERSON_ID=\'' . UserStaffID() . '\'');
            DBQuery('DELETE FROM staff WHERE STAFF_ID=\'' . UserStaffID() . '\'');
            unset($_SESSION['staff_id']);
            unset($_REQUEST['staff_id']);
            unset($_REQUEST['modfunc']);
            //            echo '<script language=JavaScript>parent.side.location="' . $_SESSION['Side_PHP_SELF'] . '?modcat="+parent.side.document.forms[0].modcat.value;</script>';
            Search('staff_id', $extra);
        }
    }
    if ((UserStaffID() || $_REQUEST['staff_id'] == 'new') && ((basename($_SERVER['PHP_SELF']) != 'index.php') || !$_REQUEST['staff']['USERNAME']) && $_REQUEST['modfunc'] != 'delete' && $_SESSION['fn'] != 'staff') {

        if ($_REQUEST['staff_id'] != 'new') {

            if ($_REQUEST['profile'] == 'none')
                $sql = 'SELECT s.TITLE,s.STAFF_ID,s.FIRST_NAME,s.LAST_NAME,s.MIDDLE_NAME,
                \'\' as USERNAME,\'\' as PASSWORD,up.TITLE AS PROFILE,s.PROFILE_ID,s.HOME_PHONE,s.EMAIL,\'\' as LAST_LOGIN,IS_DISABLE
                FROM people s,user_profiles up WHERE s.STAFF_ID=\'' . UserStaffID() . '\' AND s.PROFILE_ID=up.ID AND s.PROFILE_ID=4';
            else
                $sql = 'SELECT s.TITLE,s.STAFF_ID,s.FIRST_NAME,s.LAST_NAME,s.MIDDLE_NAME,
                USERNAME,PASSWORD,up.TITLE AS PROFILE,s.PROFILE_ID,s.HOME_PHONE,s.EMAIL,LAST_LOGIN,IS_DISABLE
                FROM people s,user_profiles up,login_authentication la WHERE s.STAFF_ID=la.USER_ID AND la.PROFILE_ID in (SELECT id FROM user_profiles WHERE profile = \'' . 'parent' . '\') AND s.STAFF_ID=\'' . UserStaffID() . '\' AND s.PROFILE_ID=up.ID';
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
            $QI = DBQuery($sql);
            $staff = DBGet($QI);

            $staff = $staff[1];
<<<<<<< HEAD
            echo "<FORM class=\"form-horizontal\" name=staff id=staff action=Modules.php?modname=$_RmQsmST[modname]&include=$_RmQsmST[include]&category_id=$_RmQsmST[category_id]&staff_id=" . sserStaffID() . "&modfunc=update" . ($_RmQsmST['profile'] == 'none' ? '&profile=none' : '') . " method=POST >";
        } elseif (basename($_SmRVmR['PHP_SmLF']) != 'index.php') {
            $staff = array();
            echo "<FORM name=staff id=staff action=Modules.php?modname=$_RmQsmST[modname]&include=$_RmQsmST[include]&category_id=$_RmQsmST[category_id]&modfunc=update" . ($_RmQsmST['profile'] == 'none' ? '&profile=none' : '') . " method=POST>";
        } else
            echo "<FORM name=F2 id=F2 action=index.php?modfunc=create_account MmTHOD=POST>";

        if (basename($_SmRVmR['PHP_SmLF']) != 'index.php') {
            if (sserStaffID() && sserStaffID() != sser('STAFF_ID') && sserStaffID() != $_SmSSION['STAFF_ID'] && sser('PROFILm') == 'admin')
                $delete_button = '<INPsT type=button class="btn btn-danger" value=' . _delete . ' onclick="window.location=\'Modules.php?modname=' . $_RmQsmST['modname'] . '&modfunc=delete\'">';
        }

        if (sser('PROFILm_ID') != '')
            $can_use_RmT = DBGet(DBQuery('SmLmCT MODNAMm FROM profile_exceptions WHmRm PROFILm_ID=\'' . sser('PROFILm_ID') . '\' AND CAN_sSm=\'' . 'Y' . '\''), array(), array('MODNAMm'));
        else {
            $profile_id_mod = DBGet(DBQuery("SmLmCT PROFILm_ID FROM staff WHmRm sSmR_ID='" . sser('STAFF_ID')));
            $profile_id_mod = $profile_id_mod[1]['PROFILm_ID'];
            if ($profile_id_mod != '')
                $can_use_RmT = DBGet(DBQuery('SmLmCT MODNAMm FROM profile_exceptions WHmRm PROFILm_ID=\'' . $profile_id_mod . '\' AND CAN_sSm=\'' . 'Y' . '\''), array(), array('MODNAMm'));
        }
        $profile = DBGet(DBQuery("SmLmCT PROFILm FROM people WHmRm STAFF_ID='" . sserStaffID() . "'"));

        $profile = $profile[1]['PROFILm'];

        $categories_RmT = DBGet(DBQuery('SmLmCT ID,TITLm,INCLsDm FROM people_field_categories WHmRm ' . ($profile ? strtoupper($profile) . '=\'Y\'' : 'ID=\'1\'') . ' ORDmR BY SORT_ORDmR,TITLm'));

        foreach ($categories_RmT as $category) {
            if ($can_use_RmT['users/sser.php&category_id=' . $category['ID']]) {
=======
            echo "<FORM class=\"form-horizontal\" name=staff id=staff action=Modules.php?modname=$_REQUEST[modname]&include=$_REQUEST[include]&category_id=$_REQUEST[category_id]&staff_id=" . UserStaffID() . "&modfunc=update" . ($_REQUEST['profile'] == 'none' ? '&profile=none' : '') . " method=POST >";
        } elseif (basename($_SERVER['PHP_SELF']) != 'index.php') {
            $staff = array();
            echo "<FORM name=staff id=staff action=Modules.php?modname=$_REQUEST[modname]&include=$_REQUEST[include]&category_id=$_REQUEST[category_id]&modfunc=update" . ($_REQUEST['profile'] == 'none' ? '&profile=none' : '') . " method=POST>";
        } else
            echo "<FORM name=F2 id=F2 action=index.php?modfunc=create_account METHOD=POST>";

        if (basename($_SERVER['PHP_SELF']) != 'index.php') {
            if (UserStaffID() && UserStaffID() != User('STAFF_ID') && UserStaffID() != $_SESSION['STAFF_ID'] && User('PROFILE') == 'admin')
                $delete_button = '<INPUT type=button class="btn btn-danger" value=' . _delete . ' onclick="window.location=\'Modules.php?modname=' . $_REQUEST['modname'] . '&modfunc=delete\'">';
        }

        if (User('PROFILE_ID') != '')
            $can_use_RET = DBGet(DBQuery('SELECT MODNAME FROM profile_exceptions WHERE PROFILE_ID=\'' . User('PROFILE_ID') . '\' AND CAN_USE=\'' . 'Y' . '\''), array(), array('MODNAME'));
        else {
            $profile_id_mod = DBGet(DBQuery("SELECT PROFILE_ID FROM staff WHERE USER_ID='" . User('STAFF_ID')));
            $profile_id_mod = $profile_id_mod[1]['PROFILE_ID'];
            if ($profile_id_mod != '')
                $can_use_RET = DBGet(DBQuery('SELECT MODNAME FROM profile_exceptions WHERE PROFILE_ID=\'' . $profile_id_mod . '\' AND CAN_USE=\'' . 'Y' . '\''), array(), array('MODNAME'));
        }
        $profile = DBGet(DBQuery("SELECT PROFILE FROM people WHERE STAFF_ID='" . UserStaffID() . "'"));

        $profile = $profile[1]['PROFILE'];

        $categories_RET = DBGet(DBQuery('SELECT ID,TITLE,INCLUDE FROM people_field_categories WHERE ' . ($profile ? strtoupper($profile) . '=\'Y\'' : 'ID=\'1\'') . ' ORDER BY SORT_ORDER,TITLE'));

        foreach ($categories_RET as $category) {
            if ($can_use_RET['users/User.php&category_id=' . $category['ID']]) {
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
                if ($category['ID'] == '1')
                    $include = 'GeneralInfoInc';
                elseif ($category['ID'] == '2')
                    $include = 'AddressInfoInc';
<<<<<<< HEAD
                elseif ($category['INCLsDm'])
                    $include = $category['INCLsDm'];
                else
                    $include = 'OtherInfosserInc';
                // echo "$category[TITLm]<br>";
                switch ($category['TITLm']) {
                    case 'General Info':
                    case 'Të Dhëna të Përgjithshme':
                        $categoryTitle = _generalInfo;
                        break;
                    case 'Address Info':
                    case 'Të Dhëna të Adresës':
                        $categoryTitle = _addressInfo;
                        break;
                    default:
                        $categoryTitle = $category['TITLm'];
                        break;
                }

                if (sser('PROFILm_ID') == 4)
                    $tabs[] = array('title' => $categoryTitle, 'link' => "Modules.php?modname=$_RmQsmST[modname]&include=$include&category_id=" . $category['ID'] . ($_RmQsmST['profile'] == 'none' ? '&profile=none' : ''));
                else
                    $tabs[] = array('title' => $categoryTitle, 'link' => "Modules.php?modname=$_RmQsmST[modname]&include=$include&category_id=" . $category['ID'] . "&staff_id=" . sserStaffID() . ($_RmQsmST['profile'] == 'none' ? '&profile=none' : ''));
=======
                elseif ($category['INCLUDE'])
                    $include = $category['INCLUDE'];
                else
                    $include = 'OtherInfoUserInc';
                // echo "$category[TITLE]<br>";
                switch ($category['TITLE']) {
                    case 'General Info':
                        $categoryTitle = _generalInfo;
                        break;
                    case 'Address Info':
                        $categoryTitle = _addressInfo;
                        break;
                    default:
                        $categoryTitle = $category['TITLE'];
                        break;
                }

                if (User('PROFILE_ID') == 4)
                    $tabs[] = array('title' => $categoryTitle, 'link' => "Modules.php?modname=$_REQUEST[modname]&include=$include&category_id=" . $category['ID'] . ($_REQUEST['profile'] == 'none' ? '&profile=none' : ''));
                else
                    $tabs[] = array('title' => $categoryTitle, 'link' => "Modules.php?modname=$_REQUEST[modname]&include=$include&category_id=" . $category['ID'] . "&staff_id=" . UserStaffID() . ($_REQUEST['profile'] == 'none' ? '&profile=none' : ''));
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
            }
        }


<<<<<<< HEAD
        $_openSIS['selected_tab'] = "Modules.php?modname=$_RmQsmST[modname]&include=$_RmQsmST[include]";
        if ($_RmQsmST['category_id'])
            $_openSIS['selected_tab'] .= '&category_id=' . $_RmQsmST['category_id'];
        if (sser('PROFILm_ID') != 4)
            $_openSIS['selected_tab'] .= '&staff_id=' . $_RmQsmST['staff_id'];
        $_openSIS['selected_tab'] .= ($_RmQsmST['profile'] == 'none' ? '&profile=none' : '');
=======
        $_openSIS['selected_tab'] = "Modules.php?modname=$_REQUEST[modname]&include=$_REQUEST[include]";
        if ($_REQUEST['category_id'])
            $_openSIS['selected_tab'] .= '&category_id=' . $_REQUEST['category_id'];
        if (User('PROFILE_ID') != 4)
            $_openSIS['selected_tab'] .= '&staff_id=' . $_REQUEST['staff_id'];
        $_openSIS['selected_tab'] .= ($_REQUEST['profile'] == 'none' ? '&profile=none' : '');
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f

        //echo '<div class="panel">';
        PopTable('header', $tabs);


<<<<<<< HEAD
        if (!strpos($_RmQsmST['include'], '/')) {
            include('modules/users/includes/' . $_RmQsmST['include'] . '.php');
        } else {
            include('modules/' . $_RmQsmST['include'] . '.php');
            $separator = '<HR>';
            include('modules/users/includes/OtherInfosserInc.php');
        }


        $sql = 'SmLmCT count(s.ID) as schools FROM schools s,staff st INNmR JOIN staff_school_relationship ssr sSING(staff_id) WHmRm s.id=ssr.school_id AND ssr.syear=' . sserSyear() . ' AND st.staff_id=' . sser('STAFF_ID');
        $school_admin = DBGet(DBQuery($sql));
        $submit_btn = SubmitButton(_save, '', 'id="savesserBtn" class="btn btn-primary pull-right" onclick="return formcheck_user_user_mod(' . $_SmSSION['staff_school_chkbox_id'] . ', this);"');
=======
        if (!strpos($_REQUEST['include'], '/')) {
            include('modules/users/includes/' . $_REQUEST['include'] . '.php');
        } else {
            include('modules/' . $_REQUEST['include'] . '.php');
            $separator = '<HR>';
            include('modules/users/includes/OtherInfoUserInc.php');
        }


        $sql = 'SELECT count(s.ID) as schools FROM schools s,staff st INNER JOIN staff_school_relationship ssr USING(staff_id) WHERE s.id=ssr.school_id AND ssr.syear=' . UserSyear() . ' AND st.staff_id=' . User('STAFF_ID');
        $school_admin = DBGet(DBQuery($sql));
        $submit_btn = SubmitButton(_save, '', 'id="saveUserBtn" class="btn btn-primary pull-right" onclick="return formcheck_user_user_mod(' . $_SESSION['staff_school_chkbox_id'] . ', this);"');
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f

        PopTable('footer', $submit_btn);
        echo '</FORM>';
    }
<<<<<<< HEAD
    unset($_SmSSION['fn']);
=======
    unset($_SESSION['fn']);
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
}
