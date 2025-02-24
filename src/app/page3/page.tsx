// app/signup/page.tsx
'use client';
import { useState, useContext, useEffect } from 'react';
import { UserContext, UserProvider } from '../context/UserContext';
import Navbar from '../components/Navbar';

export default function SignUpPage() {
  return (
    <UserProvider>
      <SignUp />
    </UserProvider>
  );
}

function SignUp() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('SignUp debe estar dentro de un UserProvider');
  }
  const { setUser } = context;

  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePassword = (password) => {
    const re = /^(?=.*[A-Z])(?=.*[!@#$&*]).{8,}$/;
    return re.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validaciones
    if (!formData.name || !formData.email || !formData.password) {
      setError('Todos los campos deben de tener mínimo 1 caracter.');
      setSuccess('');
      return;
    }
    if (!validateEmail(formData.email)) {
      setError('Ingresa un email válido.');
      setSuccess('');
      return;
    }
    if (!validatePassword(formData.password)) {
      setError('La contraseña debe incluir mínimo 8 caracters, una mayúscula y un caracter especial.');
      setSuccess('');
      return;
    }

    // Si todo está bien, guarda el usuario en el contexto
    setUser(formData);
    console.log('Usuario registrado:', formData);

    // Muestra el mensaje de éxito
    setSuccess('Registro exitoso.');

    // Borra los campos del formulario
    setFormData({ name: '', email: '', password: '' });

    // Limpia el mensaje de error
    setError('');
  };

  // Limpia el mensaje de éxito después de 3 segundos
  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        setSuccess('');
      }, 3000); // 3 segundos
      return () => clearTimeout(timer); // Limpia el timer si el componente se desmonta
    }
  }, [success]);

  return (
    <main className="flex flex-col min-h-[calc(100vh-73px)] items-center justify-center">
      <form onSubmit={handleSubmit} className="w-full max-w-sm">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        {error && <p className="text-red-500 text-xs italic mb-4">{error}</p>}
        {success && <p className="text-green-500 text-xs italic mb-4">{success}</p>}
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Sign Up
          </button>
        </div>
      </form>
    </main>
  );
}