// menampilkan ke layar
function insert(num){
    document.form.textarea.value = document.form.textarea.value + num;
}

// hitung
function equal(){
    var result = document.form.textarea.value;
    document.form.textarea.value = eval(result);
}

// clean
function clean(){
    document.form.textarea.value = "";
}

// delete
function backspace(){
    var result = document.form.textarea.value;
    document.form.textarea.value = result.substring(0,result.length-1);
}