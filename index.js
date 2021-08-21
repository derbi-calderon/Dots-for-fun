var disabled = true, joinDisabled = true;
var x = [], y = [];

var c = 0, cT;
var canvas, context;
window.onload = function(){
document.getElementById("sideButtons").style.height = 0 + "px";
canvas = document.getElementById("canvas");
canvas.height = (screen.height);
canvas.width = screen.width;
canvas.style.top = 0 + "px";
context = canvas.getContext('2d');
canvas.addEventListener("click", coord);
document.getElementById("join").addEventListener("click", join);
document.getElementById("connect").addEventListener("click", connect);
document.getElementById("help").addEventListener("click", help);
document.getElementById("clear").addEventListener("click", clear);
document.getElementById("connect").disabled = true;
document.getElementById("join").disabled = true;
document.getElementById("connect").style = "background-color:lightgrey;"
document.getElementById("join").style = "background-color:lightgrey;"
}
function coord(event) 
{ 
x.push(event.clientX);
y.push(event.clientY);
context.moveTo(event.clientX, (event.clientY));
context.beginPath();
context.lineWidth = 4;
context.strokeStyle = "lightblue";
context.arc(event.clientX, (event.clientY), 8, 0, 2 * Math.PI);
context.stroke();
context.fillStyle = "lightblue";
context.fill();
c++;
cT = c.toString();
context.fillStyle = "#000000";
context.font = "14px Arial";
if (c<=9)
{
context.fillText(cT, event.clientX - 4, (event.clientY + 5)); 
}
else
{
    context.fillText(cT, event.clientX - 8, (event.clientY + 5)); 
}
if (joinDisabled && c>=2)
{
    document.getElementById("join").disabled = false;
    document.getElementById("join").style = "background-color:lightpurple;"
    joinDisabled = false;
}
}
function join()
{   
    if(disabled  && c>=3)
    {
        document.getElementById("connect").disabled = false;
        document.getElementById("connect").style = "background-color:#2BAE66FF;"
        document.getElementById("join").disabled = false;
        document.getElementById("join").style = "background-color:#2BAE66FF;"
        disabled = false;
        joinDisabled = true;
    }
    context.beginPath();
    context.fillStyle = "none";
    context.lineWidth = 2;
    context.strokeStyle = "#000000";
    context.beginPath();
    context.moveTo(x[0], y[0]);
    for (let i = 1; i < x.length; i++)
    {
            context.lineTo(x[i], y[i]);
            context.stroke();
    }
}
function connect()
{
    context.beginPath();
    context.moveTo(x[x.length - 1], y[y.length - 1]);
    context.fillStyle = "none";
    context.lineWidth = 2;
    context.strokeStyle = "#000000";
    context.lineTo(x[0], y[0]);
    context.stroke();
    document.getElementById("connect").disabled = true;
document.getElementById("connect").style = "background-color:lightgrey;"
document.getElementById("join").disabled = true;
document.getElementById("join").style = "background-color:lightgrey;"
disabled = true;
joinDisabled = true;
}
function clear()
{
    context.clearRect(0, 0, canvas.width, canvas.height); 
    x = [];
    y = [];
    c = 0;
    document.getElementById("connect").disabled = true;
    document.getElementById("connect").style = "background-color:lightgrey;"
    document.getElementById("join").disabled = true;
    document.getElementById("join").style = "background-color:lightgrey;"
        disabled = true;
        joinDisabled = true;
}
function help()
{
    alert(`1. Click on the White area of the screen to generate dots.
    
2. Click JOIN button to join dots with single line
    
3. Click Connect to complete the connection

note 1:  Connect only works if you have atleast 3 dots. 
note 2:  JOIN only works if you have atleast 2 dots`)
}