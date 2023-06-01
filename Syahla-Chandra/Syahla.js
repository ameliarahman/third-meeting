function persegi(sisi) {
    return sisi * sisi;
  }

function segitiga(alas, tinggi) {
    return (alas * tinggi)/2;
  }

function persegipanjang(panjang, lebar) {
    return panjang * lebar;
  }

module.exports = {
    persegi,
    segitiga,
    persegipanjang
  };