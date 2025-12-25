function checkanswer() {
    var number = parseInt(document.getElementById("num").value);
    var number2 = parseInt(document.getElementById("num2").value);

    alert(number + number2);
}
function randomnumber() {
    var randomnum = parseInt(Math.random() * 10) + 1;
    var randomnum2 = parseInt(Math.random() * 10) + 1;

    document.getElementById("num").value = randomnum1;
    document.getElementById("num2").value = randomnum2;
}
