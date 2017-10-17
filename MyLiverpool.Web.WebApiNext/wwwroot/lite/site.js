window.onscroll = oEvent => {
    var scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if (scrollPos >= 200)
        document.getElementById("goToTop").className = "";
    else
        document.getElementById("goToTop").className = "hidden";
};