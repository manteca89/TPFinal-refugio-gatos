function guardar() {
    let n = document.getElementById("nombre").value
    let e = parseFloat(document.getElementById("edad").value)
    let c = parseInt(document.getElementById("castrado").value)
    let v = parseInt(document.getElementById("vacunado").value)
    let i = document.getElementById("imagen").value


    let producto = {
        nombre: n,
        edad: e,
        castrado: c,
        vacunado: v,
        imagen: i
    }
    let url = "https://apugliese.pythonanywhere.com/gatitos"
    var options = {
        body: JSON.stringify(producto),
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    }
    fetch(url, options)
        .then(function () {
            console.log("creado")
            alert("Grabado")
            window.location.href = "./productos.html";  
            // Handle response we get from the API
        })
        .catch(err => {
            //this.errored = true
            alert("Error al grabar" )
            console.error(err);
        })
}

