function tot(x,y) {
    let arr = [];
    if (x >= 0 && x <= 7 && y + 1 >= 0 && y + 1 <= 7){
        arr.push([x,y + 1]);
    }
    if (x >= 0 && x <= 7 && y + 2 >= 0 && y + 2 <= 7){
        arr.push([x,y + 2]);
    }
    console.log(arr);
    return arr;
}