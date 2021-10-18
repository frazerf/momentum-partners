console.log("Testing JS import file one.");
// Test JavaScript, to ensure Babel is working.

$('#toggle').click(function() {
    $(this).toggleClass('active');
    $('#overlay').toggleClass('open');
});

var rellax = new Rellax(".rellax");
