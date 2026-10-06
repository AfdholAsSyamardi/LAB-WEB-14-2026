const dataPraktikan = [
    { nama: "Budi", nilaiTugas: [80, 85, 90] },
    { nama: "Siti", nilaiTugas: [60, 60, 60] },
    { nama: "Andi", nilaiTugas: [90, 90, 90] },
    { nama: "Dewi", nilaiTugas: [75, 75, 75] },
    { nama: "Eko",  nilaiTugas: [45, 45, 45] }
];


let namaAsisten = prompt("Masukkan nama Anda (Asisten Lab):");

if (namaAsisten == "Afdhol") {
    
    
    // Menghitung rata-rata 
    const hasilEvaluasi = dataPraktikan.map(praktikan => {
        const totalNilai = praktikan.nilaiTugas.reduce((total, nilai) => total + nilai);
        const rataRata = totalNilai / praktikan.nilaiTugas.length;
        const statusKelulusan = rataRata >= 75 ? "Lulus" : "Tidak Lulus";
        
        return {
            nama: praktikan.nama,
            rataRata: rataRata,
            status: statusKelulusan
        };
    });

    console.log("Data Hasil Evaluasi Praktikum:");
    console.log(hasilEvaluasi);

    // succses ui
    let htmlOutput = `
        <div class="min-h-screen py-10 px-4 font-sans text-slate-800">
            <div class="max-w-3xl mx-auto bg-white rounded-2xl shadow-md border border-slate-100 p-6 md:p-10">
                
                <h1 class="text-3xl font-extrabold text-slate-900 mb-1">Sistem Laporan Praktikum</h1>
                <p class="text-slate-500 text-sm mb-6">Evaluasi kelulusan berbasis JavaScript murni</p>

                <!-- Banner Selamat Datang -->
                <div class="bg-indigo-50 border-l-4 border-indigo-500 p-4 rounded-r-lg mb-8">
                    <p class="text-indigo-800 font-medium">Selamat datang Asisten <span class="font-bold">${namaAsisten}</span>!</p>
                    <p class="text-indigo-600 text-sm">Berikut adalah laporan hasil evaluasi praktikum</p>
                </div>

                <div class="space-y-4">
    `;

    //card
    for (let i = 0; i < hasilEvaluasi.length; i++) {
        const data = hasilEvaluasi[i];
        let badgeClass = data.status === "Lulus" 
            ? "bg-emerald-100 text-emerald-700 border-emerald-200" 
            : "bg-rose-100 text-rose-700 border-rose-200";

        htmlOutput += `
                    <div class="flex items-center justify-between p-4 border border-slate-200 rounded-xl hover:shadow-md transition-shadow bg-white">
                        <div>
                            <h2 class="text-lg font-bold text-slate-800">${data.nama}</h2>
                            <p class="text-slate-500 text-sm font-medium">Rata-rata: ${data.rataRata}</p>
                        </div>
                        <div>
                            <span class="px-4 py-1.5 rounded-full text-xs font-bold tracking-wide border ${badgeClass}">
                                ${data.status}
                            </span>
                        </div>
                    </div>
        `;
    }

    htmlOutput += `
                </div>
            </div>
        </div>
    `;

    document.write(htmlOutput);

} else {

    // not success ui
    let htmlError = `
        <div class="min-h-screen py-10 px-4 font-sans text-slate-800">
            <div class="max-w-3xl mx-auto bg-white rounded-2xl shadow-md border border-slate-100 p-6 md:p-10">
                
                <h1 class="text-3xl font-extrabold text-slate-900 mb-1">Sistem Laporan Praktikum</h1>
                <p class="text-slate-500 text-sm mb-6">Evaluasi kelulusan berbasis JavaScript murni</p>

                <!-- Banner Akses Ditolak -->
                <div class="bg-rose-50 border-l-4 border-rose-500 p-4 rounded-r-lg mb-8">
                    <p class="text-rose-800 font-bold text-lg mb-1">Akses Ditolak</p>
                    <p class="text-rose-600 text-sm">Anda tidak memasukkan identitas asisten yang berwenang.</p>
                </div>

            </div>
        </div>
    `;
    document.write(htmlError);
}