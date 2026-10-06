let mahasiswa = {
    nama: "Afdhol",
    nim: "H071251049",
    jadwal: [
        {hari: 1, matkul: "pemrograman web"},
        {hari: 2, matkul: "basis data"},
        {hari: 3, matkul: "jaringan komputer"} 
    ]   
};

console.log(mahasiswa.nama); 
console.log(mahasiswa.nim);
mahasiswa.nama= "Anies Baswedan"
console.log(mahasiswa.nama);

mahasiswa.angkatan = 2023;
console.log("angkatan:" + mahasiswa.angkatan);

function namaHari(hari) {
    switch(hari) {
        case 1:
            return "Senin";
        case 2:
            return "Selasa";
        case 3:
            return "Rabu";
    }
}

for (kuliah of mahasiswa.jadwal) {
    console.log(`Hari ${namaHari(kuliah.hari)} : ${kuliah.matkul}`);
}
