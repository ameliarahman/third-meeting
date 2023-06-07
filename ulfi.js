function fungsiPertama(Pakaian_ukuran_M) {
    return 'Terdapat $ {Pakaian_ukuran_M} yaitu baju'
  };

  function fungsiKedua(Pakaian_ukuran_30) {
    return 'Terdapat ${Pakaian_ukuran_30} yaitu Celana'
  };

  const pilihan_lain = "masih terdapat pakaian yang memiliki banyak ukuran"

  module.exports = {fungsiPertama, fungsiKedua, pilihan_lain}