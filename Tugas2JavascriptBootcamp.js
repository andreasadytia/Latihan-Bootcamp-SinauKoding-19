var jumlahAngkot = 10;
var angkotBeroperasi = 6;
var lembur = 8;

for (var noAngkot = 1; noAngkot <= jumlahAngkot; noAngkot++) {

    if (noAngkot <= 6) {
        console.log('Angkot No.' + noAngkot + ' ' + 'beroparasi dengan baik.')
    } else if (noAngkot === lembur) {
        console.log('Angkot No,' + noAngkot + ' ' + 'sedang lembur.')
    } else {
        console.log('Angkot No.' + noAngkot + ' ' + 'sedang tidak beroprasi.')
    }
}