function displayli(){
    var obj=document.getElementById("myUL");
    obj.style.display="block";
}
function hint(){
    var input= document.getElementById("myInput");
    var filter= input.value.toUpperCase();
    var liList=document.getElementsByTagName("li");

    for(i=0;i<liList.length;i++){
        var li= liList[i].innerHTML.toUpperCase();
        if(li.indexOf(filter)>-1){
            liList[i].style.display="";
        }else{
            liList[i].style.display="none";
        }
    }
}