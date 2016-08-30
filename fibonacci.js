
function output(x) {
    var a = -1, b = 1;
    for(var i = 0; i <= x; i++) {
        f = a + b;
        console.log(f);
        a = b;
        b = f;
    }

}
console.log(output(8));
