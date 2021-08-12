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
    arr.forEach(element => {
        var ids = `${element[0]}${element[1]}`;
        document.getElementById(ids).innerHTML = `<img src="./img/cham.png" alt="">`
        // console.log(ids);
    });
    // console.log(arr);
    return arr;
}