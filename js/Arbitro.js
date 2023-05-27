$(function() {
    $("#divNav").load("../../templates/navbar_search.html");

    $("#btnTournament1").on("click", enterTournament(1))
    $("#btnTournament2").on("click", enterTournament(2))
});

function enterTournament(i) {
    console.log(i )
}