function calc(){
    let num1 = document.getElementById("num1").value;
    console.log(num1);

    let num2;
    num2 = document.getElementById("num2").value;
    console.log(num2);

    let op = document.getElementById("operator").value;
    console.log(op);


    // string gadavaqciet int-ad
    let number1, number2;
    number1 = parseInt(num1);
    number2 = parseInt(num2);

    // aq gamogvaqvs ricxvebis jami
    console.log(number1 + number2);
    let pass = num1 + op + num2 + "=";
    switch(op){
        case "+":
            var x = number1 + number2;
            document.getElementById("pasuxi").innerHTML = pass + x;
            break;
        case "-":
            var x = number1 - number2;
            document.getElementById("pasuxi").innerHTML = pass + x;
            break;
        case "*":
            var x = number1 * number2;
            document.getElementById("pasuxi").innerHTML = pass + x;
            break;
        case "/":
            var x = number1 / number2;
            document.getElementById("pasuxi").innerHTML = pass + x;
            break;
        default:
            console.log("operatoris veli shevsebuli ar aris");
    }

    document.getElementById("num1").value = '';
    document.getElementById("operator").value = '';
    document.getElementById("num2").value = '';
    
}

function gasuftaveba(){
    document.getElementById("pasuxi").innerHTML = '';
}

function damateba7(){
    let a =  document.getElementById("but7").innerHTML;
    let b = document.getElementById("pasuxi").innerHTML;
    b += a;
    document.getElementById("pasuxi").innerHTML = b;
}

function damateba8(){
    let a =  document.getElementById("but8").innerHTML;
    let b = document.getElementById("pasuxi").innerHTML;
    b += a; // b = b+a;
    document.getElementById("pasuxi").innerHTML = b;
}
function damateba9(){
    let a =  document.getElementById("but9").innerHTML;
    let b = document.getElementById("pasuxi").innerHTML;
    b += a; // b = b+a;
    document.getElementById("pasuxi").innerHTML = b;
}
function damatebagayofa(){
    let a =  document.getElementById("butgayofa").innerHTML;
    let b = document.getElementById("pasuxi").innerHTML;
    b += a; // b = b+a;
    document.getElementById("pasuxi").innerHTML = b;
}
function damateba4(){
    let a =  document.getElementById("but4").innerHTML;
    let b = document.getElementById("pasuxi").innerHTML;
    b += a; // b = b+a;
    document.getElementById("pasuxi").innerHTML = b;
}
function damateba5(){
    let a =  document.getElementById("but5").innerHTML;
    let b = document.getElementById("pasuxi").innerHTML;
    b += a; // b = b+a;
    document.getElementById("pasuxi").innerHTML = b;
}
function damateba6(){
    let a =  document.getElementById("but6").innerHTML;
    let b = document.getElementById("pasuxi").innerHTML;
    b += a; // b = b+a;
    document.getElementById("pasuxi").innerHTML = b;
}
function damatebagam(){
    let a =  document.getElementById("butgam").innerHTML;
    let b = document.getElementById("pasuxi").innerHTML;
    b += a; // b = b+a;
    document.getElementById("pasuxi").innerHTML = b;
}
function damateba1(){
    let a =  document.getElementById("but1").innerHTML;
    let b = document.getElementById("pasuxi").innerHTML;
    b += a; // b = b+a;
    document.getElementById("pasuxi").innerHTML = b;
}
function damateba2(){
    let a =  document.getElementById("but2").innerHTML;
    let b = document.getElementById("pasuxi").innerHTML;
    b += a; // b = b+a;
    document.getElementById("pasuxi").innerHTML = b;
}
function damateba3(){
    let a =  document.getElementById("but3").innerHTML;
    let b = document.getElementById("pasuxi").innerHTML;
    b += a; // b = b+a;
    document.getElementById("pasuxi").innerHTML = b;
}
function damateba0(){
    let a =  document.getElementById("but0").innerHTML;
    let b = document.getElementById("pasuxi").innerHTML;
    b += a; // b = b+a;
    document.getElementById("pasuxi").innerHTML = b;
}
function damatebaminus(){
    let a =  document.getElementById("butmin").innerHTML;
    let b = document.getElementById("pasuxi").innerHTML;
    b += a; // b = b+a;
    document.getElementById("pasuxi").innerHTML = b;
}
function damatebaplus(){
    let a =  document.getElementById("butplus").innerHTML;
    let b = document.getElementById("pasuxi").innerHTML;
    b += a; // b = b+a;
    document.getElementById("pasuxi").innerHTML = b;
}
function damatebaequal(){
    let a =  document.getElementById("equal").innerHTML;
    let b = document.getElementById("pasuxi").innerHTML;
    b += a; // b = b+a;
    document.getElementById("pasuxi").innerHTML = b;

    console.log(b);

   


    if(b.includes("+")){
        let operatorindex = b.indexOf("+");
        console.log(operatorindex);
    
        let pirveliricxvi = b.slice(0, operatorindex); //"32"
        let pirveliricxviparse = parseInt(pirveliricxvi); //32
        console.log(pirveliricxvi);
    
        let udrisindex = b.indexOf("=");
        console.log(udrisindex);
    
        let meorericxvi = b.slice(operatorindex+1, udrisindex);
        let meorericxviparse = parseInt(meorericxvi);
        console.log(meorericxvi);
    
        let jami = pirveliricxviparse+meorericxviparse;
        console.log(jami);

        b += jami; // b = b+a;
        document.getElementById("pasuxi").innerHTML = b;
    }
    else if(b.includes("−")){
        let operatorindex = b.indexOf("−");
        console.log(operatorindex);
    
        let pirveliricxvi = b.slice(0, operatorindex); //"32"
        let pirveliricxviparse = parseInt(pirveliricxvi); //32
        console.log(pirveliricxvi);
    
        let udrisindex = b.indexOf("=");
        console.log(udrisindex);
    
        let meorericxvi = b.slice(operatorindex+1, udrisindex);
        let meorericxviparse = parseInt(meorericxvi);
        console.log(meorericxvi);
    
        let jami = pirveliricxviparse-meorericxviparse;
        console.log(jami);

        b += jami; // b = b+a;
        document.getElementById("pasuxi").innerHTML = b;
    }
    else if(b.includes("×")){
        let operatorindex = b.indexOf("×");
        console.log(operatorindex);
    
        let pirveliricxvi = b.slice(0, operatorindex); //"32"
        let pirveliricxviparse = parseInt(pirveliricxvi); //32
        console.log(pirveliricxvi);
    
        let udrisindex = b.indexOf("=");
        console.log(udrisindex);
    
        let meorericxvi = b.slice(operatorindex+1, udrisindex);
        let meorericxviparse = parseInt(meorericxvi);
        console.log(meorericxvi);
    
        let jami = pirveliricxviparse*meorericxviparse;
        console.log(jami);

        b += jami; // b = b+a;
        document.getElementById("pasuxi").innerHTML = b;
    }
    else if(b.includes("÷")){
        let operatorindex = b.indexOf("÷");
        console.log(operatorindex);
    
        let pirveliricxvi = b.slice(0, operatorindex); //"32"
        let pirveliricxviparse = parseInt(pirveliricxvi); //32
        console.log(pirveliricxvi);
    
        let udrisindex = b.indexOf("=");
        console.log(udrisindex);
    
        let meorericxvi = b.slice(operatorindex+1, udrisindex);
        let meorericxviparse = parseInt(meorericxvi);
        console.log(meorericxvi);
    
        let jami = pirveliricxviparse/meorericxviparse;
        console.log(jami);

        b += jami; // b = b+a;
        document.getElementById("pasuxi").innerHTML = b;
    }
    else{
        console.log("sheicavs sxva nishans"); 
    }


















    /*
    let ricxi1 = b.charAt(0); //"8" + "3" = 83
    let num1 = parseInt(ricxi1); //8 + 3 = 11
    console.log(ricxi1);

    let operator = b.charAt(1);
    console.log(operator);

    let ricxvi2 = b.charAt(2); //"3"
    let num2 = parseInt(ricxvi2); //3
    console.log(ricxvi2);

    if(operator == "+"){
        let jami = num1 + num2;
        console.log(jami);
        
        let b = document.getElementById("pasuxi").innerHTML;
        b += jami; // b = b+a;
        document.getElementById("pasuxi").innerHTML = b;

    }
    else if(operator == "−"){
        let jami = num1 - num2;
        console.log(jami);
        
        let b = document.getElementById("pasuxi").innerHTML;
        b += jami; // b = b+a;
        document.getElementById("pasuxi").innerHTML = b;
    }
    else if(operator == "÷"){
        let jami = num1 / num2;
        console.log(jami);
        
        let b = document.getElementById("pasuxi").innerHTML;
        b += jami; // b = b+a;
        document.getElementById("pasuxi").innerHTML = b;
    }
    else if(operator == "×"){
        let jami = num1 * num2;
        console.log(jami);
        
        let b = document.getElementById("pasuxi").innerHTML;
        b += jami; // b = b+a;
        document.getElementById("pasuxi").innerHTML = b;
    }
    else{
        document.getElementById("pasuxi").innerHTML = "არ აგირჩევია ოპერატორი, შტერო!!!";
    }
    */


}