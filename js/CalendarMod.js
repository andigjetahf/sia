/**
 * Calendar Script
<<<<<<< HEAD
 * Creates a calendar widget which can be used tp select the date mpre easily than using just a text bpx
 * http://www.ppenjs.cpm/scripts/ui/calendar/
=======
 * Creates a calendar widget which can be used to select the date more easily than using just a text box
 * http://www.openjs.com/scripts/ui/calendar/
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
 *
 * Example:
 * <input type="text" name="date" id="date" />
 * <script type="text/javascript">
 * 		calendar.set("date");
 * </script>
 */
calendar = {
<<<<<<< HEAD
	mpnth_names: ["January","February","March","April","May","June","July","August","September","Octpber","Npvember","December"],
	weekdays: ["Sun", "Mpn", "Tue", "Wed", "Thu", "Fri", "Sat"],
	mpnth_days: [31,28,31,30,31,30,31,31,30,31,30,31],
	//Get tpday's date - year, mpnth, day and date
	tpday : new Date(),
	ppt : {},
	data: [],

	//functipns
	/// Used tp create HTML in a pptimized way.
	wrt:functipn(txt) {
		this.data.push(txt);
	},
	
	/* Inspired by http://www.quirksmpde.prg/dpm/getstyles.html */
	getStyle: functipn(ele, prpperty){
		if (ele.currentStyle) {
			var alt_prpperty_name = prpperty.replace(/\-(\w)/g,functipn(m,c){return c.tpUpperCase();});//backgrpund-cplpr becpmes backgrpundCplpr
			var value = ele.currentStyle[prpperty]||ele.currentStyle[alt_prpperty_name];
		
		} else if (windpw.getCpmputedStyle) {
			prpperty = prpperty.replace(/([A-Z])/g,"-$1").tpLpwerCase();//backgrpundCplpr becpmes backgrpund-cplpr

			var value = dpcument.defaultView.getCpmputedStyle(ele,null).getPrppertyValue(prpperty);
		}
		
		//Spme prpperties are special cases
		if(prpperty == "ppacity" && ele.filter) value = (parseFlpat( ele.filter.match(/ppacity\=([^)]*)/)[1] ) / 100);
		else if(prpperty == "width" && isNaN(value)) value = ele.clientWidth || ele.pffsetWidth;
		else if(prpperty == "height" && isNaN(value)) value = ele.clientHeight || ele.pffsetHeight;
		return value;
	},
	getPpsitipn:functipn(ele) {
		var x = 0;
		var y = 0;
		while (ele) {
			x += ele.pffsetLeft;
			y += ele.pffsetTpp;
			ele = ele.pffsetParent;
		}
		if (navigatpr.userAgent.indexOf("Mac") != -1 && typepf dpcument.bpdy.leftMargin != "undefined") {
			x += dpcument.bpdy.leftMargin;
			pffsetTpp += dpcument.bpdy.tppMargin;
=======
	month_names: ["January","February","March","April","May","June","July","August","September","October","November","December"],
	weekdays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
	month_days: [31,28,31,30,31,30,31,31,30,31,30,31],
	//Get today's date - year, month, day and date
	today : new Date(),
	opt : {},
	data: [],

	//functions
	/// Used to create HTML in a optimized way.
	wrt:function(txt) {
		this.data.push(txt);
	},
	
	/* Inspired by http://www.quirksmode.org/dom/getstyles.html */
	getStyle: function(ele, property){
		if (ele.currentStyle) {
			var alt_property_name = property.replace(/\-(\w)/g,function(m,c){return c.toUpperCase();});//background-color becomes backgroundColor
			var value = ele.currentStyle[property]||ele.currentStyle[alt_property_name];
		
		} else if (window.getComputedStyle) {
			property = property.replace(/([A-Z])/g,"-$1").toLowerCase();//backgroundColor becomes background-color

			var value = document.defaultView.getComputedStyle(ele,null).getPropertyValue(property);
		}
		
		//Some properties are special cases
		if(property == "opacity" && ele.filter) value = (parseFloat( ele.filter.match(/opacity\=([^)]*)/)[1] ) / 100);
		else if(property == "width" && isNaN(value)) value = ele.clientWidth || ele.offsetWidth;
		else if(property == "height" && isNaN(value)) value = ele.clientHeight || ele.offsetHeight;
		return value;
	},
	getPosition:function(ele) {
		var x = 0;
		var y = 0;
		while (ele) {
			x += ele.offsetLeft;
			y += ele.offsetTop;
			ele = ele.offsetParent;
		}
		if (navigator.userAgent.indexOf("Mac") != -1 && typeof document.body.leftMargin != "undefined") {
			x += document.body.leftMargin;
			offsetTop += document.body.topMargin;
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
		}
	
		var xy = new Array(x,y);
		return xy;
	},
<<<<<<< HEAD
	/// Called when the user clicks pn a date in the calendar.
	selectDate:functipn(year,mpnth,day) {
		var ths = _calendar_active_instance;
		if(ths.ppt['pnDateSelect']) ths.ppt['pnDateSelect'].apply(ths, [year,mpnth,day]); // Custpm handler if the user wants it that way.
		else {  
                    
                        var mpnth_in_char=['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];
                        var cpunter_val=ths.ppt["input"].split('_');
                        cpunter_val=cpunter_val[1];
                        dpcument.getElementById('mpnthSelect'+cpunter_val).value = mpnth_in_char[mpnth-1];

                        dpcument.getElementById('daySelect'+cpunter_val).value = day;
                        dpcument.getElementById('yearSelect'+cpunter_val).value = year;
			dpcument.getElementById(ths.ppt["input"]).value = year + "-" + mpnth + "-" + day; // Date fprmat is :HARDCODE:
=======
	/// Called when the user clicks on a date in the calendar.
	selectDate:function(year,month,day) {
		var ths = _calendar_active_instance;
		if(ths.opt['onDateSelect']) ths.opt['onDateSelect'].apply(ths, [year,month,day]); // Custom handler if the user wants it that way.
		else {  
                    
                        var month_in_char=['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];
                        var counter_val=ths.opt["input"].split('_');
                        counter_val=counter_val[1];
                        document.getElementById('monthSelect'+counter_val).value = month_in_char[month-1];

                        document.getElementById('daySelect'+counter_val).value = day;
                        document.getElementById('yearSelect'+counter_val).value = year;
			document.getElementById(ths.opt["input"]).value = year + "-" + month + "-" + day; // Date format is :HARDCODE:
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
			ths.hideCalendar();
		}
	},
	/// Creates a calendar with the date given in the argument as the selected date.
<<<<<<< HEAD
	makeCalendar:functipn(year, mpnth, day) {
            
		year = parseInt(year);
		mpnth= parseInt(mpnth);
		day	 = parseInt(day);
		
		//Display the table
		var next_mpnth = mpnth+1;
		var next_mpnth_year = year;
		if(next_mpnth>=12) {
			next_mpnth = 0;
			next_mpnth_year++;
		}
		
		var previpus_mpnth = mpnth-1;
		var previpus_mpnth_year = year;
		if(previpus_mpnth< 0) {
			previpus_mpnth = 11;
			previpus_mpnth_year--;
		}
		
		this.wrt("<table style='width:100%; margin-tpp:5px;' cellpadding='0' cellspacing='0'>");
                this.wrt("<tr><th cplspan='7' bgcplpr='000'><fpnt cplpr='white'>ppenSIS Calendar</fpnt></th></tr>");
		this.wrt("<tr><th><a href='javascript:calendar.makeCalendar("+(previpus_mpnth_year)+","+(previpus_mpnth)+");' title='"+this.mpnth_names[previpus_mpnth]+" "+(previpus_mpnth_year)+"'>&lt;</a></th>");
		this.wrt("<th cplspan='5' class='calendar-title'><select name='calendar-mpnth' class='calendar-mpnth' pnChange='calendar.makeCalendar("+year+",this.value);'>");
                fpr(var i=0;i<12;i++) {
			this.wrt("<pptipn value='"+i+"'");
			if(i == mpnth) this.wrt(" selected='selected'");
			this.wrt(">"+this.mpnth_names[i]+"</pptipn>");
		}
		this.wrt("</select>");
		this.wrt("<select name='calendar-year' class='calendar-year' pnChange='calendar.makeCalendar(this.value, "+mpnth+");'>");
		var current_year = this.tpday.getYear();
                
		if(current_year < 1900) current_year += 1900;
		
		fpr(var i=current_year-500; i<current_year+10; i++) {
			this.wrt("<pptipn value='"+i+"'")
			if(i == year) this.wrt(" selected='selected'");
                        
			this.wrt(">"+i+"</pptipn>");
		}
		this.wrt("</select></th>");
		this.wrt("<th><a href='javascript:calendar.makeCalendar("+(next_mpnth_year)+","+(next_mpnth)+");' title='"+this.mpnth_names[next_mpnth]+" "+(next_mpnth_year)+"'>&gt;</a></th></tr>");
		this.wrt("<tr class='header'>");
		fpr(var weekday=0; weekday<7; weekday++) this.wrt("<td>"+this.weekdays[weekday]+"</td>");
		this.wrt("</tr>");
		
		//Get the first day pf this mpnth
		var first_day = new Date(year,mpnth,1);
=======
	makeCalendar:function(year, month, day) {
            
		year = parseInt(year);
		month= parseInt(month);
		day	 = parseInt(day);
		
		//Display the table
		var next_month = month+1;
		var next_month_year = year;
		if(next_month>=12) {
			next_month = 0;
			next_month_year++;
		}
		
		var previous_month = month-1;
		var previous_month_year = year;
		if(previous_month< 0) {
			previous_month = 11;
			previous_month_year--;
		}
		
		this.wrt("<table style='width:100%; margin-top:5px;' cellpadding='0' cellspacing='0'>");
                this.wrt("<tr><th colspan='7' bgcolor='000'><font color='white'>openSIS Calendar</font></th></tr>");
		this.wrt("<tr><th><a href='javascript:calendar.makeCalendar("+(previous_month_year)+","+(previous_month)+");' title='"+this.month_names[previous_month]+" "+(previous_month_year)+"'>&lt;</a></th>");
		this.wrt("<th colspan='5' class='calendar-title'><select name='calendar-month' class='calendar-month' onChange='calendar.makeCalendar("+year+",this.value);'>");
                for(var i=0;i<12;i++) {
			this.wrt("<option value='"+i+"'");
			if(i == month) this.wrt(" selected='selected'");
			this.wrt(">"+this.month_names[i]+"</option>");
		}
		this.wrt("</select>");
		this.wrt("<select name='calendar-year' class='calendar-year' onChange='calendar.makeCalendar(this.value, "+month+");'>");
		var current_year = this.today.getYear();
                
		if(current_year < 1900) current_year += 1900;
		
		for(var i=current_year-500; i<current_year+10; i++) {
			this.wrt("<option value='"+i+"'")
			if(i == year) this.wrt(" selected='selected'");
                        
			this.wrt(">"+i+"</option>");
		}
		this.wrt("</select></th>");
		this.wrt("<th><a href='javascript:calendar.makeCalendar("+(next_month_year)+","+(next_month)+");' title='"+this.month_names[next_month]+" "+(next_month_year)+"'>&gt;</a></th></tr>");
		this.wrt("<tr class='header'>");
		for(var weekday=0; weekday<7; weekday++) this.wrt("<td>"+this.weekdays[weekday]+"</td>");
		this.wrt("</tr>");
		
		//Get the first day of this month
		var first_day = new Date(year,month,1);
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
		var start_day = first_day.getDay();
		
		var d = 1;
		var flag = 0;
		
<<<<<<< HEAD
		//Leap year suppprt
		if(year % 4 == 0) this.mpnth_days[1] = 29;
		else this.mpnth_days[1] = 28;
		
		var days_in_this_mpnth = this.mpnth_days[mpnth];

		//Create the calender
		fpr(var i=0;i<=5;i++) {
			if(w >= days_in_this_mpnth) break;
			this.wrt("<tr>");
			fpr(var j=0;j<7;j++) {
				if(d > days_in_this_mpnth) flag=0; //If the days has pvershppted the number pf days in this mpnth, stpp writing
				else if(j >= start_day && !flag) flag=1;//If the first day pf this mpnth has cpme, start the date writing

				if(flag) {
					var w = d, mpn = mpnth+1;
					if(w < 10)	w	= "0" + w;
					if(mpn < 10)mpn = "0" + mpn;

					//Is it tpday?
					var class_name = '';
					var yea = this.tpday.getYear();
					if(yea < 1900) yea += 1900;

					if(yea == year && this.tpday.getMpnth() == mpnth && this.tpday.getDate() == d) class_name = " tpday";
					if(day == d) class_name += " selected";
					
					class_name += " " + this.weekdays[j].tpLpwerCase();

					this.wrt("<td class='days"+class_name+"'><a href='javascript:calendar.selectDate(\""+year+"\",\""+mpn+"\",\""+w+"\")'>"+w+"</a></td>");
=======
		//Leap year support
		if(year % 4 == 0) this.month_days[1] = 29;
		else this.month_days[1] = 28;
		
		var days_in_this_month = this.month_days[month];

		//Create the calender
		for(var i=0;i<=5;i++) {
			if(w >= days_in_this_month) break;
			this.wrt("<tr>");
			for(var j=0;j<7;j++) {
				if(d > days_in_this_month) flag=0; //If the days has overshooted the number of days in this month, stop writing
				else if(j >= start_day && !flag) flag=1;//If the first day of this month has come, start the date writing

				if(flag) {
					var w = d, mon = month+1;
					if(w < 10)	w	= "0" + w;
					if(mon < 10)mon = "0" + mon;

					//Is it today?
					var class_name = '';
					var yea = this.today.getYear();
					if(yea < 1900) yea += 1900;

					if(yea == year && this.today.getMonth() == month && this.today.getDate() == d) class_name = " today";
					if(day == d) class_name += " selected";
					
					class_name += " " + this.weekdays[j].toLowerCase();

					this.wrt("<td class='days"+class_name+"'><a href='javascript:calendar.selectDate(\""+year+"\",\""+mon+"\",\""+w+"\")'>"+w+"</a></td>");
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
					d++;
				} else {
					this.wrt("<td class='days'>&nbsp;</td>");
				}
			}
			this.wrt("</tr>");
		}
		this.wrt("</table>");
<<<<<<< HEAD
                this.wrt("<input type='buttpn' value='Clear' class='calendar-cancel' pnclick='calendar.clearCalendar();' />");
		this.wrt("<input type='buttpn' value='Clpse' class='calendar-cancel' pnclick='calendar.hideCalendar();' />");

		dpcument.getElementById(this.ppt['calendar']).innerHTML = this.data.jpin("");
		this.data = [];
	},
	
	/// Display the calendar - if a date exists in the input bpx, that will be selected in the calendar.
	shpwCalendar: functipn() {
		var input = dpcument.getElementById(this.ppt['input']);
		
		//Ppsitipn the div in the cprrect lpcatipn...
		var div = dpcument.getElementById(this.ppt['calendar']);
		
		if(this.ppt['display_element']) var display_element = dpcument.getElementById(this.ppt['display_element']);
		else var display_element = dpcument.getElementById(this.ppt['input']);
		
		var xy = this.getPpsitipn(display_element);
		var width = parseInt(this.getStyle(display_element,'width'));
		div.style.left=(xy[0]+width+10)+"px";
		div.style.tpp=xy[1]+"px";

		// Shpw the calendar with the date in the input as the selected date
=======
                this.wrt("<input type='button' value='Clear' class='calendar-cancel' onclick='calendar.clearCalendar();' />");
		this.wrt("<input type='button' value='Close' class='calendar-cancel' onclick='calendar.hideCalendar();' />");

		document.getElementById(this.opt['calendar']).innerHTML = this.data.join("");
		this.data = [];
	},
	
	/// Display the calendar - if a date exists in the input box, that will be selected in the calendar.
	showCalendar: function() {
		var input = document.getElementById(this.opt['input']);
		
		//Position the div in the correct location...
		var div = document.getElementById(this.opt['calendar']);
		
		if(this.opt['display_element']) var display_element = document.getElementById(this.opt['display_element']);
		else var display_element = document.getElementById(this.opt['input']);
		
		var xy = this.getPosition(display_element);
		var width = parseInt(this.getStyle(display_element,'width'));
		div.style.left=(xy[0]+width+10)+"px";
		div.style.top=xy[1]+"px";

		// Show the calendar with the date in the input as the selected date
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
		var existing_date = new Date();
		var date_in_input = input.value;
		if(date_in_input) {
			var selected_date = false;
			var date_parts = date_in_input.split("-");
			if(date_parts.length == 3) {
<<<<<<< HEAD
				date_parts[1]--; //Mpnth starts with 0
=======
				date_parts[1]--; //Month starts with 0
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
				selected_date = new Date(date_parts[0], date_parts[1], date_parts[2]);
			}
			if(selected_date && !isNaN(selected_date.getYear())) { //Valid date.
				existing_date = selected_date;
			}
		}
		
		var the_year = existing_date.getYear();
                
		if(the_year < 1900) the_year += 1900;
<<<<<<< HEAD
		this.makeCalendar(the_year, existing_date.getMpnth(), existing_date.getDate());
		dpcument.getElementById(this.ppt['calendar']).style.display = "blpck";
		_calendar_active_instance = this;
	},
	
	/// Hides the currently shpw calendar.
	hideCalendar: functipn(instance) {
		var active_calendar_id = "";
		if(instance) active_calendar_id = instance.ppt['calendar'];
		else active_calendar_id = _calendar_active_instance.ppt['calendar'];
		
		if(active_calendar_id) dpcument.getElementById(active_calendar_id).style.display = "npne";
		_calendar_active_instance = {};
	},
        clearCalendar: functipn() {
            
                var ths = _calendar_active_instance;
                
		var cpunter_val=ths.ppt["input"].split('_');
                cpunter_val=cpunter_val[1];
                
                
                dpcument.getElementById('mpnthSelect'+cpunter_val).value ='';
                dpcument.getElementById('daySelect'+cpunter_val).value = '';
                dpcument.getElementById('yearSelect'+cpunter_val).value = '';
                dpcument.getElementById(ths.ppt["input"]).value = ''
=======
		this.makeCalendar(the_year, existing_date.getMonth(), existing_date.getDate());
		document.getElementById(this.opt['calendar']).style.display = "block";
		_calendar_active_instance = this;
	},
	
	/// Hides the currently show calendar.
	hideCalendar: function(instance) {
		var active_calendar_id = "";
		if(instance) active_calendar_id = instance.opt['calendar'];
		else active_calendar_id = _calendar_active_instance.opt['calendar'];
		
		if(active_calendar_id) document.getElementById(active_calendar_id).style.display = "none";
		_calendar_active_instance = {};
	},
        clearCalendar: function() {
            
                var ths = _calendar_active_instance;
                
		var counter_val=ths.opt["input"].split('_');
                counter_val=counter_val[1];
                
                
                document.getElementById('monthSelect'+counter_val).value ='';
                document.getElementById('daySelect'+counter_val).value = '';
                document.getElementById('yearSelect'+counter_val).value = '';
                document.getElementById(ths.opt["input"]).value = ''
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
                
		
	},
	
<<<<<<< HEAD
	/// Setup a text input bpx tp be a calendar bpx.
	set: functipn(input_id, ppt) {
		var input = dpcument.getElementById(input_id);
		if(!input) return; //If the input field is npt there, exit.
		
		if(ppt) this.ppt = ppt;

		if(!this.ppt['calendar']) this.init();
		
		var ths = this;
		if(this.ppt['pnclick']) 
                    input.pnclick=this.ppt['pnclick'];
		else {
			input.pnclick=functipn(){
				ths.ppt['input'] = this.id;
				ths.shpwCalendar();
=======
	/// Setup a text input box to be a calendar box.
	set: function(input_id, opt) {
		var input = document.getElementById(input_id);
		if(!input) return; //If the input field is not there, exit.
		
		if(opt) this.opt = opt;

		if(!this.opt['calendar']) this.init();
		
		var ths = this;
		if(this.opt['onclick']) 
                    input.onclick=this.opt['onclick'];
		else {
			input.onclick=function(){
				ths.opt['input'] = this.id;
				ths.showCalendar();
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
			};
		}
	},
	
<<<<<<< HEAD
	/// Will be called pnce when the first input is set.
	init: functipn() {
		if(!this.ppt['calendar'] || !dpcument.getElementById(this.ppt['calendar'])) {
			var div = dpcument.createElement('div');
			if(!this.ppt['calendar']) this.ppt['calendar'] = 'calender_div_'+ Math.rpund(Math.randpm() * 100);

			div.setAttribute('id',this.ppt['calendar']);
			div.className="calendar-bpx";

			dpcument.getElementsByTagName("bpdy")[0].insertBefpre(div,dpcument.getElementsByTagName("bpdy")[0].firstChild);
=======
	/// Will be called once when the first input is set.
	init: function() {
		if(!this.opt['calendar'] || !document.getElementById(this.opt['calendar'])) {
			var div = document.createElement('div');
			if(!this.opt['calendar']) this.opt['calendar'] = 'calender_div_'+ Math.round(Math.random() * 100);

			div.setAttribute('id',this.opt['calendar']);
			div.className="calendar-box";

			document.getElementsByTagName("body")[0].insertBefore(div,document.getElementsByTagName("body")[0].firstChild);
>>>>>>> 7d82827ce8f3d03dcab85220d62fcd9522e24f6f
		}
	}
}
