function enterPinAndAccountNumber(){
    // account details of all 5 users
    var accountDetails = [
        {
            accNo : "0001",
            cardNo : "001001001",
            pin : "1111",
            accountBalance : 10000,
        },
        {
            accNo : "0002",
            cardNo : "002002002",
            pin : "2222",
            accountBalance: 15000,
        },
        {
            accNo : "0003",
            cardNo : "003003003",
            pin : "3333",
            accountBalance: 17000,
        },
        {
            accNo : "0004",
            cardNo : "004004004",
            pin : "4444",
            accountBalance: 12000,
        },
        {
            accNo : "0005",
            cardNo : "005005005",
            pin : "5555",
            accountBalance: 19000,
        },
    ];

    // validate function to check pin and find account position index
    function validate(cardNo,pinNo){
        for(var i=0;i<accountDetails.length;i++){
            if(accountDetails[i].cardNo==cardNo && accountDetails[i].pin==pinNo){
                return i;
            }
        }
        return false;
    }

    // with drawfunction to with draw the amount
    function withDrawFromATM(cardNo,pinNo){
        var selectedIndex = validate(cardNo,pinNo);
        if(selectedIndex!==false){
            var amount =  window.prompt("Enter the amount to withdraw : ");
            accountDetails[selectedIndex].accountBalance-=amount;
            alert("Balance amount : "+accountDetails[selectedIndex].accountBalance);
        }
    }

    // deposit function to deposit the amount
    function depositToCDM(cardNo,pinNo){
        var selectedIndex = validate(cardNo,pinNo);
        if(selectedIndex!==false){
            var amount = window.prompt("Enter the amount to deposit : ");
            accountDetails[selectedIndex].accountBalance+=parseInt(amount);
            alert("Balance amount : "+accountDetails[selectedIndex].accountBalance);
        }
    }

    // getting card number and pin number from the user
    cardNo = window.prompt("Enter the card number");
    pinNo = window.prompt("Enter the pin number");
    choosedOption = window.prompt("Enter your option: \n 1.WithDraw\n 2.Deposit");

    // performing operations based on the options given by the user
    if(choosedOption==1){
        withDrawFromATM(cardNo,pinNo);
    }else{
        depositToCDM(cardNo,pinNo);
    }
}

// calling the function
enterPinAndAccountNumber();