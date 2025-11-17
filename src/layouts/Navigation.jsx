export default function Navigation() {
  return (
    <nav className="w-full bg-[#1d4b62] px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Universitas Muhammadiyah Prof. Dr. Hamka</h1>
      <div className="space-x-6 hidden md:flex">
        <a href="#" className="hover:underline">Artikel</a>
        <a href="#" className="hover:underline">Akademik</a>
        <a href="#" className="hover:underline">Prestasi</a>
      </div>
      <a href="#" className="bg-white text-[#1d4b62] px-4 py-1 rounded-lg font-semibold">
        Login
      </a>
    </nav>

  );
}
