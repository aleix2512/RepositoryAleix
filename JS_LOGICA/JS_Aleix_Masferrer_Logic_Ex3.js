var x = 9;

switch(true) {
    case x >= 0 && x <= 4.9:
        console.log("SUSPES")
        break;
    case x >= 5 && x <= 5.9:
        console.log("SUFICIENT")
        break;
    case x >= 6 && x <= 6.9:
        console.log("BE")
        break;
    case x >= 7 && x <= 8.9:
        console.log("NOTABLE")
        break;
    case x >= 9 && x <= 10:
        console.log("EXCELENT")
        break;
}
