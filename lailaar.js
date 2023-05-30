
function LuasPersegi(sisi) {
    return sisi ** 2;
  }
  

  function KelilingPersegi(sisi) {
    return 4 * sisi;
  }
  

  function LuasLingkaran(jariJari) {
    return Math.PI * jariJari * jariJari;
  }

  module.exports = {
    LuasPersegi,
    KelilingPersegi,
    LuasLingkaran
  };
  