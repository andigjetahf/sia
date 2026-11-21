function formcheck_school_setup_school(this_DET) {
  var this_button_id = this_DET.id;

  var frmvalidator = new Validator("school");

<<<<<<< HEAD
  frmvalidator.addValidation("values[TITLE]", "req", "Ju lutemi vendosni titullin");
  frmvalidator.addValidation(
    "values[TITLE]",
    "maxlen=50",
    "Gjatësia maksimale e titullit është 50 karaktere"
  );
  //
  //frmvalidator.addValidation("values[ADDRESS]", "req", "Ju lutemi vendosni adresën");
  frmvalidator.addValidation(
    "values[ADDRESS]",
    "maxlen=100",
    "Gjatësia maksimale e adresës është 100 karaktere"
  );

  //frmvalidator.addValidation("values[CITY]", "req", "Ju lutemi vendosni qytetin");
  frmvalidator.addValidation(
    "values[CITY]",
    "maxlen=100",
    "Gjatësia maksimale e qytetit është 100 karaktere"
  );

  //frmvalidator.addValidation("values[STATE]", "req", "Ju lutemi vendosni shtetin/rrethin");
  frmvalidator.addValidation(
    "values[STATE]",
    "maxlen=100",
    "Gjatësia maksimale e shtetit është 100 karaktere"
  );

  //frmvalidator.addValidation("values[ZIPCODE]", "req", "Ju lutemi vendosni kodin postar");
  // frmvalidator.addValidation("values[ZIPCODE]", "numeric", "Kodi postar lejon vetëm shifra numerike");

  //frmvalidator.addValidation("values[PHONE]", "req", "Ju lutemi vendosni numrin e telefonit");
  // frmvalidator.addValidation("values[PHONE]", "numeric", "Numri i telefonit lejon vetëm shifra");

  //frmvalidator.addValidation("values[PRINCIPAL]", "req", "Ju lutemi vendosni emrin e drejtorit");
  frmvalidator.addValidation(
    "values[PRINCIPAL]",
    "maxlen=100",
    "Gjatësia maksimale e shtetit është 100 karaktere"
=======
  frmvalidator.addValidation("values[TITLE]", "req", "Please enter the title");
  frmvalidator.addValidation(
    "values[TITLE]",
    "maxlen=50",
    "Max length for title is 50 characters"
  );
  //
  //frmvalidator.addValidation("values[ADDRESS]", "req", "Please enter address");
  frmvalidator.addValidation(
    "values[ADDRESS]",
    "maxlen=100",
    "Max length for address is 100 characters"
  );

  //frmvalidator.addValidation("values[CITY]", "req", "Please enter city name");
  frmvalidator.addValidation(
    "values[CITY]",
    "maxlen=100",
    "Max length for city is 100 characters"
  );

  //frmvalidator.addValidation("values[STATE]", "req", "Please enter state name");
  frmvalidator.addValidation(
    "values[STATE]",
    "maxlen=100",
    "Max length for state is 100 characters"
  );

  //frmvalidator.addValidation("values[ZIPCODE]", "req", "Please enter zipcode");
  // frmvalidator.addValidation("values[ZIPCODE]", "numeric", "Zip allows only numeric value");

  //frmvalidator.addValidation("values[PHONE]", "req", "Please enter phone Number");
  // frmvalidator.addValidation("values[PHONE]", "numeric", "Phone number allows number only");

  //frmvalidator.addValidation("values[PRINCIPAL]", "req", "Please enter principal name");
  frmvalidator.addValidation(
    "values[PRINCIPAL]",
    "maxlen=100",
    "Max length for state is 100 characters"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
  );

  frmvalidator.addValidation(
    "values[REPORTING_GP_SCALE]",
    "req",
<<<<<<< HEAD
    "Ju lutemi vendosni vlerën e shkallës së notimit"
=======
    "Please enter grading scale value"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
  );
  frmvalidator.addValidation(
    "values[REPORTING_GP_SCALE]",
    "dec",
<<<<<<< HEAD
    "Ju lutemi vendosni vetëm vlerë dhjetore"
  );

  //frmvalidator.addValidation("values[E_MAIL]", "email", "Ju lutemi vendosni email-in në formatin e duhur");
=======
    "Please enter decimal value only"
  );

  //frmvalidator.addValidation("values[E_MAIL]", "email", "Please enter email in proper format");
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
  

  var school_custom_req_ids = document.getElementById("custom_sch_field_ids").value;
  console.log(school_custom_req_ids);
  if (school_custom_req_ids != "") {
    var req_field_ids = school_custom_req_ids.split(","); 
    var school_custom_req_titles = document.getElementById("custom_sch_field_titles").value;
    var req_field_titles = school_custom_req_titles.split(",");
    for (var rt_i = 0; rt_i < req_field_ids.length ; rt_i++) {
      frmvalidator.addValidation(
        req_field_ids[rt_i],
        "req",
<<<<<<< HEAD
        "Ju lutemi vendosni " + req_field_titles[rt_i]
=======
        "Please enter the " + req_field_titles[rt_i]
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
      );
    }
  }


  var school_id = document.getElementById("h1").value;

  if (school_id != "") {
    frmvalidator.addValidation(
      "inputvalues[TITLE]",
      "req",
<<<<<<< HEAD
      "Ju lutemi vendosni titullin"
=======
      "Please enter the title"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );
    frmvalidator.addValidation(
      "inputvalues[TITLE]",
      "maxlen=50",
<<<<<<< HEAD
      "Gjatësia maksimale e titullit është 50 karaktere"
=======
      "Max length for title is 50 characters"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );

    frmvalidator.addValidation(
      "inputvalues[ADDRESS]",
      "req",
<<<<<<< HEAD
      "Ju lutemi vendosni adresën"
=======
      "Please enter address"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );
    frmvalidator.addValidation(
      "inputvalues[ADDRESS]",
      "maxlen=100",
<<<<<<< HEAD
      "Gjatësia maksimale e adresës është 100 karaktere"
=======
      "Max length for address is 100 characters"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );

    frmvalidator.addValidation(
      "inputvalues[CITY]",
      "req",
<<<<<<< HEAD
      "Ju lutemi vendosni qytetin"
=======
      "Please enter city name"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );
    frmvalidator.addValidation(
      "inputvalues[CITY]",
      "maxlen=100",
<<<<<<< HEAD
      "Gjatësia maksimale e qytetit është 100 karaktere"
=======
      "Max length for city is 100 characters"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );

    frmvalidator.addValidation(
      "inputvalues[STATE]",
      "req",
<<<<<<< HEAD
      "Ju lutemi vendosni shtetin/rrethin"
=======
      "Please enter state name"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );
    frmvalidator.addValidation(
      "inputvalues[STATE]",
      "maxlen=100",
<<<<<<< HEAD
      "Gjatësia maksimale e shtetit është 100 karaktere"
=======
      "Max length for state is 100 characters"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );

    frmvalidator.addValidation(
      "inputvalues[ZIPCODE]",
      "req",
<<<<<<< HEAD
      "Ju lutemi vendosni kodin postar"
    );
    // frmvalidator.addValidation("inputvalues[ZIPCODE]", "numeric", "Kodi postar lejon vetëm shifra numerike");
=======
      "Please enter zipcode "
    );
    // frmvalidator.addValidation("inputvalues[ZIPCODE]", "numeric", "Zip allows only numeric value");
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f

    frmvalidator.addValidation(
      "inputvalues[PHONE]",
      "req",
<<<<<<< HEAD
      "Ju lutemi vendosni numrin e telefonit"
    );
    //frmvalidator.addValidation("inputvalues[PHONE]", "numeric", "Numri i telefonit lejon vetëm shifra");
=======
      "Please enter phone number"
    );
    //frmvalidator.addValidation("inputvalues[PHONE]", "numeric", "Phone number allows number only");
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f

    frmvalidator.addValidation(
      "inputvalues[PRINCIPAL]",
      "req",
<<<<<<< HEAD
      "Ju lutemi vendosni emrin e drejtorit"
=======
      "Please enter principal name"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );
    frmvalidator.addValidation(
      "values[PRINCIPAL]",
      "maxlen=100",
<<<<<<< HEAD
      "Gjatësia maksimale e shtetit është 100 karaktere"
=======
      "Max length for state is 100 characters"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );

    frmvalidator.addValidation(
      "inputvalues[REPORTING_GP_SCALE]",
      "req",
<<<<<<< HEAD
      "Ju lutemi vendosni vlerën e shkallës së notimit"
=======
      "Please enter grading scale value"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );
    frmvalidator.addValidation(
      "inputvalues[REPORTING_GP_SCALE]",
      "dec",
<<<<<<< HEAD
      "Ju lutemi vendosni vetëm vlerë dhjetore"
    );

    //frmvalidator.addValidation("inputvalues[E_MAIL]", "email", "Ju lutemi vendosni email-in në formatin e duhur");
=======
      "Please enter decimal value only"
    );

    //frmvalidator.addValidation("inputvalues[E_MAIL]", "email", "Please enter email in proper format");
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
  }
}

function formcheck_history_mp() {
  var frmvalidator = new Validator("F2");

  frmvalidator.addValidation(
    "values[new][TITLE]",
    "maxlen=50",
<<<<<<< HEAD
    "Gjatësia maksimale e titullit është 50 karaktere"
=======
    "Max length for title is 50 characters"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
  );

  frmvalidator.addValidation(
    "values[new][SORT_ORDER]",
    "num",
<<<<<<< HEAD
    "Renditja lejon vetëm vlerë numerike"
=======
    "Sort order allows only numeric value"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
  );
  frmvalidator.addValidation(
    "values[new][SORT_ORDER]",
    "maxlen=5",
<<<<<<< HEAD
    "Gjatësia maksimale e renditjes është 5 shifra"
=======
    "Max length for sort order is 5 digits"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
  );

  frmvalidator.setAddnlValidationFunction("ValidateDate_Portal_Notes");

  var portal_id = document.getElementById("h1").value;
  if (portal_id != "") {
    var id = portal_id;
    var ar = id.split(",");

    for (i = 0; i <= ar.length - 1; i++) {
      if (document.getElementById("inputvalues[" + ar[i] + "][TITLE]")) {
        if (
          document.getElementById("inputvalues[" + ar[i] + "][TITLE]").value ==
          ""
        ) {
          frmvalidator.addValidation(
            "values[" + ar[i] + "][TITLE]",
            "req",
<<<<<<< HEAD
            "Titulli nuk mund të jetë bosh"
=======
            "Title cannot be blank"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
          );
        }
      }

      frmvalidator.addValidation(
        "values[" + ar[i] + "][TITLE]",
        "maxlen=50",
<<<<<<< HEAD
        "Gjatësia maksimale e titullit është 50 karaktere"
=======
        "Max length for title is 50 characters"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
      );

      frmvalidator.addValidation(
        "values[" + ar[i] + "][SORT_ORDER]",
        "num",
<<<<<<< HEAD
        "Renditja lejon vetëm vlerë numerike"
=======
        "Sort order allows only numeric value"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
      );
      frmvalidator.addValidation(
        "values[" + ar[i] + "][SORT_ORDER]",
        "maxlen=5",
<<<<<<< HEAD
        "Gjatësia maksimale e renditjes është 5 shifra"
=======
        "Max length for sort order is 5 digits"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
      );
    }
  }
}
function formcheck_school_setup_portalnotes(this_DET) {
  var this_button_id = this_DET.id;

  var frmvalidator = new Validator("F2", this_button_id);

  frmvalidator.addValidation(
    "values[new][TITLE]",
    "maxlen=50",
<<<<<<< HEAD
    "Gjatësia maksimale e titullit është 50 karaktere"
=======
    "Max length for title is 50 characters"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
  );

  frmvalidator.addValidation(
    "values[new][SORT_ORDER]",
    "num",
<<<<<<< HEAD
    "Renditja lejon vetëm vlerë numerike"
=======
    "Sort order allows only numeric value"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
  );
  frmvalidator.addValidation(
    "values[new][SORT_ORDER]",
    "maxlen=5",
<<<<<<< HEAD
    "Gjatësia maksimale e renditjes është 5 shifra"
=======
    "Max length for sort order is 5 digits"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
  );

  frmvalidator.setAddnlValidationFunction("ValidateDate_Portal_Notes");

  var portal_id = document.getElementById("h1").value;
  if (portal_id != "") {
    var id = portal_id;
    var ar = id.split(",");

    for (i = 0; i <= ar.length - 1; i++) {
      if (document.getElementById("inputvalues[" + ar[i] + "][TITLE]")) {
        if (
          document.getElementById("inputvalues[" + ar[i] + "][TITLE]").value ==
          ""
        ) {
          frmvalidator.addValidation(
            "values[" + ar[i] + "][TITLE]",
            "req",
<<<<<<< HEAD
            "Titulli nuk mund të jetë bosh"
=======
            "Title cannot be blank"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
          );
        }
      }

      frmvalidator.addValidation(
        "values[" + ar[i] + "][TITLE]",
        "maxlen=50",
<<<<<<< HEAD
        "Gjatësia maksimale e titullit është 50 karaktere"
=======
        "Max length for title is 50 characters"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
      );

      frmvalidator.addValidation(
        "values[" + ar[i] + "][SORT_ORDER]",
        "num",
<<<<<<< HEAD
        "Renditja lejon vetëm vlerë numerike"
=======
        "Sort order allows only numeric value"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
      );
      frmvalidator.addValidation(
        "values[" + ar[i] + "][SORT_ORDER]",
        "maxlen=5",
<<<<<<< HEAD
        "Gjatësia maksimale e renditjes është 5 shifra"
=======
        "Max length for sort order is 5 digits"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
      );
    }
  }
}

function formcheck_student_advnc_srch(this_DET) {
  self_disable(this_DET);
  var this_button_id = this_DET.id;

  var day_to = $("day_to_birthdate");
  var month_to = $("month_to_birthdate");
  var day_from = $("day_from_birthdate");
  var month_from = $("month_from_birthdate");

  if (
    !day_to.value &&
    !month_to.value &&
    !day_from.value &&
    !month_from.value
  ) {
    // setTimeout(function () {
    //   document.getElementById(this_button_id).disabled = true;
    // }, 50);

    return true;
  }
  if (
    !day_to.value ||
    !month_to.value ||
    !day_from.value ||
    !month_from.value
  ) {
    strError =
<<<<<<< HEAD
      "Ju lutemi vendosni datën e lindjes: ditën deri, muajin deri, ditën nga, muajin nga.";
=======
      "Please provide birthday to day, to month, from day, from month.";
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    document.getElementById("divErr").innerHTML =
      '<div class="alert alert-danger no-border"><i class="fa fa-info-circle"></i> ' +
      strError +
      "</div>";

    document.getElementById(this_button_id).disabled = false;

    return false;
  }
<<<<<<< HEAD
  strError = "Data e mbarimit duhet të jetë e barabartë ose pas datës së fillimit.";
=======
  strError = "To date must be equal to or greater than from date.";
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f

  if (month_from.value > month_to.value) {
    document.getElementById("divErr").innerHTML =
      '<div class="alert alert-danger no-border"><i class="fa fa-info-circle"></i> ' +
      strError +
      "</div>";

    document.getElementById(this_button_id).disabled = false;

    return false;
  } else if (
    month_from.value == month_to.value &&
    day_from.value > day_to.value
  ) {
    document.getElementById("divErr").innerHTML =
      '<div class="alert alert-danger no-border"><i class="fa fa-info-circle"></i> ' +
      strError +
      "</div>";

    document.getElementById(this_button_id).disabled = false;

    return false;
  }

  // setTimeout(function () {
  //   document.getElementById(this_button_id).disabled = true;
  // }, 50);

  return true;
}

function ValidateDate_Portal_Notes() {
  var sm, sd, sy, em, ed, ey, psm, psd, psy, pem, ped, pey;
  var frm = document.forms["F2"];
  var elem = frm.elements;
  for (var i = 0; i < elem.length; i++) {
    if (elem[i].name == "month_values[new][START_DATE]") {
      sm = elem[i];
    }

    if (elem[i].name == "day_values[new][START_DATE]") {
      sd = elem[i];
    }

    if (elem[i].name == "year_values[new][START_DATE]") {
      sy = elem[i];
    }

    if (elem[i].name == "month_values[new][END_DATE]") {
      em = elem[i];
    }

    if (elem[i].name == "day_values[new][END_DATE]") {
      ed = elem[i];
    }

    if (elem[i].name == "year_values[new][END_DATE]") {
      ey = elem[i];
    }

    // Grade posting start date elements
    if (elem[i].name == "month_values[new][POST_START_DATE]") {
      psm = elem[i];
    }

    if (elem[i].name == "day_values[new][POST_START_DATE]") {
      psd = elem[i];
    }

    if (elem[i].name == "year_values[new][POST_START_DATE]") {
      psy = elem[i];
    }

    // Grade posting end date elements
    if (elem[i].name == "month_values[new][POST_END_DATE]") {
      pem = elem[i];
    }

    if (elem[i].name == "day_values[new][POST_END_DATE]") {
      ped = elem[i];
    }

    if (elem[i].name == "year_values[new][POST_END_DATE]") {
      pey = elem[i];
    }
  }

  try {
    if (false == CheckDate(sm, sd, sy, em, ed, ey)) {
      if (em && typeof em.focus === "function") {
        em.focus();
      }
      return false;
    }
  } catch (err) {}

  try {
    if (psm && psd && psy && false == isDate(psm, psd, psy)) {
<<<<<<< HEAD
      alert("Ju lutemi vendosni datën e fillimit të hedhjes së notave");
=======
      alert("Please enter the grade posting start date");
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
      if (typeof psm.focus === "function") {
        psm.focus();
      }
      return false;
    }
  } catch (err) {}

  try {
    if (pem && ped && pey && true == isDate(pem, ped, pey)) {
      if (psm && psd && psy && false == CheckDate(psm, psd, psy, pem, ped, pey)) {
        if (pem && typeof pem.focus === "function") {
          pem.focus();
        }
        return false;
      }
    }
  } catch (err) {}

  return true;
}

function formcheck_school_setup_marking(this_DET) {
  var this_button_id = this_DET.id;

  var frmvalidator = new Validator("marking_period", this_button_id);

  frmvalidator.addValidation(
    "tables[new][TITLE]",
    "req",
<<<<<<< HEAD
    "Ju lutemi vendosni titullin"
=======
    "Please enter the title"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
  );
  frmvalidator.addValidation(
    "tables[new][TITLE]",
    "maxlen=50",
<<<<<<< HEAD
    "Gjatësia maksimale e titullit është 50 karaktere"
=======
    "Max length for title is 50 characters"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
  );

  frmvalidator.addValidation(
    "tables[new][SHORT_NAME]",
    "req",
<<<<<<< HEAD
    "Ju lutemi vendosni emrin e shkurtër"
=======
    "Please enter the short name"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
  );
  frmvalidator.addValidation(
    "tables[new][SHORT_NAME]",
    "maxlen=10",
<<<<<<< HEAD
    "Gjatësia maksimale e emrit të shkurtër është 10 karaktere"
=======
    "Max length for short name is 10 characters"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
  );

  frmvalidator.addValidation(
    "tables[new][SORT_ORDER]",
    "maxlen=5",
<<<<<<< HEAD
    "Gjatësia maksimale e renditjes është 5 shifra"
=======
    "Max length for sort order is 5 digits"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
  );
  frmvalidator.addValidation(
    "tables[new][SORT_ORDER]",
    "num",
<<<<<<< HEAD
    "Vendosni vetëm vlerë numerike"
=======
    "Enter only numeric value"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
  );

  frmvalidator.setAddnlValidationFunction("ValidateDate_Marking_Periods");
}

function ValidateDate_Marking_Periods() {
  var sm = "";
  var sd = "";
  var sy = "";
  var em = "";
  var ed = "";
  var ey = "";
  var psm = "";
  var psd = "";
  var psy = "";
  var pem = "";
  var ped = "";
  var pey = "";
  var grd = "";
  $("#marking_period :input").each(function () {
    if ($(this).attr("name") == "month_tables[new][START_DATE]") {
      sm = $(this);
    }
    if ($(this).attr("name") == "day_tables[new][START_DATE]") {
      sd = $(this);
    }
    if ($(this).attr("name") == "year_tables[new][START_DATE]") {
      sy = $(this);
    }
    if ($(this).attr("name") == "month_tables[new][END_DATE]") {
      em = $(this);
    }
    if ($(this).attr("name") == "day_tables[new][END_DATE]") {
      ed = $(this);
    }
    if ($(this).attr("name") == "year_tables[new][END_DATE]") {
      ey = $(this);
    }
    if ($(this).attr("name") == "month_tables[new][POST_START_DATE]") {
      psm = $(this);
    }
    if ($(this).attr("name") == "day_tables[new][POST_START_DATE]") {
      psd = $(this);
    }
    if ($(this).attr("name") == "year_tables[new][POST_START_DATE]") {
      psy = $(this);
    }
    if ($(this).attr("name") == "month_tables[new][POST_END_DATE]") {
      pem = $(this);
    }
    if ($(this).attr("name") == "day_tables[new][POST_END_DATE]") {
      ped = $(this);
    }
    if ($(this).attr("name") == "year_tables[new][POST_END_DATE]") {
      pey = $(this);
    }
    if ($(this).attr("name") == "tables[new][DOES_GRADES]") {
      grd = $(this);
    }
  });

  //    var frm = document.forms["marking_period"];
  //    var elem = frm.elements;
  //    for (var i = 0; i < elem.length; i++)
  //    {
  //
  //        if (elem[i].name == "month_tables[new][START_DATE]")
  //        {
  //            sm = elem[i];
  //        }
  //        if (elem[i].name == "day_tables[new][START_DATE]")
  //        {
  //            sd = elem[i];
  //        }
  //        if (elem[i].name == "year_tables[new][START_DATE]")
  //        {
  //            sy = elem[i];
  //        }
  //
  //
  //        if (elem[i].name == "month_tables[new][END_DATE]")
  //        {
  //            em = elem[i];
  //        }
  //        if (elem[i].name == "day_tables[new][END_DATE]")
  //        {
  //            ed = elem[i];
  //        }
  //        if (elem[i].name == "year_tables[new][END_DATE]")
  //        {
  //            ey = elem[i];
  //        }
  //
  //
  //        if (elem[i].name == "month_tables[new][POST_START_DATE]")
  //        {
  //            psm = elem[i];
  //        }
  //        if (elem[i].name == "day_tables[new][POST_START_DATE]")
  //        {
  //            psd = elem[i];
  //        }
  //        if (elem[i].name == "year_tables[new][POST_START_DATE]")
  //        {
  //            psy = elem[i];
  //        }
  //
  //
  //        if (elem[i].name == "month_tables[new][POST_END_DATE]")
  //        {
  //            pem = elem[i];
  //        }
  //        if (elem[i].name == "day_tables[new][POST_END_DATE]")
  //        {
  //            ped = elem[i];
  //        }
  //        if (elem[i].name == "year_tables[new][POST_END_DATE]")
  //        {
  //            pey = elem[i];
  //        }
  //
  //        if (elem[i].name == "tables[new][DOES_GRADES]")
  //        {
  //            grd = elem[i];
  //        }
  //
  //    }

  try {
    if (false == isDate(sm, sd, sy)) {
      document.getElementById("divErr").innerHTML =
<<<<<<< HEAD
        '<div class="alert alert-danger no-border"><i class="fa fa-info-circle"></i> Ju lutemi vendosni datën e fillimit.</div>';
=======
        '<div class="alert alert-danger no-border"><i class="fa fa-info-circle"></i> Please enter the start date.</div>';
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
      //sm.focus();
      return false;
    }
  } catch (err) {}
  try {
    if (false == isDate(em, ed, ey)) {
      document.getElementById("divErr").innerHTML =
<<<<<<< HEAD
        '<div class="alert alert-danger no-border"><i class="fa fa-info-circle"></i> Ju lutemi vendosni datën e mbarimit.</div>';
=======
        '<div class="alert alert-danger no-border"><i class="fa fa-info-circle"></i> Please enter the end date.</div>';
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
      //em.focus();
      return false;
    }
  } catch (err) {}
  try {
    if (false == CheckDate(sm, sd, sy, em, ed, ey)) {
      //em.focus();
      return false;
    }
  } catch (err) {}

  if (grd.prop("checked") == true) {
    try {
      if (false == isDate(psm, psd, psy)) {
        document.getElementById("divErr").innerHTML =
<<<<<<< HEAD
          '<div class="alert alert-danger no-border"><i class="fa fa-info-circle"></i> Ju lutemi vendosni datën e fillimit të hedhjes së notave.</div>';
=======
          '<div class="alert alert-danger no-border"><i class="fa fa-info-circle"></i> Please enter the grade posting start date.</div>';
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
        //psm.focus();
        return false;
      }
    } catch (err) {}

    try {
      if (true == isDate(pem, ped, pey)) {
        if (false == CheckDate(psm, psd, psy, pem, ped, pey)) {
          //pem.focus();
          document.getElementById("divErr").innerHTML =
<<<<<<< HEAD
            '<div class="alert alert-danger no-border"><i class="fa fa-info-circle"></i> Ju lutemi vendosni datën e mbarimit të hedhjes së notave.</div>';
=======
            '<div class="alert alert-danger no-border"><i class="fa fa-info-circle"></i> Please enter the grade posting end date.</div>';
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
          return false;
        }
      }
    } catch (err) {}

    try {
      if (false == CheckDateMar(sm, sd, sy, psm, psd, psy)) {
        //psm.focus();
        return false;
      }
    } catch (err) {}
  }

  return true;
}

function formcheck_school_setup_copyschool(this_DET) {
  var this_button_id = this_DET.id;

  var frmvalidator = new Validator("prompt_form", this_button_id);

  frmvalidator.addValidation(
    "title",
    "req_copy_school",
<<<<<<< HEAD
    "Ju lutemi vendosni emrin e shkollës së re"
=======
    "Please enter the new school's title"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
  );
  frmvalidator.addValidation(
    "title",
    "maxlen=100",
<<<<<<< HEAD
    "Gjatësia maksimale e titullit është 100 karaktere"
=======
    "Max length for title is 100 characters"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
  );
}

function formcheck_school_specific_standards() {
  var frmvalidator = new Validator("sss");
  var count = document.getElementById("count_standard").value.trim();
  for (var i = 1; i <= count; i++) {
    frmvalidator.addValidation(
      "values[" + i + "][STANDARD_REF_NO]",
      "req",
<<<<<<< HEAD
      "Ju lutemi vendosni numrin e referencës"
=======
      "Please enter Ref Number"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );
    frmvalidator.addValidation(
      "values[" + i + "][STANDARD_REF_NO]",
      "maxlen=100",
<<<<<<< HEAD
      "Gjatësia maksimale e numrit të referencës është 100 karaktere"
=======
      "Max length for Ref Number is 100 characters"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );
    frmvalidator.addValidation(
      "values[" + i + "][DOMAIN]",
      "req",
<<<<<<< HEAD
      "Ju lutemi vendosni fushën"
=======
      "Please enter domain"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );
    frmvalidator.addValidation(
      "values[" + i + "][GRADE]",
      "req",
<<<<<<< HEAD
      "Ju lutemi zgjidhni nivelin e klasës"
=======
      "Please select the grade"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );
    frmvalidator.addValidation(
      "values[" + i + "][DOMAIN]",
      "maxlen=100",
<<<<<<< HEAD
      "Gjatësia maksimale e fushës është 100 karaktere"
=======
      "Max length for Domain is 100 characters"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );
    frmvalidator.addValidation(
      "values[" + i + "][TOPIC]",
      "maxlen=100",
<<<<<<< HEAD
      "Gjatësia maksimale e temës është 100 karaktere"
=======
      "Max length for Topic is 100 characters"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );
  }
  var topic = document.getElementById("values[new][TOPIC]").value.trim();

  var details = document
    .getElementById("values[new][STANDARD_DETAILS]")
    .value.trim();
  if (topic != "" || details != "") {
    frmvalidator.addValidation(
      "values[new][STANDARD_REF_NO]",
      "req",
<<<<<<< HEAD
      "Ju lutemi vendosni numrin e referencës"
=======
      "Please enter Ref Number"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );
    frmvalidator.addValidation(
      "values[new][STANDARD_REF_NO]",
      "maxlen=100",
<<<<<<< HEAD
      "Gjatësia maksimale e numrit të referencës është 100 karaktere"
=======
      "Max length for Ref Number is 100 characters"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );
    frmvalidator.addValidation(
      "values[new][GRADE]",
      "req",
<<<<<<< HEAD
      "Ju lutemi zgjidhni nivelin e klasës"
=======
      "Please select the grade"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );
    frmvalidator.addValidation(
      "values[new][DOMAIN]",
      "req",
<<<<<<< HEAD
      "Ju lutemi vendosni fushën"
=======
      "Please enter domain"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );
    frmvalidator.addValidation(
      "values[new][DOMAIN]",
      "maxlen=100",
<<<<<<< HEAD
      "Gjatësia maksimale e fushës është 100 karaktere"
=======
      "Max length for Domain is 100 characters"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );
    frmvalidator.addValidation(
      "values[new][TOPIC]",
      "maxlen=100",
<<<<<<< HEAD
      "Gjatësia maksimale e temës është 100 karaktere"
=======
      "Max length for Topic is 100 characters"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );
  }
}

function formcheck_school_setup_calender(this_DET) {
  var this_button_id = this_DET.id;

  var frmvalidator = new Validator("prompt_form", this_button_id);

<<<<<<< HEAD
  frmvalidator.addValidation("title", "req", "Ju lutemi vendosni titullin");
  frmvalidator.addValidation(
    "title",
    "maxlen=100",
    "Gjatësia maksimale e titullit është 100 karaktere"
=======
  frmvalidator.addValidation("title", "req", "Please enter the title");
  frmvalidator.addValidation(
    "title",
    "maxlen=100",
    "Max length for title is 100"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
  );
  frmvalidator.setAddnlValidationFunction("ValidateDate_SchoolSetup_calender");
}

function ValidateDate_SchoolSetup_calender() {
  var frm = document.forms["prompt_form"];
  var elem = frm.elements;

  for (var i = 0; i < elem.length; i++) {
    if (elem[i].name == "month__min") {
      sm = elem[i];
    }
    if (elem[i].name == "day__min") {
      sd = elem[i];
    }
    if (elem[i].name == "year__min") {
      sy = elem[i];
    }

    if (elem[i].name == "month__max") {
      em = elem[i];
    }
    if (elem[i].name == "day__max") {
      ed = elem[i];
    }
    if (elem[i].name == "year__max") {
      ey = elem[i];
    }
  }

  if (sm.value) {
    switch (sm.value) {
      case "JAN":
        s_m = "1";
        break;
      case "FEB":
        s_m = "2";
        break;
      case "MAR":
        s_m = "3";
        break;
      case "APR":
        s_m = "4";
        break;
      case "MAY":
        s_m = "5";
        break;
      case "JUN":
        s_m = "6";
        break;
      case "JUL":
        s_m = "7";
        break;
      case "AUG":
        s_m = "8";
        break;
      case "SEP":
        s_m = "9";
        break;
      case "OCT":
        s_m = "10";
        break;
      case "NOV":
        s_m = "11";
        break;
      case "DEC":
        s_m = "12";
        break;
      default:
        s_m = sm.value;
        break;
    }

    try {
      var s = s_m + "/" + sd.value + "/" + sy.value;

      if (false == validatedate(s)) {
        document.getElementById("divErr").innerHTML =
          "<div class='alert alert-danger no-border'>" +
<<<<<<< HEAD
          "Ju lutemi vendosni datën e saktë të fillimit." +
=======
          "Please enter correct Start Date." +
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
          "</div>";
        $("#date_1").focus();
        return false;
      }
    } catch (err) {}
  } else s = "no";

  if (em.value) {
    switch (em.value) {
      case "JAN":
        e_m = "1";
        break;
      case "FEB":
        e_m = "2";
        break;
      case "MAR":
        e_m = "3";
        break;
      case "APR":
        e_m = "4";
        break;
      case "MAY":
        e_m = "5";
        break;
      case "JUN":
        e_m = "6";
        break;
      case "JUL":
        e_m = "7";
        break;
      case "AUG":
        e_m = "8";
        break;
      case "SEP":
        e_m = "9";
        break;
      case "OCT":
        e_m = "10";
        break;
      case "NOV":
        e_m = "11";
        break;
      case "DEC":
        e_m = "12";
        break;
      default:
        e_m = em.value;
        break;
    }

    try {
      var e = e_m + "/" + ed.value + "/" + ey.value;
      if (false == validatedate(e)) {
        document.getElementById("divErr").innerHTML =
          "<div class='alert alert-danger no-border'>" +
<<<<<<< HEAD
          "Ju lutemi vendosni datën e saktë të mbarimit." +
=======
          "Please enter correct End Date." +
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
          "</div>";
        $("#date_2").focus();
        return false;
      }
    } catch (err) {}
  } else e = "no";

  if (s != "no" && e != "no") {
    var starDate = new Date(s);
    var endDate = new Date(e);

    if (starDate != "" && endDate != "" && (starDate.getTime() > endDate.getTime() || starDate.getTime() === endDate.getTime())) {
      document.getElementById("divErr").innerHTML =
        "<div class='alert alert-danger no-border'>" +
<<<<<<< HEAD
        "Data e fillimit nuk mund të jetë pas ose e barabartë me datën e mbarimit." +
=======
        "Start Date cannot be greater than or equal to the End Date." +
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
        "</div>";
      return false;
    } else {
      document.getElementById("divErr").innerHTML = '';
      return true;
    }
  } else {
    if (s == "no" && e == "no") {
      document.getElementById("divErr").innerHTML =
        "<div class='alert alert-danger no-border'>" +
<<<<<<< HEAD
        "Data e fillimit dhe data e mbarimit nuk mund të jenë bosh." +
=======
        "Start Date and End Date cannot be blank." +
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
        "</div>";
      $("#date_1").focus();
    } else {
      if (s == "no") {
        document.getElementById("divErr").innerHTML =
<<<<<<< HEAD
          "<div class='alert alert-danger no-border'>" + "Data e fillimit nuk mund të jetë bosh." + "</div>";
=======
          "<div class='alert alert-danger no-border'>" + "Start Date cannot be blank." + "</div>";
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
        $("#date_1").focus();
      }
      if (e == "no") {
        document.getElementById("divErr").innerHTML =
<<<<<<< HEAD
          "<div class='alert alert-danger no-border'>" + "Data e mbarimit nuk mund të jetë bosh." + "</div>";
=======
          "<div class='alert alert-danger no-border'>" + "End Date cannot be blank." + "</div>";
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
        $("#date_2").focus();
      }
    }

    return false;
  }
}
function validatedate(inputText) {
  var dateformat = /^(0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])[\/\-]\d{4}$/;
  // Match the date format through regular expression
  if (inputText.match(dateformat)) {
    //Test which seperator is used '/' or '-'
    var opera1 = inputText.split("/");
    var opera2 = inputText.split("-");
    lopera1 = opera1.length;
    lopera2 = opera2.length;
    // Extract the string into month, date and year
    if (lopera1 > 1) {
      var pdate = inputText.split("/");
    } else if (lopera2 > 1) {
      var pdate = inputText.split("-");
    }
    var mm = parseInt(pdate[0]);
    var dd = parseInt(pdate[1]);
    var yy = parseInt(pdate[2]);
    // Create list of days of a month [assume there is no leap year by default]
    var ListofDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (mm == 1 || mm > 2) {
      if (dd > ListofDays[mm - 1]) {
        return false;
      }
    }
    if (mm == 2) {
      var lyear = false;
      if ((!(yy % 4) && yy % 100) || !(yy % 400)) {
        lyear = true;
      }
      if (lyear == false && dd >= 29) {
        return false;
      }
      if (lyear == true && dd > 29) {
        return false;
      }
    }
  } else {
    return false;
  }
}

function formcheck_staff_staff(staff_school_chkbox_id) {
  var frmvalidator = new Validator("staff");
  frmvalidator.addValidation(
    "staff[TITLE]",
    "req",
<<<<<<< HEAD
    "Ju lutemi zgjidhni titullin e nderit"
=======
    "Please enter the Salutation"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
  );
  frmvalidator.addValidation(
    "staff[FIRST_NAME]",
    "req",
<<<<<<< HEAD
    "Ju lutemi vendosni emrin"
=======
    "Please enter the First Name"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
  );
  frmvalidator.addValidation(
    "staff[LAST_NAME]",
    "req",
<<<<<<< HEAD
    "Ju lutemi vendosni mbiemrin"
  );
  frmvalidator.addValidation("staff[GENDER]", "req", "Ju lutemi zgjidhni gjininë");
=======
    "Please enter the Last Name"
  );
  frmvalidator.addValidation("staff[GENDER]", "req", "Please select Gender");
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
  frmvalidator.setAddnlValidationFunction("ValidateDate_Staff");
  frmvalidator.addValidation(
    "staff[ETHNICITY_ID]",
    "req",
<<<<<<< HEAD
    "Ju lutemi zgjidhni etninë"
=======
    "Please select Ethnicity"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
  );
  frmvalidator.addValidation(
    "staff[PRIMARY_LANGUAGE_ID]",
    "req",
<<<<<<< HEAD
    "Ju lutemi zgjidhni gjuhën amtare"
=======
    "Please select Primary language"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
  );
  frmvalidator.addValidation(
    "staff[SECOND_LANGUAGE_ID]",
    "req",
<<<<<<< HEAD
    "Ju lutemi zgjidhni gjuhën dytësore"
=======
    "Please select Secondary language"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
  );

  frmvalidator.addValidation(
    "values[ADDRESS][STAFF_ADDRESS1_PRIMARY]",
    "req",
<<<<<<< HEAD
    "Ju lutemi vendosni adresën e rrugës"
=======
    "Please enter Street address 1"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
  );
  frmvalidator.addValidation(
    "values[ADDRESS][STAFF_CITY_PRIMARY]",
    "req",
<<<<<<< HEAD
    "Ju lutemi vendosni qytetin"
=======
    "Please enter City"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
  );
  frmvalidator.addValidation(
    "values[ADDRESS][STAFF_STATE_PRIMARY]",
    "req",
<<<<<<< HEAD
    "Ju lutemi vendosni shtetin/rrethin"
=======
    "Please enter State"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
  );
  frmvalidator.addValidation(
    "values[ADDRESS][STAFF_ZIP_PRIMARY]",
    "req",
<<<<<<< HEAD
    "Ju lutemi vendosni kodin postar"
=======
    "Please enter Street Zip"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
  );

  frmvalidator.addValidation(
    "values[ADDRESS][STAFF_ZIP_PRIMARY]",
    "numeric",
<<<<<<< HEAD
    "Kodi postar lejon vetëm shifra numerike"
=======
    "Zip allows only numeric value"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
  );

  frmvalidator.addValidation(
    "values[CONTACT][STAFF_HOME_PHONE]",
    "req",
<<<<<<< HEAD
    "Ju lutemi vendosni numrin e telefonit të shtëpisë"
=======
    "Please enter Home Phone"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
  );
  frmvalidator.addValidation(
    "values[CONTACT][STAFF_WORK_PHONE]",
    "req",
<<<<<<< HEAD
    "Ju lutemi vendosni numrin e telefonit të zyrës"
=======
    "Please enter Office Phone"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
  );
  frmvalidator.addValidation(
    "values[CONTACT][STAFF_WORK_EMAIL]",
    "req",
<<<<<<< HEAD
    "Ju lutemi vendosni email-in e punës"
  );
  //frmvalidator.addValidation("values[CONTACT][STAFF_WORK_EMAIL]", "email", "Ju lutemi vendosni email-in e punës in proper format");
  frmvalidator.addValidation(
    "values[EMERGENCY_CONTACT][STAFF_EMERGENCY_FIRST_NAME]",
    "req",
    "Ju lutemi vendosni emrin e kontaktit të emergjencës"
=======
    "Please enter Work email"
  );
  //frmvalidator.addValidation("values[CONTACT][STAFF_WORK_EMAIL]", "email", "Please enter Work email in proper format");
  frmvalidator.addValidation(
    "values[EMERGENCY_CONTACT][STAFF_EMERGENCY_FIRST_NAME]",
    "req",
    "Please enter Emergency First Name"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
  );
  frmvalidator.addValidation(
    "values[EMERGENCY_CONTACT][STAFF_EMERGENCY_LAST_NAME]",
    "req",
<<<<<<< HEAD
    "Ju lutemi vendosni mbiemrin e kontaktit të emergjencës"
=======
    "Please enter Emergency Last Name"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
  );
  frmvalidator.addValidation(
    "values[EMERGENCY_CONTACT][STAFF_EMERGENCY_RELATIONSHIP]",
    "req",
<<<<<<< HEAD
    "Ju lutemi zgjidhni lidhjen familjare me stafin"
=======
    "Please select Relationship to Staff"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
  );
  frmvalidator.addValidation(
    "values[EMERGENCY_CONTACT][STAFF_EMERGENCY_HOME_PHONE]",
    "req",
<<<<<<< HEAD
    "Ju lutemi vendosni telefonin e shtëpisë për emergjencë"
=======
    "Please enter Emergency Home Phone"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
  );
  frmvalidator.addValidation(
    "values[EMERGENCY_CONTACT][STAFF_EMERGENCY_WORK_PHONE]",
    "req",
<<<<<<< HEAD
    "Ju lutemi vendosni telefonin e punës për emergjencë"
=======
    "Please enter Emergency Work Phone"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
  );

  frmvalidator.addValidation(
    "month_values[JOINING_DATE]",
    "req",
<<<<<<< HEAD
    "Ju lutemi zgjidhni datën e fillimit të punës"
=======
    "Please select Joining Date"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
  );
  frmvalidator.addValidation(
    "day_values[JOINING_DATE]",
    "req",
<<<<<<< HEAD
    "Ju lutemi zgjidhni datën e fillimit të punës"
=======
    "Please select Joining Date"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
  );
  frmvalidator.addValidation(
    "year_values[JOINING_DATE]",
    "req",
<<<<<<< HEAD
    "Ju lutemi zgjidhni datën e fillimit të punës"
=======
    "Please select Joining Date"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
  );

  return school_check(staff_school_chkbox_id);
}

function formcheck_school_setup_periods_older(this_DET) {
  var this_button_id = this_DET.id;

  var frmvalidator = new Validator("F1", this_button_id);

  if (
    (document.getElementById("values[new][SHORT_NAME]") &&
      document.getElementById("values[new][SHORT_NAME]").value != "") ||
    (document.getElementById("values[new][SORT_ORDER]") &&
      document.getElementById("values[new][SORT_ORDER]").value != "")
  ) {
    frmvalidator.addValidation(
      "values[new][TITLE]",
      "req",
<<<<<<< HEAD
      "Titulli nuk mund të jetë bosh"
=======
      "Title cannot be blank"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );
  }

  if (
    (document.getElementsByName("values[new][START_HOUR]") &&
      document.getElementsByName("values[new][START_HOUR]")[0].value != "") ||
    (document.getElementsByName("values[new][START_MINUTE]") &&
      document.getElementsByName("values[new][START_MINUTE]")[0].value != "") ||
    (document.getElementsByName("values[new][START_M]") &&
      document.getElementsByName("values[new][START_M]")[0].value != "")
  ) {
    frmvalidator.addValidation(
      "values[new][TITLE]",
      "req",
<<<<<<< HEAD
      "Titulli nuk mund të jetë bosh"
=======
      "Title cannot be blank"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );
  }

  if (
    (document.getElementsByName("values[new][END_HOUR]") &&
      document.getElementsByName("values[new][END_HOUR]")[0].value != "") ||
    (document.getElementsByName("values[new][END_MINUTE]") &&
      document.getElementsByName("values[new][END_MINUTE]")[0].value != "") ||
    (document.getElementsByName("values[new][END_M]") &&
      document.getElementsByName("values[new][END_M]")[0].value != "")
  ) {
    frmvalidator.addValidation(
      "values[new][TITLE]",
      "req",
<<<<<<< HEAD
      "Titulli nuk mund të jetë bosh"
=======
      "Title cannot be blank"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );
  }

  if (
    document.getElementById("values[new][TITLE]") &&
    document.getElementById("values[new][TITLE]").value != ""
  ) {
    frmvalidator.addValidation(
      "values[new][TITLE]",
      "maxlen=50",
<<<<<<< HEAD
      "Gjatësia maksimale e titullit është 50 karaktere"
=======
      "Max length for title is 50 characters"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );
    frmvalidator.addValidation(
      "values[new][SHORT_NAME]",
      "req",
<<<<<<< HEAD
      "Emri i shkurtër nuk mund të jetë bosh"
=======
      "Short name cannot be blank"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );
    frmvalidator.addValidation(
      "values[new][SHORT_NAME]",
      "maxlen=50",
<<<<<<< HEAD
      "Gjatësia maksimale e emrit të shkurtër është 50 karaktere"
=======
      "Max length for short name is 50 characters"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );

    frmvalidator.addValidation(
      "values[new][SORT_ORDER]",
      "num",
<<<<<<< HEAD
      "Renditja lejon vetëm vlerë numerike"
=======
      "Sort order allows only numeric value"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );
    frmvalidator.addValidation(
      "values[new][SORT_ORDER]",
      "maxlen=5",
<<<<<<< HEAD
      "Gjatësia maksimale e renditjes është 5 shifra"
=======
      "Max length for sort order is 5 digits"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );

    frmvalidator.addValidation(
      "values[new][START_HOUR]",
      "req",
<<<<<<< HEAD
      "Ju lutemi zgjidhni orën e fillimit"
=======
      "Please select start time"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );
    frmvalidator.addValidation(
      "values[new][START_MINUTE]",
      "req",
<<<<<<< HEAD
      "Ju lutemi zgjidhni orën e fillimit"
=======
      "Please select start time"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );
    frmvalidator.addValidation(
      "values[new][START_M]",
      "req",
<<<<<<< HEAD
      "Ju lutemi zgjidhni orën e fillimit"
=======
      "Please select start time"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );

    frmvalidator.addValidation(
      "values[new][END_HOUR]",
      "req",
<<<<<<< HEAD
      "Ju lutemi zgjidhni orën e mbarimit"
=======
      "Please select end time"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );
    frmvalidator.addValidation(
      "values[new][END_MINUTE]",
      "req",
<<<<<<< HEAD
      "Ju lutemi zgjidhni orën e mbarimit"
=======
      "Please select end time"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );
    frmvalidator.addValidation(
      "values[new][END_M]",
      "req",
<<<<<<< HEAD
      "Ju lutemi zgjidhni orën e mbarimit"
=======
      "Please select end time"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );
  }

  var periods_id = document.getElementById("h1").value;

  if (periods_id != "") {
    var id = periods_id;
    var ar = id.split(",");

    for (i = 0; i <= ar.length - 1; i++) {
      if (document.getElementById("inputvalues[" + ar[i] + "][TITLE]")) {
        frmvalidator.addValidation(
          "values[" + ar[i] + "][TITLE]",
          "req",
<<<<<<< HEAD
          "Titulli nuk mund të jetë bosh"
=======
          "Title cannot be blank"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
        );
        frmvalidator.addValidation(
          "values[" + ar[i] + "][TITLE]",
          "maxlen=50",
<<<<<<< HEAD
          "Gjatësia maksimale e titullit është 50 karaktere"
=======
          "Max length for title is 50 characters"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
        );
      }
      frmvalidator.addValidation(
        "values[" + ar[i] + "][SHORT_NAME]",
        "req",
<<<<<<< HEAD
        "Emri i shkurtër nuk mund të jetë bosh"
=======
        "Short name cannot be blank"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
      );
    }
  }
}

function formcheck_school_setup_periods(this_DET) {
  var this_button_id = this_DET.id;

  var frmvalidator = new Validator("F1", this_button_id);

  if (
    (document.getElementById("values[new][SHORT_NAME]") &&
      document.getElementById("values[new][SHORT_NAME]").value != "") ||
    (document.getElementById("values[new][SORT_ORDER]") &&
      document.getElementById("values[new][SORT_ORDER]").value != "")
  ) {
    frmvalidator.addValidation(
      "values[new][TITLE]",
      "req",
<<<<<<< HEAD
      "Titulli nuk mund të jetë bosh"
=======
      "Title cannot be blank"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );
  }

  if (
    document.getElementsByName("values[new][START_TIME]") &&
    document.getElementsByName("values[new][START_TIME]")[0].value != ""
  ) {
    frmvalidator.addValidation(
      "values[new][TITLE]",
      "req",
<<<<<<< HEAD
      "Titulli nuk mund të jetë bosh"
=======
      "Title cannot be blank"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );
  }

  if (
    document.getElementsByName("values[new][END_TIME]") &&
    document.getElementsByName("values[new][END_TIME]")[0].value != ""
  ) {
    frmvalidator.addValidation(
      "values[new][TITLE]",
      "req",
<<<<<<< HEAD
      "Titulli nuk mund të jetë bosh"
=======
      "Title cannot be blank"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );
  }

  if (
    document.getElementById("values[new][TITLE]") &&
    document.getElementById("values[new][TITLE]").value != ""
  ) {
    frmvalidator.addValidation(
      "values[new][TITLE]",
      "maxlen=50",
<<<<<<< HEAD
      "Gjatësia maksimale e titullit është 50 karaktere"
=======
      "Max length for title is 50 characters"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );
    frmvalidator.addValidation(
      "values[new][SHORT_NAME]",
      "req",
<<<<<<< HEAD
      "Emri i shkurtër nuk mund të jetë bosh"
=======
      "Short name cannot be blank"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );
    frmvalidator.addValidation(
      "values[new][SHORT_NAME]",
      "maxlen=50",
<<<<<<< HEAD
      "Gjatësia maksimale e emrit të shkurtër është 50 karaktere"
=======
      "Max length for short name is 50 characters"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );

    frmvalidator.addValidation(
      "values[new][SORT_ORDER]",
      "num",
<<<<<<< HEAD
      "Renditja lejon vetëm vlerë numerike"
=======
      "Sort order allows only numeric value"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );
    frmvalidator.addValidation(
      "values[new][SORT_ORDER]",
      "maxlen=5",
<<<<<<< HEAD
      "Gjatësia maksimale e renditjes është 5 shifra"
=======
      "Max length for sort order is 5 digits"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );

    frmvalidator.addValidation(
      "values[new][START_TIME]",
      "req",
<<<<<<< HEAD
      "Ju lutemi zgjidhni orën e fillimit"
=======
      "Please select start time"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );

    frmvalidator.addValidation(
      "values[new][END_TIME]",
      "req",
<<<<<<< HEAD
      "Ju lutemi zgjidhni orën e mbarimit"
=======
      "Please select end time"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );
  }

  var periods_id = document.getElementById("h1").value;

  if (periods_id != "") {
    var id = periods_id;
    var ar = id.split(",");

    for (i = 0; i <= ar.length - 1; i++) {
      if (document.getElementById("inputvalues[" + ar[i] + "][TITLE]")) {
        frmvalidator.addValidation(
          "values[" + ar[i] + "][TITLE]",
          "req",
<<<<<<< HEAD
          "Titulli nuk mund të jetë bosh"
=======
          "Title cannot be blank"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
        );
        frmvalidator.addValidation(
          "values[" + ar[i] + "][TITLE]",
          "maxlen=50",
<<<<<<< HEAD
          "Gjatësia maksimale e titullit është 50 karaktere"
=======
          "Max length for title is 50 characters"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
        );
      }
      frmvalidator.addValidation(
        "values[" + ar[i] + "][SHORT_NAME]",
        "req",
<<<<<<< HEAD
        "Emri i shkurtër nuk mund të jetë bosh"
=======
        "Short name cannot be blank"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
      );
      frmvalidator.addValidation(
        "values[" + ar[i] + "][START_TIME]",
        "req",
<<<<<<< HEAD
        "Ju lutemi zgjidhni orën e fillimit"
=======
        "Please select start time"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
      );

      frmvalidator.addValidation(
        "values[" + ar[i] + "][END_TIME]",
        "req",
<<<<<<< HEAD
        "Ju lutemi zgjidhni orën e mbarimit"
=======
        "Please select end time"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
      );
    }
  }
}

function formcheck_school_setup_grade_levels(this_DET) {
  var this_button_id = this_DET.id;

  var frmvalidator = new Validator("F1", this_button_id);

  if (
    (document.getElementById("values[new][SHORT_NAME]") &&
      document.getElementById("values[new][SHORT_NAME]").value != "") ||
    (document.getElementById("values[new][SORT_ORDER]") &&
      document.getElementById("values[new][SORT_ORDER]").value != "")
  ) {
    frmvalidator.addValidation(
      "values[new][TITLE]",
      "req",
<<<<<<< HEAD
      "Titulli nuk mund të jetë bosh"
=======
      "Title cannot be blank"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );
  }

  if (
    document.getElementById("values[new][TITLE]") &&
    document.getElementById("values[new][TITLE]").value != ""
  ) {
    frmvalidator.addValidation(
      "values[new][TITLE]",
      "maxlen=50",
<<<<<<< HEAD
      "Gjatësia maksimale e titullit është 50 karaktere"
=======
      "Max length for title is 50 characters"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );

    frmvalidator.addValidation(
      "values[new][SHORT_NAME]",
      "req",
<<<<<<< HEAD
      "Emri i shkurtër nuk mund të jetë bosh"
=======
      "Short name cannot be blank"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );
    frmvalidator.addValidation(
      "values[new][SHORT_NAME]",
      "maxlen=50",
<<<<<<< HEAD
      "Gjatësia maksimale e emrit të shkurtër është 50 karaktere"
=======
      "Max length for short name is 50 characters"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );

    frmvalidator.addValidation(
      "values[new][SORT_ORDER]",
      "num",
<<<<<<< HEAD
      "Renditja lejon vetëm vlerë numerike"
=======
      "Sort order allows only numeric value"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );
    frmvalidator.addValidation(
      "values[new][SORT_ORDER]",
      "maxlen=5",
<<<<<<< HEAD
      "Gjatësia maksimale e renditjes është 5 shifra"
=======
      "Max length for sort order is 5 digits"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );
  }
  var grade_id = document.getElementById("h1").value;
  if (grade_id != "") {
    var id = grade_id;
    var ar = id.split(",");

    for (i = 0; i <= ar.length - 1; i++) {
      if (document.getElementById("inputvalues[" + ar[i] + "][TITLE]")) {
        frmvalidator.addValidation(
          "values[" + ar[i] + "][TITLE]",
          "req",
<<<<<<< HEAD
          "Titulli nuk mund të jetë bosh"
=======
          "Title cannot be blank"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
        );
        frmvalidator.addValidation(
          "values[" + ar[i] + "][TITLE]",
          "maxlen=50",
<<<<<<< HEAD
          "Gjatësia maksimale e titullit është 50 karaktere"
=======
          "Max length for title is 50 characters"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
        );
      }
      if (document.getElementById("inputvalues[" + ar[i] + "][SHORT_NAME]")) {
        frmvalidator.addValidation(
          "values[" + ar[i] + "][SHORT_NAME]",
          "req",
<<<<<<< HEAD
          "Emri i shkurtër nuk mund të jetë bosh"
=======
          "Short name cannot be blank"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
        );
        frmvalidator.addValidation(
          "values[" + ar[i] + "][SHORT_NAME]",
          "maxlen=50",
<<<<<<< HEAD
          "Gjatësia maksimale e titullit është 50 karaktere"
=======
          "Max length for title is 50 characters"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
        );
      }
      if (document.getElementById("inputvalues[" + ar[i] + "][SORT_ORDER]")) {
        frmvalidator.addValidation(
          "values[" + ar[i] + "][SORT_ORDER]",
          "num",
<<<<<<< HEAD
          "Renditja lejon vetëm vlerë numerike"
=======
          "Sort order allows only numeric value"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
        );
        frmvalidator.addValidation(
          "values[" + ar[i] + "][SORT_ORDER]",
          "maxlen=5",
<<<<<<< HEAD
          "Gjatësia maksimale e renditjes është 5 shifra"
=======
          "Max length for sort order is 5 digits"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
        );
      }
    }
  }
}

function formcheck_student_student(this_DET) {
  //    if (document.getElementById('email_1') && document.getElementById('email_1').innerHTML == 'Email already taken')
  //    {
  //        document.getElementsByName('values[people][PRIMARY][EMAIL]')[0].value = '';
  //    }
  //    if (document.getElementById('email_2') && document.getElementById('email_2').innerHTML == 'Email already taken')
  //    {
  //        if (document.getElementsByName('values[people][SECONDARY][EMAIL]')[0])
  //            document.getElementsByName('values[people][SECONDARY][EMAIL]')[0].value = '';
  //        if (document.getElementsByName('values[people][OTHER][EMAIL]')[0])
  //            document.getElementsByName('values[people][OTHER][EMAIL]')[0].value = '';
  //    }

  var this_button_id = this_DET.id;

  var frmvalidator = new Validator("student", this_button_id);

  frmvalidator.addValidation(
    "values[student_address][HOME][STREET_ADDRESS_1]",
    "req",
<<<<<<< HEAD
    "Ju lutemi vendosni adresën"
=======
    "Please enter address"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
  );
  frmvalidator.addValidation(
    "values[student_address][HOME][CITY]",
    "req",
<<<<<<< HEAD
    "Ju lutemi vendosni qytetin"
=======
    "Please enter city"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
  );
  frmvalidator.addValidation(
    "values[student_address][HOME][STATE]",
    "req",
<<<<<<< HEAD
    "Ju lutemi vendosni shtetin/rrethin"
=======
    "Please enter state"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
  );
  frmvalidator.addValidation(
    "values[student_address][HOME][ZIPCODE]",
    "req",
<<<<<<< HEAD
    "Ju lutemi vendosni kodin postar"
=======
    "Please enter zipcode"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
  );
  frmvalidator.addValidation(
    "values[people][PRIMARY][RELATIONSHIP]",
    "req",
<<<<<<< HEAD
    "Ju lutemi zgjidhni lidhjen kryesore me nxënësin"
=======
    "Please select a primary relationship to student "
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
  );
  frmvalidator.addValidation(
    "values[people][PRIMARY][FIRST_NAME]",
    "req",
<<<<<<< HEAD
    "Ju lutemi vendosni emrin e kontaktit kryesor të emergjencës"
=======
    "Please enter primary emergency contact frist name "
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
  );
  frmvalidator.addValidation(
    "values[people][PRIMARY][LAST_NAME]",
    "req",
<<<<<<< HEAD
    "Ju lutemi vendosni mbiemrin e kontaktit kryesor të emergjencës"
=======
    "Please enter primary emergency contact last name"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
  );
  // frmvalidator.addValidation("values[people][PRIMARY][EMAIL]", "req", "Please enter a primary emergency email");
  frmvalidator.addValidation(
    "values[people][PRIMARY][EMAIL]",
    "email",
<<<<<<< HEAD
    "Ju lutemi vendosni një email të vlefshëm për kontaktin kryesor"
=======
    "Please enter a valid primary emergency email"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
  );

  frmvalidator.addValidation(
    "values[people][OTHER][RELATIONSHIP]",
    "req",
<<<<<<< HEAD
    "Ju lutemi zgjidhni lidhjen shtesë me nxënësin"
=======
    "Please select a additional relationship to student "
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
  );
  frmvalidator.addValidation(
    "values[people][OTHER][FIRST_NAME]",
    "req",
<<<<<<< HEAD
    "Ju lutemi vendosni emrin e kontaktit shtesë të emergjencës"
=======
    "Please select a additional emergency contact to first name "
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
  );
  frmvalidator.addValidation(
    "values[people][OTHER][LAST_NAME]",
    "req",
<<<<<<< HEAD
    "Ju lutemi vendosni mbiemrin e kontaktit shtesë të emergjencës"
=======
    "Please enter additional emergency contact last name"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
  );
  //frmvalidator.addValidation("values[people][OTHER][EMAIL]", "req", "Please enter a additional emergency email");
  //    frmvalidator.addValidation("values[people][OTHER][EMAIL]", "email", "Please enter a valid additional emergency email");
  frmvalidator.addValidation(
    "students[FIRST_NAME]",
    "req",
<<<<<<< HEAD
    "Ju lutemi vendosni emrin"
=======
    "Please enter the first name"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
  );
  frmvalidator.addValidation(
    "students[FIRST_NAME]",
    "maxlen=100",
<<<<<<< HEAD
    "Gjatësia maksimale e emrit të shkollës është 100 karaktere"
=======
    "Max length for school name is 100 characters"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
  );

  frmvalidator.addValidation(
    "students[LAST_NAME]",
    "req",
<<<<<<< HEAD
    "Ju lutemi vendosni mbiemrin"
=======
    "Please enter the last name"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
  );
  frmvalidator.addValidation(
    "students[LAST_NAME]",
    "maxlen=100",
<<<<<<< HEAD
    "Gjatësia maksimale e adresës është 100 karaktere"
=======
    "Max length for address is 100 characters"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
  );
  frmvalidator.addValidation(
    "month_students[BIRTHDATE]",
    "req",
<<<<<<< HEAD
    "Ju lutemi vendosni një datëlindje të vlefshme"
=======
    "Please enter a valid birthdate"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
  );
  frmvalidator.setAddnlValidationFunction(validateBirthdate);
  function validateBirthdate() {
  
    var day = document.getElementById("daySelect_date_2").value.padStart(2, '0');
    var month = document.getElementById("monthSelect_date_2").value.padStart(2, '0');
    var year = document.getElementById("yearSelect_date_2").value;
  
    var birthdateStr = year + '-' + month + '-' + day;
    var birthdate = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
    var today = new Date();
    today.setHours(0, 0, 0, 0);
  
    var errorDiv = document.getElementById("divErr");
    errorDiv.innerHTML = "";
    errorDiv.style.display = "none";
  
    if (birthdate > today) {
<<<<<<< HEAD
      errorDiv.innerHTML = '<div class="alert alert-danger no-border"><i class="fa fa-info-circle"></i> Datëlindja nuk mund të jetë një datë në të ardhmen.</div>';
=======
      errorDiv.innerHTML = '<div class="alert alert-danger no-border"><i class="fa fa-info-circle"></i> Birthdate cannot be a future date.</div>';
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
      errorDiv.style.display = "block";
      document.getElementById("date_2").focus();
      return false;
    }
  
    return true;
  }

  if (
    document.getElementById("current_date") &&
    document.getElementById("date_2") &&
    document.getElementById("date_2").value != "" &&
    document.getElementById("date_2").style.display != "none"
  ) {
    var inp_date = document.getElementById("date_2").value;
    var curr_date = document.getElementById("current_date").value;

    var inp_date = new Date(inp_date);
    var curr_date = new Date(curr_date);

    if (curr_date <= inp_date) {
      document.getElementById("monthSelect2").value = "";
      document.getElementById("daySelect2").value = "";
      document.getElementById("yearSelect2").value = "";
    }
  }
  frmvalidator.addValidation(
    "assign_student_id",
    "num",
<<<<<<< HEAD
    "ID e nxënësit lejon vetëm shifra"
=======
    "Student ID allows only numeric value"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
  );
  frmvalidator.addValidation(
    "values[student_enrollment][new][GRADE_ID]",
    "req",
<<<<<<< HEAD
    "Ju lutemi zgjidhni nivelin e klasës"
=======
    "Please select a grade"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
  );
  frmvalidator.addValidation(
    "students[USERNAME]",
    "maxlen=50",
<<<<<<< HEAD
    "Gjatësia maksimale e emrit të përdoruesit është 50 karaktere"
=======
    "Max length for Username is 50"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
  );
  frmvalidator.addValidation(
    "students[PASSWORD]",
    "password=8",
<<<<<<< HEAD
    "Fjalëkalimi duhet të ketë të paktën 8 karaktere, duke përfshirë të paktën një numër dhe një karakter special"
=======
    "Password should be minimum 8 characters with atleast one special character and one number"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
  );
  frmvalidator.addValidation(
    "students[PASSWORD]",
    "maxlen=20",
<<<<<<< HEAD
    "Gjatësia maksimale e fjalëkalimit është 20 karaktere"
  );
  //    frmvalidator.addValidation("students[EMAIL]", "email", "Ju lutemi vendosni një email të vlefshëm");
  frmvalidator.addValidation(
    "students[PHONE]",
    "phone",
    "Numër telefoni i pavlefshëm"
=======
    "Max length for password is 20 characters"
  );
  //    frmvalidator.addValidation("students[EMAIL]", "email", "Please enter a valid email");
  frmvalidator.addValidation(
    "students[PHONE]",
    "phone",
    "Invalid phone number"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
  );
  if (document.getElementById("values[people][SECONDARY][CUSTODY]")) {
    if (
      document.getElementsByName("values[people][SECONDARY][CUSTODY]")[0]
        .checked == true
    )
      var custody = "y";
    else var custody = "n";
  } else var custody = "n";
  if (
    document.getElementsByName("values[people][SECONDARY][RELATIONSHIP]")[0]
  ) {
    if (
      document.getElementsByName("values[people][SECONDARY][RELATIONSHIP]")[0]
        .value != "" ||
      document.getElementsByName("values[people][SECONDARY][FIRST_NAME]")[0]
        .value != "" ||
      document.getElementsByName("values[people][SECONDARY][LAST_NAME]")[0]
        .value != "" ||
      document.getElementsByName("values[people][SECONDARY][HOME_PHONE]")[0]
        .value != "" ||
      document.getElementsByName("values[people][SECONDARY][WORK_PHONE]")[0]
        .value != "" ||
      document.getElementsByName("values[people][SECONDARY][CELL_PHONE]")[0]
        .value != "" ||
      document.getElementsByName("values[people][SECONDARY][EMAIL]")[0].value !=
        "" ||
      custody == "y" ||
      document.getElementsByName("secondary_portal")[0].checked == true
    ) {
      frmvalidator.addValidation(
        "values[people][SECONDARY][RELATIONSHIP]",
        "req",
<<<<<<< HEAD
        "Ju lutemi zgjidhni lidhjen dytësore me nxënësin"
=======
        "Please select a secondary relationship to student "
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
      );
      frmvalidator.addValidation(
        "values[people][SECONDARY][FIRST_NAME]",
        "req",
<<<<<<< HEAD
        "Ju lutemi vendosni emrin e kontaktit dytësor të emergjencës"
=======
        "Please enter secondary emergency contact frist name "
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
      );
      frmvalidator.addValidation(
        "values[people][SECONDARY][LAST_NAME]",
        "req",
<<<<<<< HEAD
        "Ju lutemi vendosni mbiemrin e kontaktit dytësor të emergjencës"
=======
        "Please enter secondary emergency contact last name"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
      );
      //frmvalidator.addValidation("values[people][SECONDARY][EMAIL]", "req", "Please enter a secondary email");
      //            frmvalidator.addValidation("values[people][SECONDARY][EMAIL]", "email", "Please enter a valid secondary email");
    }
  }

  if (document.getElementsByName("values[people][PRIMARY][RELATIONSHIP]")[0]) {
    if (
      document.getElementsByName("values[people][PRIMARY][RELATIONSHIP]")[0]
        .value != ""
    )
      var c = 1;
  } else {
    var c = 1;
  }
  if (
    document.getElementsByName(
      "values[student_address][HOME][STREET_ADDRESS_1]"
    )[0]
  ) {
    if (
      document.getElementsByName(
        "values[student_address][HOME][STREET_ADDRESS_1]"
      )[0].value != ""
    )
      var v = 1;
  } else {
    var v = 1;
  }
  if (document.getElementsByName("values[student_address][HOME][CITY]")[0]) {
    if (
      document.getElementsByName("values[student_address][HOME][CITY]")[0]
        .value != ""
    )
      var v1 = 1;
  } else {
    var v1 = 1;
  }
  if (document.getElementsByName("values[student_address][HOME][STATE]")[0]) {
    if (
      document.getElementsByName("values[student_address][HOME][STATE]")[0]
        .value != ""
    )
      var v2 = 1;
  } else {
    var v2 = 1;
  }
  if (document.getElementsByName("values[student_address][HOME][ZIPCODE]")[0]) {
    if (
      document.getElementsByName("values[student_address][HOME][ZIPCODE]")[0]
        .value != ""
    )
      var v3 = 1;
  } else {
    var v3 = 1;
  }
  // if (document.getElementsByName("values[people][PRIMARY][FIRST_NAME]")[0])
  // {
  //     if (document.getElementsByName("values[people][PRIMARY][FIRST_NAME]")[0].value != '')
  //         var k = 1;
  // } else
  {
    var k = 1;
  }

  if (document.getElementsByName("values[people][PRIMARY][LAST_NAME]")[0]) {
    if (
      document.getElementsByName("values[people][PRIMARY][LAST_NAME]")[0]
        .value != ""
    )
      var l = 1;
  } else {
    var l = 1;
  }
  if (document.getElementsByName("values[people][PRIMARY][EMAIL]")[0]) {
    if (
      document.getElementsByName("values[people][PRIMARY][EMAIL]")[0].value !=
      ""
    )
      var e = 1;
  } else {
    var e = 1;
  }

  if (
    document.getElementsByName("values[people][SECONDARY][RELATIONSHIP]")[0] &&
    document.getElementById("val_email_1").value == "Y" &&
    document.getElementById("val_email_2").value != "Y"
  ) {
    if (
      document.getElementsByName("values[people][SECONDARY][RELATIONSHIP]")[0]
        .value == "" &&
      document.getElementsByName("values[people][SECONDARY][FIRST_NAME]")[0]
        .value == "" &&
      document.getElementsByName("values[people][SECONDARY][LAST_NAME]")[0]
        .value == "" &&
      document.getElementsByName("values[people][SECONDARY][HOME_PHONE]")[0]
        .value == "" &&
      document.getElementsByName("values[people][SECONDARY][WORK_PHONE]")[0]
        .value == "" &&
      document.getElementsByName("values[people][SECONDARY][CELL_PHONE]")[0]
        .value == "" &&
      document.getElementsByName("values[people][SECONDARY][EMAIL]")[0].value ==
        "" &&
      custody == "n" &&
      document.getElementsByName("secondary_portal")[0].checked == false &&
      (typeof k === "object" || k == 1) &&
      (typeof l === "object" || l == 1) &&
      (typeof c === "object" || c == 1) &&
      (typeof e === "object" || e == 1) &&
      (typeof v === "object" || v == 1) &&
      (typeof v1 === "object" || v1 == 1) &&
      (typeof v2 === "object" || v2 == 1) &&
      (typeof v3 === "object" || v3 == 1)
    ) {
      frmvalidator.clearAllValidations();
    }
  }

  if (document.getElementById("cal_stu_id")) {
    var cal_stu_id = document.getElementById("cal_stu_id").value;
    frmvalidator.addValidation(
      "values[student_enrollment][" + cal_stu_id + "][CALENDAR_ID]",
      "req",
<<<<<<< HEAD
      "Ju lutemi zgjidhni kalendarin"
=======
      "Please select calendar"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );
  }

  if (document.getElementById("goalId")) {
    var goalId = document.getElementById("goalId").value;
    frmvalidator.addValidation(
      "tables[student_goal][" + goalId + "][GOAL_TITLE]",
      "req",
<<<<<<< HEAD
      "Ju lutemi vendosni titullin e synimit"
=======
      "Please enter goal title"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );

    frmvalidator.addValidation(
      "month_tables[" + goalId + "][START_DATE]",
      "req",
<<<<<<< HEAD
      "Ju lutemi vendosni datën e fillimit"
=======
      "Please enter begin date"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );
    frmvalidator.addValidation(
      "month_tables[" + goalId + "][END_DATE]",
      "req",
<<<<<<< HEAD
      "Ju lutemi vendosni datën e mbarimit"
=======
      "Please enter end date"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );
    frmvalidator.addValidation(
      "tables[student_goal][" + goalId + "][GOAL_DESCRIPTION]",
      "req_withspace",
<<<<<<< HEAD
      "Ju lutemi vendosni përshkrimin e synimit"
=======
      "Please enter goal description"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );
  }

  if (document.getElementById("req_progress_id")) {
    var req_progress_id = document.getElementById("req_progress_id").value;
    frmvalidator.addValidation(
      "tables[student_goal_progress][" +
        req_progress_id +
        "][COURSE_PERIOD_ID]",
      "req",
<<<<<<< HEAD
      "Ju lutemi vendosni orën e lëndës"
=======
      "Please enter course period"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );
    frmvalidator.addValidation(
      "month_tables[" + req_progress_id + "][START_DATE]",
      "req",
<<<<<<< HEAD
      "Ju lutemi vendosni datën e fillimit"
=======
      "Please enter begin date"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );
    frmvalidator.addValidation(
      "tables[student_goal_progress][" + req_progress_id + "][PROGRESS_NAME]",
      "req",
<<<<<<< HEAD
      "Ju lutemi vendosni emrin e periudhës së progresit"
=======
      "Please enter progress period name"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );
    frmvalidator.addValidation(
      "tables[student_goal_progress][" + req_progress_id + "][PROFICIENCY]",
      "req",
<<<<<<< HEAD
      "Ju lutemi zgjidhni shkallën e arritjeve"
=======
      "Please select proficiency scale"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );
    frmvalidator.addValidation(
      "tables[student_goal_progress][" +
        req_progress_id +
        "][PROGRESS_DESCRIPTION]",
      "req",
<<<<<<< HEAD
      "Ju lutemi vendosni vlerësimin e progresit"
=======
      "Please enter progress assessment"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );
  }

  frmvalidator.addValidation(
    "values[student_enrollment][new][NEXT_SCHOOL]",
    "req",
<<<<<<< HEAD
    "Ju lutemi zgjidhni opsionin e kalimit / mbetjes"
=======
    "Please select rolling / retention options"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
  );
  frmvalidator.addValidation(
    "medical_info[PHYSICIAN]",
    "req",
<<<<<<< HEAD
    "Ju lutemi vendosni emrin e mjekut"
=======
    "Please enter the physician name"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
  );
  frmvalidator.addValidation(
    "medical_info[PHYSICIAN_PHONE]",
    "ph",
<<<<<<< HEAD
    "Numri i telefonit nuk mund të përmbajë shkronja."
=======
    "Phone number can not be alphabetic."
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
  );
}

function change_pass() {
  var frmvalidator = new Validator("change_password");
<<<<<<< HEAD
  frmvalidator.addValidation("old", "req", "Ju lutemi shkruani fjalëkalimin ekzistues");
  frmvalidator.addValidation("new", "req", "Ju lutemi shkruani fjalëkalimin e ri");
  frmvalidator.addValidation("retype", "req", "Ju lutemi rishkruani fjalëkalimin");
  frmvalidator.addValidation(
    "new",
    "password=8",
    "Fjalëkalimi duhet të ketë të paktën 8 karaktere, duke përfshirë të paktën një numër dhe një karakter special"
=======
  frmvalidator.addValidation("old", "req", "Please enter old password");
  frmvalidator.addValidation("new", "req", "Please enter new password");
  frmvalidator.addValidation("retype", "req", "Please retype password");
  frmvalidator.addValidation(
    "new",
    "password=8",
    "Password should be minimum 8 characters with atleast one special character and one number"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
  );
}

function ValidateDate_Student() {
  var bm, bd, by;
  var frm = document.forms["student"];
  var elem = frm.elements;
  for (var i = 0; i < elem.length; i++) {
    if (elem[i].name == "month_students[BIRTHDATE]") {
      bm = elem[i];
    }
    if (elem[i].name == "day_students[BIRTHDATE]") {
      bd = elem[i];
    }
    if (elem[i].name == "year_students[BIRTHDATE]") {
      by = elem[i];
    }
  }

  for (var i = 0; i < elem.length; i++) {
    if (elem[i].name == "month_tables[new][START_DATE]") {
      sm = elem[i];
    }
    if (elem[i].name == "day_tables[new][START_DATE]") {
      sd = elem[i];
    }
    if (elem[i].name == "year_tables[new][START_DATE]") {
      sy = elem[i];
    }

    if (elem[i].name == "month_tables[new][END_DATE]") {
      em = elem[i];
    }
    if (elem[i].name == "day_tables[new][END_DATE]") {
      ed = elem[i];
    }
    if (elem[i].name == "year_tables[new][END_DATE]") {
      ey = elem[i];
    }
  }

  try {
    if (false == isDate(sm, sd, sy)) {
      document.getElementById("divErr").innerHTML =
<<<<<<< HEAD
        '<div class="alert alert-danger no-border"><i class="fa fa-info-circle"></i> Ju lutemi vendosni datën e fillimit.</div>';
=======
        '<div class="alert alert-danger no-border"><i class="fa fa-info-circle"></i> Please enter start date.</div>';
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
      sm.focus();
      return false;
    }
  } catch (err) {}
  try {
    if (false == isDate(em, ed, ey)) {
      document.getElementById("divErr").innerHTML =
<<<<<<< HEAD
        '<div class="alert alert-danger no-border"><i class="fa fa-info-circle"></i> Ju lutemi vendosni datën e mbarimit.</div>';
=======
        '<div class="alert alert-danger no-border"><i class="fa fa-info-circle"></i> Please enter end date.</div>';
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
      em.focus();
      return false;
    }
  } catch (err) {}
  try {
    if (false == CheckDateGoal(sm, sd, sy, em, ed, ey)) {
      em.focus();
      return false;
    }
  } catch (err) {}
  //-----
  try {
    if (false == CheckValidDateGoal(sm, sd, sy, em, ed, ey)) {
      sm.focus();
      return false;
    }
  } catch (err) {}

  try {
    if (false == CheckBirthDate(bm, bd, by)) {
      bm.focus();
      return false;
    }
  } catch (err) {}

  for (var z = 0; z < elem.length; z++) {
    if (elem[z].name == "students[FIRST_NAME]") {
      var firstnameobj = elem[z];
      var firstname = elem[z].value;
    }
    if (elem[z].name == "students[MIDDLE_NAME]") {
      var middlenameobj = elem[z];
      var middlename = elem[z].value;
    }
    if (elem[z].name == "students[LAST_NAME]") {
      var lastnameobj = elem[z];
      var lastname = elem[z].value;
    }
    if (elem[z].name == "values[student_enrollment][new][GRADE_ID]") {
      var gradeobj = elem[z];
      var grade = elem[z].value;
    }
    var studentbirthday_year = by.value;
    var studentbirthday_month = bm.value;
    var studentbirthday_day = bd.value;
  }
  if (
    firstnameobj &&
    middlenameobj &&
    lastnameobj &&
    gradeobj &&
    by &&
    bm &&
    bd
  ) {
    ajax_call(
      "CheckDuplicateStudent.php?fn=" +
        firstname +
        "&mn=" +
        middlename +
        "&ln=" +
        lastname +
        "&gd=" +
        grade +
        "&byear=" +
        studentbirthday_year +
        "&bmonth=" +
        studentbirthday_month +
        "&bday=" +
        studentbirthday_day,
      studentcheck_match,
      studentcheck_unmatch
    );
    return false;
  } else return true;
}

function studentcheck_match(data) {
  var response = data;
  if (response != 0) {
    var result = confirm(
      "Duplicate student found. There is already a student with the same information. Do you want to proceed?"
    );
    if (result == true) {
      document.getElementById("student_isertion").submit();
      return true;
    } else {
      return false;
    }
  } else {
    document.getElementById("student_isertion").submit();
    return true;
  }
}

function studentcheck_unmatch(err) {
  alert("Error: " + err);
}

function formcheck_student_studentField_F2(this_DET) {
  var this_button_id = this_DET.id;

  var frmvalidator = new Validator("F2", this_button_id);

  var t_id = document.getElementById("t_id").value;
  frmvalidator.addValidation(
    "tables[" + t_id + "][TITLE]",
    "req",
<<<<<<< HEAD
    "Ju lutemi vendosni titullin"
=======
    "Please enter the title"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
  );
  frmvalidator.addValidation(
    "tables[" + t_id + "][TITLE]",
    "maxlen=50",
<<<<<<< HEAD
    "Gjatësia maksimale e titullit është 50 karaktere"
=======
    "Max length for title is 50"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
  );

  frmvalidator.addValidation(
    "tables[" + t_id + "][SORT_ORDER]",
    "req",
<<<<<<< HEAD
    "Ju lutemi vendosni renditjen"
=======
    "Please enter the sort order"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
  );
  frmvalidator.addValidation(
    "tables[" + t_id + "][SORT_ORDER]",
    "num",
<<<<<<< HEAD
    "Renditja lejon vetëm vlerë numerike"
=======
    "Sort Order allows only numeric value"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
  );
  frmvalidator.addValidation(
    "tables[" + t_id + "][SORT_ORDER]",
    "maxsort",
<<<<<<< HEAD
    "Renditja duhet të jetë më e madhe se 6"
=======
    "Sort Order  must be greater than 6"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
  );
}

function formcheck_student_studentField_F1(this_DET) {
  var this_button_id = this_DET.id;

  var frmvalidator = new Validator("F1", this_button_id);

  var f_id = document.getElementById("f_id").value;
  frmvalidator.addValidation(
    "tables[" + f_id + "][TITLE]",
    "req",
<<<<<<< HEAD
    "Ju lutemi vendosni emrin e fushës"
=======
    "Please enter the field name"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
  );

  frmvalidator.addValidation(
    "tables[" + f_id + "][TYPE]",
    "req",
<<<<<<< HEAD
    "Ju lutemi zgjidhni llojin e të dhënave"
=======
    "Please select the data type"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
  );

  frmvalidator.addValidation(
    "tables[" + f_id + "][SORT_ORDER]",
    "req",
<<<<<<< HEAD
    "Ju lutemi vendosni renditjen"
=======
    "Please enter the sort order"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
  );
  frmvalidator.addValidation(
    "tables[" + f_id + "][SORT_ORDER]",
    "num",
<<<<<<< HEAD
    "Renditja lejon vetëm vlerë numerike"
=======
    "Sort Order allows only numeric value"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
  );
}

function formcheck_student_studentField_F1_defalut() {
    var type = document.getElementById("type");
    var style = document.getElementById("show_textarea").style;
    // if (type.value == 'textarea')
    //    document.getElementById('tables[new][DEFAULT_SELECTION]').disabled = true;
    // else
    
    if (document.getElementById('tables[new][DEFAULT_SELECTION]')) {
        document.getElementById('tables[new][DEFAULT_SELECTION]').disabled = false;
        document.getElementById('tables[new][DEFAULT_SELECTION]').value = null;
    }

    if (type.value == "textarea" || type.value == "numeric" || type.value == "date" || type.value == "text" || type.value == "radio") {
        if (style.display == "block") {
            document.getElementById("show_textarea").style = "display:none";
            document.getElementById("exmp").style = "display:none";
        }
    } else {
        if (style.display == "none") {
            document.getElementById("show_textarea").style = "display:block";
            document.getElementById("exmp").style = "display:block";
        }
    }

    if(type.value == "codeds") {
<<<<<<< HEAD
        document.getElementById("helpBlock").innerHTML = 'Duhet të vendosni vlerën e kodeve, jo tekstin e plotë. P.sh. nëse opsioni i koduar është \'0|Mirë\', vlera e parazgjedhur do të jetë \'0\' jo \'Mirë\'';
=======
        document.getElementById("helpBlock").innerHTML = 'You need to enter the value of the codes here not the entire text e.g. if the coded option is \'0|Good\' the default value will be \'0\' not \'Good\'';
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
        document.getElementById("exmp").innerHTML = `Example:<br/>0|Good<br/>1|Bad<br/>etc.`;

        if (document.getElementById('tables[new][DEFAULT_SELECTION]')) {
            document.getElementById('tables[new][DEFAULT_SELECTION]').removeAttribute('onkeydown');
            document.getElementById('tables[new][DEFAULT_SELECTION]').removeAttribute('maxlength');
            document.getElementById('tables[new][DEFAULT_SELECTION]').setAttribute('onkeyup', 'checkValidDefaultValue()');
        }
    }
    else if (type.value == 'select' || type.value == 'autos' || type.value == 'edits' || type.value == 'multiple') {
        document.getElementById("helpBlock").innerHTML = 'Default';
        document.getElementById("exmp").innerHTML = `Example:<br/>Good<br/>Bad<br/>etc.`;

        if (document.getElementById('tables[new][DEFAULT_SELECTION]')) {
            document.getElementById('tables[new][DEFAULT_SELECTION]').removeAttribute('onkeydown');
            document.getElementById('tables[new][DEFAULT_SELECTION]').removeAttribute('maxlength');
            document.getElementById('tables[new][DEFAULT_SELECTION]').setAttribute('onkeyup', 'checkValidDefaultValue()');
        }
    }
    // else if (type.value == 'multiple') {
    //     document.getElementById("helpBlock").innerHTML = 'You need to enter the value of the options here not the entire text e.g. if the coded option is \'||Good||\' the default value will be \'Good\' not \'||Good||\'';
    //     document.getElementById("exmp").innerHTML = `Example:<br/>||Good||<br/>||Bad||<br/>etc.`;
    // }
    else if(type.value == "numeric") {
        document.getElementById("helpBlock").innerHTML = 'Default number only';

        if (document.getElementById('tables[new][DEFAULT_SELECTION]')) {
            document.getElementById('tables[new][DEFAULT_SELECTION]').removeAttribute('onkeyup');
            document.getElementById('tables[new][DEFAULT_SELECTION]').removeAttribute('maxlength');
            document.getElementById('tables[new][DEFAULT_SELECTION]').setAttribute('onkeydown', 'return numberOnly(event);');
        }
    }
    else if(type.value == "date") {
        document.getElementById("helpBlock").innerHTML = '';

        if (document.getElementById('tables[new][DEFAULT_SELECTION]')) {
            document.getElementById('tables[new][DEFAULT_SELECTION]').removeAttribute('onkeyup');
            document.getElementById('tables[new][DEFAULT_SELECTION]').removeAttribute('onkeydown');
            document.getElementById('tables[new][DEFAULT_SELECTION]').removeAttribute('maxlength');
        }
    }
    else if(type.value == "radio") {
<<<<<<< HEAD
        document.getElementById("helpBlock").innerHTML = 'Vlera e parazgjedhur duhet të jetë çdo shkronjë (p.sh. \'P\') nëse dëshironi ta mbani kutinë e zgjedhur si parazgjedhje, përndryshe lëre bosh';
=======
        document.getElementById("helpBlock").innerHTML = 'Default value should be any letter (e.g. \'Y\') if you want to keep the checkbox checked by default otherwise keep it blank';
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f

        if (document.getElementById('tables[new][DEFAULT_SELECTION]')) {
            document.getElementById('tables[new][DEFAULT_SELECTION]').removeAttribute('onkeyup');
            document.getElementById('tables[new][DEFAULT_SELECTION]').removeAttribute('onkeydown');
            document.getElementById('tables[new][DEFAULT_SELECTION]').setAttribute('maxlength', '1');
        }
    }
    else {
        document.getElementById("helpBlock").innerHTML = 'Default';

        if (document.getElementById('tables[new][DEFAULT_SELECTION]')) {
            document.getElementById('tables[new][DEFAULT_SELECTION]').removeAttribute('onkeyup');
            document.getElementById('tables[new][DEFAULT_SELECTION]').removeAttribute('onkeydown');
            document.getElementById('tables[new][DEFAULT_SELECTION]').removeAttribute('maxlength');
        }
    }
}

///////////////////////////////////////// Student Field End ////////////////////////////////////////////////////////////

///////////////////////////////////////// Address Field Start //////////////////////////////////////////////////////////

function formcheck_student_addressField_F2() {
  var frmvalidator = new Validator("F2");
  frmvalidator.addValidation(
    "tables[new][TITLE]",
    "req",
<<<<<<< HEAD
    "Ju lutemi vendosni titullin"
=======
    "Please enter the title"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
  );
  frmvalidator.addValidation(
    "values[TITLE]",
    "maxlen=100",
<<<<<<< HEAD
    "Gjatësia maksimale e emrit të shkollës është 100 karaktere"
=======
    "Max length for school name is 100 characters"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
  );

  frmvalidator.addValidation(
    "tables[new][SORT_ORDER]",
    "num",
<<<<<<< HEAD
    "Kodi i renditjes lejon vetëm vlerë numerike"
=======
    "sort order code allows only numeric value"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
  );
}

function formcheck_student_addressField_F1() {
  var frmvalidator = new Validator("F1");
  frmvalidator.addValidation(
    "tables[new][TITLE]",
    "req",
<<<<<<< HEAD
    "Ju lutemi vendosni emrin e fushës"
=======
    "Please enter the field name"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
  );

  frmvalidator.addValidation(
    "tables[new][TYPE]",
    "req",
<<<<<<< HEAD
    "Ju lutemi zgjidhni llojin e të dhënave"
=======
    "Please select the Data type"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
  );

  frmvalidator.addValidation(
    "tables[new][SORT_ORDER]",
    "num",
<<<<<<< HEAD
    "Renditja lejon vetëm vlerë numerike"
=======
    "sort order allows only numeric value"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
  );
}

///////////////////////////////////////// Address Field End ////////////////////////////////////////////////////////////

///////////////////////////////////////// Contact Field Start //////////////////////////////////////////////////////////

function formcheck_student_contactField_F2() {
  var frmvalidator = new Validator("F2");
  frmvalidator.addValidation(
    "tables[new][TITLE]",
    "req",
<<<<<<< HEAD
    "Ju lutemi vendosni titullin"
=======
    "Please enter the title"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
  );
  frmvalidator.addValidation(
    "values[TITLE]",
    "maxlen=100",
<<<<<<< HEAD
    "Gjatësia maksimale e emrit të shkollës është 100 karaktere"
=======
    "Max length for school name is 100 characters"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
  );

  frmvalidator.addValidation(
    "tables[new][SORT_ORDER]",
    "num",
<<<<<<< HEAD
    "Kodi i renditjes lejon vetëm vlerë numerike"
=======
    "sort order code allows only numeric value"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
  );
}

function formcheck_student_contactField_F1() {
  var frmvalidator = new Validator("F1");
  frmvalidator.addValidation(
    "tables[new][TITLE]",
    "req",
<<<<<<< HEAD
    "Ju lutemi vendosni emrin e fushës"
=======
    "Please enter the field name"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
  );

  frmvalidator.addValidation(
    "tables[new][TYPE]",
    "req",
<<<<<<< HEAD
    "Ju lutemi zgjidhni llojin e të dhënave"
=======
    "Please select the data type"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
  );

  frmvalidator.addValidation(
    "tables[new][SORT_ORDER]",
    "num",
<<<<<<< HEAD
    "Renditja lejon vetëm vlerë numerike"
=======
    "sort order allows only numeric value"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
  );
}

function formcheck_user_user(staff_school_chkbox_id) {
  var frmvalidator = new Validator("staff");

  frmvalidator.addValidation(
    "people[FIRST_NAME]",
    "req",
<<<<<<< HEAD
    "Ju lutemi vendosni emrin"
=======
    "Please enter the first name"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
  );

  frmvalidator.addValidation(
    "people[FIRST_NAME]",
    "maxlen=100",
<<<<<<< HEAD
    "Gjatësia maksimale e emrit është 100 karaktere"
=======
    "Max length for first name is 100 characters"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
  );

  frmvalidator.addValidation(
    "people[LAST_NAME]",
    "req",
<<<<<<< HEAD
    "Ju lutemi vendosni mbiemrin"
=======
    "Please enter the Last Name"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
  );

  frmvalidator.addValidation(
    "people[LAST_NAME]",
    "maxlen=100",
<<<<<<< HEAD
    "Gjatësia maksimale e adresës është 100 karaktere"
=======
    "Max length for Address is 100"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
  );
  frmvalidator.addValidation(
    "people[PASSWORD]",
    "password=8",
<<<<<<< HEAD
    "Fjalëkalimi duhet të ketë të paktën 8 karaktere, duke përfshirë të paktën një numër dhe një karakter special"
  );

  //    frmvalidator.addValidation("people[EMAIL]", "email", "Ju lutemi vendosni një email të vlefshëm");
=======
    "Password should be minimum 8 characters with one special character and one number"
  );

  //    frmvalidator.addValidation("people[EMAIL]", "email", "Please enter a valid email");
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
}
function school_check(staff_school_chkbox_id) {
  var chk = "n";
  var err = "T";
  if (staff_school_chkbox_id) {
    for (i = 1; i <= staff_school_chkbox_id; i++) {
      if (document.getElementById("staff_SCHOOLS" + i).checked == true) {
        chk = "y";

        sd = document.getElementById("daySelect1" + i).value;
        sm = document.getElementById("monthSelect1" + i).value;
        sy = document.getElementById("yearSelect1" + i).value;

        ed = document.getElementById("daySelect2" + i).value;
        em = document.getElementById("monthSelect2" + i).value;
        ey = document.getElementById("yearSelect2" + i).value;

        var starDate = new Date(sd + "/" + sm + "/" + sy);
        var endDate = new Date(ed + "/" + em + "/" + ey);
        if (starDate > endDate && endDate != "") {
          err = "S";
        }
      }
    }
  }
  if (chk != "y") {
    var d = $("divErr");
<<<<<<< HEAD
    err = "Ju lutemi caktoni të paktën një shkollë për këtë staf.";
=======
    err = "Please assign at least one school to this staff.";
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    d.innerHTML =
      '<div class="alert alert-danger no-border"><i class="fa fa-info-circle"></i>' +
      err +
      "</div>";
    return false;
  } else if (chk == "y") {
    if (err == "S") {
      var d = $("divErr");
<<<<<<< HEAD
      var err_stardate = "Data e fillimit nuk mund të jetë pas datës së mbarimit.";
=======
      var err_stardate = "Start date cannot be greater than end date.";
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
      d.innerHTML =
        '<div class="alert alert-danger no-border"><i class="fa fa-info-circle"></i>' +
        err_stardate +
        "</div>";
      return false;
    } else {
      return true;
    }
  } else {
    return true;
  }
}
/////////////////////////////////////////  Add User End  ////////////////////////////////////////////////////////////

/////////////////////////////////////////  User Fields Start  //////////////////////////////////////////////////////////

function formcheck_user_userfields_F2(this_DET) {
  var this_button_id = this_DET.id;

  var frmvalidator = new Validator("F2", this_button_id);

  var t_id = document.getElementById("t_id").value;
  frmvalidator.addValidation(
    "tables[" + t_id + "][TITLE]",
    "req",
<<<<<<< HEAD
    "Ju lutemi vendosni titullin"
=======
    "Please enter the title"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
  );

  frmvalidator.addValidation(
    "tables[" + t_id + "][TITLE]",
    "maxlen=50",
<<<<<<< HEAD
    "Gjatësia maksimale e titullit është 100 karaktere"
=======
    "Max length for title is 100"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
  );
  frmvalidator.addValidation(
    "tables[" + t_id + "][SORT_ORDER]",
    "req",
<<<<<<< HEAD
    "Ju lutemi vendosni renditjen"
=======
    "Please enter the sort order"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
  );
  frmvalidator.addValidation(
    "tables[" + t_id + "][SORT_ORDER]",
    "num",
<<<<<<< HEAD
    "Renditja lejon vetëm vlerë numerike"
=======
    "Sort Order allows only numeric value"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
  );
  frmvalidator.addValidation(
    "tables[" + t_id + "][SORT_ORDER]",
    "ma",
<<<<<<< HEAD
    "Renditja duhet të jetë më e madhe se 2"
=======
    "Sort Order  must be greater than 2"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
  );
}
function formcheck_user_stafffields_F2(this_DET) {
  var this_button_id = this_DET.id;

  var frmvalidator = new Validator("F2", this_button_id);

  var t_id = document.getElementById("t_id").value;
  frmvalidator.addValidation(
    "tables[" + t_id + "][TITLE]",
    "req",
<<<<<<< HEAD
    "Ju lutemi vendosni titullin"
=======
    "Please enter the title"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
  );

  frmvalidator.addValidation(
    "tables[" + t_id + "][TITLE]",
    "maxlen=50",
<<<<<<< HEAD
    "Gjatësia maksimale e titullit është 100 karaktere"
=======
    "Max length for title is 100"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
  );
  frmvalidator.addValidation(
    "tables[" + t_id + "][SORT_ORDER]",
    "req",
<<<<<<< HEAD
    "Ju lutemi vendosni renditjen"
=======
    "Please enter the sort order"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
  );
  frmvalidator.addValidation(
    "tables[" + t_id + "][SORT_ORDER]",
    "num",
<<<<<<< HEAD
    "Renditja lejon vetëm vlerë numerike"
=======
    "Sort Order allows only numeric value"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
  );
  frmvalidator.addValidation(
    "tables[" + t_id + "][SORT_ORDER]",
    "ma1",
<<<<<<< HEAD
    "Renditja duhet të jetë më e madhe se 5"
=======
    "Sort Order  must be greater than 5"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
  );
}
function formcheck_user_userfields_F1(this_DET) {
  var this_button_id = this_DET.id;

  var frmvalidator1 = new Validator("F1", this_button_id);

  var f_id = document.getElementById("f_id").value;

  frmvalidator1.addValidation(
    "tables[" + f_id + "][TITLE]",
    "req",
<<<<<<< HEAD
    "Ju lutemi vendosni emrin e fushës"
=======
    "Please enter the field Name"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
  );
  frmvalidator1.addValidation(
    "tables[" + f_id + "][TITLE]",
    "req",
<<<<<<< HEAD
    "Emri i fushës lejon vetëm karaktere alfanumerike"
=======
    "Field name allows only alphanumeric value"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
  );
  frmvalidator1.addValidation(
    "tables[" + f_id + "][TITLE]",
    "maxlen=50",
<<<<<<< HEAD
    "Gjatësia maksimale e emrit të fushës është 100 karaktere"
=======
    "Max length for Field Name is 100"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
  );

  frmvalidator1.addValidation(
    "tables[" + f_id + "][SORT_ORDER]",
    "num",
<<<<<<< HEAD
    "Renditja lejon vetëm vlerë numerike"
=======
    "sort order allows only numeric value"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
  );
}

function formcheck_schoolfields(this_DET) {
  var this_button_id = this_DET.id;

  var frmvalidator1 = new Validator("SF1");

  if (document.getElementById("custom")) {
    var custom_id = document.getElementById("custom").value;
    frmvalidator1.addValidation(
      "tables[" + custom_id + "][TITLE]",
      "req",
<<<<<<< HEAD
      "Ju lutemi vendosni emrin e fushës"
=======
      "Please enter the field name"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );
    frmvalidator1.addValidation(
      "tables[" + custom_id + "][TITLE]",
      "alnum",
<<<<<<< HEAD
      "Emri i fushës lejon vetëm karaktere alfanumerike"
=======
      "Field name allows only alphanumeric value"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );
    frmvalidator1.addValidation(
      "tables[" + custom_id + "][TITLE]",
      "maxlen=50",
<<<<<<< HEAD
      "Gjatësia maksimale e emrit të fushës është 100 karaktere"
=======
      "Max length for Field Name is 100"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );
    frmvalidator1.addValidation(
      "tables[" + custom_id + "][SORT_ORDER]",
      "num",
<<<<<<< HEAD
      "Renditja lejon vetëm vlerë numerike"
=======
      "sort order allows only numeric value"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );
  } else {
    frmvalidator1.addValidation(
      "tables[new][TITLE]",
      "req",
<<<<<<< HEAD
      "Ju lutemi vendosni emrin e fushës"
=======
      "Please enter the field name"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );
    frmvalidator1.addValidation(
      "tables[new][TITLE]",
      "alnum",
<<<<<<< HEAD
      "Emri i fushës lejon vetëm karaktere alfanumerike"
=======
      "Field name allows only alphanumeric value"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );
    frmvalidator1.addValidation(
      "tables[new][TITLE]",
      "maxlen=50",
<<<<<<< HEAD
      "Gjatësia maksimale e emrit të fushës është 100 karaktere"
=======
      "Max length for Field Name is 100"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );
    frmvalidator1.addValidation(
      "tables[new][SORT_ORDER]",
      "num",
<<<<<<< HEAD
      "Renditja lejon vetëm vlerë numerike"
=======
      "sort order allows only numeric value"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );
  }
}

/////////////////////////////////////////  User Fields End  ////////////////////////////////////////////////////////////

/////////////////////////////////////////  User End  ////////////////////////////////////////////////////////////

//////////////////////////////////////// scheduling start ///////////////////////////////////////////////////////

//////////////////////////////////////// Course start ///////////////////////////////////////////////////////

function formcheck_scheduling_course_F4() {
  var frmvalidator = new Validator("F4");
  frmvalidator.addValidation(
    "tables[course_subjects][new][TITLE]",
    "req",
<<<<<<< HEAD
    "Ju lutemi vendosni titullin"
=======
    "Please enter the title"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
  );
  frmvalidator.addValidation(
    "tables[course_subjects][new][TITLE]",
    "maxlen=100",
<<<<<<< HEAD
    "Gjatësia maksimale e titullit është 100 karaktere"
=======
    "Max length for title is 100"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
  );
}

function formcheck_scheduling_course_F3() {
  var frmvalidator = new Validator("F3");

  var course_id = document.getElementById("course_id_div").value;
  if (course_id == "new") {
    frmvalidator.addValidation(
      "tables[courses][new][TITLE]",
      "req",
<<<<<<< HEAD
      "Ju lutemi vendosni emrin e lëndës"
=======
      "Please enter the course name "
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );
    frmvalidator.addValidation(
      "tables[courses][new][TITLE]",
      "maxlen=100",
<<<<<<< HEAD
      "Gjatësia maksimale e lëndës është 100 karaktere"
=======
      "Max length for course is 100 characters "
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );
    frmvalidator.addValidation(
      "tables[courses][new][SHORT_NAME]",
      "maxlen=50",
<<<<<<< HEAD
      "Gjatësia maksimale e lëndës është 50 karaktere"
=======
      "Max length for course is 50 characters "
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );
  } else {
    frmvalidator.addValidation(
      "inputtables[courses][" + course_id + "][TITLE]",
      "req",
<<<<<<< HEAD
      "Ju lutemi vendosni emrin e lëndës"
=======
      "Please enter the course name "
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );
    frmvalidator.addValidation(
      "inputtables[courses][" + course_id + "][TITLE]",
      "maxlen=100",
<<<<<<< HEAD
      "Gjatësia maksimale e lëndës është 100 karaktere"
=======
      "Max length for course is 100 characters "
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );
    frmvalidator.addValidation(
      "inputtables[courses][" + course_id + "][SHORT_NAME]",
      "maxlen=100",
<<<<<<< HEAD
      "Gjatësia maksimale e lëndës është 100 karaktere"
=======
      "Max length for course is 100 characters "
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );
  }
}

function formcheck_scheduling_course_F2() {
  var count;
  var check = 0;
  if (
    document.getElementById("get_status").value == "false" &&
    document.getElementById("cp_id").value != "new" &&
    document.getElementById("cp_period")
  ) {
    document.getElementById("divErr").innerHTML =
<<<<<<< HEAD
      '<div class="alert alert-danger no-border"><i class="fa fa-info-circle"></i> Nuk mund të merret prezenca në këtë orë</div>';
=======
      '<div class="alert alert-danger no-border"><i class="fa fa-info-circle"></i> Cannot take attendance in this period</div>';
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f

    return false;
  }
  for (count = 1; count <= 7; count++) {
    if (document.getElementById("DAYS" + count).checked == true) check++;
  }
  if (check == 0) {
    document.getElementById("display_meeting_days_chk").innerHTML =
<<<<<<< HEAD
      '<div class="alert alert-danger no-border"><i class="fa fa-info-circle"></i> Ju lutemi zgjidhni të paktën një ditë</div>';
=======
      '<div class="alert alert-danger no-border"><i class="fa fa-info-circle"></i> Please select atleast one day</div>';
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    document.getElementById("DAYS1").focus();
    return false;
  } else if (
    document.getElementById("cp_use_standards").checked == true &&
    document.getElementById("cp_standard_scale").value == ""
  ) {
    document.getElementById("display_meeting_days_chk").innerHTML =
<<<<<<< HEAD
      '<div class="alert alert-danger no-border"><i class="fa fa-info-circle"></i> Ju lutemi zgjidhni shkallën standarde të notimit</div>';
=======
      '<div class="alert alert-danger no-border"><i class="fa fa-info-circle"></i> Please select standard grade scale</div>';
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    document.getElementById("cp_standard_scale").focus();
    return false;
  } else {
    var frmvalidator = new Validator("F2");
    frmvalidator.addValidation(
      "tables[course_periods][new][SHORT_NAME]",
      "req",
<<<<<<< HEAD
      "Ju lutemi vendosni emrin e shkurtër"
=======
      "Please enter the short name"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );
    frmvalidator.addValidation(
      "tables[course_periods][new][SHORT_NAME]",
      "maxlen=20",
<<<<<<< HEAD
      "Gjatësia maksimale e emrit të shkurtër është 20 karaktere"
=======
      "Max length for short name is 20"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );

    frmvalidator.addValidation(
      "tables[course_periods][new][TEACHER_ID]",
      "req",
<<<<<<< HEAD
      "Ju lutemi zgjidhni mësuesin"
=======
      "Please select the teacher"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );

    frmvalidator.addValidation(
      "tables[course_periods][new][ROOM]",
      "req",
<<<<<<< HEAD
      "Ju lutemi vendosni klasën/sallën"
=======
      "Please enter the Room"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );
    frmvalidator.addValidation(
      "tables[course_periods][new][ROOM]",
      "maxlen=10",
<<<<<<< HEAD
      "Gjatësia maksimale për sallën është 10 karaktere"
=======
      "Max length for room is 10"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );

    frmvalidator.addValidation(
      "tables[course_periods][new][PERIOD_ID]",
      "req",
<<<<<<< HEAD
      "Ju lutemi zgjidhni orën/periudhën"
=======
      "Please select the period"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );
    frmvalidator.addValidation(
      "tables[course_periods][new][MARKING_PERIOD_ID]",
      "req",
<<<<<<< HEAD
      "Ju lutemi zgjidhni periudhën e vlerësimit"
=======
      "Please select marking period"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );
    frmvalidator.addValidation(
      "tables[course_periods][new][TOTAL_SEATS]",
      "req",
<<<<<<< HEAD
      "Ju lutemi vendosni numrin total të vendeve"
=======
      "Please input total seats"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );
    frmvalidator.addValidation(
      "tables[course_periods][new][TOTAL_SEATS]",
      "maxlen=10",
<<<<<<< HEAD
      "Gjatësia maksimale për vendet është 10 shifra"
=======
      "Max length for seats is 10"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );
  }
}

function validate_course_period(this_DET = false) {
  // var this_button_id = this_DET.id;

  var frmvalidator = new Validator("F2");

  var hidden_cp_id = document.getElementById("hidden_cp_id").value;

  if (hidden_cp_id != "new")
    frmvalidator.addValidation(
      "tables[course_periods][" + hidden_cp_id + "][SHORT_NAME]",
      "req",
<<<<<<< HEAD
      "Ju lutemi vendosni emrin e shkurtër"
=======
      "Please enter the short name"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );
  else
    frmvalidator.addValidation(
      "tables[course_periods][new][SHORT_NAME]",
      "req",
<<<<<<< HEAD
      "Ju lutemi vendosni emrin e shkurtër"
=======
      "Please enter the short name"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );
  if (hidden_cp_id != "new") {
    frmvalidator.addValidation(
      "tables[course_periods][" + hidden_cp_id + "][TOTAL_SEATS]",
      "num",
<<<<<<< HEAD
      "Numri total i vendeve lejon vetëm vlerë numerike"
=======
      "Total Seats allows only numeric value"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );
    if (
      document.getElementById(
        "inputtables[course_periods][" + hidden_cp_id + "][TOTAL_SEATS]"
      ) &&
      document.getElementById(
        "inputtables[course_periods][" + hidden_cp_id + "][TOTAL_SEATS]"
      ).value == 0
    ) {
      document.getElementById("divErr").innerHTML =
<<<<<<< HEAD
        '<div class="alert alert-danger no-border"><i class="fa fa-info-circle"></i> Numri total i vendeve nuk mund të jetë 0.</div>';
=======
        '<div class="alert alert-danger no-border"><i class="fa fa-info-circle"></i> Total Seat cannot be 0.</div>';
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
      return false;
    }
    if (
      document.getElementById(
        "inputtables[course_periods][" + hidden_cp_id + "][TOTAL_SEATS]"
      ).value == ""
    )
      frmvalidator.addValidation(
        "tables[course_periods][" + hidden_cp_id + "][TOTAL_SEATS]",
        "req",
<<<<<<< HEAD
        "Numri total i vendeve nuk mund të jetë bosh ose '0'."
=======
        "Total Seat cannot be blank or '0'."
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
      );
  } else {
    frmvalidator.addValidation(
      "tables[course_periods][new][TOTAL_SEATS]",
      "num",
<<<<<<< HEAD
      "Numri total i vendeve lejon vetëm vlerë numerike"
=======
      "Total Seats allows only numeric value"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );
  }

  frmvalidator.addValidation(
    "tables[course_periods][new][SHORT_NAME]",
    "maxlen=20",
<<<<<<< HEAD
    "Gjatësia maksimale e emrit të shkurtër është 20 karaktere"
=======
    "Max length for short name is 20"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
  );

  frmvalidator.addValidation(
    "tables[course_periods][new][TEACHER_ID]",
    "req",
<<<<<<< HEAD
    "Ju lutemi zgjidhni mësuesin"
=======
    "Please select the teacher"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
  );
  frmvalidator.setAddnlValidationFunction("validate_cp_other_fields");
  frmvalidator.addValidation(
    "tables[course_periods][new][ROOM_ID]",
    "req",
<<<<<<< HEAD
    "Ju lutemi vendosni klasën/sallën"
=======
    "Please enter the Room"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
  );
  frmvalidator.addValidation(
    "tables[course_periods][new][ROOM_ID]",
    "maxlen=10",
<<<<<<< HEAD
    "Gjatësia maksimale për sallën është 10 karaktere"
=======
    "Max length for room is 10"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
  );
  if (hidden_cp_id != "new")
    frmvalidator.addValidation(
      "tables[course_period_var][" + hidden_cp_id + "][ROOM_ID]",
      "req",
<<<<<<< HEAD
      "Ju lutemi vendosni klasën/sallën"
=======
      "Please enter the Room"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );
  else
    frmvalidator.addValidation(
      "tables[course_period_var][new][ROOM_ID]",
      "req",
<<<<<<< HEAD
      "Ju lutemi vendosni klasën/sallën"
=======
      "Please enter the Room"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );
  frmvalidator.addValidation(
    "tables[course_periods][new][CALENDAR_ID]",
    "req",
<<<<<<< HEAD
    "Ju lutemi zgjidhni kalendarin"
=======
    "Please select the calendar"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
  );
  if (hidden_cp_id != "new") {
    frmvalidator.addValidation(
      "tables[course_period_var][" + hidden_cp_id + "][PERIOD_ID]",
      "req",
<<<<<<< HEAD
      "Ju lutemi vendosni orën/periudhën"
=======
      "Please enter the Period"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );
  } else {
    frmvalidator.addValidation(
      "tables[course_period_var][new][PERIOD_ID]",
      "req",
<<<<<<< HEAD
      "Ju lutemi vendosni orën/periudhën"
=======
      "Please enter the Period"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );
  }

  frmvalidator.addValidation(
    "tables[course_periods][new][TOTAL_SEATS]",
    "req",
<<<<<<< HEAD
    "Ju lutemi vendosni numrin total të vendeve"
=======
    "Please input total seats"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
  );
  frmvalidator.addValidation(
    "tables[course_periods][new][TOTAL_SEATS]",
    "count_check",
<<<<<<< HEAD
    "Numri total i vendeve nuk mund të jetë 0"
=======
    "Total seats cannot be 0"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
  );
  frmvalidator.addValidation(
    "tables[course_periods][new][TOTAL_SEATS]",
    "maxlen=10",
<<<<<<< HEAD
    "Gjatësia maksimale për vendet është 10 shifra"
=======
    "Max length for seats is 10"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
  );
  if (document.getElementById("variable").value == "VARIABLE") {
    frmvalidator.addValidation(
      "course_period_variable[new][DAYS]",
      "req",
<<<<<<< HEAD
      "Ju lutemi zgjidhni një ditë"
=======
      "Please select a day"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );
    frmvalidator.addValidation(
      "course_period_variable[new][PERIOD_ID]",
      "req",
<<<<<<< HEAD
      "Ju lutemi zgjidhni orën/periudhën"
=======
      "Please select a period"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );
    if (hidden_cp_id != "new") {
      var id_for_room = document.getElementById("for_editing_room").value;
      frmvalidator.addValidation(
        "course_period_variable[" +
          hidden_cp_id +
          "][" +
          id_for_room +
          "][ROOM_ID]",
        "req",
<<<<<<< HEAD
        "Ju lutemi zgjidhni klasën/sallën"
=======
        "Please select a room"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
      );
    } else
      frmvalidator.addValidation(
        "course_period_variable[new][ROOM_ID]",
        "req",
<<<<<<< HEAD
        "Ju lutemi zgjidhni klasën/sallën"
=======
        "Please select a room"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
      );
  }

  return true;
}


function validate_cp_teacher_fields()
{
  var hd_cp_id = document.getElementById("hidden_cp_id").value;
  if(hd_cp_id != 'new')
  {
    if(document.getElementsByName("tables[course_periods][" + hd_cp_id + "][SECONDARY_TEACHER_ID]")[0] && document.getElementsByName("tables[course_periods][" + hd_cp_id + "][SECONDARY_TEACHER_ID]")[0].value!="")
    {
        var secondary_teacher = document.getElementsByName("tables[course_periods][" + hd_cp_id + "][SECONDARY_TEACHER_ID]")[0].value;
    }
    else
    {
        var secondary_teacher = document.getElementById("hidden_secondary_teacher_id").value;
    }

    if(document.getElementsByName("tables[course_periods][" + hd_cp_id + "][TEACHER_ID]")[0] && document.getElementsByName("tables[course_periods][" + hd_cp_id + "][TEACHER_ID]")[0].value!="")
    {
        var primary_teacher = document.getElementsByName("tables[course_periods][" + hd_cp_id + "][TEACHER_ID]")[0].value;
    }
    else
    {
        var primary_teacher = document.getElementById("hidden_primary_teacher_id").value;
    }
    //alert(primary_teacher + "=====" + secondary_teacher);
    if(primary_teacher == secondary_teacher)
    {
<<<<<<< HEAD
        document.getElementById("divErr").innerHTML = '<div class="alert alert-danger no-border"><i class="fa fa-info-circle"></i> Mësuesi kryesor dhe ai ndihmës nuk mund të jenë i njëjti person</div>';
=======
        document.getElementById("divErr").innerHTML = '<div class="alert alert-danger no-border"><i class="fa fa-info-circle"></i> Primary and Secondary teacher cannot be same</div>';
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
        window.$("#save_cp").attr("disabled", true);
        window.$("#save_cps").attr("disabled", true);
    }
    else
    {
        document.getElementById("divErr").innerHTML = '';
        window.$("#save_cp").attr("disabled", false);
        window.$("#save_cps").attr("disabled", false);
    }
  }
  else
  {
    var primary_teacher = document.getElementsByName("tables[course_periods][new][TEACHER_ID]")[0].value;
    var secondary_teacher = document.getElementsByName("tables[course_periods][new][SECONDARY_TEACHER_ID]")[0].value;
    if(primary_teacher == secondary_teacher)
    {
<<<<<<< HEAD
        document.getElementById("divErr").innerHTML = '<div class="alert alert-danger no-border"><i class="fa fa-info-circle"></i> Mësuesi kryesor dhe ai ndihmës nuk mund të jenë i njëjti person</div>';
=======
        document.getElementById("divErr").innerHTML = '<div class="alert alert-danger no-border"><i class="fa fa-info-circle"></i> Primary and Secondary teacher cannot be same</div>';
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
        window.$("#save_cp").attr("disabled", true);
        window.$("#save_cps").attr("disabled", true);
    }
    else
    {
        document.getElementById("divErr").innerHTML = '';
        window.$("#save_cp").attr("disabled", false);
        window.$("#save_cps").attr("disabled", false);
    }
  }
}


function validate_block_schedule(option) {
  if (document.getElementById("hidden_period_block").value == "") {
    document.getElementById("block_error").innerHTML =
<<<<<<< HEAD
      '<div class="alert alert-danger no-border"><i class="fa fa-info-circle"></i> Ju lutemi zgjidhni orën/periudhën.</div>';
=======
      '<div class="alert alert-danger no-border"><i class="fa fa-info-circle"></i> Please select a period.</div>';
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    document.getElementById("_period").focus();
    return false;
  }
  if (document.getElementById("_room").value == "") {
    document.getElementById("block_error").innerHTML =
<<<<<<< HEAD
      '<div class="alert alert-danger no-border"><i class="fa fa-info-circle"></i> Ju lutemi zgjidhni klasën/sallën</div>';
=======
      '<div class="alert alert-danger no-border"><i class="fa fa-info-circle"></i> Please select a room</div>';
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    document.getElementById("_room").focus();
    return false;
  }
}
function validate_cp_other_fields() {
  if (
    document.getElementById("fixed_schedule").checked == false &&
    document.getElementById("variable_schedule").checked == false &&
    document.getElementById("blocked_schedule").checked == false
  ) {
    document.getElementById("divErr").innerHTML =
<<<<<<< HEAD
      '<div class="alert alert-danger no-border"><i class="fa fa-info-circle"></i> Ju lutemi zgjidhni llojin e orarit.</div>';
=======
      '<div class="alert alert-danger no-border"><i class="fa fa-info-circle"></i> Please select schedule type.</div>';
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    document.getElementById("fixed_schedule").focus();
    return false;
  }
  if (
    document.getElementById("preset").checked == false &&
    document.getElementById("custom").checked == false
  ) {
    document.getElementById("divErr").innerHTML =
<<<<<<< HEAD
      '<div class="alert alert-danger no-border"><i class="fa fa-info-circle"></i> Ju lutemi zgjidhni periudhën e vlerësimit or custom date range.</div>';
=======
      '<div class="alert alert-danger no-border"><i class="fa fa-info-circle"></i> Please select marking period or custom date range.</div>';
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    document.getElementById("preset").focus();
    return false;
  }
  if (document.getElementById("custom").checked == true) {
    if (
      document.getElementById("monthSelect_date_1").value == "" ||
      document.getElementById("daySelect_date_1").value == "" ||
      document.getElementById("yearSelect_date_1").value == ""
    ) {
      document.getElementById("divErr").innerHTML =
<<<<<<< HEAD
        '<div class="alert alert-danger no-border"><i class="fa fa-info-circle"></i> Ju lutemi vendosni një datë të vlefshme fillimi.</div>';
=======
        '<div class="alert alert-danger no-border"><i class="fa fa-info-circle"></i> Please input a valid starting date.</div>';
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
      document.getElementById("custom").focus();
      return false;
    }
    if (
      document.getElementById("monthSelect_date_2").value == "" ||
      document.getElementById("daySelect_date_2").value == "" ||
      document.getElementById("yearSelect_date_2").value == ""
    ) {
      document.getElementById("divErr").innerHTML =
<<<<<<< HEAD
        '<div class="alert alert-danger no-border"><i class="fa fa-info-circle"></i> Ju lutemi vendosni një datë të vlefshme mbarimi.</div>';
=======
        '<div class="alert alert-danger no-border"><i class="fa fa-info-circle"></i> Please input a valid ending date.</div>';
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
      document.getElementById("custom").focus();
      return false;
    }
  }
  if (
    document.getElementById("preset").checked == true &&
    document.getElementById("marking_period").value == ""
  ) {
    document.getElementById("divErr").innerHTML =
<<<<<<< HEAD
      '<div class="alert alert-danger no-border"><i class="fa fa-info-circle"></i> Ju lutemi zgjidhni periudhën e vlerësimit.</div>';
=======
      '<div class="alert alert-danger no-border"><i class="fa fa-info-circle"></i> Please select marking period.</div>';
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    document.getElementById("marking_period").focus();
    return false;
  }
  if (document.getElementById("fixed_schedule").checked == true) {
    var a = document.getElementById("course_period_day_checked");
    a.value = "";
    var inputs = document.getElementsByTagName("input");
    var cp_id = document.getElementById("cp_id").value;
    var no_checkbox = 0;
    for (var i = 0; i < inputs.length; i++) {
      if (inputs[i].type == "checkbox") {
        if (
          inputs[i].name ==
            "tables[course_period_var][" + cp_id + "][DAYS][U]" ||
          inputs[i].name ==
            "tables[course_period_var][" + cp_id + "][DAYS][M]" ||
          inputs[i].name ==
            "tables[course_period_var][" + cp_id + "][DAYS][T]" ||
          inputs[i].name ==
            "tables[course_period_var][" + cp_id + "][DAYS][W]" ||
          inputs[i].name ==
            "tables[course_period_var][" + cp_id + "][DAYS][H]" ||
          inputs[i].name ==
            "tables[course_period_var][" + cp_id + "][DAYS][F]" ||
          inputs[i].name == "tables[course_period_var][" + cp_id + "][DAYS][S]"
        ) {
          no_checkbox = no_checkbox + 1;
          if (inputs[i].checked) {
            a.value = "1";
            break;
          }
        }
      } else no_checkbox = no_checkbox + 0;
    }
    if (no_checkbox == 0) a.value = "1";
    if (a.value.trim() == "") {
      document.getElementById("divErr").innerHTML =
<<<<<<< HEAD
        '<div class="alert alert-danger no-border"><i class="fa fa-info-circle"></i> Ju duhet të zgjidhni të paktën 1 ditë.</div>';
=======
        '<div class="alert alert-danger no-border"><i class="fa fa-info-circle"></i> You must select at least 1 day.</div>';
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
      return false;
    }
  } else return true;
}

///////////////////////////////////////// Course End ////////////////////////////////////////////////////////

//////////////////////////////////////// scheduling End ///////////////////////////////////////////////////////

//////////////////////////////////////// Grade Start ///////////////////////////////////////////////////////

function formcheck_grade_grade(this_DET) {
  var this_button_id = this_DET.id;

  var grade_id = document.getElementById("h1").value;

  var frmvalidator = new Validator("F1", this_button_id);

  if (document.getElementById("values[new][GP_SCALE]")) {
    if (
      (document.getElementById("values[new][GP_SCALE]") &&
        document.getElementById("values[new][GP_SCALE]").value != "") ||
      (document.getElementById("values[new][COMMENT]") &&
        document.getElementById("values[new][COMMENT]").value != "") ||
      (document.getElementById("values[new][SORT_ORDER]") &&
        document.getElementById("values[new][SORT_ORDER]").value != "")
    ) {
      frmvalidator.addValidation(
        "values[new][TITLE]",
        "req",
<<<<<<< HEAD
        "Shkalla e notimit nuk mund të jetë bosh"
=======
        "Gradescale cannot be blank"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
      );
    }
  }

  if (document.getElementById("values[new][BREAK_OFF]")) {
    if (
      (document.getElementById("values[new][BREAK_OFF]") &&
        document.getElementById("values[new][BREAK_OFF]").value != "") ||
      (document.getElementById("values[new][GPA_VALUE]") &&
        document.getElementById("values[new][GPA_VALUE]").value != "") ||
      (document.getElementById("values[new][UNWEIGHTED_GP]") &&
        document.getElementById("values[new][UNWEIGHTED_GP]").value != "") ||
      (document.getElementById("values[new][SORT_ORDER]") &&
        document.getElementById("values[new][SORT_ORDER]").value != "") ||
      (document.getElementById("values[new][COMMENT]") &&
        document.getElementById("values[new][COMMENT]").value != "")
    ) {
      frmvalidator.addValidation(
        "values[new][TITLE]",
        "req",
<<<<<<< HEAD
        "Titulli nuk mund të jetë bosh"
=======
        "Title cannot be blank"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
      );
    }
  }

  frmvalidator.addValidation(
    "values[new][SHORT_NAME]",
    "maxlen=50",
<<<<<<< HEAD
    "Gjatësia maksimale e emrit të shkurtër është 50 karaktere"
=======
    "Max length for short name is 50"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
  );
  frmvalidator.addValidation(
    "values[new][SORT_ORDER]",
    "num",
<<<<<<< HEAD
    "Renditja lejon vetëm vlerë numerike"
=======
    "Sort order allows only numeric value"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
  );
  frmvalidator.addValidation(
    "values[new][SORT_ORDER]",
    "maxlen=5",
<<<<<<< HEAD
    "Gjatësia maksimale e renditjes është 5 shifra"
=======
    "Max length for sort order is 5"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
  );

  if (
    document.getElementById("title") &&
    document.getElementById("title").value != ""
  ) {
    frmvalidator.addValidation(
      "values[new][GP_SCALE]",
      "req",
<<<<<<< HEAD
      "Vlera e shkallës nuk mund të jetë bosh"
=======
      "Scale value cannot be blank"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );

    frmvalidator.addValidation(
      "values[new][GP_SCALE]",
      "num",
<<<<<<< HEAD
      "Ju lutemi vendosni vetëm vlerë numerike"
=======
      "Please enter numeric value"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );
  }

  if (
    document.getElementById("values[new][TITLE]") &&
    document.getElementById("values[new][TITLE]").value != ""
  ) {
    frmvalidator.addValidation(
      "values[new][BREAK_OFF]",
      "req",
<<<<<<< HEAD
      "Pragu minimal nuk mund të jetë bosh"
=======
      "Break off cannot be blank"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );
    frmvalidator.addValidation(
      "values[new][BREAK_OFF]",
      "num",
<<<<<<< HEAD
      "Pragu minimal lejon vetëm vlerë numerike"
=======
      "Break off allows only numeric value"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );

    frmvalidator.addValidation(
      "values[new][GPA_VALUE]",
      "dec",
<<<<<<< HEAD
      "Ju lutemi vendosni vlerë dhjetore"
=======
      "Please enter decimal value"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );

    frmvalidator.addValidation(
      "values[new][UNWEIGHTED_GP]",
      "dec",
<<<<<<< HEAD
      "Ju lutemi vendosni vlerë dhjetore"
=======
      "Please enter decimal value"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );
    if (document.getElementById("values[new][GP_SCALE]")) {
      frmvalidator.addValidation(
        "values[new][GP_SCALE]",
        "req",
<<<<<<< HEAD
        "Vlera e shkallës nuk mund të jetë bosh"
      );

      // frmvalidator.addValidation("values[new][GP_SCALE]", "num", "Ju lutemi vendosni vetëm vlerë numerike");
      frmvalidator.addValidation(
        "values[new][GP_SCALE]",
        "dec",
        "Ju lutemi vendosni vlerë dhjetore"
=======
        "Scale value cannot be blank"
      );

      // frmvalidator.addValidation("values[new][GP_SCALE]", "num", "Please enter numeric value");
      frmvalidator.addValidation(
        "values[new][GP_SCALE]",
        "dec",
        "Please enter decimal value"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
      );
    }
  }
  var grade_id = document.getElementById("h1").value;
  if (grade_id != "") {
    var id = grade_id;
    var ar = id.split(",");

    for (i = 0; i <= ar.length - 1; i++) {
      if (document.getElementById("inputvalues[" + ar[i] + "][TITLE]")) {
        frmvalidator.addValidation(
          "values[" + ar[i] + "][TITLE]",
          "req",
<<<<<<< HEAD
          "Titulli nuk mund të jetë bosh"
=======
          "Title cannot be blank"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
        );
      }
      if (document.getElementById("inputvalues[" + ar[i] + "][BREAK_OFF]")) {
        frmvalidator.addValidation(
          "values[" + ar[i] + "][BREAK_OFF]",
          "num",
<<<<<<< HEAD
          "Pragu minimal lejon vetëm vlerë numerike"
=======
          "Break off allows only numeric value"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
        );
        frmvalidator.addValidation(
          "values[" + ar[i] + "][BREAK_OFF]",
          "req",
<<<<<<< HEAD
          "Pragu minimal nuk mund të jetë bosh"
=======
          "Break off cannot be blank"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
        );
      }
      if (document.getElementById("inputvalues[" + ar[i] + "][GPA_VALUE]")) {
        frmvalidator.addValidation(
          "values[" + ar[i] + "][GPA_VALUE]",
          "dec",
<<<<<<< HEAD
          "Ju lutemi vendosni vlerë dhjetore"
=======
          "Please enter decimal value"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
        );
      }
      if (
        document.getElementById("inputvalues[" + ar[i] + "][UNWEIGHTED_GP]")
      ) {
        frmvalidator.addValidation(
          "values[" + ar[i] + "][UNWEIGHTED_GP]",
          "dec",
<<<<<<< HEAD
          "Ju lutemi vendosni vlerë dhjetore"
=======
          "Please enter decimal value"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
        );
      }

      if (document.getElementById("inputvalues[" + ar[i] + "][GP_SCALE]")) {
        frmvalidator.addValidation(
          "values[" + ar[i] + "][GP_SCALE]",
          "req",
<<<<<<< HEAD
          "Vlera e shkallës nuk mund të jetë bosh"
=======
          "Scale Value Cannot be blank"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
        );
        frmvalidator.addValidation(
          "values[" + ar[i] + "][GP_SCALE]",
          "dec",
<<<<<<< HEAD
          "Ju lutemi vendosni vlerë dhjetore"
=======
          "Please enter decimal value"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
        );
      }
    }
  }
}
function formcheck_honor_roll(this_DET) {
  var this_button_id = this_DET.id;

  var frmvalidator = new Validator("F1", this_button_id);

  var honor_id = document.getElementById("h1").value;

  if (honor_id != "") {
    var id = honor_id;
    var ar = id.split(",");

    for (i = 0; i <= ar.length - 1; i++) {
      frmvalidator.addValidation(
        "values[" + ar[i] + "][TITLE]",
        "req",
<<<<<<< HEAD
        "Ju lutemi vendosni titullin"
=======
        "Please enter Title"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
      );
      frmvalidator.addValidation(
        "values[" + ar[i] + "][TITLE]",
        "maxlen=50",
<<<<<<< HEAD
        "Gjatësia maksimale e titullit është 50 karaktere"
=======
        "Max length for title is 50"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
      );
      frmvalidator.addValidation(
        "values[" + ar[i] + "][VALUE]",
        "req",
<<<<<<< HEAD
        "Pragu minimal nuk mund të jetë bosh"
=======
        "Breakoff cannot be blank"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
      );
      frmvalidator.addValidation(
        "values[" + ar[i] + "][VALUE]",
        "num",
<<<<<<< HEAD
        "Pragu minimal lejon vetëm vlerë numerike"
=======
        "Breakoff allows only numeric value"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
      );
      frmvalidator.addValidation(
        "values[" + ar[i] + "][VALUE]",
        "maxlen=10",
<<<<<<< HEAD
        "Gjatësia maksimale për pragun është 10 karaktere"
=======
        "Max length for breakoff is 10"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
      );
    }
  }
  if (
    document.getElementById("values[new][TITLE]").value != "" ||
    document.getElementById("values[new][VALUE]").value != ""
  ) {
    frmvalidator.addValidation(
      "values[new][TITLE]",
      "req",
<<<<<<< HEAD
      "Ju lutemi vendosni titullin"
=======
      "Please enter Title"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );
    frmvalidator.addValidation(
      "values[new][TITLE]",
      "maxlen=50",
<<<<<<< HEAD
      "Gjatësia maksimale e titullit është 50 karaktere"
=======
      "Max length for title is 50"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );
    frmvalidator.addValidation(
      "values[new][VALUE]",
      "req",
<<<<<<< HEAD
      "Pragu minimal nuk mund të jetë bosh"
=======
      "Breakoff cannot be blank"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );
    frmvalidator.addValidation(
      "values[new][VALUE]",
      "num",
<<<<<<< HEAD
      "Pragu minimal lejon vetëm vlerë numerike"
=======
      "Breakoff allows only numeric value"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );
    frmvalidator.addValidation(
      "values[new][VALUE]",
      "maxlen=10",
<<<<<<< HEAD
      "Gjatësia maksimale për pragun është 10 karaktere"
=======
      "Max length for breakoff is 10"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );
  }
}

//////////////////////////////////////// Report Card Comment Start ///////////////////////////////////////////////////////

function formcheck_grade_comment(this_DET) {
  var this_button_id = this_DET.id;

  var frmvalidator = new Validator("F1", this_button_id);

  var comment_ids = document.getElementById("comment_ids").value;

  if (comment_ids != "") {
    var id = comment_ids;
    var ar = id.split(",");

    for (i = 0; i <= ar.length - 1; i++) {
      frmvalidator.addValidation(
        "values[" + ar[i] + "][TITLE]",
        "req",
<<<<<<< HEAD
        "Ju lutemi vendosni titullin"
=======
        "Please enter Title"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
      );

      frmvalidator.addValidation(
        "values[" + ar[i] + "][SORT_ORDER]",
        "req",
<<<<<<< HEAD
        "Renditja nuk mund të jetë bosh"
=======
        "Sort order cannot be blank"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
      );
      frmvalidator.addValidation(
        "values[" + ar[i] + "][TITLE]",
        "maxlen=50",
<<<<<<< HEAD
        "Gjatësia maksimale e komentit është 50 karaktere"
=======
        "Max length for Comment is 50"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
      );
    }
  }
  if (
    document.getElementById("values[new][TITLE]").value != "" ||
    document.getElementById("values[new][SORT_ORDER]").value != ""
  ) {
    frmvalidator.addValidation(
      "values[new][SORT_ORDER]",
      "num",
<<<<<<< HEAD
      "ID lejon vetëm shifra"
=======
      "ID allows only numeric value"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );

    frmvalidator.addValidation(
      "values[new][TITLE]",
      "maxlen=50",
<<<<<<< HEAD
      "Gjatësia maksimale e komentit është 50 karaktere"
=======
      "Max length for Comment is 50"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );

    frmvalidator.addValidation(
      "values[new][SORT_ORDER]",
      "req",
      "Sort order is required"
    );
  }
}

////////////////////////////////////////  Report Card Comment End  ///////////////////////////////////////////////////////

//////////////////////////////////////// Grade End ///////////////////////////////////////////////////////

///////////////////////////////////////// Eligibility Start ////////////////////////////////////////////////////

///////// Activities Start/////////////////////////////

function formcheck_eligibility_activies() {
  var month = document.getElementById("monthSelect0").value;
  var day = document.getElementById("daySelect0").value;
  var year = document.getElementById("yearSelect0").value;
  var year_end = document.getElementById("yearSelect500000").value;

  if (
    month.trim() != "" ||
    day.trim() != "" ||
    year.trim() != "" ||
    year_end.trim() != ""
  ) {
    frmvalidator.addValidation(
      "values[new][TITLE]",
      "req",
<<<<<<< HEAD
      "Titulli nuk mund të jetë bosh"
=======
      "Title cannot be blank"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );
    frmvalidator.addValidation(
      "values[new][TITLE]",
      "maxlen=20",
<<<<<<< HEAD
      "Gjatësia maksimale e titullit është 20 karaktere"
=======
      "Max length for Title is 20"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );
  }
  frmvalidator.setAddnlValidationFunction("ValidateDate_eligibility_activies");
}

function ValidateDate_eligibility_activies() {
  var sm, sd, sy, em, ed, ey, psm, psd, psy, pem, ped, pey;
  var frm = document.forms["F1"];
  var elem = frm.elements;
  for (var i = 0; i < elem.length; i++) {
    if (elem[i].name == "month_values[new][START_DATE]") {
      sm = elem[i];
    }

    if (elem[i].name == "day_values[new][START_DATE]") {
      sd = elem[i];
    }

    if (elem[i].name == "year_values[new][START_DATE]") {
      sy = elem[i];
    }

    if (elem[i].name == "month_values[new][END_DATE]") {
      em = elem[i];
    }

    if (elem[i].name == "day_values[new][END_DATE]") {
      ed = elem[i];
    }

    if (elem[i].name == "year_values[new][END_DATE]") {
      ey = elem[i];
    }
  }

  try {
    if (false == CheckDate(sm, sd, sy, em, ed, ey)) {
      em.focus();
      return false;
    }
  } catch (err) {}

  return true;
}

///////////////////////////////////////// Activies End ////////////////////////////////////////////////////

///////////////////////////////////////// Entry Times Start ////////////////////////////////////////////////

function formcheck_eligibility_entrytimes(this_DET) {
  var this_button_id = this_DET.id;

  var frmvalidator = new Validator("F1", this_button_id);

  frmvalidator.setAddnlValidationFunction(
    "ValidateTime_eligibility_entrytimes"
  );
}

function ValidateTime_eligibility_entrytimes() {
  var sd, sh, sm, sp, ed, eh, em, ep, psm, psd, psy, pem, ped, pey;
  var frm = document.forms["F1"];
  var elem = frm.elements;
  for (var i = 0; i < elem.length; i++) {
    if (elem[i].name == "values[START_DAY]") {
      sd = elem[i];
    }
    if (elem[i].name == "values[START_HOUR]") {
      sh = elem[i];
    }
    if (elem[i].name == "values[START_MINUTE]") {
      sm = elem[i];
    }
    if (elem[i].name == "values[START_M]") {
      sp = elem[i];
    }
    if (elem[i].name == "values[END_DAY]") {
      ed = elem[i];
    }
    if (elem[i].name == "values[END_HOUR]") {
      eh = elem[i];
    }
    if (elem[i].name == "values[END_MINUTE]") {
      em = elem[i];
    }
    if (elem[i].name == "values[END_M]") {
      ep = elem[i];
    }
  }

  try {
    if (false == CheckTime(sd, sh, sm, sp, ed, eh, em, ep)) {
      sh.focus();
      return false;
    }
  } catch (err) {}
  try {
    // Perform date validation only if all required date fields are available.
    if (psm && psd && psy && pem && ped && pey && true == isDate(pem, ped, pey)) {
      if (false == CheckDate(psm, psd, psy, pem, ped, pey)) {
        if (pem && typeof pem.focus === "function") {
          pem.focus();
        }
        return false;
      }
    }
  } catch (err) {}

  return true;
}

///////////////////////////////////////// Entry Times End //////////////////////////////////////////////////

function formcheck_mass_drop(this_DET) {
  self_disable(this_DET);
  var this_button_id = this_DET.id;

  if (document.getElementById("course_div").innerHTML == "") {
<<<<<<< HEAD
    alert("Ju lutemi zgjidhni një orë lënde për ta hequr");
=======
    alert("Please choose a course period to drop");
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f

    document.getElementById(this_button_id).disabled = false;

    return false;
  } else {
    // setTimeout(function () {
    //   document.getElementById(this_button_id).disabled = true;
    // }, 50);

    return true;
  }
}

function formcheck_attendance_category(this_DET) {
  var this_button_id = this_DET.id;

  var frmvalidator = new Validator("F1", this_button_id);

  frmvalidator.addValidation(
    "new_category_title",
    "req",
<<<<<<< HEAD
    "Ju lutemi vendosni emrin e kategorisë së vijueshmërisë"
=======
    "Please enter attendance category Name"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
  );
  frmvalidator.addValidation(
    "new_category_title",
    "maxlen=50",
<<<<<<< HEAD
    "Gjatësia maksimale e emrit të kategorisë është 50 karaktere"
=======
    "Max length for category name is 50"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
  );
  frmvalidator.addValidation(
    "new_category_title",
    "alphanumeric",
<<<<<<< HEAD
    "Emri i kategorisë së vijueshmërisë lejon vetëm karaktere alfanumerike"
=======
    "Attendance category Name allows only alphanumeric value"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
  );
}

function formcheck_attendance_codes(this_DET) {
  var this_button_id = this_DET.id;

  var frmvalidator = new Validator("F1");

  var attandance_id = document.getElementById("h1").value;
  if (attandance_id != "") {
    var id = attandance_id;
    var ar = id.split(",");

    for (i = 0; i <= ar.length - 1; i++) {
      frmvalidator.addValidation(
        "values[" + ar[i] + "][TITLE]",
        "req",
<<<<<<< HEAD
        "Titulli nuk mund të jetë bosh"
=======
        "Title cannot be blank"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
      );
      frmvalidator.addValidation(
        "values[" + ar[i] + "][TITLE]",
        "maxlen=50",
<<<<<<< HEAD
        "Gjatësia maksimale e titullit është 50 karaktere"
=======
        "Max length for title is 50 characters"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
      );
      frmvalidator.addValidation(
        "values[" + ar[i] + "][SHORT_NAME]",
        "req",
<<<<<<< HEAD
        "Emri i shkurtër nuk mund të jetë bosh"
=======
        "Short Name cannot be blank"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
      );

      frmvalidator.addValidation(
        "values[" + ar[i] + "][SORT_ORDER]",
        "num",
<<<<<<< HEAD
        "Renditja lejon vetëm vlerë numerike"
=======
        "Short Order allows only numeric value"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
      );
      frmvalidator.setAddnlValidationFunction(formcheck_attendance_codes_extra);
    }
  }

  if (
    (document.getElementById("values[new][SHORT_NAME]") &&
      document.getElementById("values[new][SHORT_NAME]").value != "") ||
    (document.getElementById("values[new][SORT_ORDER]") &&
      document.getElementById("values[new][SORT_ORDER]").value != "")
  ) {
    frmvalidator.addValidation(
      "values[new][TITLE]",
      "req",
<<<<<<< HEAD
      "Titulli nuk mund të jetë bosh"
=======
      "Title cannot be blank"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );
  }
  if (
    (document.getElementsByName("values[new][TYPE]") &&
      document.getElementsByName("values[new][TYPE]")[0].value != "") ||
    (document.getElementsByName("values[new][DEFAULT_CODE]") &&
      document.getElementsByName("values[new][DEFAULT_CODE]")[0].checked ==
        true) ||
    (document.getElementsByName("values[new][STATE_CODE]") &&
      document.getElementsByName("values[new][STATE_CODE]")[0].value != "")
  ) {
    frmvalidator.addValidation(
      "values[new][TITLE]",
      "req",
<<<<<<< HEAD
      "Titulli nuk mund të jetë bosh"
=======
      "Title cannot be blank"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );
  }

  if (document.getElementById("values[new][TITLE]").value.trim() != "") {
    frmvalidator.addValidation(
      "values[new][TITLE]",
      "req",
<<<<<<< HEAD
      "Titulli nuk mund të jetë bosh"
=======
      "Title cannot be blank"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );
    frmvalidator.addValidation(
      "values[new][TITLE]",
      "maxlen=50",
<<<<<<< HEAD
      "Gjatësia maksimale e titullit është 50 karaktere"
=======
      "Max length for title is 50"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );
    frmvalidator.addValidation(
      "values[new][SHORT_NAME]",
      "req",
<<<<<<< HEAD
      "Emri i shkurtër nuk mund të jetë bosh"
=======
      "Short Name cannot be blank"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );

    frmvalidator.addValidation(
      "values[new][SORT_ORDER]",
      "num",
<<<<<<< HEAD
      "Renditja lejon vetëm vlerë numerike"
=======
      "Short Order allows only numeric value"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );
    frmvalidator.setAddnlValidationFunction(formcheck_attendance_codes_extra);
  }
}
function formcheck_attendance_codes_extra() {
  if (document.getElementById("values[new][TITLE]").value.trim() != "") {
    var sel = document.getElementsByTagName("select");
    for (var i = 1; i < sel.length; i++) {
      var inp_name = sel[i].name;
      var inp_value = sel[i].value;
      if (inp_name == "values[new][TYPE]") {
        if (inp_value == "") {
          document.getElementById("divErr").innerHTML =
            '<div class="alert alert-danger no-border"><i class="fa fa-info-circle"></i> ' +
<<<<<<< HEAD
            unescape("Ju lutemi vendosni llojin") +
=======
            unescape("Please enter type") +
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
            "</div>";
          return false;
        }
      } else if (inp_name == "values[new][STATE_CODE]") {
        if (inp_value == "") {
          document.getElementById("divErr").innerHTML =
            '<div class="alert alert-danger no-border"><i class="fa fa-info-circle"></i> ' +
<<<<<<< HEAD
            unescape("Ju lutemi vendosni shtetin/rrethin code") +
=======
            unescape("Please enter state code") +
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
            "</div>";
          return false;
        }
      }
    }
  }
  var count = document.getElementById("count").value.trim();
  for (var j = 1; j <= count; j++) {
    var sel = document.getElementsByTagName("select");
    for (var i = 1; i < sel.length; i++) {
      var inp_name = sel[i].name;
      var inp_value = sel[i].value;
      if (inp_name == "values[" + j + "][TYPE]") {
        if (inp_value == "") {
          document.getElementById("divErr").innerHTML =
            '<div class="alert alert-danger no-border"><i class="fa fa-info-circle"></i> ' +
<<<<<<< HEAD
            unescape("Ju lutemi vendosni llojin") +
=======
            unescape("Please enter type") +
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
            "</div>";
          return false;
        }
      } else if (inp_name == "values[" + j + "][STATE_CODE]") {
        if (inp_value == "") {
          document.getElementById("divErr").innerHTML =
            '<div class="alert alert-danger no-border"><i class="fa fa-info-circle"></i>' +
<<<<<<< HEAD
            unescape("Ju lutemi vendosni shtetin/rrethin code") +
=======
            unescape("Please enter state code") +
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
            "</div>";
          return false;
        }
      }
    }
  }

  return true;
}
function formcheck_failure_count(this_DET) {
  var this_button_id = this_DET.id;

  var frmvalidator = new Validator("failure", this_button_id);

  frmvalidator.addValidation(
    "failure[FAIL_COUNT]",
    "req",
<<<<<<< HEAD
    "Ju lutemi vendosni numërimin"
=======
    "Please enter count"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
  );
  frmvalidator.addValidation(
    "failure[FAIL_COUNT]",
    "num",
<<<<<<< HEAD
    "Numërimi lejon vetëm vlerë numerike"
=======
    "Count allows only numeric value"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
  );
  frmvalidator.addValidation(
    "failure[FAIL_COUNT]",
    "maxlen=5",
<<<<<<< HEAD
    "Gjatësia maksimale e numërimit është 5 shifra"
=======
    "Max length for count order is 5 digits"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
  );
}
//-------------------------------------------------assignments Title Validation Starts---------------------------------------------
function formcheck_assignments(this_DET) {
  var this_button_id = this_DET.id;

  var frmvalidator = new Validator("F3", this_button_id);

  var type_id = document.getElementById("type_id").value;
  var assignment_type_id = document.getElementById("assignment_type_id").value;

  var data = document.getElementsByName(
    "tables[" + assignment_type_id + "][FINAL_GRADE_PERCENT]"
  );
  if(data.length > 0 ){
    data = data[0];
    if (data.value == "") {
      $("#divErr").html(
<<<<<<< HEAD
        '<div class="alert alert-danger no-border"><i class="fa fa-info-circle"></i> Përqindja e peshës nuk mund të jetë bosh</div>'
=======
        '<div class="alert alert-danger no-border"><i class="fa fa-info-circle"></i> Weight Percent cannot be blank</div>'
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
      );
      return false;
    }
    if (data.value <= 0) {
      $("#divErr").html(
<<<<<<< HEAD
        '<div class="alert alert-danger no-border"><i class="fa fa-info-circle"></i> Përqindja e peshës duhet të jetë më e madhe se zero</div>'
=======
        '<div class="alert alert-danger no-border"><i class="fa fa-info-circle"></i> Weight Percent should be greater than zero</div>'
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
      );
      data.value = "";
      data.focus();
      return false;
    }
  } 
  else {
    data = data;
  }

  if (type_id.trim() == "") {
    frmvalidator.addValidation(
      "tables[new][TITLE]",
      "req",
<<<<<<< HEAD
      "Titulli nuk mund të jetë bosh"
=======
      "Title cannot be blank"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );
    frmvalidator.addValidation(
      "tables[new][TITLE]",
      "maxlen=100",
<<<<<<< HEAD
      "Gjatësia maksimale e titullit është 100 karaktere"
=======
      "Max length for title is 100"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );
    frmvalidator.addValidation(
      "tables[new][POINTS]",
      "req",
<<<<<<< HEAD
      "Pikët totale nuk mund të jenë bosh"
=======
      "Total points cannot be blank"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );
    frmvalidator.addValidation(
      "month_tables[new][ASSIGNED_DATE]",
      "req",
<<<<<<< HEAD
      "Data e caktimit nuk mund të jetë bosh"
=======
      "Assigned date cannot be blank"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );
    frmvalidator.addValidation(
      "month_tables[new][DUE_DATE]",
      "req",
<<<<<<< HEAD
      "Data e afatit nuk mund të jetë bosh"
=======
      "Due date cannot be blank"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );
  } else {
    frmvalidator.addValidation(
      "tables[" + type_id + "][TITLE]",
      "req",
<<<<<<< HEAD
      "Titulli nuk mund të jetë bosh"
=======
      "Title cannot be blank"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );
    frmvalidator.addValidation(
      "tables[" + type_id + "][TITLE]",
      "maxlen=100",
<<<<<<< HEAD
      "Gjatësia maksimale e titullit është 100 karaktere"
=======
      "Max length for title is 100"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );
    frmvalidator.addValidation(
      "tables[" + type_id + "][POINTS]",
      "req",
<<<<<<< HEAD
      "Pikët totale nuk mund të jenë bosh"
=======
      "Total points cannot be blank"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );
    frmvalidator.addValidation(
      "month_tables[" + type_id + "][ASSIGNED_DATE]",
      "req",
<<<<<<< HEAD
      "Data e caktimit nuk mund të jetë bosh"
=======
      "Assigned date cannot be blank"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );
    frmvalidator.addValidation(
      "month_tables[" + type_id + "][DUE_DATE]",
      "req",
<<<<<<< HEAD
      "Data e afatit nuk mund të jetë bosh"
=======
      "Due date cannot be blank"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );
  }
  return true;
}
//-------------------------------------------------assignments Title Validation Ends---------------------------------------------

function passwordStrength(password) {
  document.getElementById("passwordStrength").style.display = "none";
  if (document.getElementById("students[USERNAME]")) {
    if (document.getElementById("students[USERNAME]").value == "") {
      document.getElementById("students[PASSWORD]").value = "";
      document.getElementById("students[PASSWORD]").focus;
    }
  }
  var desc = new Array();

  desc[0] = "Very Weak";

  desc[1] = "Weak";

  desc[2] = "Good";

  desc[3] = "Strong";

  desc[4] = "Strongest";

  //if password bigger than 7 give 1 point

  if (password.length > 0) {
    $("#passwordStrength").show();
    $("#passwordStrength")
      .css({ color: "#676767" })
      .html('<i class="icon-notification2"></i> ' + desc[0]);
  }

  //if password has at least one number give 1 point

  if (password.match(/\d+/) && password.length > 5) {
    $("#passwordStrength").show();
    $("#passwordStrength")
      .css({ color: "#f44336" })
      .html('<i class="icon-notification2"></i> ' + desc[1]);
  }

  //if password has at least one special caracther give 1 point

  if (
    password.match(/\d+/) &&
    password.length > 7 &&
    password.match(/.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/)
  ) {
    $("#passwordStrength").show();
    $("#passwordStrength")
      .css({ color: "#ff5722" })
      .html('<i class="icon-checkmark-circle"></i> ' + desc[2]);
  }

  //if password has both lower and uppercase characters give 1 point

  if (
    password.match(/\d+/) &&
    password.length > 10 &&
    password.match(/.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/) &&
    password.match(/[A-Z]/)
  ) {
    $("#passwordStrength").show();
    $("#passwordStrength")
      .css({ color: "#4caf50" })
      .html('<i class="icon-checkmark-circle"></i> ' + desc[3]);
  }

  //if password bigger than 12 give another 1 point

  if (
    password.match(/\d+/) &&
    password.match(/.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/) &&
    password.match(/[a-z]/) &&
    password.match(/[A-Z]/) &&
    password.length > 12
  ) {
    $("#passwordStrength").show();
    $("#passwordStrength")
      .css({ color: "#2e8931" })
      .html('<i class="icon-checkmark-circle"></i> ' + desc[4]);
  }
}

function forgotpasswordStrength(password) {
  document.getElementById("passwordStrength").style.display = "none";

  var desc = new Array();

  desc[0] = "Very Weak";

  desc[1] = "Weak";

  desc[2] = "Good";

  desc[3] = "Strong";

  desc[4] = "Strongest";

  //if password bigger than 7 give 1 point

  if (password.length > 0) {
    //        document.getElementById("passwordStrength").style.display = "block";
    //        document.getElementById("passwordStrength").style.backgroundColor = "#cccccc";
    //        document.getElementById("passwordStrength").innerHTML = desc[0];

    $("#passwordStrength").show();
    $("#passwordStrength")
      .css({ color: "#676767" })
      .html('<i class="icon-notification2"></i> ' + desc[0]);
  }

  //if password has at least one number give 1 point

  if (password.match(/\d+/) && password.length > 5) {
    //        document.getElementById("passwordStrength").style.display = "block";
    //        document.getElementById("passwordStrength").style.backgroundColor = "#ff0000";
    //        document.getElementById("passwordStrength").innerHTML = desc[1];

    $("#passwordStrength").show();
    $("#passwordStrength")
      .css({ color: "#f44336" })
      .html('<i class="icon-notification2"></i> ' + desc[1]);
  }

  //if password has at least one special caracther give 1 point

  if (
    password.match(/\d+/) &&
    password.length > 7 &&
    password.match(/.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/) &&
    password.match(/[A-Z]/)
  ) {
    //        document.getElementById("passwordStrength").style.display = "block";
    //        document.getElementById("passwordStrength").style.backgroundColor = "#ff5f5f";
    //        document.getElementById("passwordStrength").innerHTML = desc[2];

    $("#passwordStrength").show();
    $("#passwordStrength")
      .css({ color: "#ff5722" })
      .html('<i class="icon-checkmark-circle"></i> ' + desc[2]);
  }

  //if password has both lower and uppercase characters give 1 point

  if (
    password.match(/\d+/) &&
    password.length > 10 &&
    password.match(/.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/) &&
    password.match(/[A-Z]/)
  ) {
    //        document.getElementById("passwordStrength").style.display = "block";
    //        document.getElementById("passwordStrength").style.backgroundColor = "#56e500";
    //        document.getElementById("passwordStrength").innerHTML = desc[3];
    //
    $("#passwordStrength").show();
    $("#passwordStrength")
      .css({ color: "#4caf50" })
      .html('<i class="icon-checkmark-circle"></i> ' + desc[3]);
  }

  //if password bigger than 12 give another 1 point

  if (
    password.match(/\d+/) &&
    password.match(/.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/) &&
    password.match(/[a-z]/) &&
    password.match(/[A-Z]/) &&
    password.length > 12
  ) {
    //        document.getElementById("passwordStrength").style.display = "block";
    //        document.getElementById("passwordStrength").style.backgroundColor = "#4dcd00";
    //        document.getElementById("passwordStrength").innerHTML = desc[4];

    $("#passwordStrength").show();
    $("#passwordStrength")
      .css({ color: "#2e8931" })
      .html('<i class="icon-checkmark-circle"></i> ' + desc[4]);
  }
}

function passwordStrengthMod(password, opt) {
  document.getElementById("passwordStrength" + opt).style.display = "none";

  var desc = new Array();

  desc[0] = "Very Weak";

  desc[1] = "Weak";

  desc[2] = "Good";

  desc[3] = "Strong";

  desc[4] = "Strongest";

  //if password bigger than 7 give 1 point

  if (password.length > 0) {
    //        document.getElementById("passwordStrength" + opt).style.display = "block";
    //        document.getElementById("passwordStrength" + opt).style.backgroundColor = "#cccccc";
    //        document.getElementById("passwordStrength" + opt).innerHTML = desc[0];

    $("#passwordStrength" + opt).show();
    $("#passwordStrength" + opt)
      .css({ color: "#676767" })
      .html('<i class="icon-notification2"></i> ' + desc[0]);
  }

  //if password has at least one number give 1 point

  if (password.match(/\d+/) && password.length > 5) {
    //        document.getElementById("passwordStrength" + opt).style.display = "block";
    //        document.getElementById("passwordStrength" + opt).style.backgroundColor = "#ff0000";
    //        document.getElementById("passwordStrength" + opt).innerHTML = desc[1];

    $("#passwordStrength" + opt).show();
    $("#passwordStrength" + opt)
      .css({ color: "#f44336" })
      .html('<i class="icon-notification2"></i> ' + desc[1]);
  }

  //if password has at least one special caracther give 1 point

  if (
    password.match(/\d+/) &&
    password.length > 7 &&
    password.match(/.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/)
  ) {
    //        document.getElementById("passwordStrength" + opt).style.display = "block";
    //        document.getElementById("passwordStrength" + opt).style.backgroundColor = "#ff5f5f";
    //        document.getElementById("passwordStrength" + opt).innerHTML = desc[2];

    $("#passwordStrength" + opt).show();
    $("#passwordStrength" + opt)
      .css({ color: "#ff5722" })
      .html('<i class="icon-checkmark-circle"></i> ' + desc[2]);
  }

  //if password has both lower and uppercase characters give 1 point

  if (
    password.match(/\d+/) &&
    password.length > 10 &&
    password.match(/.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/) &&
    password.match(/[A-Z]/)
  ) {
    //        document.getElementById("passwordStrength" + opt).style.display = "block";
    //        document.getElementById("passwordStrength" + opt).style.backgroundColor = "#56e500";
    //        document.getElementById("passwordStrength" + opt).innerHTML = desc[3];

    $("#passwordStrength" + opt).show();
    $("#passwordStrength" + opt)
      .css({ color: "#4caf50" })
      .html('<i class="icon-checkmark-circle"></i> ' + desc[3]);
  }

  //if password bigger than 12 give another 1 point

  if (
    password.match(/\d+/) &&
    password.match(/.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/) &&
    password.match(/[a-z]/) &&
    password.match(/[A-Z]/) &&
    password.length > 12
  ) {
    //        document.getElementById("passwordStrength" + opt).style.display = "block";
    //        document.getElementById("passwordStrength" + opt).style.backgroundColor = "#4dcd00";
    //        document.getElementById("passwordStrength" + opt).innerHTML = desc[4];

    $("#passwordStrength" + opt).show();
    $("#passwordStrength" + opt)
      .css({ color: "#2e8931" })
      .html('<i class="icon-checkmark-circle"></i> ' + desc[4]);
  }
}
function passwordMatch() {
  document.getElementById("passwordMatch").style.display = "none";
  var new_pass = document.getElementById("new_pass").value;
  var vpass = document.getElementById("ver_pass").value;
  if (new_pass || vpass) {
    if (new_pass == vpass) {
      $("#passwordMatch").show();
      $("#passwordMatch")
        .css({ color: "#4caf50" })
        .html('<i class="icon-notification2"></i> Password Match');
    }
    if (new_pass != vpass && vpass != "") {
      $("#passwordMatch").show();
      $("#passwordMatch")
        .css({ color: "#f44336" })
        .html('<i class="icon-checkmark-circle"></i> Password Mismatch'); //jit
    }
  }
}
function pass_check(this_DET) {
  self_disable(this_DET);
  var this_button_id = this_DET.id;

  var new_pass = document.getElementById("new_pass");

  if (new_pass) {
    if (
      document.getElementById("new_pass").value ==
      document.getElementById("ver_pass").value
    ) {
      var new_pass = document.getElementById("new_pass").value;

      if (
        new_pass.length <= 7 ||
        (new_pass.length > 7 && !new_pass.match(/\d+/)) ||
        (new_pass.length > 7 &&
          !new_pass.match(/.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/))
      ) {
        document.getElementById("divErr").innerHTML =
<<<<<<< HEAD
          '<div class="alert alert-danger no-border"><i class="fa fa-info-circle"></i> Fjalëkalimi duhet të ketë të paktën 8 karaktere, duke përfshirë të paktën një shkronjë të madhe, një numër dhe një karakter special</div>';
=======
          '<div class="alert alert-danger no-border"><i class="fa fa-info-circle"></i> Password must be minimum 8 characters long with at least one capital, one numeric and one special character</div>';
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f

        document.getElementById(this_button_id).disabled = false;

        return false;
      }

      // setTimeout(function () {
      //   document.getElementById(this_button_id).disabled = true;
      // }, 50);

      return true;
    } else {
      document.getElementById("divErr").innerHTML =
        '<div class="alert alert-danger no-border"><i class="fa fa-info-circle"></i> New Password Mismatch</div>'; //jit

      document.getElementById(this_button_id).disabled = false;

      return false;
    }
  }

  // setTimeout(function () {
  //   document.getElementById(this_button_id).disabled = true;
  // }, 50);

  return true;
}

function reenroll() {
  if (
    document.getElementById("monthSelect_date_1").value == "" ||
    document.getElementById("daySelect_date_1").value == "" ||
    document.getElementById("yearSelect_date_1").value == ""
  ) {
    document.getElementById("divErr").innerHTML =
<<<<<<< HEAD
      '<div class="alert alert-danger no-border"><i class="fa fa-info-circle"></i> Ju lutemi vendosni një datë të saktë</div>';
=======
      '<div class="alert alert-danger no-border"><i class="fa fa-info-circle"></i> Please Enter a Proper Date</div>';
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    window.scrollTo({ top: 0, behavior: "smooth" });
    return false;
  }
  if (document.getElementById("grade_id").value == "") {
    document.getElementById("divErr").innerHTML =
<<<<<<< HEAD
      '<div class="alert alert-danger no-border"><i class="fa fa-info-circle"></i> Ju lutemi zgjidhni nivelin e klasës</div>';
=======
      '<div class="alert alert-danger no-border"><i class="fa fa-info-circle"></i> Please Select a Grade Level</div>';
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    window.scrollTo({ top: 0, behavior: "smooth" });
    return false;
  }
  if (document.getElementById("en_code").value == "") {
    document.getElementById("divErr").innerHTML =
<<<<<<< HEAD
      '<div class="alert alert-danger no-border"><i class="fa fa-info-circle"></i> Ju lutemi zgjidhni kodin e regjistrimit</div>';
=======
      '<div class="alert alert-danger no-border"><i class="fa fa-info-circle"></i> Please Select an Enrollment Code</div>';
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    window.scrollTo({ top: 0, behavior: "smooth" });
    return false;
  } else {
    // var x = document.getElementById("sav").elements.length;
    var counter = 0;
    // for (var i = 0; i <= x; i++)
    // {
    //     if (document.getElementById("sav").elements[i])
    //     {
    //         var type = document.getElementById("sav").elements[i].type;
    //         if (type == "checkbox")
    //         {
    //             if (document.getElementById("sav").elements[i])
    //             {
    //                 if (document.getElementById("sav").elements[i].name && document.getElementById("sav").elements[i].name != '')
    //                 {
    //                     if (document.getElementById("sav").elements[i].checked == true)
    //                         counter++;
    //                 }

    //             }
    //         }
    //     }
    // }

    window.$("input[class='re_enroll']:checked").each(function () {
      counter++;
    });

    var checkedValue = [];

    // checkedValue = $('.re_enroll:checked').val();

    window.$(".re_enroll:checked").each(function () {
      checkedValue.push(window.$(this).val());
    });

    window.$("#selected_students").val(checkedValue);

    console.log("Total Checked: " + counter);
    console.log("Checked IDs: " + checkedValue);

    if (counter == 0) {
      document.getElementById("divErr").innerHTML =
<<<<<<< HEAD
        '<div class="alert alert-danger no-border"><i class="fa fa-info-circle"></i> Ju lutemi zgjidhni një nxënës</div>';
=======
        '<div class="alert alert-danger no-border"><i class="fa fa-info-circle"></i> Please select a student</div>';
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
      window.scrollTo({ top: 0, behavior: "smooth" });
      return false;
    } else {
      return true;

      // document.getElementById('sav').submit();
    }
  }
}

function sel_staff_val() {
  var sel_stf_info = document.getElementsByName("staff");
  var ischecked_method = false;
  for (var i = 0; i < sel_stf_info.length; i++) {
    if (sel_stf_info[i].checked) {
      ischecked_method = true;
      break;
    }
  }
  if (!ischecked_method) {
    document.getElementById("sel_err").innerHTML =
<<<<<<< HEAD
      '<div class="alert alert-danger no-border"><i class="fa fa-info-circle"></i> Ju lutemi zgjidhni të paktën një opsion.</div>';
=======
      '<div class="alert alert-danger no-border"><i class="fa fa-info-circle"></i> Please select any one.</div>';
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    return false;
  } else {
    return true;
  }
}
function formcheck_add_staff(staff_school_chkbox_id, this_DET) {
  var this_button_id = this_DET.id;

  var frmvalidator = new Validator("staff", this_button_id);

<<<<<<< HEAD
  //frmvalidator.addValidation("staff[TITLE]", "req", "Ju lutemi zgjidhni titullin e nderit");
  frmvalidator.addValidation(
    "staff[FIRST_NAME]",
    "req",
    "Ju lutemi vendosni emrin"
=======
  //frmvalidator.addValidation("staff[TITLE]", "req", "Please select the salutation");
  frmvalidator.addValidation(
    "staff[FIRST_NAME]",
    "req",
    "Please enter the first name"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
  );

  frmvalidator.addValidation(
    "staff[FIRST_NAME]",
    "maxlen=100",
<<<<<<< HEAD
    "Gjatësia maksimale e emrit është 100 karaktere"
=======
    "Max length for first name is 100 characters"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
  );
  frmvalidator.addValidation(
    "staff[LAST_NAME]",
    "req",
<<<<<<< HEAD
    "Ju lutemi vendosni mbiemrin"
=======
    "Please enter the Last Name"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
  );
  frmvalidator.addValidation(
    "staff[LAST_NAME]",
    "maxlen=100",
<<<<<<< HEAD
    "Gjatësia maksimale e adresës është 100 karaktere"
  );
  frmvalidator.addValidation("staff[EMAIL]", "req", "Ju lutemi vendosni adresën e emailit");
  //    frmvalidator.addValidation("staff[EMAIL]", "email", "Email i pavlefshëm");
  frmvalidator.addValidation(
    "values[SCHOOL][CATEGORY]",
    "req",
    "Ju lutemi zgjidhni kategorinë"
=======
    "Max length for Address is 100"
  );
  frmvalidator.addValidation("staff[EMAIL]", "req", "Please select email");
  //    frmvalidator.addValidation("staff[EMAIL]", "email", "Invalid email");
  frmvalidator.addValidation(
    "values[SCHOOL][CATEGORY]",
    "req",
    "Please select the category"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
  );
  frmvalidator.addValidation(
    "month_values[JOINING_DATE]",
    "req",
<<<<<<< HEAD
    "Ju lutemi zgjidhni muajin e datës së punësimit"
=======
    "Please select the joining date's month"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
  );
  frmvalidator.addValidation(
    "day_values[JOINING_DATE]",
    "req",
<<<<<<< HEAD
    "Ju lutemi zgjidhni ditën e datës së punësimit"
=======
    "Please select the joining date's date"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
  );
  frmvalidator.addValidation(
    "year_values[JOINING_DATE]",
    "req",
<<<<<<< HEAD
    "Ju lutemi zgjidhni vitin e datës së punësimit"
=======
    "Please select the joining date's year"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
  );

  frmvalidator.setAddnlValidationFunction(validateBirthdateForStaff);
  function validateBirthdateForStaff() {
  
    var day = document.getElementById("daySelect_date_1").value.padStart(2, '0');
    var month = document.getElementById("monthSelect_date_1").value.padStart(2, '0');
    var year = document.getElementById("yearSelect_date_1").value;
  
    var birthdate = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
    var today = new Date();
    today.setHours(0, 0, 0, 0);
  
    var errorDiv = document.getElementById("divErr");
    errorDiv.innerHTML = "";
    errorDiv.style.display = "none";
  
    if (birthdate > today) {
<<<<<<< HEAD
      errorDiv.innerHTML = '<div class="alert alert-danger no-border"><i class="fa fa-info-circle"></i> Datëlindja nuk mund të jetë një datë në të ardhmen.</div>';
=======
      errorDiv.innerHTML = '<div class="alert alert-danger no-border"><i class="fa fa-info-circle"></i> Birthdate cannot be a future date.</div>';
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
      errorDiv.style.display = "block";
      document.getElementById("date_1").focus();
      return false;
    }
    return true;
  }



  var end_date = document.getElementById("end_date_school").value;
  end_date = end_date.split("-");
  var end = new Date(end_date[0], end_date[1], end_date[2]);

  var cur = document.getElementById("date_1").value;
  cur = cur.split("-");
  var current = new Date(cur[0], cur[1], cur[2]);

  if (current >= end) {
    document.getElementById("divErr").innerHTML =
<<<<<<< HEAD
      '<div class="alert alert-danger no-border"><i class="fa fa-info-circle"></i> Data e fillimit të punës nuk mund të jetë pas datës së përfundimit të shkollës</div>';
=======
      '<div class="alert alert-danger no-border"><i class="fa fa-info-circle"></i> Joining date can not be after school\'s end date</div>';
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    return false;
  }

  if (document.getElementById("r4")) {
    if (document.getElementById("r4").checked == true) {
<<<<<<< HEAD
      frmvalidator.addValidation("USERNAME", "req", "Ju lutemi vendosni emrin e përdoruesit");
      frmvalidator.addValidation("PASSWORD", "req", "Ju lutemi vendosni fjalëkalimin");
      frmvalidator.addValidation(
        "PASSWORD",
        "password=8",
        "Fjalëkalimi duhet të ketë të paktën 8 karaktere, duke përfshirë të paktën një numër dhe një karakter special"
=======
      frmvalidator.addValidation("USERNAME", "req", "Please provide username");
      frmvalidator.addValidation("PASSWORD", "req", "Please provide password");
      frmvalidator.addValidation(
        "PASSWORD",
        "password=8",
        "Password should be minimum 8 characters with atleast one special character and one number"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
      );
      frmvalidator.addValidation(
        "PASSWORD",
        "maxlen=20",
<<<<<<< HEAD
        "Gjatësia maksimale e fjalëkalimit është 20 karaktere"
=======
        "Max length for password is 20 characters"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
      );
    }
    else {
      frmvalidator.clearAllValidations();
    }
  }
  if (document.getElementById("no_date_fields")) {
    var no_date_fields = document.getElementById("no_date_fields").value;
    no_date_fields = parseInt(no_date_fields);
    var counter = 0;
    var error_handler = 0;
    for (var j = 0; j <= no_date_fields; j++) {
      counter = counter + 1;
      var in_date = document.getElementById("date_" + counter).value;
      counter = counter + 1;
      var en_date = document.getElementById("date_" + counter).value;
      if (in_date != "" && en_date == "") {
        error_handler = error_handler + 1;
        frmvalidator.clearAllValidations();
        frmvalidator.addValidation(
          "error_handler",
          "req",
<<<<<<< HEAD
          "Ju lutemi vendosni datën e skadimit të çertifikatës"
=======
          "Please provide certification expiry date"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
        );
      }
      if (in_date == "" && en_date != "") {
        error_handler = error_handler + 1;
        frmvalidator.clearAllValidations();
        frmvalidator.addValidation(
          "error_handler",
          "req",
<<<<<<< HEAD
          "Ju lutemi vendosni datën e çertifikatës"
=======
          "Please provide certification date"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
        );
      }
      if (in_date != "" && en_date != "") {
        in_date = new Date(in_date);
        en_date = new Date(en_date);
        if (in_date > en_date) {
          error_handler = error_handler + 1;
          frmvalidator.clearAllValidations();
          frmvalidator.addValidation(
            "error_handler",
            "req",
<<<<<<< HEAD
            "Data e çertifikatës nuk mund të jetë pas datës së skadimit"
=======
            "Certification date cannot be after certification expiry date"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
          );
        } else {
          error_handler = error_handler + 0;
        }
      }
    }
    if (error_handler == 0) frmvalidator.clearAllValidations();
  }
  if (staff_school_chkbox_id != 0 && staff_school_chkbox_id != "")
    return school_check(staff_school_chkbox_id);
}
function formcheck_user_user_mod(staff_school_chkbox_id = false, this_DET) {
  var this_button_id = this_DET.id;

  var frmvalidator = new Validator("staff", this_button_id);

  frmvalidator.addValidation(
    "people[FIRST_NAME]",
    "req",
<<<<<<< HEAD
    "Ju lutemi vendosni emrin"
=======
    "Please enter the first name"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
  );
  frmvalidator.addValidation(
    "people[FIRST_NAME]",
    "maxlen=100",
<<<<<<< HEAD
    "Gjatësia maksimale e emrit është 100 karaktere"
=======
    "Max length for first name is 100 characters"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
  );

  frmvalidator.addValidation(
    "people[LAST_NAME]",
    "req",
<<<<<<< HEAD
    "Ju lutemi vendosni mbiemrin"
=======
    "Please enter the Last Name"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
  );

  frmvalidator.addValidation(
    "people[LAST_NAME]",
    "maxlen=100",
<<<<<<< HEAD
    "Gjatësia maksimale e adresës është 100 karaktere"
  );

  // frmvalidator.addValidation("people[EMAIL]", "email", "Ju lutemi vendosni një email të vlefshëm");
  // frmvalidator.addValidation("people[EMAIL]", "req", "Ju lutemi vendosni adresën e emailit");
=======
    "Max length for Address is 100"
  );

  // frmvalidator.addValidation("people[EMAIL]", "email", "Please enter a valid email");
  // frmvalidator.addValidation("people[EMAIL]", "req", "Please enter the email");
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f

  frmvalidator.addValidation(
    "student_addres[STREET_ADDRESS_1]",
    "req",
<<<<<<< HEAD
    "Ju lutemi vendosni adresën"
=======
    "Please enter the address"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
  );
  frmvalidator.addValidation(
    "student_addres[CITY]",
    "req",
<<<<<<< HEAD
    "Ju lutemi vendosni qytetin"
=======
    "Please enter the city"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
  );
  frmvalidator.addValidation(
    "student_addres[STATE]",
    "req",
<<<<<<< HEAD
    "Ju lutemi vendosni shtetin/rrethin"
=======
    "Please enter the state"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
  );
  frmvalidator.addValidation(
    "student_addres[ZIPCODE]",
    "req",
<<<<<<< HEAD
    "Ju lutemi vendosni kodin postar"
=======
    "Please enter the zipcode"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
  );
}
function validate_email(this_DET) {
  var this_button_id = this_DET.id;

  var frmvalidator = new Validator("ComposeMail", this_button_id);

  frmvalidator.setAddnlValidationFunction("mail_body_chk");
  if (!document.getElementById("cp_id")) {
<<<<<<< HEAD
    frmvalidator.addValidation("txtToUser", "req", "Vendosni marrësin e mesazhit");
=======
    frmvalidator.addValidation("txtToUser", "req", "Enter message recipient");
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
  }
}
function mail_body_chk() {
  var oEditor = FCKeditorAPI.GetInstance("txtBody");
  var body1 = oEditor.GetHTML(true);
  if (body1 == "") {
    document.getElementById("divErr").innerHTML =
      '<div class="alert alert-danger no-border"><i class="fa fa-info-circle"></i> ' +
<<<<<<< HEAD
      unescape("Ju lutemi shkruani përmbajtjen e mesazhit") +
=======
      unescape("Please write body of message") +
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
      "</div>";
    this.txtBody.focus();
    return false;
  } else return true;
}
function validate_group_schedule() {
  var x = document.getElementById("sav").elements.length;
  var counter = 0;
  for (var i = 0; i <= x; i++) {
    if (document.getElementById("sav").elements[i]) {
      var type = document.getElementById("sav").elements[i].type;
      if (type == "checkbox") {
        if (document.getElementById("sav").elements[i]) {
          if (
            document.getElementById("sav").elements[i].name &&
            document.getElementById("sav").elements[i].name != ""
          ) {
            if (document.getElementById("sav").elements[i].checked == true)
              counter++;
          }
        }
      }
    }
  }
  if (counter == 0) {
    document.getElementById("divErr").innerHTML =
<<<<<<< HEAD
      '<div class="alert alert-danger no-border"><i class="fa fa-info-circle"></i> Ju lutemi zgjidhni një nxënës</div>';
=======
      '<div class="alert alert-danger no-border"><i class="fa fa-info-circle"></i> Please select a student</div>';
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    return false;
  } else {
    //        formload_ajax("sav");
    return true;
  }
}

function validate_group_request(this_DET) {
  var this_button_id = this_DET.id;
  self_disable(this_DET);
  var x = document.getElementById("qq").elements.length;
  var counter = 0;
  for (var i = 0; i <= x; i++) {
    if (document.getElementById("qq").elements[i]) {
      var type = document.getElementById("qq").elements[i].type;
      if (type == "checkbox") {
        if (document.getElementById("qq").elements[i]) {
          if (
            document.getElementById("qq").elements[i].name &&
            document.getElementById("qq").elements[i].name != ""
          ) {
            if (document.getElementById("qq").elements[i].checked == true)
              counter++;
          }
        }
      }
    }
  }
  if (counter == 0) {
    document.getElementById("divErr").innerHTML =
<<<<<<< HEAD
      '<div class="alert alert-danger no-border"><i class="fa fa-info-circle"></i> Ju lutemi zgjidhni një nxënës</div>';
=======
      '<div class="alert alert-danger no-border"><i class="fa fa-info-circle"></i> Please select a student</div>';
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    window.scrollTo({ top: 0, behavior: "smooth" });

    document.getElementById(this_button_id).disabled = false;

    return false;
  } else {
    // formload_ajax("qq");

    // setTimeout(function () {
    //   document.getElementById(this_button_id).disabled = true;
    // }, 50);

    return true;
  }
}
function formcheck_rooms(this_DET) {
  var this_button_id = this_DET.id;

  var frmvalidator = new Validator("F1", this_button_id);

  var count_room = document.getElementById("count_room").value.trim();

  if (
    document.getElementById("values[new][TITLE]").value != "" ||
    document.getElementById("values[new][CAPACITY]").value != "" ||
    document.getElementById("values[new][DESCRIPTION]").value != "" ||
    document.getElementById("values[new][SORT_ORDER]").value != ""
  ) {
    frmvalidator.addValidation(
      "values[new][TITLE]",
      "reqmod",
<<<<<<< HEAD
      "Ju lutemi vendosni titullin"
=======
      "Please enter the title"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );
    frmvalidator.addValidation(
      "values[new][CAPACITY]",
      "req",
<<<<<<< HEAD
      "Ju lutemi vendosni kapacitetin"
=======
      "Please enter the capacity"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );
    frmvalidator.addValidation(
      "values[new][DESCRIPTION]",
      "maxlen=100",
<<<<<<< HEAD
      "Gjatësia maksimale e përshkrimit është 100 karaktere"
=======
      "Max length for DESCRIPTION is 100 characters"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );
    frmvalidator.addValidation(
      "values[new][CAPACITY]",
      "num",
<<<<<<< HEAD
      "Kapaciteti lejon vetëm vlerë numerike"
=======
      "Capacity allows only numeric value"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );
    frmvalidator.addValidation(
      "values[new][SORT_ORDER]",
      "num",
<<<<<<< HEAD
      "Renditja lejon vetëm vlerë numerike"
=======
      "Sort Order allows only numeric value"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );
  } else {
    frmvalidator.clearAllValidations();
  }
  var honor_id = document.getElementById("h1").value;

  if (honor_id != "") {
    var id = honor_id;
    var ar = id.split(",");

    for (i = 0; i <= ar.length - 1; i++) {
      frmvalidator.addValidation(
        "inputvalues[" + ar[i] + "][TITLE]",
        "reqmod",
<<<<<<< HEAD
        "Ju lutemi vendosni titullin"
=======
        "Please enter the title"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
      );
      frmvalidator.addValidation(
        "inputvalues[" + ar[i] + "][CAPACITY]",
        "req",
<<<<<<< HEAD
        "Ju lutemi vendosni kapacitetin"
=======
        "Please enter the capacity"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
      );
      frmvalidator.addValidation(
        "inputvalues[" + ar[i] + "][DESCRIPTION]",
        "maxlen=100",
<<<<<<< HEAD
        "Gjatësia maksimale e përshkrimit është 100 karaktere"
=======
        "Max length for DESCRIPTION is 100 characters"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
      );
      frmvalidator.addValidation(
        "inputvalues[" + ar[i] + "][CAPACITY]",
        "num",
<<<<<<< HEAD
        "Kapaciteti lejon vetëm vlerë numerike"
=======
        "Capacity allows only numeric value"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
      );
      frmvalidator.addValidation(
        "inputvalues[" + ar[i] + "][SORT_ORDER]",
        "num",
<<<<<<< HEAD
        "Renditja lejon vetëm vlerë numerike"
=======
        "Sort Order allows only numeric value"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
      );
      frmvalidator.addValidation(
        "values[" + ar[i] + "][DESCRIPTION]",
        "maxlen=100",
<<<<<<< HEAD
        "Gjatësia maksimale e përshkrimit është 100 karaktere"
=======
        "Max length for DESCRIPTION is 100 characters"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
      );

      frmvalidator.addValidation(
        "values[" + ar[i] + "][SORT_ORDER]",
        "num",
<<<<<<< HEAD
        "Renditja lejon vetëm vlerë numerike"
=======
        "Sort Order allows only numeric value"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
      );
    }
  }
}
function fill_rooms(option, id) {
  var room_iv = document.getElementById("room_iv").value;
  if (room_iv != "") room_iv = room_iv.split(",");
  if (room_iv.length > 0) {
    for (var i = 0; i < room_iv.length; i++) {
      var rd = room_iv[i].split("_");
      if (rd[0] == id) {
        var old_string = room_iv[i];
        var new_string = id + "_" + option.value;
      }
    }
  }
  var new_res = document
    .getElementById("room_iv")
    .value.replace(old_string, new_string);
  document.getElementById("room_iv").value = new_res;
}
function formcheck_Timetable_course_F4(this_DET) {
  var this_button_id = this_DET.id;

  var frmvalidator = new Validator("F4", this_button_id);

  var subject_id = document.getElementById("subject_id_div").value;
  if (subject_id == "new") {
    frmvalidator.addValidation(
      "tables[course_subjects][new][TITLE]",
      "req",
<<<<<<< HEAD
      "Ju lutemi vendosni emrin e lëndës"
=======
      "Please enter the subject name"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );
    frmvalidator.addValidation(
      "tables[course_subjects][new][TITLE]",
      "maxlen=50",
<<<<<<< HEAD
      "Gjatësia maksimale e lëndës është 50 karaktere"
=======
      "Max length for subject is 50 characters"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );
  } else {
    frmvalidator.addValidation(
      "inputtables[course_subjects][" + subject_id + "][TITLE]",
      "req",
<<<<<<< HEAD
      "Ju lutemi vendosni titullin e lëndës"
=======
      "Please enter the course title "
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );
    frmvalidator.addValidation(
      "inputtables[course_subjects][" + subject_id + "][TITLE]",
      "maxlen=50",
<<<<<<< HEAD
      "Gjatësia maksimale e titullit të lëndës është 50 karaktere"
=======
      "Max length for course title is 50 characters"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );
  }
}
function formcheck_halfday_fullday(this_DET) {
  var this_button_id = this_DET.id;

  var frmvalidator = new Validator("sys_pref", this_button_id);

  frmvalidator.addValidation(
    "inputvalues[FULL_DAY_MINUTE]",
    "maxlen=10",
<<<<<<< HEAD
    "Gjatësia maksimale e minutave të ditës së plotë është 10 shifra"
=======
    "Max length for full day minute is 10 digits"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
  );
  frmvalidator.addValidation(
    "inputvalues[HALF_DAY_MINUTE]",
    "maxlen=10",
<<<<<<< HEAD
    "Gjatësia maksimale e minutave të gjysmë ditës është 10 shifra"
=======
    "Max length for half day minute is 10 digits"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
  );
  frmvalidator.addValidation(
    "inputvalues[FULL_DAY_MINUTE]",
    "num",
<<<<<<< HEAD
    "Minutat e ditës së plotë lejojnë vetëm vlerë numerike"
=======
    "Full day minute allows only numeric value"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
  );
  frmvalidator.addValidation(
    "inputvalues[HALF_DAY_MINUTE]",
    "num",
<<<<<<< HEAD
    "Minutat e gjysmë ditës lejojnë vetëm vlerë numerike"
=======
    "Half day minute allows only numeric value"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
  );
}
function formcheck_Timetable_course_F3(this_DET) {
  var this_button_id = this_DET.id;

  var frmvalidator = new Validator("F3", this_button_id);

  var course_id = document.getElementById("course_id_div").value;
  if (course_id == "new") {
    frmvalidator.addValidation(
      "tables[courses][new][TITLE]",
      "req",
<<<<<<< HEAD
      "Ju lutemi vendosni titullin e lëndës"
=======
      "Please enter the course title "
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );
    frmvalidator.addValidation(
      "tables[courses][new][TITLE]",
      "maxlen=50",
<<<<<<< HEAD
      "Gjatësia maksimale e titullit të lëndës është 50 karaktere"
=======
      "Max length for course title is 50 characters "
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );

    frmvalidator.addValidation(
      "tables[courses][new][SHORT_NAME]",
      "maxlen=25",
<<<<<<< HEAD
      "Gjatësia maksimale e emrit të shkurtër është 25 karaktere"
=======
      "Max length for short name is 25 characters "
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );
  } else {
    frmvalidator.addValidation(
      "inputtables[courses][" + course_id + "][TITLE]",
      "req",
<<<<<<< HEAD
      "Ju lutemi vendosni titullin e lëndës"
=======
      "Please enter the course title "
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );
    frmvalidator.addValidation(
      "inputtables[courses][" + course_id + "][TITLE]",
      "maxlen=50",
<<<<<<< HEAD
      "Gjatësia maksimale e titullit të lëndës është 50 karaktere"
=======
      "Max length for course title is 50 characters"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );

    frmvalidator.addValidation(
      "inputtables[courses][" + course_id + "][SHORT_NAME]",
      "maxlen=25",
<<<<<<< HEAD
      "Gjatësia maksimale e emrit të shkurtër është 25 karaktere"
=======
      "Max length for short name is 25 characters"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );
  }
}

function mail_group_chk(this_DET) {
  var this_button_id = this_DET.id;

  var frmvalidator = new Validator("Group", this_button_id);

  frmvalidator.addValidation(
    "txtGrpName",
    "req",
<<<<<<< HEAD
    "Ju lutemi vendosni emrin e grupit"
=======
    "Please enter the group name"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
  );

  frmvalidator.addValidation(
    "txtGrpName",
    "maxlen=100",
<<<<<<< HEAD
    "Gjatësia maksimale e emrit të grupit është 100 karaktere"
=======
    "Max length for group name is 100 characters"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
  );
}

function formcheck_enrollment_code(this_DET) {
  var this_button_id = this_DET.id;

  var frmvalidator = new Validator("F1", this_button_id);

  var sn = document.getElementById("values[new][SHORT_NAME]").value;
  var t = document.getElementsByName("values[new][TYPE]")[0].value;

  if (sn.trim() != "" || t != "") {
    frmvalidator.addValidation(
      "values[new][TITLE]",
      "req",
<<<<<<< HEAD
      "Titulli nuk mund të jetë bosh"
=======
      "Title cannot be blank"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );
    frmvalidator.addValidation(
      "values[new][TITLE]",
      "alphanumeric",
<<<<<<< HEAD
      "Titulli lejon vetëm karaktere alfanumerike"
=======
      "Title allows only alphanumeric value"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );
    frmvalidator.addValidation(
      "values[new][TITLE]",
      "maxlen=50",
<<<<<<< HEAD
      "Gjatësia maksimale e titullit është 50 karaktere"
=======
      "Max length for title is 50 characters"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );
  } else {
    frmvalidator.clearAllValidations();
  }

  var title = document.getElementsByName("values[new][TITLE]")[0].value;
  if (title != "" && sn == "") {
    frmvalidator.addValidation(
      "values[new][SHORT_NAME]",
      "req",
<<<<<<< HEAD
      "Emri i shkurtër nuk mund të jetë bosh"
=======
      "Short name cannot be blank"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );
  }
  if (title != "" && t == "") {
    frmvalidator.addValidation(
      "values[new][TYPE]",
      "req",
<<<<<<< HEAD
      "Lloji nuk mund të jetë bosh"
=======
      "Type cannot be blank"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );
  }

  var ar_id = document.getElementById("id_arr").value;
  ar_id = ar_id.trim();
  if (ar_id != 0) {
    var ar_id = ar_id.split(",");
    for (var i = 0; i < ar_id.length; i++) {
      frmvalidator.addValidation(
        "values[" + ar_id[i] + "][TITLE]",
        "req",
<<<<<<< HEAD
        "Titulli nuk mund të jetë bosh"
=======
        "Title cannot be blank"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
      );
      frmvalidator.addValidation(
        "values[" + ar_id[i] + "][TITLE]",
        "alphanumeric",
<<<<<<< HEAD
        "Titulli lejon vetëm karaktere alfanumerike"
=======
        "Title allows only alphanumeric value"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
      );
      frmvalidator.addValidation(
        "values[" + ar_id[i] + "][TITLE]",
        "maxlen=50",
<<<<<<< HEAD
        "Gjatësia maksimale e titullit është 50 karaktere"
=======
        "Max length for title is 50 characters"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
      );
      frmvalidator.addValidation(
        "values[" + ar_id[i] + "][SHORT_NAME]",
        "req",
<<<<<<< HEAD
        "Emri i shkurtër nuk mund të jetë bosh"
=======
        "Short name cannot be blank"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
      );
      frmvalidator.addValidation(
        "values[" + ar_id[i] + "][TYPE]",
        "req",
<<<<<<< HEAD
        "Lloji nuk mund të jetë bosh"
=======
        "Type cannot be blank"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
      );
    }
  }
}
function formcheck_calendar_event() {
  var title = document.getElementById("title");
  if (title != null) {
    if (title.value.trim() == "") {
      document.getElementById("err_message").innerHTML =
<<<<<<< HEAD
        '<div class="alert alert-danger no-border"><i class="fa fa-info-circle"></i> Titulli nuk mund të jetë bosh.</div>';
      return false;
    } else if (title.value.length > 50) {
      document.getElementById("err_message").innerHTML =
        '<div class="alert alert-danger no-border"><i class="fa fa-info-circle"></i> Gjatësia maksimale e titullit është 50 karaktere.</div>';
=======
        '<div class="alert alert-danger no-border"><i class="fa fa-info-circle"></i> Title cannot be blank.</div>';
      return false;
    } else if (title.value.length > 50) {
      document.getElementById("err_message").innerHTML =
        '<div class="alert alert-danger no-border"><i class="fa fa-info-circle"></i> Max length for title is 50 characters.</div>';
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
      return false;
    } else formload_ajax("popform");
  } else {
    var title = document.getElementById("values[TITLE]");
    if (title.value.trim() == "") {
      document.getElementById("err_message").innerHTML =
<<<<<<< HEAD
        '<div class="alert alert-danger no-border"><i class="fa fa-info-circle"></i> Titulli nuk mund të jetë bosh.</div>';
      return false;
    } else if (title.value.length > 50) {
      document.getElementById("err_message").innerHTML =
        '<div class="alert alert-danger no-border"><i class="fa fa-info-circle"></i> Gjatësia maksimale e titullit është 50 karaktere.</div>';
=======
        '<div class="alert alert-danger no-border"><i class="fa fa-info-circle"></i> Title cannot be blank.</div>';
      return false;
    } else if (title.value.length > 50) {
      document.getElementById("err_message").innerHTML =
        '<div class="alert alert-danger no-border"><i class="fa fa-info-circle"></i> Max length for title is 50 characters.</div>';
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
      return false;
    } else formload_ajax("popform");
  }
}
function formcheck_common_standards() {
  var frmvalidator = new Validator("standard");
  if (document.getElementById("values[new][SUBJECT]").value != "") {
    frmvalidator.addValidation(
      "values[new][STANDARD_REF_NO]",
      "req",
<<<<<<< HEAD
      "Ju lutemi vendosni numrin standard të referencës"
=======
      "Please enter standard ref number"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );
    frmvalidator.addValidation(
      "values[new][SUBJECT]",
      "maxlen=50",
<<<<<<< HEAD
      "Gjatësia maksimale e lëndës është 50 karaktere"
=======
      "Max length for subject is 50"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );
    frmvalidator.addValidation(
      "values[new][GRADE]",
      "maxlen=50",
<<<<<<< HEAD
      "Gjatësia maksimale e klasës është 50 karaktere"
=======
      "Max length for grade is 50"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );
    frmvalidator.addValidation(
      "values[new][COURSE]",
      "maxlen=50",
<<<<<<< HEAD
      "Gjatësia maksimale e lëndës është 50 karaktere"
=======
      "Max length for course is 50"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );
    frmvalidator.addValidation(
      "values[new][DOMAIN]",
      "maxlen=50",
<<<<<<< HEAD
      "Gjatësia maksimale e fushës është 50 karaktere"
=======
      "Max length for domain is 50"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );
    frmvalidator.addValidation(
      "values[new][TOPIC]",
      "maxlen=50",
<<<<<<< HEAD
      "Gjatësia maksimale e temës është 50 karaktere"
=======
      "Max length for topic is 50"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );
    frmvalidator.addValidation(
      "values[new][STANDARD_REF_NO]",
      "maxlen=50",
<<<<<<< HEAD
      "Gjatësia maksimale e numrit të referencës është 50 karaktere"
=======
      "Max length for ref number is 50"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );
    frmvalidator.addValidation(
      "values[new][STANDARD_DETAILS]",
      "maxlen=50",
<<<<<<< HEAD
      "Gjatësia maksimale e të dhënave të referencës është 50 karaktere"
=======
      "Max length for ref details is 50"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );
  }
  var count = document.getElementById("count").value.trim();

  for (var i = 1; i <= count; i++) {
    frmvalidator.addValidation(
      "inputvalues[" + i + "][STANDARD_REF_NO]",
      "req",
<<<<<<< HEAD
      "Ju lutemi vendosni numrin standard të referencës"
=======
      "Please enter standard ref number"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );
    frmvalidator.addValidation(
      "inputvalues[" + i + "][SUBJECT]",
      "maxlen=50",
<<<<<<< HEAD
      "Gjatësia maksimale e lëndës është 50 karaktere"
=======
      "Max length for subject is 50"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );
    frmvalidator.addValidation(
      "inputvalues[" + i + "][GRADE]",
      "maxlen=50",
<<<<<<< HEAD
      "Gjatësia maksimale e klasës është 50 karaktere"
=======
      "Max length for grade is 50"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );
    frmvalidator.addValidation(
      "inputvalues[" + i + "][COURSE]",
      "maxlen=50",
<<<<<<< HEAD
      "Gjatësia maksimale e lëndës është 50 karaktere"
=======
      "Max length for course is 50"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );
    frmvalidator.addValidation(
      "inputvalues[" + i + "][DOMAIN]",
      "maxlen=50",
<<<<<<< HEAD
      "Gjatësia maksimale e fushës është 50 karaktere"
=======
      "Max length for domain is 50"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );
    frmvalidator.addValidation(
      "inputvalues[" + i + "][TOPIC]",
      "maxlen=50",
<<<<<<< HEAD
      "Gjatësia maksimale e temës është 50 karaktere"
=======
      "Max length for topic is 50"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );
    frmvalidator.addValidation(
      "inputvalues[" + i + "][STANDARD_REF_NO]",
      "maxlen=50",
<<<<<<< HEAD
      "Gjatësia maksimale e numrit të referencës është 50 karaktere"
=======
      "Max length for ref number is 50"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );
    frmvalidator.addValidation(
      "inputvalues[" + i + "][STANDARD_DETAILS]",
      "maxlen=50",
<<<<<<< HEAD
      "Gjatësia maksimale e të dhënave të referencës është 50 karaktere"
=======
      "Max length for ref details is 50"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );
  }
}

function check_effort_cat() {
  var frmvalidator = new Validator("cat");
<<<<<<< HEAD
  frmvalidator.addValidation("TITLE", "req", "Ju lutemi vendosni titullin");
  frmvalidator.addValidation(
    "TITLE",
    "maxlen=50",
    "Gjatësia maksimale e titullit është 50 karaktere"
=======
  frmvalidator.addValidation("TITLE", "req", "Please enter title");
  frmvalidator.addValidation(
    "TITLE",
    "maxlen=50",
    "Max length for title is 50"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
  );
  frmvalidator.addValidation(
    "SORT_ORDER",
    "num",
<<<<<<< HEAD
    "Renditja lejon vetëm vlerë numerike"
=======
    "Sort order allows only numeric value"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
  );
}
function check_effort_item() {
  var frmvalidator = new Validator("F1");
  var count = document.getElementById("count_item").value.trim();
  if (count != "0") {
    for (var i = count; i > 0; i--) {
      frmvalidator.addValidation(
        "inputvalues[" + i + "][TITLE]",
        "maxlen=50",
<<<<<<< HEAD
        "Gjatësia maksimale e titullit është 50 karaktere"
=======
        "Max length for title is 50"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
      );
      frmvalidator.addValidation(
        "inputvalues[" + i + "][SORT_ORDER]",
        "num",
<<<<<<< HEAD
        "Renditja lejon vetëm vlerë numerike"
=======
        "Sort order allows only numeric value"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
      );
    }
  }
  if (document.getElementById("values[new][TITLE]").value != "") {
    frmvalidator.addValidation(
      "values[new][TITLE]",
      "maxlen=50",
<<<<<<< HEAD
      "Gjatësia maksimale e titullit është 50 karaktere"
=======
      "Max length for title is 50"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );
    frmvalidator.addValidation(
      "values[new][SORT_ORDER]",
      "num",
<<<<<<< HEAD
      "Renditja lejon vetëm vlerë numerike"
=======
      "Sort order allows only numeric value"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    );
  }
}

function forgotpass() {
  document.getElementById("valid_func").value = "Y";
  if (document.getElementById("pass_student").checked == true) {
    if (document.getElementById("password_stn_id").value == "") {
      document.getElementById("divErr").innerHTML =
<<<<<<< HEAD
        '<div class="alert alert-danger no-border"><i class="fa fa-info-circle"></i> Ju lutemi vendosni ID e nxënësit.</div>';
=======
        '<div class="alert alert-danger no-border"><i class="fa fa-info-circle"></i> Please enter student id.</div>';
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
      document.getElementById("password_stn_id").focus();
      return false;
    } else if (document.getElementById("uname").value == "") {
      document.getElementById("divErr").innerHTML =
<<<<<<< HEAD
        '<div class="alert alert-danger no-border"><i class="fa fa-info-circle"></i> Ju lutemi vendosni emrin tuaj të përdoruesit.</div>';
=======
        '<div class="alert alert-danger no-border"><i class="fa fa-info-circle"></i> Please enter your username.</div>';
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
      document.getElementById("uname").focus();
      return false;
    } else if (document.getElementById("monthSelect1").value == "") {
      document.getElementById("divErr").innerHTML =
<<<<<<< HEAD
        '<div class="alert alert-danger no-border"><i class="fa fa-info-circle"></i> Ju lutemi vendosni datën e lindjes.</div>';
=======
        '<div class="alert alert-danger no-border"><i class="fa fa-info-circle"></i> Please enter date of birth.</div>';
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
      return false;
    } else return true;
  } else {
    if (document.getElementById("uname").value == "") {
      document.getElementById("divErr").innerHTML =
<<<<<<< HEAD
        '<div class="alert alert-danger no-border"><i class="fa fa-info-circle"></i> Ju lutemi vendosni emrin tuaj të përdoruesit.</div>';
=======
        '<div class="alert alert-danger no-border"><i class="fa fa-info-circle"></i> Please enter your username.</div>';
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
      document.getElementById("pass_err_msg_email").innerHTML = "";
      document.getElementById("uname").focus();
      return false;
    } else if (document.getElementById("pass_email").value == "") {
      document.getElementById("divErr").innerHTML =
<<<<<<< HEAD
        '<div class="alert alert-danger no-border"><i class="fa fa-info-circle"></i> Ju lutemi vendosni email-in tuaj.</div>';
=======
        '<div class="alert alert-danger no-border"><i class="fa fa-info-circle"></i> Please enter your email.</div>';
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
      document.getElementById("pass_err_msg_email").innerHTML = "";
      document.getElementById("pass_stf_email").focus();
      return false;
    } else if (document.getElementById("pass_email").value == "0") {
      document.getElementById("divErr").innerHTML =
        '<div class="alert alert-danger no-border"><i class="fa fa-info-circle"></i> Incorrect login credential.</div>';
      document.getElementById("pass_err_msg_email").innerHTML = "";
      document.getElementById("pass_stf_email").focus();
      return false;
    } else return true;
  }
}

function forgotusername() {
  document.getElementById("valid_func").value = "Y";
  if (document.getElementById("uname_student").checked == true) {
    if (document.getElementById("username_stn_id").value == "") {
      document.getElementById("divErr").innerHTML =
<<<<<<< HEAD
        '<div class="alert alert-danger no-border"><i class="fa fa-info-circle"></i> Ju lutemi vendosni ID e nxënësit.</div>';
=======
        '<div class="alert alert-danger no-border"><i class="fa fa-info-circle"></i> Please enter student id.</div>';
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
      document.getElementById("username_stn_id").focus();
      return false;
    } else if (document.getElementById("pass").value == "") {
      document.getElementById("divErr").innerHTML =
<<<<<<< HEAD
        '<div class="alert alert-danger no-border"><i class="fa fa-info-circle"></i> Ju lutemi vendosni fjalëkalimin tuaj.</div>';
=======
        '<div class="alert alert-danger no-border"><i class="fa fa-info-circle"></i> Please enter your password.</div>';
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
      document.getElementById("pass").focus();
      return false;
    } else if (document.getElementById("monthSelect2").value == "") {
      document.getElementById("divErr").innerHTML =
<<<<<<< HEAD
        '<div class="alert alert-danger no-border"><i class="fa fa-info-circle"></i> Ju lutemi vendosni datën tuaj të lindjes.</div>';
=======
        '<div class="alert alert-danger no-border"><i class="fa fa-info-circle"></i> Please enter your date of birth.</div>';
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
      return false;
    } else return true;
  } else {
    if (document.getElementById("pass").value == "") {
      document.getElementById("divErr").innerHTML =
<<<<<<< HEAD
        '<div class="alert alert-danger no-border"><i class="fa fa-info-circle"></i> Ju lutemi vendosni fjalëkalimin tuaj.</div>';
=======
        '<div class="alert alert-danger no-border"><i class="fa fa-info-circle"></i> Please enter your password.</div>';
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
      document.getElementById("uname_err_msg_email").innerHTML = "";
      document.getElementById("pass").focus();
      return false;
    } else if (document.getElementById("un_email").value == "") {
      document.getElementById("divErr").innerHTML =
<<<<<<< HEAD
        '<div class="alert alert-danger no-border"><i class="fa fa-info-circle"></i> Ju lutemi vendosni email-in tuaj.</div>';
=======
        '<div class="alert alert-danger no-border"><i class="fa fa-info-circle"></i> Please enter your email.</div>';
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
      document.getElementById("uname_err_msg_email").innerHTML = "";
      document.getElementById("username_stf_email").focus();
      return false;
    } else if (document.getElementById("un_email").value == "0") {
      document.getElementById("divErr").innerHTML =
        '<div class="alert alert-danger no-border"><i class="fa fa-info-circle"></i> Incorrect login credential.</div>';
      document.getElementById("uname_err_msg_email").innerHTML = "";
      document.getElementById("username_stf_email").focus();
      return false;
    } else return true;
  }
}

function check_update_seat(cp_seats,course_period_id,student_count)
{
    updated_seats = document.getElementById("tables[course_periods][" + course_period_id + "][TOTAL_SEATS]");
    if (updated_seats != null)
    {
        if (updated_seats.value.trim() == '' || updated_seats.value.trim() == '0')
        {
<<<<<<< HEAD
            document.getElementById('err_message').innerHTML = '<div class="alert alert-danger no-border"><i class="fa fa-info-circle"></i> Numri i ri i vendeve nuk mund të jetë bosh ose zero.</div>';
            return false;
        } else if (updated_seats.value < cp_seats)
        {
            document.getElementById('err_message').innerHTML = '<div class="alert alert-danger no-border"><i class="fa fa-info-circle"></i> Numri i ri i vendeve nuk mund të jetë më i vogël se '+cp_seats+'.</div>';
            return false;
        } else if (updated_seats.value < (cp_seats+student_count))
        {
            document.getElementById('err_message').innerHTML = `<div class="alert alert-danger no-border"><i class="fa fa-info-circle"></i> Numri i ri i vendeve nuk mund të jetë më i vogël se ${cp_seats + student_count} because we have ${student_count} students left to schedule.</div>`;
=======
            document.getElementById('err_message').innerHTML = '<div class="alert alert-danger no-border"><i class="fa fa-info-circle"></i> New number of seats cannot be blank/zero.</div>';
            return false;
        } else if (updated_seats.value < cp_seats)
        {
            document.getElementById('err_message').innerHTML = '<div class="alert alert-danger no-border"><i class="fa fa-info-circle"></i> New number of seats cannot be lesser than '+cp_seats+'.</div>';
            return false;
        } else if (updated_seats.value < (cp_seats+student_count))
        {
            document.getElementById('err_message').innerHTML = `<div class="alert alert-danger no-border"><i class="fa fa-info-circle"></i> New number of seats cannot be lesser than ${cp_seats + student_count} because we have ${student_count} students left to schedule.</div>`;
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
            return false;
        } else
            return true;
    }
}

function formcheck_ada_dates() {
  var date_1 = document.getElementById("date_1").value;
  var date_2 = document.getElementById("date_2").value;

  if (date_1 != "" && date_2 != "") {
    var date_1_obj = new Date(date_1);
    var date_2_obj = new Date(date_2);

    if (date_1_obj > date_2_obj) {
      document.getElementById("divErr").innerHTML =
<<<<<<< HEAD
        '<div class="alert alert-danger no-border"><i class="fa fa-info-circle"></i> Data e fillimit nuk mund të jetë pas datës së mbarimit.</div>';
=======
        '<div class="alert alert-danger no-border"><i class="fa fa-info-circle"></i> Start date cannot be after end date.</div>';
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
      return false;
    } else var frmvalidator = new Validator("ada_from");
  }
  if (date_1 == "") {
    document.getElementById("divErr").innerHTML =
<<<<<<< HEAD
      '<div class="alert alert-danger no-border"><i class="fa fa-info-circle"></i> Data e fillimit nuk mund të jetë bosh.</div>';
=======
      '<div class="alert alert-danger no-border"><i class="fa fa-info-circle"></i> Start cannot be blank.</div>';
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    return false;
  }
  if (date_2 == "") {
    document.getElementById("divErr").innerHTML =
<<<<<<< HEAD
      '<div class="alert alert-danger no-border"><i class="fa fa-info-circle"></i> Data e mbarimit nuk mund të jetë bosh.</div>';
=======
      '<div class="alert alert-danger no-border"><i class="fa fa-info-circle"></i> End cannot be blank.</div>';
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    return false;
  }
}
function toggle_attendance_code() {
  var p_c = document.getElementById("p_c").value;
  var base = document.getElementById("base").value;
  if (Number(p_c) < Number(base)) {
    document.getElementById("click_plus").click();
  }
  document.getElementById("p_c").value = parseInt(p_c) + 1;
}
function formcheck_school_grad_config() {
  var frmvalidator = new Validator("grad_config");
  var mp_per = document.getElementsByClassName("mp_per");
  var i;
  for (i = 0; i < mp_per.length; i++) {
    if (mp_per[i].value !== "")
      frmvalidator.addValidation(
        mp_per[i].name,
        "num",
<<<<<<< HEAD
        "Përqindja përfundimtare e notimit lejon vetëm vlerë numerike"
=======
        "Final grading percentage allows only numeric value"
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
      );
  }
}
function toggleDisableStu(event) {
  if (event.checked == false && event.value == "Y")
    document.getElementById("student_enable").value = "N";
  if (
    event.checked == true &&
    document.getElementById("student_enable").value == "N"
  )
    document.getElementById("student_enable").value = "";
}
function setFilterValues() {
  var ids = [
    "last",
    "first",
    "stuid",
    "altid",
    "addr",
    "grade",
    "section",
    "mp_comment",
    "GENDER",
    "ETHNICITY_ID",
    "LANGUAGE_ID",
    "goal_title",
    "goal_description",
    "progress_name",
    "progress_description",
    "doctors_note_comments",
    "type",
    "imm_comments",
    "med_alrt_title",
    "reason",
    "result",
    "med_vist_comments",
  ];

  for (var i = 0; i < ids.length; i++) {
    if (document.getElementById(ids[i])) {
      document.getElementById(ids[i] + "_hidden").value = "";
      if (document.getElementById(ids[i]).value != "")
        document.getElementById(
          ids[i] + "_hidden"
        ).value = document.getElementById(ids[i]).value;
    }
  }

  var ids1 = ["address_group", "_search_all_schools", "include_inactive"];

  for (var j = 0; j < ids1.length; j++) {
    if (document.getElementById(ids1[j])) {
      document.getElementById(ids1[j] + "_hidden").innerHTML = "";
      if (document.getElementById(ids1[j]).checked === true)
        document.getElementById(ids1[j] + "_hidden").innerHTML =
          '<input type="hidden" name="' + ids1[j] + '" value="Y"/>';
    }
  }

  var custom_field_ids = document.getElementById("each_custom_fields_ids")
    .value;

  if (custom_field_ids != "") {
    var cf_ids_arr = custom_field_ids.split(", ");

    for (var k = 0; k < custom_field_ids.length; k++) {
      var this_element = document.getElementsByName(
        "cust[" + cf_ids_arr[k] + "]"
      )[0];

      console.log(this_element.type);

      var this_element_type = this_element.type;

      if (this_element) {
        document.getElementById("custom_" + cf_ids_arr[k] + "_hidden").value =
          "";

        if (this_element_type == "checkbox" || this_element_type == "radio") {
          if (this_element.checked === true) {
            document.getElementById(
              "custom_" + cf_ids_arr[k] + "_hidden"
            ).value = "Y";
          }
        } else {
          if (this_element.value != "") {
            document.getElementById(
              "custom_" + cf_ids_arr[k] + "_hidden"
            ).value = this_element.value;
          }
        }
      }
    }
  }

  console.log(custom_field_ids);
}
function validate_filter(filter_name) {
  var filterName = document.getElementById("filter_name").value;

  if (document.getElementById("filter_name").value == "") {
    document.getElementById("error_modal_filter").innerHTML =
<<<<<<< HEAD
      '<div class="alert alert-danger no-border"><i class="fa fa-info-circle"></i> &nbsp; Ju lutemi vendosni një emër të vlefshëm për filtrin.</div>';
=======
      '<div class="alert alert-danger no-border"><i class="fa fa-info-circle"></i> &nbsp; Please enter a valid filter name.</div>';
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
    return false;
  } else if (filter_name.includes(filterName) == true) {
    document.getElementById("error_modal_filter").innerHTML =
      '<div class="alert alert-danger no-border"><i class="fa fa-info-circle"></i> &nbsp; This filter name already exists.</div>';
    return false;
  } else {
    return true;
  }
}

function save_student_filters() {
  var this_button_id = "saveFilterBtn";

  var filterName = document.getElementById("filter_name").value;
  var otherFilterNames = document.getElementById("other_filter_names").value;

  if (document.getElementById("filter_name").value == "") {
    document.getElementById("error_modal_filter").innerHTML =
<<<<<<< HEAD
      '<div class="alert alert-danger no-border"><i class="fa fa-info-circle"></i> &nbsp; Ju lutemi vendosni një emër të vlefshëm për filtrin</div>';
=======
      '<div class="alert alert-danger no-border"><i class="fa fa-info-circle"></i> &nbsp; Please enter a valid filter name</div>';
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f

    document.getElementById("filter_name").focus();

    setTimeout(function () {
      document.getElementById(this_button_id).disabled = false;
    }, 50);

    return false;
  } else if (otherFilterNames.includes(filterName) == true) {
    document.getElementById("error_modal_filter").innerHTML =
      '<div class="alert alert-danger no-border"><i class="fa fa-info-circle"></i> &nbsp; This filter name already exists</div>';

    document.getElementById("filter_name").focus();

    setTimeout(function () {
      document.getElementById(this_button_id).disabled = false;
    }, 50);

    return false;
  } else {
    setTimeout(function () {
      document.getElementById(this_button_id).disabled = true;
    }, 50);

    return true;
  }
}

function checkValidDefaultValue() {
    var customFieldModule = document.getElementById("customFieldModule").value;

    switch(customFieldModule) {
        case 'school':

            var cusomFieldID = document.getElementById("custom").value;

            if(document.getElementById('tables[' + cusomFieldID + '][DEFAULT_SELECTION]'))
                var defaultVal = document.getElementById('tables[' + cusomFieldID + '][DEFAULT_SELECTION]').value;
            else if(document.getElementById('inputtables[' + cusomFieldID + '][DEFAULT_SELECTION]'))
                var defaultVal = document.getElementById('inputtables[' + cusomFieldID + '][DEFAULT_SELECTION]').value;
            else if (document.getElementById("DEFAULT_VALUE_" + cusomFieldID))
                var defaultVal = document.getElementById("DEFAULT_VALUE_" + cusomFieldID).value;
            else
                var defaultVal = '';

            if(defaultVal != '') {
                if(document.getElementById("type"))
                    var dataType = document.getElementById("type").value;
                else
                    var dataType = document.getElementById("DEFAULT_DATATYPE_" + cusomFieldID).value;


                if(document.getElementById("tables[" + cusomFieldID + "][SELECT_OPTIONS]"))
                    var selectOptionsData = document.getElementById("tables[" + cusomFieldID + "][SELECT_OPTIONS]").value;
                else if(document.getElementById("textareatables[" + cusomFieldID + "][SELECT_OPTIONS]"))
                    var selectOptionsData = document.getElementById("textareatables[" + cusomFieldID + "][SELECT_OPTIONS]").value;
                else if (document.getElementById("SELECT_OPTIONS_VALUE_" + cusomFieldID))
                    var selectOptionsData = document.getElementById("SELECT_OPTIONS_VALUE_" + cusomFieldID).value;
                else
                    var selectOptionsData = '';

                if(selectOptionsData != '') {
                    var selectOptions = selectOptionsData.split('\n');
                    var validChecker = 0;

                    for(var eachLine = 0;eachLine < selectOptions.length;eachLine++) {
                        if(dataType == 'select' || dataType == 'autos' || dataType == 'edits' || dataType == 'multiple') {
                            var selectOptionsVal = selectOptions[eachLine];
                        } else if(dataType == 'codeds') {
                            var selectOptionsVal = selectOptions[eachLine].split("|")[0];
                        } else {
                            var selectOptionsVal = '';
                        }
                        
                        if(defaultVal == selectOptionsVal) {
                            validChecker++;
                        }
                    }

                    if(validChecker == 0) {
                        document.getElementById("helpBlock").innerHTML = `<span class="text-warning"><b>Warning!</b> Default value does not match with the values of pull-down!</span>`;
                    } else {
                        document.getElementById("helpBlock").innerHTML = `Default`;
                    }
                } else {
                    document.getElementById("helpBlock").innerHTML = `Default`;
                }
            } else {
                document.getElementById("helpBlock").innerHTML = `Default`;
            }
        break;

        case 'student':
        case 'staff':
        case 'people':

            var cusomFieldID = document.getElementById("f_id").value;

            if(document.getElementById('tables[' + cusomFieldID + '][DEFAULT_SELECTION]'))
                var defaultVal = document.getElementById('tables[' + cusomFieldID + '][DEFAULT_SELECTION]').value;
            else if(document.getElementById('inputtables[' + cusomFieldID + '][DEFAULT_SELECTION]'))
                var defaultVal = document.getElementById('inputtables[' + cusomFieldID + '][DEFAULT_SELECTION]').value;
            else if (document.getElementById("DEFAULT_VALUE_" + cusomFieldID))
                var defaultVal = document.getElementById("DEFAULT_VALUE_" + cusomFieldID).value;
            else
                var defaultVal = '';

            var helpBlockText = document.getElementById("helpBlock").innerHTML;

            if(defaultVal != '') {
                if(document.getElementById("type"))
                    var dataType = document.getElementById("type").value;
                else
                    var dataType = document.getElementById("DEFAULT_DATATYPE_" + cusomFieldID).value;


                if(document.getElementById("tables[" + cusomFieldID + "][SELECT_OPTIONS]"))
                    var selectOptionsData = document.getElementById("tables[" + cusomFieldID + "][SELECT_OPTIONS]").value;
                else if(document.getElementById("textareatables[" + cusomFieldID + "][SELECT_OPTIONS]"))
                    var selectOptionsData = document.getElementById("textareatables[" + cusomFieldID + "][SELECT_OPTIONS]").value;
                else if (document.getElementById("SELECT_OPTIONS_VALUE_" + cusomFieldID))
                    var selectOptionsData = document.getElementById("SELECT_OPTIONS_VALUE_" + cusomFieldID).value;
                else
                    var selectOptionsData = '';

                if(selectOptionsData != '') {
                    var selectOptions = selectOptionsData.split('\n');
                    var validChecker = 0;

                    for(var eachLine = 0;eachLine < selectOptions.length;eachLine++) {
                        if(dataType == 'select' || dataType == 'autos' || dataType == 'edits' || dataType == 'multiple') {
                            var selectOptionsVal = selectOptions[eachLine];
                        } else if(dataType == 'codeds') {
                            var selectOptionsVal = selectOptions[eachLine].split("|")[0];
                        } else {
                            var selectOptionsVal = '';
                        }
                        
                        if(defaultVal == selectOptionsVal) {
                            validChecker++;
                        }
                    }

                    if(validChecker == 0) {
                        document.getElementById("helpBlock").innerHTML = `<span class="text-warning"><b>Warning!</b> Default value does not match with the values of pull-down!</span>`;
                    } else {
                        document.getElementById("helpBlock").innerHTML = ``;
                    }
                } else {
                    document.getElementById("helpBlock").innerHTML = helpBlockText;
                }
            } else {
                document.getElementById("helpBlock").innerHTML = helpBlockText;
            }
        break;
    }
}

function clearSearching()
{
    var formName = 'search';

    var elements = document.forms[formName].elements;
    for (i=0; i < elements.length; i++)
    {
        var this_input_type =   elements[i].type;
        var this_input_tag  =   elements[i].tagName;

        if(this_input_tag == 'INPUT')
        {
            if(this_input_type != 'hidden')
            {
                if(this_input_type == 'text')
                {
                    elements[i].value = '';
                }
                else if(this_input_type == 'checkbox' || this_input_type == 'radio')
                {
                    elements[i].checked = false;
                }
            }
        }
        else if(this_input_tag == 'SELECT')
        {
            // elements[i].selected = false;
            elements[i].value = '';
        }
        else if(this_input_tag == 'TEXTAREA')
        {
            elements[i].innerHTML = '';
        }

        // console.log(elements[i]);
        // console.log(this_input_type);
        // console.log(this_input_tag);
    }

    document.getElementById(formName). submit();
}

function self_disable(this_DET) {
  this_DET.form.addEventListener("submit", function (e) {
    if (!$(this_DET).data('submitted')) {
      $(this_DET).data('submitted', true).addClass('disabled');
    }else{
      e.preventDefault();
    }
    setTimeout(function () {
      remove_self_disable(this_DET)
    }, 5000);
  });
}

function remove_self_disable(this_DET){
  $(this_DET).data('submitted', false).removeClass('disabled')
}

function reportCardGpaChk() 
{
  var totalMPCount = $('input[name="mp_arr[]"]:checked').length;
  if(totalMPCount>1)
  {
    document.getElementsByName("elements[gpa]")[0].checked = false;
    document.getElementsByName("elements[gpa]")[0].disabled = true;
  }
  if(totalMPCount==1)
  {
    document.getElementsByName("elements[gpa]")[0].disabled = false;
  }
}
