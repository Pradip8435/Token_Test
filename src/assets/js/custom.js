
$(document).ready(function () {
//tooltip js
    $('[data-toggle="tooltip"]').tooltip();

    // browse btn js
    $('#my-button').click(function(){
    $('#my-file').click();
    });

    $('a[data-toggle="collapse"]').click(function () {
        $(this).find('i').toggleClass('bi bi-plus bi bi-dash');
    });

$("input[type='checkbox']").click(function () {
 
    var numberNotChecked = $('input:checkbox:checked').length;
    
    if (numberNotChecked >= 2) {
        $("#btn-console-report").attr("disabled", !this.checked);
    }
    else {
        $("#btn-console-report").attr('disabled', 'disabled');
    }
});
});
