var b = /(\d+)/g;
var a = prompt("Benvingut al mes 12 dia 6")
var n = 0

for (var i = 0; i < a.match(b).length; i++) {
    n + Number(a.match(b)[i])
}
console.log(n);