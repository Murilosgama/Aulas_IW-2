function cal(){
    var peso = Number(document.getElementById('peso').value)
    var altu = Number(document.getElementById('altu').value)
    var cal = peso / (altu * altu)
    
    diag.innerHTML = cal
}
