function chesses(x,y) {
    var x = parseInt(document.getElementById('x').value,10);
    var y = parseInt(document.getElementById('y').value,10);
    var chess = parseInt(document.getElementById('chess').value,10);
    switch (chess) {
        case 0:
            tot(x,y);
            z = "Tot";
            move(x,y,z);
            break;
        case 1:
            tuong(x,y);
            z = "Tuong";
            move(x,y,z);
            break;
        case 2:
            ma(x,y);
            z = "Ma";
            move(x,y,z);
            break;
        case 3:
            xe(x,y);
            z = "Xe";
            move(x,y,z);
            break;
        case 4:
            hau(x,y);
            z = "Hau";
            move(x,y,z);
            break;
        case 5:
            vua(x,y);
            z = "Vua";
            move(x,y,z);
            break;
    }
}

function reload(){
    var container = document.getElementById("chess-board");
    var content = container.innerHTML;
    container.innerHTML= content;
    console.log('reloaded');
}

function submit() {
    render();
    chesses();
}

function move(x,y,z) {
    var id = `${x}${y}`;
    var srcImg = `${z}`;
    document.getElementById(id).innerHTML = `<img src="./img/${srcImg}_Do.png" alt="">`;
    console.log(id);
}

function random() {
    var randomx = Math.floor(Math.random() * 8);
    var randomy = Math.floor(Math.random() * 8);
    document.getElementById('x').value = randomx;
    document.getElementById('y').value = randomy;
}

function render() {
    document.getElementById('chess-board').innerHTML = `        <tbody>
    <tr>
        <th></th>
        <th>0</th>
        <th>1</th>
        <th>2</th>
        <th>3</th>
        <th>4</th>
        <th>5</th>
        <th>6</th>
        <th>7</th>
    </tr>
    <tr>
        <th>0</th>
        <td id="00" class="light"></td>
        <td id="10" class="dark"></td>
        <td id="20" class="light"></td>
        <td id="30" class="dark"></td>
        <td id="40" class="light"></td>
        <td id="50" class="dark"></td>
        <td id="60" class="light"></td>
        <td id="70" class="dark"></td>
    </tr>
    <tr>
        <th>1</th>
        <td id="01" class="dark"></td>
        <td id="11" class="light"></td>
        <td id="21" class="dark"></td>
        <td id="31" class="light"></td>
        <td id="41" class="dark"></td>
        <td id="51" class="light"></td>
        <td id="61" class="dark"></td>
        <td id="71" class="light"></td>
    </tr>
    <tr>
        <th>2</th>
        <td id="02" class="light"></td>
        <td id="12" class="dark"></td>
        <td id="22" class="light"></td>
        <td id="32" class="dark"></td>
        <td id="42" class="light"></td>
        <td id="52" class="dark"></td>
        <td id="62" class="light"></td>
        <td id="72" class="dark"></td>
    </tr>
    <tr>
        <th>3</th>
        <td id="03" class="dark"></td>
        <td id="13" class="light"></td>
        <td id="23" class="dark"></td>
        <td id="33" class="light"></td>
        <td id="43" class="dark"></td>
        <td id="53" class="light"></td>
        <td id="63" class="dark"></td>
        <td id="73" class="light"></td>
    </tr>
    <tr>
        <th>4</th>
        <td id="04" class="light"></td>
        <td id="14" class="dark"></td>
        <td id="24" class="light"></td>
        <td id="34" class="dark"></td>
        <td id="44" class="light"></td>
        <td id="54" class="dark"></td>
        <td id="64" class="light"></td>
        <td id="74" class="dark"></td>
    </tr>
    <tr>
        <th>5</th>
        <td id="05" class="dark"></td>
        <td id="15" class="light"></td>
        <td id="25" class="dark"></td>
        <td id="35" class="light"></td>
        <td id="45" class="dark"></td>
        <td id="55" class="light"></td>
        <td id="65" class="dark"></td>
        <td id="75" class="light"></td>
    </tr>
    <tr>
        <th>6</th>
        <td id="06" class="light"></td>
        <td id="16" class="dark"></td>
        <td id="26" class="light"></td>
        <td id="36" class="dark"></td>
        <td id="46" class="light"></td>
        <td id="56" class="dark"></td>
        <td id="66" class="light"></td>
        <td id="76" class="dark"></td>
    </tr>
    <tr>
        <th>7</th>
        <td id="07" class="dark"></td>
        <td id="17" class="light"></td>
        <td id="27" class="dark"></td>
        <td id="37" class="light"></td>
        <td id="47" class="dark"></td>
        <td id="57" class="light"></td>
        <td id="67" class="dark"></td>
        <td id="77" class="light"></td>
    </tr>
</tbody>`;
}