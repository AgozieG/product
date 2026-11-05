


import { useState } from "react";
import{ Link, useNavigate} from 'react-router-dom';

export default function SignUp() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    const handleSignUp = (e) => {
        e.preventDefault();
        console.log('Registering User:', {name, email,password});

        navigate('/');
    };

    return(
        <div style={{maxWidth:"400px", margin:"4rem auto", padding:"2rem", border: "2px solid black", borderRadius:"8px"}}>
            <h2>Sign Up</h2>
            <form onSubmit={handleSignUp} style={{display:'flex', flexDirection:'column', gap: '1rem'}}>
                <input 
                    type="text" 
                    placeholder="John Doe" 
                    value={name} 
                    onChange={(e) => setName(e.target.value) }
                    required 
                />
                <input 
                    type="email"
                    placeholder="example@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required 
                />
                <input 
                    type="password"
                    placeholder="******"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} 
                />
                <button type="submit" style={{padding:'0.5rem', cursor:'pointer'}}>
                    Create Account
                </button>
            </form>
            <p style={{marginTop:'1rem'}}>Already have an account? <Link to="/login">Login</Link></p>
        </div>
    )
}