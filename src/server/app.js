const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const connection = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "",
    database : "web_node"
})

connection.connect((err) =>{
    if(err){
        console.log("Veritabanına bağlanırken bir hata olustu.",err);
        return;
    }
    console.log("Veritabanına bağlandı.");
})

app.post('/kayit', (req, res) =>{
    const {email , password} = req.body;
    const query = "INSERT INTO user(userName, password) VALUE (?,?)";
    connection.query(query, [email, password], (err,result) =>{
        if (err){
            console.error("Veritabanına bilgi eklerken hata olustu.",err);
            res.status(500).send({ error : "Kayit olusurken bir hata olustu"});
            return;
        }
        res.status(200).send({message : "Kayit basarili"});
    })


});

app.post('/', (req, res) => {
    const {email , password} = req.body;
    const query = 'SELECT * FROM  user WHERE userName = ? AND password= ?';
    connection.query(query, [email, password], (err,result) =>{
        if(err) {
            console.error("Bilgilerin kontrolünde bir hata olustu.");
            res.status(500).send({error : 'Bilgilerin kontrolünde hata.'});
            return;
        }
        if(result.length >0 ){
            const user_id = result[0].id;

            isLoginQuery = "update user set isLogin = 1 where id=?" ;
            connection.query(isLoginQuery, user_id),(err,result);
            if(err) {
                console.error("Login bilgisi güncellenirken hata olustu");
                res.status(500).send({ error : 'Login guncellenemedi'})
            }
            res.status(200).send({message : '1', id:user_id});
        } else{
            res.status(200).send({message: '0'});
        }
    })
})

app.post('/logout', (req,res) =>{
    const {id} = req.body;

    const query = "UPDATE user SET isLogin = 0 where id=?";

    connection.query(query, [id], (err, result) =>{
        if(err) {
            console.error("Cıkış yapıldığında isLogin güncellenemedi", err);
            res.status(500).send({error : "Güncelleme hatasi"});
        }
        res.status(200).send({message : "Çıkış yapıldı. isLogin güncellendi."})
    })
})

app.post('/formGonder', (req,res) =>{

    const {id,isim, soyisim, passNo, cinsiyet, dogumTarihi, milliyet, milliyet2,  email,telBilgi, ulke, sehir, semt, zipCode, adress, universite, depart,
        ort,egitim, durum, tarih, engelDurum, aciklama, cv, niyetMektubu, pasaport, ikametgah, diploma, ingilizceYeterlilik } = req.body;

        const kontrolQuery = "select * from basvuru where id = ?";

        connection.query(kontrolQuery, [id], (err,result) => {

            if(result.length > 0){
                res.status(201).send({error: "Aynı hesaptan yalnizca bir basvuru yapilabilir."});
                return;
            }else{
                const query = "insert into basvuru (id, Isim, Soyisim, TcNo, Cinsiyet, DogumTarihi, Milliyet1, Milliyet2, Mail, TelefonNo, Ulke, Sehir, Semt, ZipCodu, Adres, Universite, Departman, Gpa, MezuniyetDurumu, OkulDurumu, MezuniyetTarihi, EngelDurumu, Aciklama, Cv, NiyetMektubu, Pasaport, Ikametgah, Diploma, IngilizceBelgesi) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
    
                connection.query(query, [id,isim, soyisim, passNo, cinsiyet, dogumTarihi, milliyet, milliyet2,  email,telBilgi, ulke, sehir, semt, zipCode, adress, universite, depart,
                    ort,egitim, durum, tarih, engelDurum, aciklama, cv, niyetMektubu, pasaport, ikametgah, diploma, ingilizceYeterlilik], (err,result) => {
                    if(err){
                        console.error("Veritabanina ekleme yapilirken hata olustu. ", err);
                        res.status(500).send({error: "Veritabanina ekleme yapilirken hata olustu."});
                        return;
                    }
    
                    res.status(200).send({message: "Basvuru basariyla kaydedildi."});
                });
            }
        });
    });

    app.post('/formGuncelle', (req,res) =>{ 
            const user_id =req.body.id;
            const query ="select * from user WHERE id=?";
            connection.query(query, [user_id], (err,result) =>{
                if(err){
                    console.error("Bilgi alirken hata olustu",err);
                    res.status(500).send({error : "Veri tabanına ulaşırken bir hata olustu."});
                    return;
                }
                if(result.length === 0){
                    res.status(404).send({error : 'Aradiginiz id degerine ait kullanici bulunamadi.'});
                    return;
                }

                const {id, isim, soyisim, passNo, cinsiyet, dogumTarihi, milliyet, milliyet2,  email,telBilgi, ulke, sehir, semt, zipCode, adress, universite, depart,
                    ort,egitim, durum, tarih, engelDurum, aciklama, cv, niyetMektubu, pasaport, ikametgah, diploma, ingilizceYeterlilik} = req.body;

                    const updateQuery = "update basvuru set Isim =?, Soyisim =?, TcNo=?, Cinsiyet=?, DogumTarihi=?, Milliyet1=?, Milliyet2=?, Mail=?, TelefonNo=?, Ulke=?, Sehir=?, Semt=?, ZipCodu=?, Adres=?, Universite=?, Departman=?, Gpa=?, MezuniyetDurumu=?, OkulDurumu=?, MezuniyetTarihi=?, EngelDurumu=?, Aciklama=?, Cv=?, NiyetMektubu=?, Pasaport=?, Ikametgah=?, Diploma=?, IngilizceBelgesi=? WHERE id=?";

                    connection.query(updateQuery , [isim, soyisim, passNo, cinsiyet, dogumTarihi, milliyet, milliyet2,  email,telBilgi, ulke, sehir, semt, zipCode, adress, universite, depart,
                        ort,egitim, durum, tarih, engelDurum, aciklama, cv, niyetMektubu, pasaport, ikametgah, diploma, ingilizceYeterlilik, id], (err, result) =>{

                            if(err){
                                console.error("Guncelleme yapilirken bir hata olustu.!",err);
                                res.status(500).send({error : "Guncelleme yapilamadi.!"});
                                return;
                            }

                            res.status(200).send({message : "Güncelleme basarili bir sekilde gerceklesti.!"});
                        });
            });
});


    app.post("/formGoster", (req,res) =>{
        const user_id = req.body.id;
        const query = "select * from basvuru where id=?"
        connection.query(query, [user_id], (err,result) =>{
            if(err) {
                console.error("Bilgi alınırken hata olustu",err);
                res.status(500).send({error : "Veri tabanından bilgi alırken hata olustu"});
                return;
            }
            if(result.length === 0 ){
                res.status(200).send({message: "Basvuru Bulunamadi."});
            }

            res.status(200).send({
                isim : result[0].Isim,
                soyisim : result[0].Soyisim,
                idNo : result[0].TcNo,
                cinsiyet : result[0].Cinsiyet,
                dogumTarihi : result[0].DogumTarihi,
                milliyet : result[0].Milliyet1,
                milliyet2 : result[0].Milliyet2,
                email : result[0].Mail,
                telBilgi : result[0].TelefonNo,
                ulke : result[0].Ulke,
                sehir : result[0].Sehir,
                semt : result[0].Semt,
                zipCode : result[0].ZipCodu,
                adress : result[0].Adres,
                universite : result[0].Universite,
                depart : result[0].Departman,
                ort: result[0].Gpa,
                egitim : result[0].MezuniyetDurumu,
                durum :result[0].OkulDurumu,
                tarih : result[0].MezuniyetTarihi,
                engelDurum : result[0].EngelDurumu,
                aciklama : result[0].Aciklama,
                cv :result[0].Cv,
                niyetMektubu :result[0].NiyetMektubu,
                pasaport : result[0].Pasaport,
                ikametgah :result[0].Ikametgah,
                diploma :result[0].Diploma,
                ingilizceYeterlilik :result[0].IngilizceBelgesi,
            
            });
        })
    });

    app.post('/PasswordUpdate', (req, res) => {
        const { id, password } = req.body;
      
        const kontrolQuery = "SELECT * FROM user WHERE id = ?";
      
        connection.query(kontrolQuery, [id], (err, result) => {
          if (err) {
            console.error("Veritabanına sorgu yapılırken hata oluştu: ", err);
            res.status(500).send({ error: "Veritabanına sorgu yapılırken hata oluştu." });
            return;
          }
          console.log(result);
      
          if (result.length === 0) {
            res.status(404).send({ error: "Belirtilen ID değerine sahip kayıt bulunamadı." });
            return;
          }
      
          const query = "UPDATE user SET PASSWORD=? WHERE id = ?";
      
          connection.query(query, [password, id], (err, result) => {
            if (err) {
              console.error("Veritabanına güncelleme yapılırken hata oluştu. ", err);
              res.status(500).send({ error: "Veritabanına güncelleme yapılırken hata oluştu." });
              return;
            }
      
            res.status(200).send({ message: "Basvuru basariyla kaydedildi." });
          });
        });
      });




const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server ${PORT} üzerinde dinleniyor.`);
})