var clickImg= document.getElementById("clickImg");
var popdiv= document.getElementById("pop");
var closex= document.getElementById("close");

clickImg.onclick=function(){
    popdiv.style.display="block";

}
clickImg.onmouseover=function(){
    clickImg.style.cursor="pointer";
}
closex.onclick=function(){
    popdiv.style.display="none";
}
closex.onmouseover=function(){
    closex.style.cursor="pointer";
}