function checkanswer() {
    var number = parseInt(document.getElementById("num").value);
    var number2 = parseInt(document.getElementById("num2").value);
    var number3 = parseInt(document.getElementById("num3").value)
    var number4 = parseInt(document.getElementById("num4").value)
    var number5 = parseInt(document.getElementById("num5").value)
    var number6 = parseInt(document.getElementById("num6").value)
    var number7 = parseInt(document.getElementById("num7").value)
    var number8 = parseInt(document.getElementById("num8").value)




    alert("addition: " + (number + number2));
    alert("hisor:" + (number3 - number4));
    alert("kafol:" + (number5 * number6));
    alert("hilok:" + (number7 / number8));
}

function randomnumber() {
    var randomnum1 = parseInt(Math.random() * 10) + 1;
    var randomnum2 = parseInt(Math.random() * 10) + 1;
    var randomnum3 = parseInt(Math.random() * 10) + 1;
    var randomnum4 = parseInt(Math.random() * 10) + 1;
    var randomnum5 = parseInt(Math.random() * 10) + 1;
    var randomnum6 = parseInt(Math.random() * 10) + 1;
    var randomnum7 = parseInt(Math.random() * 10) + 1;
    var randomnum8 = parseInt(Math.random() * 10) + 1;



    document.getElementById("num").value = randomnum1;
    document.getElementById("num2").value = randomnum2;
    document.getElementById("num3").value = randomnum3;
    document.getElementById("num4").value = randomnum4;
    document.getElementById("num5").value = randomnum5;
    document.getElementById("num6").value = randomnum6;
    document.getElementById("num7").value = randomnum7;
    document.getElementById("num8").value = randomnum8;

}

