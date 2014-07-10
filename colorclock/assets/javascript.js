setInterval(function clock() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.querySelector('.clock').innerHTML = h + ":" + m + ":" + s;
    var t = setTimeout(function() {
        clock()
    }, 500);

    function colorChanger() {
        var d = today.getTime() / (1000 * 60 * 60 * 24)
        var h = today.getHours();
        var m = today.getMinutes();
        var s = today.getSeconds();
        return "rgb(" +
            (((d % 2) == 1) ? parseInt((h / 24) * 256) : (255 - parseInt((h / 24) * 256))) + "," +
            (((h % 2) == 1) ? parseInt((m / 60) * 256) : (255 - parseInt((m / 60) * 256))) + "," +
            (((m % 2) == 1) ? parseInt((s / 60) * 256) : (255 - parseInt((s / 60) * 256))) + ")"

    };
    $('body').css('backgroundColor', colorChanger)
    var rgbFix = colorChanger().replace("rgb(", "").replace(")","");    
    console.log(rgbFix);
    $('.color').html(rgbFix)
}, 1000);


function checkTime(i) {
    if (i < 10) {
        i = "0" + i
    }; // add zero in front of numbers < 10
    return i;
};
