import React, { Component } from 'react';
import HeaderBack from '../components/HeaderBack';
import InputBox from '../components/InputBox';
import Button from '../components/Button';
import register from '../assets/imgs/register.jpg'

var styles = {
    content: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItens: 'center',
        margin: '10px',
        height: '80vh'
    },
    imagem: {
        width: '80%',
        height: '80%',
        display: 'flex',
        marginLeft: '40px'
    }
}

class Register extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <HeaderBack/>

                <div className='content' style={styles.content}>
                    <InputBox text='Name'/>
                    <InputBox text='Username'/>
                    <InputBox text='Email'/>
                    <InputBox text='Password'/>
                    <Button name='Register'/>
                    <img src={register} style={styles.imagem}></img>
                </div>
                
            </div>
        );
    }
}
 
export default Register;