import Image from "next/image";
import Link from "next/link";


const Navbar = () => {
  return (
    <nav className="flex items-center justify-between w-full max-w-6xl mx-auto p-4">
      <ul className="flex items-center space-x-12">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/page2">Page 1</Link></li>
        <li><Link href="/page3">Page 2</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;

/*

agregar un formulario (sign up) para regsitrarse a la App
necesita nombre correo y contraseña y un boton

clicka l boton: validar que todos los campos tenga al menos 1 Character
que el correo tenga formato correo electronico
password necesita 1 mayuscula mino 8 letras y un caracter especial
Use state para guardar info usuario en memoria un solo objeto para gruardarlo

cuando no jala pon error en color rojo bajo el Boton

subir a github y mandar link

use context, poner nombre en otro componenet comparte informacion

*/