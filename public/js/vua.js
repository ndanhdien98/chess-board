function vua(x,y) {
    var arr = [];
    if (x >= 0 && x <= 7 && y - 1 >= 0 && y - 1 <= 7){
        arr.push([x,y - 1]);
    }
    if (x - 1 >= 0 && x - 1 <= 7 && y - 1 >= 0 && y - 1 <= 7){
        arr.push([x - 1,y - 1]);
    }
    if (x - 1 >= 0 && x - 1 <= 7 && y >= 0 && y <= 7){
        arr.push([x - 1,y]);
    }
    if (x - 1 >= 0 && x - 1 <= 7 && y + 1 >= 0 && y + 1 <= 7){
        arr.push([x - 1,y + 1]);
    }
    if (x >= 0 && x <= 7 && y + 1 >= 0 && y + 1 <= 7){
        arr.push([x,y + 1]);
    }
    if (x + 1 >= 0 && x + 1 <= 7 && y + 1 >= 0 && y + 1 <= 7){
        arr.push([x + 1,y + 1]);
    }
    if (x + 1 >= 0 && x + 1 <= 7 && y >= 0 && y <= 7){
        arr.push([x + 1,y]);
    }
    if (x + 1 >= 0 && x + 1 <= 7 && y - 1 >= 0 && y - 1 <= 7){
        arr.push([x + 1,y - 1]);
    }
    arr.forEach(element => {
        var ids = `${element[0]}${element[1]}`;
        document.getElementById(ids).innerHTML = `<img src="./img/cham.png" alt="">`
        // console.log(ids);
    });
    return arr;
}