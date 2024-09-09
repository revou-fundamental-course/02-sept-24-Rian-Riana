/* memasukan fungsi logika perhitungan luas segitiga */
function calcluas() {
    const alas = parseFloat(document.getElementById('alas').value);
    const tinggi = parseFloat(document.getElementById('tinggi').value);

    if (isNaN(alas) || isNaN(tinggi)) {
        alert('Harap masukkan semua nilai dengan benar.');
        return;
    }

    const luas = 0.5 * alas * tinggi;

    document.getElementById('hasil-luas').textContent = `Luas Segitiga: ${luas}`;
}

/* memasukan fungsi logika perhitungan keliling segitiga */
function calckeliling() {
    const sisi1 = parseFloat(document.getElementById('sisi1').value);
    const sisi2 = parseFloat(document.getElementById('sisi2').value);
    const sisi3 = parseFloat(document.getElementById('sisi3').value);

    if ( isNaN(sisi1) || isNaN(sisi2) || isNaN(sisi3)) {
        alert('Harap masukkan semua nilai dengan benar.');
        return;
    }

    const keliling = sisi1 + sisi2 + sisi3;

    document.getElementById('hasil-keliling').textContent = `Keliling Segitiga: ${keliling}`;
}

/* memasukan fungsi hapus atau reset perhitungan */
function resetluas() {
    document.getElementById('alas').value = '';
    document.getElementById('tinggi').value = '';
    document.getElementById('hasil-luas').textContent = '0';
}
function resetkeliling() {
    document.getElementById('sisi1').value = '';
    document.getElementById('sisi2').value = '';
    document.getElementById('sisi3').value = '';
    document.getElementById('hasil-keliling').textContent = '0';
}