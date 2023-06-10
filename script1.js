function inverter(){
        var inverter = document.getElementsByName("txt")
        valor = inverter.item(0).value.toString().split("")
        normal = valor.reverse().join("")
        res.innerHTML = normal
    }