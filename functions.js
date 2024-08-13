function myFun() {
  document.getElementById("hi1").innerHTML = "EXAMPLE";
  document.getElementById("hi2").innerHTML = "JAVASCRIPT";
}
function myfun(name,place)
{
  document.getElementById("parameter").innerHTML = 
  "Is Sneka is from udumalpet???";
  document.getElementById("parameter2").innerHTML = 
  "Yes!" + name + " is from" + place + ".";
}
function myform(txt){
  document.getElementById("form1").innerHTML = txt;
}
let x = myreturn(13,14)
document.getElementById("hi3").innerHTML = x;
function myreturn(a,b){
  return a * b;
}
let a, b, c;
a = 5; b = 6; c = a + b;
document.getElementById("hi1").innerHTML = c;

let value = celsius(77);
document.getElementById("celsious").innerHTML = value;
function celsius(f){
  return (5/9) * (f-32);
}

function displayDate(){
document.getElementById("time").innerHTML = Date();
}
