/**
 * Created by kasperpeulen on 21/09/14.
 */

$(function() {
    $('textarea').each(function(index) {
        $(this).longPress();
    });
    $('input').each(function(index) {
        $(this).longPress();
    });
});