function printWithCommas() {
    var output = "";
    for (var count = 12; count > 0; count--) {
        output += count;
        if (count > 1) {
            output += ",";
        }
    }
    console.log(output);
}
printWithCommas();
