let screen= document.getElementById('screen');
button=document.querySelectorAll('button');
let screenValue="";

function small(x){
    x.style.backgroundColor  = "rgb(251, 253, 253) ";
    x.style.borderColor = "rgb(255, 0, 140)";
    
}

function normal(x){
    x.style.backgroundColor  = "#A9ECA2";
    x.style.borderColor = "#C84361";
}
for(item of button){
    item.addEventListener("click",(e)=>{
    buttonText=e.target.innerText;
   
    

      if(buttonText!="AC"&& buttonText!="=" ){
        screenValue+=buttonText;
      screen.value=screenValue;
      console.log(screenValue);
      }
      else if(buttonText=="AC"){
      screenValue="";
      screen.value=screenValue;
      console.log(screenValue);
    }
    else if(buttonText=="="){
       let result= eval(screenValue);
       screen.value=result;
      
    }
  }
  )
}

  