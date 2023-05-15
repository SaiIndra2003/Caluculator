const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");
const history = document.querySelector("#history");

let formula = ""
let ans = ""
let prevans = ""
const nums = ["0","1","2","3","4","5","6","7","8","9"]

buttons.forEach((item) => {
  item.onclick = () => {
    if (item.id == "clear") {
      ans = "";
      formula = "";
      display.innerText = ans;
      history.innerText = ans;
    } 

    else if (item.id == "backspace") {
      let string = display.innerText.toString();
      ans = string.substr(0, string.length - 1);
      formlua = string.substr(0, string.length - 1);
      display.innerText = ans;
    } 

    else if(item.id === "sqrt"){
        const str = formula.charAt(formula.length - 1);
        for(let i=0;i<nums.length;i++){
          if(str === nums[i] || str === ")"  ){
            ans += "*"
            formula += "*"
            break;
          }
        }
        formula = formula + "Math.sqrt(";
        ans = ans + "sqrt(";
        display.innerText = ans;
    } 

    else if (item.id === "power"){
      let string = formula
      let num = string.charAt(string.length - 1);
      string = string.substring(0, string.length - 1);
      let i = 0
      while (i<nums.length){
        let char = string.charAt(string.length - 1)
        if( char === nums[i]){
          num = char + num;
          string = string.substring(0, string.length - 1);
          i=0;
          continue;
        }
        i++;
      }
      formula = string;
      console.log(num);
      formula += "Math.pow("+num+",";
      ans += "^(";
      display.innerText = ans;
    } 

    else if (item.id === "%"){
      formula += "/100"
      ans = eval(formula).toString()
      display.innerText = ans
      prevans = eval(formula).toString()
      history.innerText = ans
    }

    else if (item.id === "ans"){
      formula += prevans;
      ans += prevans;
      display.innerText = ans;
    }
    
    else if (display.innerText != "" && item.id == "equal") {
      try{
        history.innerText = ans;
        ans = eval(formula)
        display.innerText = eval(formula);
        prevans = ans.toString()
        formula = ans.toString()
      }
      catch{
        display.innerText = "Error!"
        ans = ""
        formula = ""
      }
    } 
    
    else if (display.innerText == "" && item.id == "equal") {
      ans = "";
      formula = "";
      display.innerText = "Empty!";
      setTimeout(() => (display.innerText = ""), 2000);
    }    
    else {
      ans += item.id;
      formula += item.id;
      display.innerText = ans;
    }
  };
});


