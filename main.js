canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
alphabet = "Alphabet Key.jpg";
number = "Number Key.jpg";
arrow = "Arrow Key.jpg";
window.addEventListener("keydown",my_alphabet);
function my_alphabet(e)
{
    keypressed = e.keyCode;
    console.log(keypressed);
    if(keypressed=="65")
    {
        a();
        console.log("a");
    }
    if(keypressed=="66")
    {
        b();
        console.log("b");
    }
    if(keypressed=="67")
    {
        c();
        console.log("c");
    }
    
    if(keypressed=="68")
    {
        d();
        console.log("d");
    }
    if(keypressed=="69")
    {
        e();
        console.log("e");
    }
    
    if(keypressed=="70")
    {
        f();
        console.log("f");
    }
    if(keypressed=="71")
    {
        g();
        console.log("g");
    }
    if(keypressed=="72")
    {
        h();
        console.log("h");
    }
    if(keypressed=="73")
    {
        i();
        console.log("i");
    }
    if(keypressed=="74")
    {
        j();
        console.log("j");
    }
    if(keypressed=="75")
    {
        k();
        console.log("k");
    }
    if(keypressed=="76")
    {
        l();
        console.log("l");
    }
    if(keypressed=="77")
    {
        m();
        console.log("m");
    }
    if(keypressed=="78")
    {
        n();
        console.log("n");
    }
    if(keypressed=="79")
    {
        o();
        console.log("o");
    }
    if(keypressed=="80")
    {
        p();
        console.log("p");
    }
    if(keypressed=="81")
    {
        q();
        console.log("q");
    }
    if(keypressed=="82")
    {
        r();
        console.log("r");
    }
    if(keypressed=="83")
    {
        s();
        console.log("s");
    }
    if(keypressed=="84")
    {
        t();
        console.log("t");
    }
    if(keypressed=="85")
    {
        u();
        console.log("u");
    }
    if(keypressed=="86")
    {
        v();
        console.log("v");
    }
    if(keypressed=="87")
    {
        w();
        console.log("w");
    }
    if(keypressed=="88")
    {
        x();
        console.log("x");
    }
    if(keypressed=="89")
    {
        y();
        console.log("y");
    }
    if(keypressed=="90")
    {
        z();
        console.log("z");
    }
    if(keypressed=="38")
    {
        up();
        console.log("up");
    }
    if(keypressed=="40")
    {
        down();
        console.log("down");
    }
    if(keypressed=="39")
    {
        right();
        console.log("right");
    }
    if(keypressed=="37")
    {
        left();
        console.log("left");
    }
    if(keypressed=="18")
    {
        alt();
        console.log("alt");
    }
    if(keypressed=="91")
    {
        ctl();
        console.log("ctl");
    }
    if(keypressed=="27")
    {
        esc();
        console.log("esc");
    }
}

function upload_img()
{
    ctx.drawImage(background_img,0,0,canvas.width,canvas.height)
}

function a()
{
    background_img = new Image();
    background_img.onload = upload_img;
    background_img.src = alphabet;
    document.getElementById("something").innerHTML = "You Clicked the Alphabet A";
}
function b()
{
    background_img = new Image();
    background_img.onload = upload_img;
    background_img.src = alphabet;
    document.getElementById("something").innerHTML = "You Clicked the Alphabet B";
}
function c()
{
    background_img = new Image();
    background_img.onload = upload_img;
    background_img.src = alphabet;
    document.getElementById("something").innerHTML = "You Clicked the Alphabet C";
}
function d()
{
    background_img = new Image();
    background_img.onload = upload_img;
    background_img.src = alphabet;
    document.getElementById("something").innerHTML = "You Clicked the Alphabet D";
}
function e()
{
    background_img = new Image();
    background_img.onload = upload_img;
    background_img.src = alphabet;
    document.getElementById("something").innerHTML = "You Clicked the Alphabet E";
}
function f()
{
    background_img = new Image();
    background_img.onload = upload_img;
    background_img.src = alphabet;
    document.getElementById("something").innerHTML = "You Clicked the Alphabet F";
}
function g()
{
    background_img = new Image();
    background_img.onload = upload_img;
    background_img.src = alphabet;
    document.getElementById("something").innerHTML = "You Clicked the Alphabet G";
}
function h()
{
    background_img = new Image();
    background_img.onload = upload_img;
    background_img.src = alphabet;
    document.getElementById("something").innerHTML = "You Clicked the Alphabet H";
}
function i()
{
    background_img = new Image();
    background_img.onload = upload_img;
    background_img.src = alphabet;
    document.getElementById("something").innerHTML = "You Clicked the Alphabet I";
}
function j()
{
    background_img = new Image();
    background_img.onload = upload_img;
    background_img.src = alphabet;
    document.getElementById("something").innerHTML = "You Clicked the Alphabet J";
}
function k()
{
    background_img = new Image();
    background_img.onload = upload_img;
    background_img.src = alphabet;
    document.getElementById("something").innerHTML = "You Clicked the Alphabet K";
}
function l()
{
    background_img = new Image();
    background_img.onload = upload_img;
    background_img.src = alphabet;
    document.getElementById("something").innerHTML = "You Clicked the Alphabet L";
}
function m()
{
    background_img = new Image();
    background_img.onload = upload_img;
    background_img.src = alphabet;
    document.getElementById("something").innerHTML = "You Clicked the Alphabet M";
}
function n()
{
    background_img = new Image();
    background_img.onload = upload_img;
    background_img.src = alphabet;
    document.getElementById("something").innerHTML = "You Clicked the Alphabet N";
}
function o()
{
    background_img = new Image();
    background_img.onload = upload_img;
    background_img.src = alphabet;
    document.getElementById("something").innerHTML = "You Clicked the Alphabet O";
}
function p()
{
    background_img = new Image();
    background_img.onload = upload_img;
    background_img.src = alphabet;
    document.getElementById("something").innerHTML = "You Clicked the Alphabet P";
}
function q()
{
    background_img = new Image();
    background_img.onload = upload_img;
    background_img.src = alphabet;
    document.getElementById("something").innerHTML = "You Clicked the Alphabet Q";
}
function r()
{
    background_img = new Image();
    background_img.onload = upload_img;
    background_img.src = alphabet;
    document.getElementById("something").innerHTML = "You Clicked the Alphabet R";
}
function s()
{
    background_img = new Image();
    background_img.onload = upload_img;
    background_img.src = alphabet;
    document.getElementById("something").innerHTML = "You Clicked the Alphabet S";
}
function t()
{
    background_img = new Image();
    background_img.onload = upload_img;
    background_img.src = alphabet;
    document.getElementById("something").innerHTML = "You Clicked the Alphabet T";
}
function u()
{
    background_img = new Image();
    background_img.onload = upload_img;
    background_img.src = alphabet;
    document.getElementById("something").innerHTML = "You Clicked the Alphabet U";
}
function v()
{
    background_img = new Image();
    background_img.onload = upload_img;
    background_img.src = alphabet;
    document.getElementById("something").innerHTML = "You Clicked the Alphabet V";
}
function w()
{
    background_img = new Image();
    background_img.onload = upload_img;
    background_img.src = alphabet;
    document.getElementById("something").innerHTML = "You Clicked the Alphabet W";
}
function x()
{
    background_img = new Image();
    background_img.onload = upload_img;
    background_img.src = alphabet;
    document.getElementById("something").innerHTML = "You Clicked the Alphabet X";
}
function y()
{
    background_img = new Image();
    background_img.onload = upload_img;
    background_img.src = alphabet;
    document.getElementById("something").innerHTML = "You Clicked the Alphabet Y";
}
function z()
{
    background_img = new Image();
    background_img.onload = upload_img;
    background_img.src = alphabet;
    document.getElementById("something").innerHTML = "You Clicked the Alphabet Z";
}
function right()
{
    background_img = new Image();
    background_img.onload = upload_img;
    background_img.src = arrow;
    document.getElementById("something").innerHTML = "You Clicked the Right Arrow Key";
}
function left()
{
    background_img = new Image();
    background_img.onload = upload_img;
    background_img.src = arrow;
    document.getElementById("something").innerHTML = "You Clicked the Left Arrow Key";
}
function up()
{
    background_img = new Image();
    background_img.onload = upload_img;
    background_img.src = arrow;
    document.getElementById("something").innerHTML = "You Clicked the Up Arrow Key";
}
function down()
{
    background_img = new Image();
    background_img.onload = upload_img;
    background_img.src = arrow;
    document.getElementById("something").innerHTML = "You Clicked the Down Arrow Key";
}