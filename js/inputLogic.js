$("#input-x1").keyup(function(event) {
    if (event.keyCode === 13) {
        $("#button").click();
    }
});
$("#input-x2").keyup(function(event) {
    if (event.keyCode === 13) {
        $("#button").click();
    }
});
$("#input-x3").keyup(function(event) {
    if (event.keyCode === 13) {
        $("#button").click();
    }
});

$("#button").click(function() {
    button.onclick = function() {
        let a = Number(document.getElementById('input-x1').value);
        let b = Number(document.getElementById('input-x2').value);
        let c = Number(document.getElementById('input-x3').value);
        let result = c * (b - a);
        document.getElementById('str').innerHTML = "Результат: "+result;
    };
});