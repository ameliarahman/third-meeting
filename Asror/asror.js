// Fungsi pertama
function fungsiSatu() {
    console.log("Ini adalah fungsi satu.");
  }
  
  // Fungsi kedua
  function fungsiDua() {
    console.log("Ini adalah fungsi dua.");
  }
  
  // Variabel
  const variabel = "Ini adalah sebuah variabel.";
  
  // Melakukan ekspor untuk ketiga fungsi/variabel
  module.exports = {
    fungsiSatu,
    fungsiDua,
    variabel
  };
  