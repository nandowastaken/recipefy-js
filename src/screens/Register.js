import React, { useState } from 'react';
import HeaderBack from '../components/HeaderBack';
import InputBox from '../components/InputBox';
import Button from '../components/Button';
import { Toast } from 'bootstrap';
import { Link } from 'react-router-dom';

var styles = {
    content: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        margin: '10px',
        height: '80vh'
    },

    container: {
        border: '1px solid rgb(0, 0, 0, 0.1)',
        borderRadius: '12px',
        margin: '18px 30px',
        padding: '16px',
        opacity: 0.8,
        boxShadow: '0px 0px 3px 3px rgb(0, 0, 0, 0.05)',
        width: "80%",
        fontSize: "16px",
        fontFamily: "Inter, sans-serif",
    }
}

function Register() {
    const [username, setUsername] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

        
    const handleSubmit = (e) => {
        e.preventDefault();
        let regojb = {name, email, password};

        fetch("http://localhost:8000/users", {
            method: "POST", 
            headers: {'content-type':'application/json'},
            body:JSON.stringify(regojb)
        }).then((res) =>{
           console.log("Registered")
        }).catch((err) => {
            console.log(err.message);
        });

    }

     return (
        <div>
            <HeaderBack/>

            <form style={styles.content} onSubmit={handleSubmit}>
                <input value={name} onChange={e=>setName(e.target.value)} type="text" placeholder="Name" name="search" style={styles.container}></input>
                <input value={username} onChange={e=>setUsername(e.target.value)} type="text" placeholder="Username" name="search" style={styles.container}></input>
                <input value={email} onChange={e=>setEmail(e.target.value)} type="text" placeholder="Email" name="search" style={styles.container}></input>
                <input value={password} onChange={e=>setPassword(e.target.value)} type="password" placeholder="Password" name="search" style={styles.container}></input>
                <Button name='Register'/>
                
            </form>
                
        </div>
    );
    
}
 
export default Register;