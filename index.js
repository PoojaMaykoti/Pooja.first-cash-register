const billamount = document.querySelector("#id1");

const cashGiven = document.querySelector("#id2");

const checkButton = document.querySelector("#check-btn");

const message = document.querySelector("#error-message");

console.log(cashGiven.value);


checkButton.addEventListener("click",function validateBillandcashAmount()
{
    message.style.display="none";
    if(billamount.value > 0){
    }
    else
    {  
        message.style.display="block";
        message.innerText="The bill amount should be grater than 0";
    }


}




);

