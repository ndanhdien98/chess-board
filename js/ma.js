function ma(x,y) {
    var arr = [];
    if (x - 1 >= 0 && x - 1 <= 7 && y - 2 >= 0 && y - 2 <= 7){
        arr.push([x - 1,y - 2]);
    }
    if (x - 2 >= 0 && x - 2 <= 7 && y - 1 >= 0 && y - 1 <= 7){
        arr.push([x - 2,y - 1]);
    }
    if (x - 2 >= 0 && x - 2 <= 7 && y + 1 >= 0 && y + 1 <= 7){
        arr.push([x - 2,y + 1]);
    }
    if (x - 1 >= 0 && x - 1 <= 7 && y + 2 >= 0 && y + 2 <= 7){
        arr.push([x - 1,y + 2]);
    }
    if (x + 1 >= 0 && x + 1 <= 7 && y + 2 >= 0 && y + 2 <= 7){
        arr.push([x + 1,y + 2]);
    }
    if (x + 2 >= 0 && x + 2 <= 7 && y + 1 >= 0 && y + 1 <= 7){
        arr.push([x + 2,y + 1]);
    }
    if (x + 2 >= 0 && x + 2 <= 7 && y - 1 >= 0 && y - 1 <= 7){
        arr.push([x + 2,y - 1]);
    }
    if (x + 1 >= 0 && x + 1 <= 7 && y - 2 >= 0 && y - 2 <= 7){
        arr.push([x + 1,y - 2]);
    }
    console.log(arr);
    return arr;
}