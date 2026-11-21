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

session_start();
?>
<!DOCTYPE html>
<<<<<<< HEAD
<html lang="sq">
=======
<html lang="en">
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
<<<<<<< HEAD
        <title>Instaluesi SIA</title>
=======
        <title>SIA Installer</title>
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
        <link href="../assets/css/icons/fontawesome/styles.min.css" rel="stylesheet">
        <link rel="stylesheet" type="text/css" href="../assets/css/bootstrap.min.css">
        <link rel="stylesheet" type="text/css" href="assets/bootstrap-datepicker/css/bootstrap-datepicker3.css">
        <link rel="stylesheet" href="assets/css/installer.css?v=<?php echo rand(000, 999); ?>" type="text/css" />
        <noscript><META http-equiv=REFRESH content='0;url=../EnableJavascript.php' /></noscript>
        <script src="js/jquery.min.js"></script>
        <script src="../assets/js/core/libraries/bootstrap.min.js"></script>
        <script type="text/javascript" src="js/Validator.js"></script>
        <script src="assets/bootstrap-datepicker/js/bootstrap-datepicker.min.js"></script>
        <?php
        echo '<script type="text/javascript">
            var page=parent.location.href.replace(/.*\//,"");
            if(page && page!="index.php"){
                window.location.href="index.php";
            }
        </script>';
        ?>
        <script>
            $(function () {
                $('.input-group.date').datepicker({
                    autoclose: true
                });
            });
        </script>
    </head>
    <body class="outer-body">

        <section class="login">
            <div class="login-wrapper">
                <div class="panel">
                    <div class="panel-heading">
                        <div class="logo">
<<<<<<< HEAD
                            <img src="assets/images/opensis_logo.png" alt="SIA (Sistemi Inteligjences Arsimore)">
                        </div>
                        <h3>Instalimi i SIA - Të Dhënat e Shkollës</h3>
=======
                            <img src="assets/images/opensis_logo.png" alt="SIA">
                        </div>
                        <h3>SIA Installation - School Information</h3>
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
                    </div>
                    <div class="panel-body">
                        <div class="installation-steps-wrapper">
                            <div class="installation-instructions">
                                <ul class="installation-steps-label">
<<<<<<< HEAD
                                    <li>Zgjidhni Paketën</li>
                                    <li>Kërkesat e Sistemit</li>
                                    <li>Lidhja me Bazën e të Dhënave</li>
                                    <li>Përzgjedhja e Bazës së të Dhënave</li>
                                    <li class="active">Të Dhënat e Shkollës</li>
                                    <li>Konfigurimi i Administratorit</li>
                                    <li>Gati për Përdorim!</li>
                                </ul>
                                <!--<h4 class="no-margin">Udhëzimet e Instalimit</h4>
                                <p>Instaluesi ka krijuar me sukses bazën e të dhënave për aplikacionin SIA (Sistemi Inteligjences Arsimore).</p>
                                <p>Pasi të vendosni emrin e shkollës, datën e fillimit dhe të mbarimit, sistemi do të krijojë një shkollë të paracaktuar.</p>
                                <p>Nëse zgjidhni instalimin me të dhëna testuese, do të instalohet një shkollë model me të dhëna shembull. Ju mund të mësoni nga konfigurimi dhe operimi i shkollës model për të konfiguruar shkollën tuaj.</p>-->
                            </div>
                            <div class="installation-steps">
                                <div id="calculating" class="loading clearfix"><div><i class="fa fa-cog fa-spin fa-lg fa-fw"></i> Po konfigurohet baza e të dhënave. Ju lutemi prisni...</div></div>
                                <div id="step_container">
                                    <h4 class="m-t-0 m-b-5">Vendosni Emrin e Shkollës, Datën e Fillimit dhe të Mbarimit të vitit shkollor</h4>
=======
                                    <li>Choose Package</li>
                                    <li>System Requirements</li>
                                    <li>Database Connection</li>
                                    <li>Database Selection</li>
                                    <li class="active">School Information</li>
                                    <li>Site Admin Account Setup</li>
                                    <li>Ready to Go!</li>
                                </ul>
                                <!--<h4 class="no-margin">Installation Instructions</h4>
                                <p>Installer has successfully created the database for openSIS application.</p>
                                <p>Once you enter the school name, begin and end dates, it will create a default school in the system.</p>
                                <p>If you install it with sample data, then a sample school will be installed with data. You can learn from the setup and operation of the sample school to configure your own school.</p>-->
                            </div>
                            <div class="installation-steps">
                                <div id="calculating" class="loading clearfix"><div><i class="fa fa-cog fa-spin fa-lg fa-fw"></i> Configuring database. Please wait...</div></div>
                                <div id="step_container">
                                    <h4 class="m-t-0 m-b-5">Enter your School Name, Beginning and Ending Dates of the school year</h4>
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
                                    <form name='step3' id='step3' method="post" action="Ins3.php">
                                        <div id="error" class="text-center">&nbsp;</div>

                                        <div class="form-group">
<<<<<<< HEAD
                                            <label class="control-label">Emri i Shkollës</label>
=======
                                            <label class="control-label">School Name</label>
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
                                            <input type="text" name="sname" id="sname" size="30" value="" class="form-control" />
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group">
<<<<<<< HEAD
                                                    <label class="control-label">Data e Fillimit (mm/dd/yyyy)</label>
=======
                                                    <label class="control-label">Beginning Date (mm/dd/yyyy)</label>
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
                                                    <div class="input-group date">
                                                        <input name="beg_date" id="beg_date" type="text" class="form-control">
                                                        <span class="input-group-addon"><i class="fa fa-calendar-o"></i></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
<<<<<<< HEAD
                                                    <label class="control-label">Data e Mbarimit (mm/dd/yyyy)</label>
=======
                                                    <label class="control-label">Ending Date (mm/dd/yyyy)</label>
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
                                                    <div class="input-group date">
                                                        <input name="end_date" id="end_date" type="text" class="form-control">
                                                        <span class="input-group-addon"><i class="fa fa-calendar-o"></i></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
<<<<<<< HEAD
                                            <label class="checkbox-inline"><input type="checkbox" name="sample_data" id="sample_data" value="insert" id="sample_data"/> Instalo me të dhëna provë shkollore</label>
                                        </div>
                                        <hr/>
                                        <div class="text-right"><input type="submit" value="Ruaj & Vazhdo" class="btn btn-success" name="btnsyear" onclick="return check();" /></div>
=======
                                            <label class="checkbox-inline"><input type="checkbox" name="sample_data" id="sample_data" value="insert" id="sample_data"/> Install with sample school data</label>
                                        </div>
                                        <hr/>
                                        <div class="text-right"><input type="submit" value="Save & Next" class="btn btn-success" name="btnsyear" onclick="return check();" /></div>
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f


                                        <script language="JavaScript" type="text/javascript">
                                            function validatedate(inputText)
                                            {
                                                var dateformat = /^(0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])[\/\-]\d{4}$/;

                                                if (inputText.match(dateformat))
                                                {

                                                    var opera1 = inputText.split('/');
                                                    var opera2 = inputText.split('-');
                                                    lopera1 = opera1.length;
                                                    lopera2 = opera2.length;
                                                    // Extract the string into month, date and year  
                                                    if (lopera1 > 1)
                                                    {
                                                        var pdate = inputText.split('/');
                                                    }
                                                    else if (lopera2 > 1)
                                                    {
                                                        var pdate = inputText.split('-');
                                                    }
                                                    var mm = parseInt(pdate[0]);
                                                    var dd = parseInt(pdate[1]);
                                                    var yy = parseInt(pdate[2]);
                                                    // Create list of days of a month [assume there is no leap year by default]  
                                                    var ListofDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
                                                    if (mm == 1 || mm > 2)
                                                    {
                                                        if (dd > ListofDays[mm - 1])
                                                        {

                                                            return false;
                                                        }
                                                    }
                                                    if (mm == 2)
                                                    {
                                                        var lyear = false;
                                                        if ((!(yy % 4) && yy % 100) || !(yy % 400))
                                                        {
                                                            lyear = true;
                                                        }
                                                        if ((lyear == false) && (dd >= 29))
                                                        {

                                                            return false;
                                                        }
                                                        if ((lyear == true) && (dd > 29))
                                                        {

                                                            return false;
                                                        }
                                                    }
                                                }
                                                else
                                                {

                                                    return false;
                                                }
                                            }
                                            function check()
                                            {
                                                var sample_data = document.getElementById('sample_data');
                                                var sname = document.getElementById("sname");
                                                var beg_date = document.getElementById("beg_date");
                                                var end_date = document.getElementById("end_date");
                                                if (sname.value != '' && beg_date.value != '')
                                                {



                                                    if (sname.value == '')
                                                    {
<<<<<<< HEAD
                                                        document.getElementById("error").innerHTML = '<font style="color:red"><b>Emri i shkollës nuk mund të jetë bosh.</b></font>';
=======
                                                        document.getElementById("error").innerHTML = '<font style="color:red"><b>School name cannot be blank.</b></font>';
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f

                                                        sname.focus();
                                                        return false;
                                                    }
                                                    else
                                                    {
                                                        if (sname.value.length > 50)
                                                        {
<<<<<<< HEAD
                                                            document.getElementById("error").innerHTML = '<font style="color:red"><b>Gjatësia maksimale e emrit të shkollës është 50 karaktere.</b></font>';
=======
                                                            document.getElementById("error").innerHTML = '<font style="color:red"><b>Maximum length of School name is 50</b></font>';
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f

                                                            sname.focus();
                                                            return false;
                                                        }
                                                    }
                                                    if (beg_date.value == '')
                                                    {
<<<<<<< HEAD
                                                        document.getElementById("error").innerHTML = '<font style="color:red"><b>Data e fillimit nuk mund të jetë bosh.</b></font>';
=======
                                                        document.getElementById("error").innerHTML = '<font style="color:red"><b>Begining date cannot be blank.</b></font>';
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f

                                                        beg_date.focus();
                                                        return false;
                                                    }
                                                    else
                                                    {
                                                        if (false == validatedate(beg_date.value))
                                                        {
<<<<<<< HEAD
                                                            document.getElementById("error").innerHTML = '<font style="color:red"><b>Formati i datës së fillimit është i pasaktë.</b></font>';
=======
                                                            document.getElementById("error").innerHTML = '<font style="color:red"><b>Begining date format is wrong.</b></font>';
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f

                                                            beg_date.focus();
                                                            return false;
                                                        }
                                                    }
                                                    if (end_date.value == '')
                                                    {
<<<<<<< HEAD
                                                        document.getElementById("error").innerHTML = '<font style="color:red"><b>Data e mbarimit nuk mund të jetë bosh.</b></font>';
=======
                                                        document.getElementById("error").innerHTML = '<font style="color:red"><b>Ending date cannot be blank.</b></font>';
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f

                                                        end_date.focus();
                                                        return false;
                                                    }
                                                    else
                                                    {
                                                        if (false == validatedate(end_date.value))
                                                        {
<<<<<<< HEAD
                                                            document.getElementById("error").innerHTML = '<font style="color:red"><b>Formati i datës së mbarimit është i pasaktë.</b></font>';
=======
                                                            document.getElementById("error").innerHTML = '<font style="color:red"><b>Ending date format is wrong.</b></font>';
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f

                                                            beg_date.focus();
                                                            return false;
                                                        }
                                                    }
                                                    if(end_date.value != '')
                                                    { 
                                                        if((Date.parse(beg_date.value) >= Date.parse(end_date.value)))
                                                        {
<<<<<<< HEAD
                                                            document.getElementById("error").innerHTML = '<font style="color:red"><b>Data e mbarimit duhet të jetë më e madhe se data e fillimit.</b></font>';
=======
                                                            document.getElementById("error").innerHTML = '<font style="color:red"><b>End date should be greater than Start date. </b></font>';
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
                                                            end_date.focus();
                                                            return false;
                                                        }
                                                    }
                                                }
                                                if (sample_data.checked == false && sname.value == '')
                                                {
<<<<<<< HEAD
                                                    document.getElementById("error").innerHTML = '<font style="color:red"><b>Ju lutemi vendosni Emrin e Shkollës bashkë me Datën e Fillimit dhe të Mbarimit ose zgjidhni të dhënat provë.</b></font>';
=======
                                                    document.getElementById("error").innerHTML = '<font style="color:red"><b>Please Enter School name with Begining and Ending date or check sample data. </b></font>';
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
                                                    sname.focus();
                                                    return false;
                                                }
                                                document.getElementById('calculating').style.display = 'block';
                                                document.getElementById('step_container').style.display = 'none';

                                            }


                                            function blankValidation() {
                                                var school_name = $('sname');
                                                var beg_date = $('beg_date');
                                                var end_date = $('end_date');
                                                var sample_data = $('sample_data');


                                                var bd = beg_date.value.split("/");
                                                var ed = end_date.value.split("/");





                                                if ((school_name.value != '' && beg_date.value != '' && end_date.value != '') || sample_data.checked == true) {
                                                    if (school_name.value != '' || beg_date.value != '' || end_date.value != '') {
                                                        if (!(school_name.value != '' && beg_date.value != '' && end_date.value != '')) {
<<<<<<< HEAD
                                                            document.getElementById("error").innerHTML = '<font style="color:red"><b>Ju lutemi plotësoni të dhënat e kërkuara.</b></font>';
=======
                                                            document.getElementById("error").innerHTML = '<font style="color:red"><b>Please provide required info.</b></font>';
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f

                                                            return false;
                                                        }

                                                    }
                                                    bd[0] = parseInt(bd[0]);
                                                    bd[1] = parseInt(bd[1]);
                                                    bd[2] = parseInt(bd[2]);
                                                    ed[0] = parseInt(ed[0]);
                                                    ed[1] = parseInt(ed[1]);
                                                    ed[2] = parseInt(ed[2]);

                                                    if (bd[2] > ed[2]) {
<<<<<<< HEAD
                                                        document.getElementById("error").innerHTML = '<font style="color:red"><b>Data e mbarimit duhet të jetë pas datës së fillimit.</b></font>';
=======
                                                        document.getElementById("error").innerHTML = '<font style="color:red"><b>End date must be greater than begin date.</b></font>';
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f

                                                        return false;
                                                    } else if (bd[2] < ed[2]) {
                                                        return true;

                                                    }
                                                    else if (bd[2] == ed[2] && bd[0] > ed[0]) {
<<<<<<< HEAD
                                                        document.getElementById("error").innerHTML = '<font style="color:red"><b>Data e mbarimit duhet të jetë pas datës së fillimit.</b></font>';
=======
                                                        document.getElementById("error").innerHTML = '<font style="color:red"><b>End date must be greater than begin date.</b></font>';
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f

                                                        return false;

                                                    } else if (bd[0] < ed[0]) {

                                                        return true;
                                                    }
                                                    else if (bd[0] == ed[0] && bd[1] > ed[1]) {
<<<<<<< HEAD
                                                        document.getElementById("error").innerHTML = '<font style="color:red"><b>Data e mbarimit duhet të jetë pas datës së fillimit.</b></font>';
=======
                                                        document.getElementById("error").innerHTML = '<font style="color:red"><b>End date must be greater than begin date.</b></font>';
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f

                                                        return false;

                                                    } else if (bd[1] <= ed[1]) {
                                                        return true;
                                                    }


                                                    return true;
                                                }
                                                else
                                                {
<<<<<<< HEAD
                                                    document.getElementById("error").innerHTML = '<font style="color:red"><b>Ju lutemi plotësoni të dhënat e kërkuara.</b></font>';
=======
                                                    document.getElementById("error").innerHTML = '<font style="color:red"><b>Please provide required info.</b></font>';
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f

                                                    return false;
                                                }


                                            }

                                            var frmvalidator = new Validator("step3");

                                            frmvalidator.setAddnlValidationFunction("blankValidation");
                                        </script>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <footer>
                    Copyright &copy; Open Solutions for Education, Inc. (<a href="http://www.os4ed.com">OS4ED</a>).
                </footer>
            </div>
        </section>
    </body>
</html>
