// penumpang
var penumpang = [];

// function tambahPenumpang
function tambahPenumpang(nama){
    if(penumpang.length == 0){
        penumpang.push(nama);
        return penumpang;
    }else{
        for(var i = 0; i < penumpang.length; i++){
            if(penumpang[i] == nama){ // nama penumpang sama
                console.log(nama + ' sudah ada pada urutan ke ' + Number(i + 1));
                return penumpang;
            }else if(penumpang[i] == undefined){
                for(var j = 0; j < penumpang.length; j++){
                    if(penumpang[j] == nama){
                        console.log(nama + ' sudah ada pada urutan ke ' + Number(j + 1));
                        return penumpang;
                    }else if(j == penumpang.length-1){
                        penumpang[i] = nama;
                        return penumpang;
                    }
                }
            }else if(i == penumpang.length-1){
                penumpang.push(nama);
                return penumpang;
            }
        }
    }
}

// function hapusPenumpang
function hapusPenumpang(nama){
    if(penumpang.length == 0){
        console.log('belum ada penumpang');
        return penumpang;
    }else{
        for(var i = 0; i < penumpang.length; i++){
            if(penumpang[i] == nama){
                penumpang[i] = undefined;
                return penumpang;
            }else if(i == penumpang.length-1){
                console.log(nama + ' tidak ada di dalam angkot');
                return penumpang;
            }
        }
    }
}