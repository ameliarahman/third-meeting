
function LuasPersegi(sisi) {
    return "Luas persegi: " + sisi ** 2;
  }
  

  function KelilingPersegi(sisi) {
    return "Keliling Persegi: " + 4 * sisi;
  }
  

  function LuasLingkaran(jariJari) {
    return "Luas Lingkaran: " + Math.PI * jariJari * jariJari;
  }

  const bangun_datar = "Ini adalah bangun datar"

  module.exports = {
    LuasPersegi,
    KelilingPersegi,
    LuasLingkaran,
    bangun_datar
  };
  