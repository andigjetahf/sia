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

// Restore session from URL parameter if session is empty
if (empty($_SESSION['server']) && !empty($_GET['sd'])) {
    $sess_data = json_decode(base64_decode($_GET['sd']), true);
    if ($sess_data) {
        $_SESSION['server'] = $sess_data['server'];
        $_SESSION['username'] = $sess_data['username'];
        $_SESSION['password'] = $sess_data['password'];
        $_SESSION['port'] = $sess_data['port'];
        $_SESSION['host'] = $sess_data['host'];
    }
}

echo '<script type="text/javascript">
var page=parent.location.href.replace(/.*\//,"");
if(page && page!="index.php"){
	window.location.href="index.php";
	}

</script>';
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
        <link rel="stylesheet" type="text/css" href="assets/sweetalert2/css/sweetalert2.css">
        <link rel="stylesheet" href="assets/css/installer.css?v=<?php echo rand(000, 999); ?>" type="text/css" />
        <noscript><META http-equiv=REFRESH content='0;url=../EnableJavascript.php' /></noscript>
        <script src="js/jquery.min.js"></script>
        <script type="text/javascript" src="js/Validator.js"></script>
        <script src="assets/sweetalert2/js/sweetalert2.min.js"></script>
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
                        <h3>Instalimi i SIA - Përzgjedhja e Bazës së të Dhënave</h3>
=======
                            <img src="assets/images/opensis_logo.png" alt="SIA">
                        </div>
                        <h3>SIA Installation - Database Selection</h3>
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
                                    <li class="active">Përzgjedhja e Bazës së të Dhënave</li>
                                    <li>Të Dhënat e Shkollës</li>
                                    <li>Konfigurimi i Administratorit</li>
                                    <li>Gati për Përdorim!</li>
                                </ul>
                                <!--<h4 class="no-margin">Udhëzimet e Instalimit</h4>
                                <p>Instaluesi u lidh me sukses me MySQL.</p>
                                <p>Është praktikë e mirë ta emërtoni bazën e të dhënave &quot;sia&quot; në mënyrë që të identifikohet lehtësisht nëse keni shumë baza të dhënash në të njëjtin server.</p>
                                <p>Kini parasysh se përzgjedhja e bazës së të dhënave merr pak kohë, ndaj ju lutemi bëni durim dhe mos e mbyllni shfletuesin.</p>-->
                            </div>
                            <div class="installation-steps">
                                <h4 class="m-t-0 m-b-5">Sistemi ka nevojë për një bazë të dhënash të re</h4>
                                <p class=" m-b-20 text-muted">(Kjo mund të zgjasë një ose dy minuta për të përfunduar)</p>
                                <div id="error" class="m-b-5"></div>
                                <div id="calculating" class="loading clearfix"><div><i class="fa fa-cog fa-spin fa-lg fa-fw"></i> Po përgatitet Baza e të Dhënave. Ju lutemi prisni...</div></div>
                                <?php if (isset($_REQUEST['err'])) { ?>
                                    <script type='text/javascript'>
                                        swal({
                                            title: 'Ups!',
                                            text: '<?php echo $_REQUEST['err']; ?>',
                                            type: 'error',
                                            confirmButtonText: 'Mbyll'
=======
                                    <li>Choose Package</li>
                                    <li>System Requirements</li>
                                    <li>Database Connection</li>
                                    <li class="active">Database Selection</li>
                                    <li>School Information</li>
                                    <li>Site Admin Account Setup</li>
                                    <li>Ready to Go!</li>
                                </ul>
                                <!--<h4 class="no-margin">Installation Instructions</h4>
                                <p>Installer has successfully connected to MySQL.</p>
                                <p>It is a good practice to name the database &quot;opensis&quot; so that it can be identified easily if you have many databases running in the same server.</p>
                                <p>Remember the Database Selection takes some time, so please be patient and do not close the browser.</p>-->
                            </div>
                            <div class="installation-steps">
                                <h4 class="m-t-0 m-b-5">System needs a new database</h4>
                                <p class=" m-b-20 text-muted">(This could take up to a minute or two to complete)</p>
                                <div id="error" class="m-b-5"></div>
                                <div id="calculating" class="loading clearfix"><div><i class="fa fa-cog fa-spin fa-lg fa-fw"></i> Preparing Database. Please wait...</div></div>
                                <?php if (isset($_REQUEST['err'])) { ?>
                                    <script type='text/javascript'>
                                        swal({
                                            title: 'Oops!',
                                            text: '<?php echo $_REQUEST['err']; ?>',
                                            type: 'error',
                                            confirmButtonText: 'Close'
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
                                        }).then(function (){
                                                history.back();
                                            });
                                    </script>
                                <?php } ?>
                                <form name='step2' id='step2' method='post' onsubmit='return db_validate()' action='Ins2.php'>
                                    <!-- Hidden fields to preserve session data across requests -->
                                    <input type="hidden" name="sess_server" value="<?php echo htmlspecialchars($_SESSION['server'] ?? ''); ?>" />
                                    <input type="hidden" name="sess_username" value="<?php echo htmlspecialchars($_SESSION['username'] ?? ''); ?>" />
                                    <input type="hidden" name="sess_password" value="<?php echo htmlspecialchars($_SESSION['password'] ?? ''); ?>" />
                                    <input type="hidden" name="sess_port" value="<?php echo htmlspecialchars($_SESSION['port'] ?? '3306'); ?>" />
                                    <input type="hidden" name="sess_host" value="<?php echo htmlspecialchars($_SESSION['host'] ?? ''); ?>" />
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
<<<<<<< HEAD
                                                <label class="control-label">Emri i Bazës së të Dhënave</label>
                                                <input type="text" name="db" id="db" size="20" value="sia" class="form-control"  />
=======
                                                <label class="control-label">Database Name</label>
                                                <input type="text" name="db" id="db" size="20" value="opensis" class="form-control"  />
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label class="control-label">&nbsp;</label>
                                                <div class="m-t-0">
<<<<<<< HEAD
                                                    <label class="radio-inline"><input type="radio" name="data_choice" value="purgedb" /> Fshij të dhënat nga baza ekzistuese e të dhënave</label>
                                                    <br>
                                                    <label class="control-label m-0">OSE</label>
                                                    <br>
                                                    <label class="radio-inline"><input type="radio" name="data_choice" value="newdb" /> Krijo bazë të dhënash të re</label>
=======
                                                    <label class="radio-inline"><input type="radio" name="data_choice" value="purgedb" /> Remove data from existing database</label>
                                                    <br>
                                                    <label class="control-label m-0">OR</label>
                                                    <br>
                                                    <label class="radio-inline"><input type="radio" name="data_choice" value="newdb" /> Create new database</label>
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <hr/>
                                    <div class="text-right">
<<<<<<< HEAD
                                        <input type="submit" value="Ruaj & Vazhdo" class="btn btn-success" name="Add_DB" />
=======
                                        <input type="submit" value="Save & Next" class="btn btn-success" name="Add_DB" />
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <footer>
                    Copyright &copy; Open Solutions for Education, Inc. (<a href="http://www.os4ed.com">OS4ED</a>).
                </footer>
            </div>
        </section>
        <script language="JavaScript" type="text/javascript">

            function db_validate()
            {
	        //sessionStorage.setItem("step_2_complete", false);
                var db_name = document.getElementById('db').value;
                if (db_name.trim() != ''){
                    document.getElementById('calculating').style.display = 'block';
                    document.getElementById('step_container').style.display = 'none';
                }
            }
        </script>
    </body>
</html>
