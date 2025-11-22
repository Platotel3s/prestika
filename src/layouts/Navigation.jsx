import { useState } from "react";
import LoginForm from "../components/auth/LoginForm";
import RegisterForm from "../components/auth/RegisterForm";
import Modal from "../components/Modal";
import { Link } from "react-router-dom";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState(null);
  const openLogin = () => {
    setContent(<LoginForm />);
    setIsOpen(true);
  }
  const openRegister = () => {
    setContent(<RegisterForm />);
    setIsOpen(true);
  }
  return (
    <nav className="w-full bg-[#1d4b62] px-6 py-4 flex justify-between items-center">
      <div className="lg:flex flex-row-reverse justify-between items-center">
        <h1 className="text-xl font-bold">Universitas Muhammadiyah Prof. Dr. Hamka</h1>
        <img src="https://www.uhamka.ac.id/static/media/onlylogo.34f66f590c1032ef7703.png" alt=""
          className="h-10 w-10" />
      </div>
      <div className="space-x-1 hidden md:flex lg:flex lg:flex-row lg:justify-center sm:gap-1">
        <a href="#" className="hover:underline">Artikel</a>
        <a href="#" className="hover:underline">Akademik</a>
        <a href="#" className="hover:underline">Prestasi</a>
        <Link to="/home-client">Home Client</Link>
      </div>
      <div className="flex flex-row justify-end gap-2">
        <button onClick={openLogin} className="bg-white text-[#1d4b62] px-4 py-1 rounded-lg font-semibold">
          Login
        </button>
        <button onClick={openRegister} className="bg-white text-[#1d4b62] px-4 py-1 rounded-lg font-semibold">
          Register
        </button>
      </div>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        {content}
      </Modal>
    </nav>
  );
}
