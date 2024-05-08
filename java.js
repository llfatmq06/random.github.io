function randomsayi() {
    var dizi = ["#D50000", "#4A148C", "#B388FF"];
    document.getElementById("divdiv").textContent = Math.floor(Math.random() * 100);
    document.getElementById("arkaplan").style.backgroundColor = dizi[Math.floor(Math.random() * dizi.length)];

}
