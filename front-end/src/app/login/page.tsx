'use client';

import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import './styles.css';

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3333/auth/login', {
        email,
        password,
      });
      
      if (response.data.access_token) {
        localStorage.setItem('token', response.data.access_token);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        router.replace('/dashboard');
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
    }
  };

  return (
    <div className="loginWrapper">
      <div className="ring">
        <i style={{ '--clr': '#8A2BE2' } as any}></i>
        <i style={{ '--clr': '#FF00FF' } as any}></i>
        <i style={{ '--clr': '#00FFFF' } as any}></i>
        
        <form onSubmit={handleSubmit} className="login">
          <div className="inputBx">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
          </div>
          <div className="inputBx">
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </div>
          <div className="inputBx">
            <input type="submit" value="Login" />
          </div>
        </form>
      </div>
    </div>
  );
}