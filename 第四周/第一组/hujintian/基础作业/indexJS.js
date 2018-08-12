
window.onload = function () {
    function change1() {
        var input1 = document.getElementById("aqi-input").value;
        if (input1 == "") {
            document.getElementById("aqi-display").innerHTML = "尚无录入";
        }
        else {
            document.getElementById("aqi-display").innerHTML = input1;
        }
    }
    document.getElementById("button").onclick = change1;
}
