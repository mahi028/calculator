//Selectors and variables
let display=document.querySelector('.display>p');
let ansdis=document.querySelector('.ansdis>p');
let x1=''; 
let x2='';
let lst1=['1', '2', '3', '4', '5', '6', '7', '8', '9', '10','.']

//Function for onclick event
function userInput(value){
    
//concatinating all values
if(value in lst1){
    x1=x1+value;
    display.innerHTML=x2+x1;
}

//breaking above concationation
if(!(value in lst1) && value!='ans' && value!='del' && value!='clear'){
    x2=x1+value;
    x1='';
    ansdis.innerHTML=x2;
}

//Deleting the last value from x1
if(value=='del'){
    x1=x1.substring(0,x1.length-1);
    display.innerHTML=x1
}

//Clear both displays
if(value=='clear'){
    x1='';
    x2='';
    display.innerHTML=0
    ansdis.innerHTML='';
}

//Calculations
if(value=='ans'){
    //Addition
    if(x2.endsWith('+')){
    x2=x2.replace('+','')
    x1=parseFloat(x2)+parseFloat(x1);
    ansdis.innerHTML=x1;
    }
    //Subtraction
    if(x2.endsWith('-')){
        x2=x2.replace('-','')
        x1=parseFloat(x2)-parseFloat(x1);
        ansdis.innerHTML=x1;
    }
    //Division
    if(x2.endsWith('/')){
        x2=x2.replace('/','')
        x1=parseFloat(x2)/parseFloat(x1);
        ansdis.innerHTML=x1;
    }
    //Multiplication
    if(x2.endsWith('x')){
        x2=x2.replace('x','')
        x1=parseFloat(x2)*parseFloat(x1);
        ansdis.innerHTML=x1;
    }
}
}