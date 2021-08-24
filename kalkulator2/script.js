// insert
function insert(num){
    document.form.textarea.value = document.form.textarea.value + num;
}
// count
function equal(){
    var result = document.form.textarea.value;
    document.form.textarea.value = eval(result);
}
// clear
function clearAll(){
    document.form.textarea.value = "";
}

// backspace
function backspace(){
    var result = document.form.textarea.value;
    document.form.textarea.value = result.substring(0,result.length-1);
}