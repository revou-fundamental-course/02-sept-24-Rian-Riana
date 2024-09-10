/* memasukan fungsi logika perhitungan luas segitiga */
function calcluas() {
    const alas = parseFloat(document.getElementById('alas').value);
    const tinggi = parseFloat(document.getElementById('tinggi').value);

    if (isNaN(alas) || isNaN(tinggi)) {
        alert('Harap masukkan semua nilai dengan benar.');
        return;
    }

    const luas = 0.5 * alas * tinggi;

    document.getElementById('hasil-luas').textContent = `L = 1/2 x a x t = ${luas}`;
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

    document.getElementById('hasil-keliling').textContent = `K = s + s + s = ${keliling}`;
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

/* memasukan fungsi logika perhitungan luas Jajar Genjang */
function calcluasjajgen() {
    const alasjajgen = parseFloat(document.getElementById('alasjajgen').value);
    const tinggijajgen = parseFloat(document.getElementById('tinggijajgen').value);

    if (isNaN(alasjajgen) || isNaN(tinggijajgen)) {
        alert('Harap masukkan semua nilai dengan benar.');
        return;
    }

    const luas = alasjajgen * tinggijajgen ;

    document.getElementById('hasil-luas-jajgen').textContent = `L = a x t = ${luas}`;
}

/* memasukan fungsi logika perhitungan keliling segitiga */
function calckeljajgen() {
    const sisia = parseFloat(document.getElementById('sisia').value);
    const sisib = parseFloat(document.getElementById('sisib').value);

    if ( isNaN(sisia) || isNaN(sisib)) {
        alert('Harap masukkan semua nilai dengan benar.');
        return;
    }

    const keliling = 2 * (sisia + sisib);

    document.getElementById('hasil-keliling-jajgen').textContent = `K = 2 x (sisi a + sisi b) = ${keliling}`;
}

/* memasukan fungsi hapus atau reset perhitungan */
function resetluasjajgen() {
    document.getElementById('alasjajgen').value = '';
    document.getElementById('tinggijajgen').value = '';
    document.getElementById('hasil-luas-jajgen').textContent = '0';
}
function resetkeljajgen() {
    document.getElementById('sisia').value = '';
    document.getElementById('sisib').value = '';
    document.getElementById('hasil-keliling-jajgen').textContent = '0';
}