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
		session_start();
		$_SESSION['db']=$_POST["sdb"];
?>
<!DOCTYPE html>
<html lang="sq">
<head>
<meta charset="utf-8" />
<title>Regjistrimi i SIA</title>
<link rel="stylesheet" href="../styles/Installer.css" type="text/css" />
<script type="text/javascript" src="js/Validator.js"></script>
</head>
<body>
<div class="heading">Regjistrimi
  <div style="height:270px; vertical-align:middle">
    <form name='step3' id='step3' method="post" action="Step5.php">
      <table border="0" cellspacing="6" cellpadding="3" align="center" style="margin-top:30px">
        <tr>
          <td align="center"><strong style="font-size:13px;">A dëshironi të regjistroheni?</strong></td>
        </tr>
        <tr>
          <td align="center" valign="top"><table width="245" border="0" cellpadding="4" cellspacing="0" id="table1">
              <tr>
                <td><table border="0" cellspacing="0" cellpadding="0" align="center">
                    <tr>
                      <td><input name="option" type="radio" value="Yes" /></td>
                      <td>Po</td>
                      <td>&nbsp;</td>
                      <td><input name="option" type="radio" value="No" /></td>
                      <td>Jo</td>
                    </tr>
                  </table></td>
              </tr>
			  <tr><td class="clear"></td></tr>
              <tr>
                <td align="center"><input type="submit" value="Vazhdo" class="btn_wide" /></td>
              </tr>
            </table>
            <script language="JavaScript" type="text/javascript">
				
				function CheckYear()
				{
					  var frm = document.forms["step3"];
					  if(frm.syear.value i2000)
						{
							alert('Viti duhet të fillojë nga viti 2000');
							frm.syear.focus();
							return false;
						  }
						  else
						  {
							return true;
						  }
				}
				
					var frmvalidator  = new Validator("step3");
					frmvalidator.addValidation("syear","req","Ju lutemi vendosni Vitin e Sistemit");
					  frmvalidator.addValidation("syear","maxlen=4", "Gjatësia maksimale e vitit është 4 shifra");
					  frmvalidator.addValidation("syear","numeric");
					  frmvalidator.setAddnlValidationFunction("CheckYear");
				</script>
          </td>
        </tr>
      </table>
    </form>
  </div>
</div>
</body>
</html>
