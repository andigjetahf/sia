/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// ─── DataTables Global Albanian Localization ───────────────────────────────
if (typeof $.fn.dataTable !== 'undefined') {
    $.extend(true, $.fn.dataTable.defaults, {
        language: {
            search:         '<span>Kërko:</span> _INPUT_',
            lengthMenu:     '<span>Shfaq:</span> _MENU_',
            info:           'Shfaqen _START_ deri _END_ nga _TOTAL_ rezultate',
            infoEmpty:      'Nuk ka të dhëna',
            infoFiltered:   '(filtruar nga _MAX_ rezultate gjithsej)',
            zeroRecords:    'Nuk u gjet asnjë rezultat',
            emptyTable:     'Nuk ka të dhëna në tabelë',
            paginate: {
                first:    'I pari',
                last:     'I fundit',
                next:     '&rarr;',
                previous: '&larr;'
            }
        }
    });
}

// ─── Bootstrap Datepicker Global Albanian Localization ────────────────────
$(function () {
    if (typeof $.fn.datepicker !== 'undefined') {
        $.fn.datepicker.defaults.language = 'sq';
        $.fn.datepicker.defaults.autoclose = true;
    }
});

var toggleNewProfile = function () {
    $('#new_profile_div').toggle();
}

var styledCheckboxRadioInit = function () {
    $(".styled").uniform({
        radioClass: 'choice'
    });
}

function divToggle(divId){
    $(divId).hide();
    $(divId+'_element').show();
}