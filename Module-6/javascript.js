document.getElementById("button1").addEventListener("click", function(){
    document.getElementById("box").style.height="250px";/*Grow*/
});
document.getElementById("button2").addEventListener("click", function(){
    document.getElementById("box").style.backgroundColor="blue";/*blue*/
});
document.getElementById("button3").addEventListener("click", function(){
    document.getElementById("box").style.opacity="-.1";/*fade*/
});
document.getElementById("button4").addEventListener("click", function(){
    document.getElementById("box").style.height="150px"; /*reset*/
    document.getElementById("box").style.backgroundColor="orange";
    document.getElementById("box").style.opacity="1";
});