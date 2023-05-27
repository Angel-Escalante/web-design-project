$(function() {
    // $("#searchContainer").load("../../templates/navbar_search.html");
    $("#headd").load("../../templates/headJugador.html");
    $("#naav").load("../../templates/navbar_no_session.html");
    $("#futer").load("../../templates/futer.html");
    $("#verMas").load("../../templates/verMas.html", function() {
        $("body").removeClass("invisible");
    });
});

function verInfo(){
    document.location.href = "equipoJugador.html"
}