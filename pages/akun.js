import React from 'react'
import logo from '../public/img.jpg';
import SiteImage from '../components/SiteImage'
import Link from 'next/link';

function Akun() {
    return (
        <div className="container">      
            <div className='container-flex'>
                <SiteImage logo={logo} type="home"/>  
                <div style={{padding:'1em'}}>
                <h1 style={{fontWeight:'bold', fontSize:'1.6em', color:'rgb(14 120 202)'}}>Selamat Datang di BRImo</h1>
                <h2 style={{fontWeight:'bold', fontSize:'1.2em', marginBottom:'2em', marginTop:'1em'}}>Apakah Anda memiliki akun Internet Banking Bank BRI?</h2>    
                    <Link href="/login">
                        <a>
                            <button className='btn'>
                                Punya Akun
                            </button>
                        </a>
                    </Link>
                    <Link href="/noAkun">
                    <p className='text text-biru' style={{marginTop:'1.2em', cursor:'pointer'}}>
                        Belum punya Akun
                    </p>
                    </Link>

                </div>
            </div>
        </div>
    )
}

export default Akun