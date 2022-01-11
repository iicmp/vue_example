var myButton=document.querySelector('.myBtn');
var myMdl=document.querySelector('.myModal');
var myClose=document.querySelector('.close');
myButton.onclick=function(){
    myMdl.style.display="block";
}
myClose.onclick=function(){
    myMdl.style.display="none";
}