function One() {
    let name = prompt("Name");

    alert(`Привет, ${name}!`);
}
function Two() {
    let age;
    const date_now = new Date();
    let year = prompt("year");
    if (year != "" && Number(year)){
        age = date_now.getFullYear() - (+year);
        alert(age);
    }else{
        alert("Укажите дату рождения!");
    }
}
function Three() {
    let side = prompt("Side of a square");

    if (side != "" && Number(side)) {
        alert(`Perimeter: ${4 * +side}`);
    }
}
function Four() {
    let r = prompt("Radius");

    if (r != "" && Number(r)){
        alert(`S: ${Math.PI * Math.pow(r, 2)}`);
    }
}
function Five() {
    let s = prompt("Distance");
    let t = prompt("Time");

    if ((s != "" && t != "") && (Number(s) && Number(t))) {
        alert(`Speed: ${s/t}`);
    }
}
function Six(){
    const euro = 1.01;

    let dollors = prompt("Dollars");

    if (dollors != "" && Number(dollors)) {
        alert(`Euro: ${dollors*euro}`);
    }
}
function Seven() {
    let gb = prompt("Gb");

    if (gb != "" && Number(gb)) {
        let count = 0;

        for (let mb = 0; mb+820 < gb*1024; mb+=820) {
            count++;
        }
        alert(count);
    }
}
function Eight() {
    let sum = prompt("Sum");
    let price = prompt("Price");

    if ((sum != "" && price != "") && (Number(sum) && Number(price))) {
        let count = Math.round(+sum/+price);
        alert(`Шоколадок куплено: ${count}\nОстаток: ${sum%count}`);
    }
}
function Nine() {
    let num = prompt("Number");

    if (num.length == 3 && Number(num)){
        num = Number(num);
        let new_num = "";

        while(num != 0){
            new_num += num%10;
            num = Math.round(num/10);
        }
        alert(new_num);
    }
}
function Ten() {
    let num = prompt("Number");

    if (num != "" && Number(num)) {
        alert(num%2 === 0 ? "Четное":"Нечетное");
    }
}
Ten();