/******************** TASK 1 ******************/
$('a').each(function () {
    if($(this).attr('href').includes("https://")) {
        $(this).attr('target', '_blank');
    }
});
/******************** TASK 2 ******************/
$('h2.head').css('background', 'green').children('.inner').css('font-size', '35px');
/******************** TASK 3 ******************/
let $h3 = $('h3');
let $div = $('div');
$h3[0].before($div[0]);
$h3[1].before($div[1]);

/******************** TASK 4 ******************/
function checkBox() {
    let count = $(':checkbox:checked').length;
    if(count >= 3) $(':checkbox').attr('disabled', 'true');
}