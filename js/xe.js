function xe(x,y) {
    var arr = [];
    var x1 = x;
    var y1 = y;
    //Di xuong
    for (let index = 0; index < 8; index++) {
        ++y1;
        arr.push([x1,y1]);
        if (y1 === 7){
            break;
        }
    }
    x1 = x;
    y1 = y;
    //Di len
    for (let index = 0; index < 8; index++) {
        --y1;
        arr.push([x1,y1]);
        if (y1 === 0){
            break;
        }
    }
    x1 = x;
    y1 = y;
    //Sang phai
    for (let index = 0; index < 8; index++) {
        ++x1;
        arr.push([x1,y1]);
        if (x1 === 7){
            break;
        }
    }
    x1 = x;
    y1 = y;
    //Sang trai
    for (let index = 0; index < 8; index++) {
        --x1;
        arr.push([x1,y1]);
        if (x1 === 0){
            break;
        }
    }
    console.log(arr);
    return arr;
}