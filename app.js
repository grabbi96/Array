var arr = [null, -7, 63, -25, true, 20, 0, "", 97, "Rijwan"];

var resultArr = arr.map(function (element) {
    if (typeof element === "number") {
        if (element < 0) {
            if (element % 5 === 0) {
                return element * 10
            } else {
                return element
            }
        } else {
            return element;
        }
    } else if (element === undefined || element === null || element === "") {
        element = 1;
        return element;
    } else if (element === true) {
        element = undefined;
        return element;
    } else {
        return element;
    }
});
console.log(resultArr);