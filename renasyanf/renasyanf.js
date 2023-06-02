function fungsiPertama(makanan_manis) {
    return 'Terdapat ${makanan_manis} yaitu churros'
};
function fungsiKedua(makanan_asin) {
    return 'Terdapat ${makanan_asin} yaitu kastengel'
};

const pilihan_lain = "masih terdapat banyak pilihan makanan manis dan asin"

module.exports = {fungsiPertama, fungsiKedua, pilihan_lain}