function ambilData() {
    let xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = function() {
        if (this.status === 200) {
            document.getElementById("data").innerHTML = this.responseText
        } else if (this.status === 404) {
            window.alert('Not FOND 404')
        }
    }

    xhttp.open("GET", "data.txt", true)
    xhttp.send()
}