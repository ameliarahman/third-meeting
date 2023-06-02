function fungsipertama(Kota){
    return `ada banyak ${Kota} yang ada di Jawa Timur`
  };

function fungsikedua (Surabaya){
    return `salah satunya adalah ${Surabaya}`
  };

const kota_lain = "Masih terdapat banyak kota di provinsi Jawa Timur"

module.exports = {fungsipertama, fungsikedua, kota_lain}