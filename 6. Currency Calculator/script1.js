function clearScreen() 
{
    document.getElementById("result").value = "";
}
function interchange()
{
    clearScreen()
    var p = document.getElementById("result").value;
    var q = document.getElementById("result1").value;
    document.getElementById("result").value = q;
    document.getElementById("result1").value = p;
}

function display(value)
{
    document.getElementById("result").value += value;
}

function calculateaud() 
{
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result1").value = 0.019 * q;
}

function calculateusd() 
{
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result1").value = 0.011 * q;
}

function calculateeur() 
{
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result1").value = 0.012 * q;
}
function calculatekwd() 
{
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result1").value = 0.0014 * q;
}

function calculategbp() 
{
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result1").value = 0.011 * q;
}

function calculateyen() 
{
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result1").value = 1.74 * q;
}