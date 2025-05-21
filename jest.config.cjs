// @ts-check
/**
 * Konfigurasi Jest untuk proyek TypeScript
 * Referensi lengkap: https://jestjs.io/docs/configuration
 */

/** @type {import('jest').Config} */
const config = {
  // Membersihkan semua mock, instance, dan hasil sebelum setiap pengujian
  clearMocks: true,

  // Mengumpulkan informasi cakupan kode saat menjalankan pengujian
  collectCoverage: true,

  // Format laporan cakupan kode (lcov untuk HTML, text untuk CLI)
  coverageReporters: ['lcov', 'text'],

  // File yang akan dimasukkan dalam pelaporan cakupan
  collectCoverageFrom: [
    '**/*.ts', // Semua file TypeScript
    '!**/node_modules/**', // Kecualikan dependensi
    '!**/dist/**', // Kecualikan file hasil build
    '!**/*.d.ts', // Kecualikan file deklarasi tipe
  ],

  // Direktori tempat hasil cakupan kode disimpan
  coverageDirectory: 'coverage',

  // Gunakan provider V8 untuk menginstrumentasi kode (lebih cepat & akurat)
  coverageProvider: 'v8',

  // Lewati pengujian pada path yang cocok dengan pola berikut
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],

  // Tampilkan hasil setiap pengujian secara lebih rinci
  verbose: true,

  // Tentukan pola nama file untuk test
  testMatch: [
    '**/test/**/*.[jt]s?(x)', // Semua file dalam folder /test
    '!**/test/util/**/*.[jt]s?(x)', // Kecualikan folder util dalam test
    '!**/test/fixture/**/*.[jt]s?(x)', // Kecualikan folder fixture dalam test
    '**/?(*.)+(spec|test).[tj]s?(x)', // Semua file dengan .spec atau .test.ts/x
  ],

  // (Opsional) Konfigurasi tambahan dapat ditambahkan di sini seperti setupFilesAfterEnv
};

module.exports = config;
