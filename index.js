const billamount = document.querySelector("#id1");

const cashGiven = document.querySelector("#id2");

const checkButton = document.querySelector("#check-btn");

const message = document.querySelector("#error-message");

const noOfNotes = document.querySelectorAll("#no-of-notes");

// console.log(cashGiven.value);

const availableNotes = [2000,500,100,20,10,5,1];




checkButton.addEventListener("click",function validateBillandcashAmount()

{
    hideMessage();


    message.style.display="none";
    
    if(billamount.value > 0)
    {

    if(cashGiven.value > billamount.value )
    {
         const amountTobeReturned = cashGiven.value = billamount.value;
         calculateChange(amountTobeReturned);
    }

    else

    {  
        showMessage
        (
            "DO you wanna wash plats?"
            );

   }
}

  else
  {
      showMessage("Invalid Bill Amount");

  }

}




);

function calculateChange(amountToBeReturned) {
    for(let i = 0; i < availableNotes.length; i++){

    const numberOfNotes = Math.trunc(
       amountToBeReturned / availableNotes[i]
       );

       amountToBeReturned %= availableNotes[i];
       noOfNotes[i].innerText=numberOfNotes ;
   }
}

function hideMessage()
{
    message.style.display="none";
    
}

function showMessage(msg)
{
    message.style.display = "block";
    message.inneText = msg;
}