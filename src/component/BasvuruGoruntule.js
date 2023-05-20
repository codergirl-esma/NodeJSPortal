import React, {useEffect, useState} from 'react'
import Sidebar from './Sidebar'
import axios from 'axios';

function BasvuruGoruntule() {


    const [bilgiAl , setBilgiAl] = useState('');
    const [error, setError] = useState('');


    const id = sessionStorage.getItem('id');


  useEffect(() => {
    
    const bilgiGetir = async () => {
 
        console.log(id);

        try{
            const response = await axios.post("http://localhost:3001/formGoster",
            {id}
            );
            if(response.status === 200){
                setBilgiAl(response.data);
            }
        } catch(error){
            setError('Kullanıcı bilgileri gosterilemedi.');
        }


  }
  bilgiGetir();
    
}, []);


 
  return (
    <div className='row'>
      <div className='col-3'>
      <Sidebar 
       detay_active="active"
       detay_disable="disabled"
       form_to ="/anasayfa/BasvuruFormu"
       sifre_to = "/anasayfa/SifreDegistirme"
       iletisim_to = "/anasayfa/Iletisim"
        />
      </div>
      {/* session bilgileri alıp okuyacak */}
      
 
      <div className='col-9 bg-primary-subtle p-2  mt-5 box' style={{width :'50%', marginLeft: '150px',  borderRadius : '15px' }}>
            <h2 className='mt-5 ' style={{color: '#0a0182', textAlign: 'center'}}>Başvuru Bilgileri</h2>
            
            <h4 style={{paddingTop: '10px', paddingLeft: '60px', color:'#450132'}}>Öğrenci Bilgileri</h4>
            <hr />
           
            <div className='row justify-content-center mt-4'>
                <div className='col-6' style={{textAlign: 'center',color: '#94036b',textTransform : 'uppercase',textShadow:'1px 1px #94036b' , }}>
                 <label >adı :</label>
                </div>
                <div className='col-6'>
                <input className='form-control' value={bilgiAl.isim} style={{borderRadius : '10px' , padding :'3px', width: '200px'}} type='text'/>
                </div>
            </div>
            <div className='row justify-content-center mt-4'>
                <div className='col-6' style={{textAlign: 'center',color: '#94036b',textTransform : 'uppercase',textShadow:'1px 1px #94036b' , }}>
                 <label >soyadı :</label>
                </div>
                <div className='col-6'>
                <input className='form-control' value={bilgiAl.soyisim}  style={{borderRadius : '10px' , padding :'3px', width: '200px'}} type='text'/>
                </div>
            </div>
            <div className='row justify-content-center mt-4'>
                <div className='col-6' style={{paddingLeft: '120px',color: '#94036b',textTransform : 'uppercase',textShadow:'1px 1px #94036b' }}>
                 <label >Pasaport No / TC No</label>
                </div>
                <div className='col-6'>
                <input className='form-control' value={bilgiAl.idNo} style={{borderRadius : '10px' , padding :'3px', width: '200px'}} type='text'/>
                </div>
            </div>
            <div className='row justify-content-center mt-4'>
                <div className='col-6' style={{textAlign: 'center',color: '#94036b',textTransform : 'uppercase',textShadow:'1px 1px #94036b' , }}>
                 <label>Cinsiyet :</label>
                </div>
                <div className='col-6'>
                <input className='form-control' value={bilgiAl.cinsiyet} style={{borderRadius : '10px' , padding :'3px', width: '200px'}} type='text'/>
                </div>
            </div>
            <div className='row justify-content-center mt-4'>
                <div className='col-6' style={{paddingLeft:'120px',color: '#94036b',textTransform : 'uppercase',textShadow:'1px 1px #94036b' , }}>
                 <label>Dogum Tarihi :</label>
                </div>
                <div className='col-6'>
                <input className='form-control' value={bilgiAl.dogumTarihi} style={{borderRadius : '10px' , padding :'3px', width: '200px'}} type='text'/>
                </div>
            </div>
            <div className='row justify-content-center mt-4'>
                <div className='col-6' style={{textAlign: 'center',color: '#94036b',textTransform : 'uppercase',textShadow:'1px 1px #94036b' , }}>
                 <label>1. Milliyet :</label>
                </div>
                <div className='col-6'>
                <input className='form-control' value={bilgiAl.milliyet} style={{borderRadius : '10px' , padding :'3px', width: '200px'}} type='text'/>
                </div>
            </div>
            <div className='row justify-content-center mt-4'>
                <div className='col-6' style={{textAlign: 'center',color: '#94036b',textTransform : 'uppercase',textShadow:'1px 1px #94036b' , }}>
                 <label>2. Milliyet :</label>
                </div>
                <div className='col-6'>
                <input className='form-control' value={bilgiAl.milliyet2} style={{borderRadius : '10px' , padding :'3px', width: '200px'}} type='text'/>
                </div>
            </div>
     
     
            <h4 style={{paddingTop: '15px', paddingLeft: '60px', color:'#450132'}}>İletişim Bilgileri</h4>
            <hr />

            <div className='row justify-content-center mt-4'>
                <div className='col-6' style={{textAlign: 'center',color: '#94036b',textTransform : 'uppercase',textShadow:'1px 1px #94036b' , }}>
                 <label>E- mail :</label>
                </div>
                <div className='col-6'>
                <input className='form-control' value={bilgiAl.email} style={{borderRadius : '10px' , padding :'3px', width: '250px' ,}} type='mail'/>
                </div>
            </div>

            <div className='row justify-content-center mt-4'>
                <div className='col-6' style={{textAlign: 'center',color: '#94036b',textTransform : 'uppercase',textShadow:'1px 1px #94036b' , }}>
                 <label>Telefon Numarası</label>
                </div>
                <div className='col-6'>
                <input className='form-control' value={bilgiAl.telBilgi} style={{borderRadius : '10px' , padding :'3px', width: '250px' ,}} type='number'/>
                </div>
            </div>

            <div className='row justify-content-center mt-4'>
                <div className='col-6' style={{textAlign: 'center',color: '#94036b',textTransform : 'uppercase',textShadow:'1px 1px #94036b' , }}>
                 <label>Ülke</label>
                </div>
                <div className='col-6'>
                <input className='form-control' value={bilgiAl.ulke} style={{borderRadius : '10px' , padding :'3px', width: '250px' ,}} type='text'/>
                </div>
            </div>
            <div className='row justify-content-center mt-4'>
                <div className='col-6' style={{textAlign: 'center',color: '#94036b',textTransform : 'uppercase',textShadow:'1px 1px #94036b' , }}>
                 <label>Sehir</label>
                </div>
                <div className='col-6'>
                <input className='form-control' value={bilgiAl.sehir} style={{borderRadius : '10px' , padding :'3px', width: '250px' ,}} type='text'/>
                </div>
            </div>
            <div className='row justify-content-center mt-4'>
                <div className='col-6' style={{textAlign: 'center',color: '#94036b',textTransform : 'uppercase',textShadow:'1px 1px #94036b' , }}>
                 <label>Semt</label>
                </div>
                <div className='col-6'>
                <input className='form-control' value={bilgiAl.semt} style={{borderRadius : '10px' , padding :'3px', width: '250px' ,}} type='text'/>
                </div>
            </div>
            <div className='row justify-content-center mt-4'>
                <div className='col-6' style={{textAlign: 'center',color: '#94036b',textTransform : 'uppercase',textShadow:'1px 1px #94036b' , }}>
                 <label>Zip Kodu</label>
                </div>
                <div className='col-6'>
                <input className='form-control' value={bilgiAl.zipCode} style={{borderRadius : '10px' , padding :'3px', width: '250px' ,}} type='text'/>
                </div>
            </div>
            <div className='row justify-content-center mt-4'>
                <div className='col-6' style={{textAlign: 'center',color: '#94036b',textTransform : 'uppercase',textShadow:'1px 1px #94036b' , }}>
                 <label>Adres</label>
                </div>
                <div className='col-6'>
                <textarea class="form-control" value={bilgiAl.address}  id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
            </div>


            
            <h4 style={{paddingTop: '15px', paddingLeft: '60px', color:'#450132'}}>Eğitim Bilgileri</h4>
            <hr />

            <div className='row justify-content-center mt-4'>
                <div className='col-6' style={{textAlign: 'center',color: '#94036b',textTransform : 'uppercase',textShadow:'1px 1px #94036b' , }}>
                 <label>Üniversite</label>
                </div>
                <div className='col-6'>
                <input className='form-control' value={bilgiAl.universite} style={{borderRadius : '10px' , padding :'3px', width: '250px' ,}} type='text'/>
                </div>
            </div>
            <div className='row justify-content-center mt-4'>
                <div className='col-6' style={{textAlign: 'center',color: '#94036b',textTransform : 'uppercase',textShadow:'1px 1px #94036b' , }}>
                 <label>Departman</label>
                </div>
                <div className='col-6'>
                <input className='form-control' value={bilgiAl.departman} style={{borderRadius : '10px' , padding :'3px', width: '250px' ,}} type='text'/>
                </div>
            </div>
            <div className='row justify-content-center mt-4'>
                <div className='col-6' style={{textAlign: 'center',color: '#94036b',textTransform : 'uppercase',textShadow:'1px 1px #94036b' , }}>
                 <label>gpa</label>
                </div>
                <div className='col-6'>
                <input className='form-control' value={bilgiAl.ortalama} style={{borderRadius : '10px' , padding :'3px', width: '250px' ,}} type='number'/>

                </div>
            </div>

            <div className='row justify-content-center mt-4'>
                <div className='col-6' style={{textAlign: 'center',color: '#94036b',textTransform : 'uppercase',textShadow:'1px 1px #94036b' , }}>
                 <label>Eğitim Bilgisi</label>
                </div>
                <div className='col-6'>
                <input className='form-control' value={bilgiAl.egitimBilgisi} style={{borderRadius : '10px' , padding :'3px', width: '250px' ,}} type='text'/>

                </div>
            </div>
            <div className='row justify-content-center mt-4'>
                <div className='col-6' style={{textAlign: 'center',color: '#94036b',textTransform : 'uppercase',textShadow:'1px 1px #94036b' , }}>
                 <label>Okul Durumu</label>
                </div>
                <div className='col-6'>
                <input className='form-control' value={bilgiAl.durum} style={{borderRadius : '10px' , padding :'3px', width: '250px' ,}} type='text'/>

                </div>
            </div>
            <div className='row justify-content-center mt-4'>
                <div className='col-6' style={{textAlign: 'center',color: '#94036b',textTransform : 'uppercase',textShadow:'1px 1px #94036b' , }}>
                 <label>Mezuniyet Tarihi</label>
                </div>
                <div className='col-6'>
                <input className='form-control' value={bilgiAl.tarih} style={{borderRadius : '10px' , padding :'3px', width: '250px' ,}} type='text'/>

                </div>
            </div>

            <h4 style={{paddingTop: '15px', paddingLeft: '60px', color:'#450132'}}>Engel Durumu</h4>
            <hr />

            <div className='row justify-content-center mt-4'>
                <div className='col-6' style={{textAlign: 'center',color: '#94036b',textTransform : 'uppercase',textShadow:'1px 1px #94036b' , }}>
                 <label>Engellilik Hali</label>
                </div>
                <div className='col-6'>
                <input className='form-control' value={bilgiAl.engel} style={{borderRadius : '10px' , padding :'3px', width: '250px' ,}} type='text'/>

                </div>
            </div>
            <div className='row justify-content-center mt-4'>
                <div className='col-6' style={{textAlign: 'center',color: '#94036b',textTransform : 'uppercase',textShadow:'1px 1px #94036b' , }}>
                 <label>Açıklama</label>
                </div>
                <div className='col-6'>
                <textarea className='form-control' value={bilgiAl.aciklama} row="3" type='text'></textarea>

                </div>
            </div>


            <h4 style={{paddingTop: '15px', paddingLeft: '60px', color:'#450132'}}>Gerekli Belgeler</h4>
            <hr />
            <div className='row justify-content-center mt-4'>
                <div className='col-6' style={{textAlign: 'center',color: '#94036b',textTransform : 'uppercase',textShadow:'1px 1px #94036b' , }}>
                 <label>CV</label>
                </div>
                <div className='col-6'>
                <textarea className='form-control' value={bilgiAl.cv} row="2"></textarea>

                </div>
            </div>
            <div className='row justify-content-center mt-4'>
                <div className='col-6' style={{textAlign: 'center',color: '#94036b',textTransform : 'uppercase',textShadow:'1px 1px #94036b' , }}>
                 <label>Niyet Mektubu</label>
                </div>
                <div className='col-6'>
                <textarea className='form-control' value={bilgiAl.niyetMektubu} row="2"></textarea>

                </div>
            </div>
            <div className='row justify-content-center mt-4'>
                <div className='col-6' style={{textAlign: 'center',color: '#94036b',textTransform : 'uppercase',textShadow:'1px 1px #94036b' , }}>
                 <label>Pasaport</label>
                </div>
                <div className='col-6'>
                <textarea className='form-control' value={bilgiAl.pasaport} row="2"></textarea>

                </div>
            </div>
            <div className='row justify-content-center mt-4'>
                <div className='col-6' style={{textAlign: 'center',color: '#94036b',textTransform : 'uppercase',textShadow:'1px 1px #94036b' , }}>
                 <label>İkametgah</label>
                </div>
                <div className='col-6'>
                <textarea className='form-control' value={bilgiAl.ikametgah} row="2"></textarea>

                </div>
            </div>
            <div className='row justify-content-center mt-4'>
                <div className='col-6' style={{textAlign: 'center',color: '#94036b',textTransform : 'uppercase',textShadow:'1px 1px #94036b' , }}>
                 <label>Diploma</label>
                </div>
                <div className='col-6'>
                <textarea className='form-control' value={bilgiAl.diploma} row="2"></textarea>

                </div>
            </div>
            <div className='row justify-content-center mt-4'>
                <div className='col-6' style={{textAlign: 'center',color: '#94036b',textTransform : 'uppercase',textShadow:'1px 1px #94036b' , }}>
                 <label>İngilizce Yeterlilik Belgesi</label>
                </div>
                <div className='col-6'>
                <textarea className='form-control' value={bilgiAl.ingilizceBElgesi} row="2"></textarea>

                </div>
            </div>
                 
            {error && <p style={{color: 'red'}}> {error} </p>}
      </div>

    
    </div>

           
   
   
  )

}
export default BasvuruGoruntule;