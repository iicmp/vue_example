
function showSecondPage(n){
    
    var secondPage= document.querySelector(".secondpage");
    secondPage.style.display="block";
    showPhoto(n);
}

function showPhoto(n){
    var photoDiv= document.getElementById("a"+n);
    photoDiv.style.zIndex= 3;
    var bottomPhoto= document.getElementById("b"+n);
    bottomPhoto.style.filter= "brightness(100%)";

    for(i=1;i<5;i++){
        if(n!=i){
            var photoDiv= document.getElementById("a"+i);
            photoDiv.style.zIndex= 2;
            var bottomPhoto= document.getElementById("b"+i);
            bottomPhoto.style.filter= "brightness(50%)";
        }
    }
    
}

function closeSecondPage(){
    var secondPage= document.querySelector(".secondpage");
    secondPage.style.display="none";
}

function prePhoto(object){
    var cid= object.parentNode.id;
    var num= Number(cid.substring(1));
    if(num==4){
        num=1;
    }else{
        num=num+1;
    }
    snum=String(num);
    showPhoto(snum);
}
function nextPhoto(object){

    var cid= object.parentNode.id;
    var num= Number(cid.substring(1));
    if(num==4){
        num=1;
    }else{
        num=num+1;
    }
    snum=String(num);
    showPhoto(snum);
}
