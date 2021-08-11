function tuong(x,y) {
    var arr = [];
    var x1 = x;
    var y1 = y;
    //Tren trai
    for (let index = 0; index < 8; index++) {
        --y1; --x1;
        if (y1 === 0 || x1 === 0){
            break;
        }
        arr.push([x1,y1]);
    }
    x1 = x;
    y1 = y;
    //Tren phai
    for (let index = 0; index < 8; index++) {
        --y1; ++x1;
        if (y1 === 0 || x1 === 7){
            break;
        }
        arr.push([x1,y1]);
    }
    x1 = x;
    y1 = y;
    //Duoi trai
    for (let index = 0; index < 8; index++) {
        ++y1; --x1;
        if (y1 === 7 || x1 === 0){
            break;
        }
        arr.push([x1,y1]);
    }
    x1 = x;
    y1 = y;
    //Duoi phai
    for (let index = 0; index < 8; index++) {
        ++x1; ++y1;
        if (x1 === 7 || y1 === 7){
            break;
        }
        arr.push([x1,y1]);
    }
    console.log(arr);
    return arr;
}