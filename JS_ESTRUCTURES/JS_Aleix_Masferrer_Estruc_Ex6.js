var array = [" Holaaa "," Que "," Tal "," Estaa "," Voste "," Araa "];
var array1 = [];
var contador = 0;
var contador1 = 0;

for (let i = 0; i < array.length; i++) {
    for (let j = 0; j <array.length; j++) {
        if (array[i][j] == 'a') {
            contador++;
            if (contador == 2) {
                array1[contador1] = array[i];
                contador1++;                
            }
        }
    }
    contador = 0;
}
document.write("Primer array: <br/>" + array + "<br/>")
document.write("Segon array amb paraules de +a: <br/>" + array1)