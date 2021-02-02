function print(e) {
    var x = document.getElementById("inpu");
    x.value += e;
}
function calculate() {
    var x = document.getElementById("inpu");

   var final = eval(x.value);

   x.value = final;
}
function clea() {
    var b = document.getElementById("inpu");
    b.value="";
}

