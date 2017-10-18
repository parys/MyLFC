window.onscroll= function() {
    var scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if (scrollPos >= 200)
        document.getElementById("goToTop").className = "";
    else
        document.getElementById("goToTop").className = "hidden";
};

$(document).ready(function () {

    $(".timeConvert").each(function () {
        var dateTime = new Date($(this).data("date"));
        var time;
        if ($(this).data("sec")) {
            time = dateTime.toString("HH:mm:ss");
        } else {
            time = dateTime.toString("HH:mm");
        }
        var date = dateTime.toString("dd/MM/YYYY");
        if ($(this).data()) {

        }//
        //  $(this).text(`${time} ${date}`);
        $(this).text(moment($(this).data("date")).format('DD MMM YYYY, HH:mm:ss'));
    });
})