var arr=document.getElementsByClassName("myslides")[0];
arr.firstElementChild.classList.toggle("hide");
var totalnoofslide=6;
let n=1;
function previous(){
    
    if(n-1 == 0){
        document.getElementsByClassName(n)[0].classList.remove("hide");
        n=6;
        document.getElementsByClassName(n)[0].classList.add("hide");
    }
    else{
        document.getElementsByClassName(n)[0].classList.remove("hide");
        n=n-1;
        document.getElementsByClassName(n)[0].classList.add("hide");

    }
    
    
    
}
function next(){
    if(n+1 > totalnoofslide){
        document.getElementsByClassName(n)[0].classList.remove("hide");
        n=1;
        document.getElementsByClassName(n)[0].classList.add("hide");
    }
    else{
        document.getElementsByClassName(n)[0].classList.remove("hide");
        n=n+1;
        document.getElementsByClassName(n)[0].classList.add("hide");


    }
}