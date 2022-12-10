var ColorSeleccionado;

function pintar(elto, color = 'green') {
    ele = document.getElementById(elto)
    ele.style.backgroundColor = color
}

var pintame = (elto, color = 'green') => document.getElementById(elto).style.backgroundColor = color;

function GetColorByKey() {
    document.addEventListener("keydown", function (event) {       
        switch (event.key) {
            case 'a':
                ColorSeleccionado = "blue";
                break;
            case 's':
                ColorSeleccionado = "red";
                break;
            case 'd':
                ColorSeleccionado = "green";
                break;
            default:
                ColorSeleccionado = "black";
        }
        //console.log(ColorSeleccionado);
    }
    )
}

function SetColorByGlobal(divId) {
    document.querySelector(divId).addEventListener("click", function (event) {
        // console.log(divId);
        console.log(ColorSeleccionado);
        document.querySelector(divId).style.backgroundColor = ColorSeleccionado;
    })

}

