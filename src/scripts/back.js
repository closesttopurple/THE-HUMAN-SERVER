document.getElementById('backButton').addEventListener('click', function(y) {
    if (document.referrer == "") {  
        y.preventDefault();
        window.history.back();
    }

});
