// pilihan player
var player = prompt('pilih gunting, batu, kertas');
if(player != 'gunting' && player != 'batu' && player != 'kertas'){
    player = undefined;
}

// pilihan komputer
var com = '';
var randCom = Math.random() * 10;
if(randCom < 4){
    com = 'gunting';
}else if(randCom < 6 && randCom >= 4){
    com = 'batu';
}else{
    com = 'kertas';
}

// rules
var hasil = '';
if(player === com){
    hasil = 'seri';
}else if(player === 'gunting'){
    hasil = (com === 'kertas') ? 'menang' : 'kalah';
}else if(player === 'batu'){
    hasil = (com === 'kertas') ? 'kalah' : 'menang';
}else if(player === 'kertas'){
    hasil = (com === 'gunting') ? 'kalah' : 'menang';
}else{
    hasil = undefined;
}


// menampilkan hasil
if(hasil === 'menang'){
    alert("pilihan kamu : " + player + ", pilihan com : " + com);
    alert("selamat kamu menang!");
}else if(hasil === 'kalah'){
    alert("pilihan kamu : " + player + ", pilihan com : " + com);
    alert("com menang, kamu kalah!");
}else if(hasil === 'seri'){
    alert("pilihan kamu : " + player + ", pilihan com : " + com);
    alert('seri!');
}else{
    alert('pilihan kamu salah!');
}