var result = 0;
var actionType = ""

function buttonClicked(number) {
    var inputTag = document.getElementById("input");
    var inputValue = inputTag.value;
    if (actionType !== "" || inputValue !== "0") {
        inputValue += number;
    } else {
        inputValue = number;
    }

    inputTag.value = inputValue;
};

function actionClicked(action){
    var inputTag = document.getElementById("input");
    const inputValue = Number(inputTag.value);
    inputTag.value = 0;

    if (action === "="){
        switch(actionType) {
            case "+":
            result += inputValue;
                break;
            case "-":
                result -= inputValue;
                break;
            case "*":
                result *= inputValue;
                break;
            case "/":
                result /= inputValue
                break;
        }
        inputTag.value = result;
        actionType = "";
        
    } else {
        if(actionType ===""){
            result = inputValue;
        } else {
            switch(actionType) {
                case "+":
                result += inputValue;
                    break;
                case "-":
                    result -= inputValue;
                    break;
                case "*":
                    result *= inputValue;
                    break;
                case "/":
                    result /= inputValue
                    break;
            }
        }
            actionType = action;
    }
    console.log(result);
};

function muResult(){

}

function cleanInput(){
    document.getElementById("input").value = 0;
};