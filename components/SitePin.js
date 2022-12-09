import React, { useEffect, useState } from 'react'
import {BiArrowBack} from 'react-icons/bi'
import {RiDeleteBack2Line} from 'react-icons/ri'

import { PinInput, PinInputField } from '@chakra-ui/react'

const SitePin = ({submitPin}) => {

    const [pin, setPin] = useState('')

    const handleInputPin = (e) => setPin([...pin, e.target.value])

    const hapusPin = () => setPin(pin.slice(0, pin.length - 1))

    useEffect(() => {
        
        if (pin.length === 6) submitPin(pin)
    
    }, [pin])
    
    return (
        <div className='bg-full-blue'>
            <div style={{display:'flex' , justifyContent:'space-between'}}>
                <BiArrowBack style={{fontSize:'1.5em'}}/>
                <h1 style={{textAlign:'center', fontWeight:'bold', fontSize:'1em'}}>PIN</h1>
                <h1></h1>
            </div>
            <h1 style={{marginTop:'2em', fontWeight:'bold', fontSize:'1.2em'}}>Konfirmasi PIN</h1>
            <p>Silahkan konfirmasi PIN yang sudah anda buat.</p>
            <div className='input-pin'>
                <PinInput value={pin.toString().replace(/,/g, "")}>
                    <PinInputField className='pin' />
                    <PinInputField className='pin' />
                    <PinInputField className='pin' />
                    <PinInputField className='pin' />
                    <PinInputField className='pin' />
                    <PinInputField className='pin' />
                </PinInput>
            </div>
            <h1 style={{marginTop:'3em', fontWeight:'bold', fontSize:'1em', textAlign:'center'}}>Lupa PIN?</h1>
            <div className='input-angka'>
                <button type='button' className='btn-pin' name='pin1' value="1" onClick={handleInputPin}>1</button>
                <button type='button' className='btn-pin' name='pin2' value="2" onClick={handleInputPin}>2</button>
                <button type='button' className='btn-pin' name='pin3' value="3" onClick={handleInputPin}>3</button>
            </div>
            <div className='input-angka'>
                <button type='button' className='btn-pin' name='pin4' value="4" onClick={handleInputPin}>4</button>
                <button type='button' className='btn-pin' name='pin5' value="5" onClick={handleInputPin}>5</button>
                <button type='button' className='btn-pin' name='pin6' value="6" onClick={handleInputPin}>6</button>
            </div>
            <div className='input-angka'>
                <button type='button' className='btn-pin' name='pin7' value="7" onClick={handleInputPin}>7</button>
                <button type='button' className='btn-pin' name='pin8' value="8" onClick={handleInputPin}>8</button>
                <button type='button' className='btn-pin' name='pin9' value="9" onClick={handleInputPin}>9</button>
            </div>
            <div className='input-angka'>
                <button type='button' className='btn-pin'></button>
                <button type='button' className='btn-pin' name='pin0' value="0" onClick={handleInputPin}>0</button>
                <button type='button' className='btn-pin' onClick={hapusPin}><RiDeleteBack2Line style={{marginLeft:'43px'}}/></button>
            </div>
        </div>
    )
}

export default SitePin