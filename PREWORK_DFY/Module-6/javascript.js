document.getElementById('bttnGrow').addEventListener("click",function(){
       document.getElementById('box').style.width ="225px";
       document.getElementById("box").style.height ="225px";
    });

document.getElementById('bttnReset').addEventListener("click",function(){
    document.getElementById('box').style.opacity ="1";    
    document.getElementById('box').style.width ="150px";
        document.getElementById("box").style.height ="150px";
        document.getElementById("box").style.color = "blue";
        
        document.body.style.backgroundColor ="green";
     });
document.getElementById('bttnFade').addEventListener("click",function(){
        document.getElementById('box').style.opacity ="0.5"
    
     });
//document.getElementById('bttnBlu').addEventListener("click", function(){
        //document.getElementsByClassName("box").body.style.color ="green" ;});