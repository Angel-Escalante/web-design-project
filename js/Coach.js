$(function() {
    $("#divNavBar").load("../../templates/navbar.html");
    $("#divBottom").load("../../templates/bottom_bar.html", function() {
        $("body").removeClass("invisible");
    });
});