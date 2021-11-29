function fFecha(fecha = new Date()) {
    console.log(fecha);
}

function fEnters(enter1, enter2, enter3 = 30) {
    return enter1 + enter2 + enter3;
}

function Ex7(enter1, enter2, enter3 = 30) {
    fFecha();
    return enter1 + enter2 + enter3;
}

console.log(Ex7(10, 20));
