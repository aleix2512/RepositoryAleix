var n1 = 5
var n2 = 15
var n3 = 10

if(n1 >= n2 && n1 >= n3) {
    if(n2 > n3)
    console.log(n1, n2, n3)
    else
    console.log(n1, n3, n2);
}
if(n2 >= n1 && n2 >= n3) {
    if(n1 > n3)
    console.log(n2, n1, n3)
    else
    console.log(n2, n3, n1);
}
if(n3 >= n1 && n3 >= n2) {
    if(n1 > n2)
    console.log(n3, n1, n2)
    else
    console.log(n3, n2, n1);
}
