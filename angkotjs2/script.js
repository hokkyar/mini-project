// membuat object angkot
function Angkot(sopir, trayek, penumpang, kas){
    this.sopir = sopir;
    this.trayek = trayek;
    this.penumpang = penumpang;
    this.kas = kas;

    this.penumpangNaik = function(namaPenumpang){
        if(this.penumpang.length == 0){
            this.penumpang.push(namaPenumpang);
            return this.penumpang;
        }else{
            for(var i = 0; i < this.penumpang.length; i++){
                if(this.penumpang[i] == undefined){
                    this.penumpang.push(namaPenumpang);
                    return this.penumpang;
                }else if(this.penumpang[i] == namaPenumpang){
                    alert('penumpang atas nama ' + namaPenumpang + ' sudah ada');
                    return this.penumpang;
                }else if(i == this.penumpang.length - 1){
                    this.penumpang.push(namaPenumpang);
                    return this.penumpang;
                }
            }
        }
        
    }

    this.penumpangTurun = function(namaPenumpang, bayar){
        if(this.penumpang.length == 0){
            alert('angkot masih kosong');
            return false;
        }
        for(var i = 0; i < this.penumpang.length; i++){
            if(this.penumpang[i] == namaPenumpang){
                this.penumpang[i] = undefined;
                this.kas += bayar;
                return this.penumpang;
            }else if(i == penumpang.length-1){
                alert('penumpang atas nama ' + namaPenumpang + ' tidak ada dalam angkot');
                return this.penumpang;
            }
        }
        
    }

}

var angkot1 = new Angkot('Hokky', ['Seririt', 'Jakarta'], [], 0); 
var angkot2 = new Angkot('Doddy', ['Denpasar','Singaraja'], [], 0);

