const express = require("express") // memanggil library express js
const bodyParser = require("body-parser") // memanggil library body-parser
const cors = require("cors") // memanggil library cors
const app = express()

// penggunaan body-parser untuk ekstrak data request berformat JSON
app.use(bodyParser.json())

// penggunaan body-parser untuk ekstrak data request dari body
app.use(bodyParser.urlencoded({extended: true}))

// penggunaan cors agar end point dapat diakses oleh cross platform
app.use(cors())

// end-point "/kubus" dengan method POST
app.post("/kubus", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let sisi = Number(req.body.sisi) // mengambil nilai panjang dari body

    let volume = sisi * sisi * sisi
    let luas_permukaan = 6 * sisi * sisi

    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        sisi: sisi,
        volume: volume,
        luas_permukaan: luas_permukaan
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})

// end-point "/balok" metode POST
app.post("/balok", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let panjang = Number(req.body.panjang) // mengambil nilai panjang dari body
    let lebar = Number(req.body.lebar) 
    let tinggi = Number(req.body.tinggi)

    let volume = panjang * lebar * tinggi
    let luas_permukaan = 2 * (panjang * lebar + panjang * tinggi + lebar * tinggi)

    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        panjang: panjang,
        lebar: lebar,
        tinggi: tinggi,
        volume: volume, 
        luas_permukaan: luas_permukaan,
        tinggi: tinggi 
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
});

// end-point "/tabung" metode POST
app.post("/tabung", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let r = Number(req.body.r) // mengambil nilai panjang dari body
    let tinggi = Number(req.body.tinggi)
    let volume = 3.14 * r * r * tinggi
    let luas_permukaan = 2 * 3.14 * r * (r + tinggi)

    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        r: r,
        tinggi: tinggi,
        volume: volume,
        luas_permukaan: luas_permukaan
    } 
    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
});

// end-point "/bola" metode POST
app.post("/bola", (req, res) => {
    let r = Number(req.body.r);
    let volume = (3.14 * r * r * r * 4) / 3;
    let luas_permukaan = 4 * 3.14 * r * r;

    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        r: r,
        volume: volume,
        luas_permukaan: luas_permukaan
    } 
    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response);
})

// menjalankan server pada port 8000
app.listen(8000, () => {
    console.log("Server run on port 8000");
})
