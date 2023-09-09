function oq(){
    var form1 = document.getElementById('form1');
    form1.style.backgroundColor = "azure"
}
function qora(){
    var form1 = document.getElementById('form1');
    form1.style.backgroundColor = "rgb(36, 36, 41)";
}
// var inp = document.getElementById('inp');
// inp.value = "7"
// console.log(inp.value)

function yoz1(){
    var inp = document.getElementById('inp');
    inp.value += "7"
}

function yoz2(){
    var inp = document.getElementById('inp');
    inp.value += "8"
}

function yoz8(){
    var inp = document.getElementById('inp');
    inp.value += "*"
}

function hisobla(){
    var inp = document.getElementById('inp');
    console.log(inp.value);
    inp.value = eval(inp.value);
}