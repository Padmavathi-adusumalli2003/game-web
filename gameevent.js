var allRightCircle=document.querySelectorAll(".rightcircle");
function fun(val){
    if(val=="one"){
        allRightCircle[0].style.transform="translate(-56.5vw)";
        allRightCircle[1].style.transform="translate(0vw)";
        allRightCircle[2].style.transform="translate(0vw)";
        allRightCircle[0].style.backgroundColor="green";
        allRightCircle[1].style.backgroundColor="red";
        allRightCircle[2].style.backgroundColor="red";
    }
    else if(val=="two"){
        allRightCircle[0].style.transform="translate(0vw)";
        allRightCircle[1].style.transform="translate(-56.5vw)";
        allRightCircle[2].style.transform="translate(0vw)";
        allRightCircle[0].style.backgroundColor="red";
        allRightCircle[1].style.backgroundColor="green";
        allRightCircle[2].style.backgroundColor="red";
    } 
    else if(val=="three"){
        allRightCircle[0].style.transform="translate(0vw)";
        allRightCircle[1].style.transform="translate(0vw)";
        allRightCircle[2].style.transform="translate(-56.5vw)";
        allRightCircle[0].style.backgroundColor="red";
        allRightCircle[1].style.backgroundColor="red";
        allRightCircle[2].style.backgroundColor="green";
    }
    else{
        allRightCircle[0].style.transform="translate(0vw)";
        allRightCircle[1].style.transform="translate(0vw)";
        allRightCircle[2].style.transform="translate(0vw)";
        allRightCircle[0].style.backgroundColor="red";
        allRightCircle[1].style.backgroundColor="red";
        allRightCircle[2].style.backgroundColor="red";
    }       
    
}