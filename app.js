/* ===========================
handle generator funtion
============================  */
function pinGenerate(){
    document.getElementById('display-pin').value = getPin();
}

/*  ==============================
event handlaer Get input pin
================================= */
document.getElementById('key-pad').addEventListener('click',function(event){
    getInputPin(event);
})


/* ==========
 get pin
===== ======  */
function getPin(){
    const pin =Math.round(Math.random() * 10000);
    const pinString = pin + '' ;
    if(pinString.length == 4){
        return pin;
    }else{
        return getPin();
    }
}
/* ====================
check input number 
===================== */
function getInputPin(event){
    const numDisplay = document.getElementById('number-display');
    
    const inputNumber = event.target.innerText;
    if(inputNumber.length == 1){
        if(inputNumber == '<'){
           numDisplay.value = numDisplay.value.slice(0, -1);
        }else if(inputNumber == 'C'){
            document.getElementById('match').style.display = 'none';
            document.getElementById('not-match').style.display = 'none';
            resetCode(numDisplay)

        }else{
            if(numDisplay.value.length < 4){
                numDisplay.value += event.target.innerText;
            }     
        }   
    } 
}

/* ====================
reset code function
===================== */

//  
function resetCode(numDisplay){
    // pinGenerate();
    numDisplay.value = '';
}
/* ====================
checkPin 
===================== */

function checkPin(){
    // console.log("got it");
    const pin = document.getElementById('display-pin');
    const numDisplay = document.getElementById('number-display');

    if (numDisplay.value.length < 4){
        // console.log("enter key");
    }else{
        if(numDisplay.value == pin.value){
            document.getElementById('match').style.display = 'block';
            document.getElementById('not-match').style.display = 'none';
            resetCode(numDisplay);
        }else{
            document.getElementById('not-match').style.display = 'block';
            document.getElementById('match').style.display = 'none';
            numDisplay.value = '';
        }
    }
    
}