function percentage_1 () {
    var percent = document.getElementById("percent").value;
    var num = document.getElementById("num").value;
    document.getElementById("value1").value = (num / 100) * percent;
}