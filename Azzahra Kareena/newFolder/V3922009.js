// File: /newFolder/<NIM>.js

// Mengimpor fungsi dan variabel dari file <Nama>.js
const { greet, getNIM, getClass } = require('../Azzahra.js');

// Memanggil fungsi dan menggunakan variabel
greet(); // Memanggil fungsi greet() untuk menyapa
const nim = getNIM(); // Memanggil fungsi getNIM() dan menyimpan hasilnya dalam variabel nim
const kelas = getClass(); // Memanggil fungsi getClass() dan menyimpan hasilnya dalam variabel kelas

// Menampilkan hasil
console.log('NIM:', nim);
console.log('Kelas:', kelas);
