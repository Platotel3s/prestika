import General from "./layouts/General";

export default function App() {
  return (
    <General>
      <section className="max-w-5xl mx-auto mt-10 text-center">
        <h1 className="text-3xl font-bold mb-4">Welcome To Prestika</h1>
        <p className="text-lg opacity-90">Yuk Tambah Presatasimu</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-8">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
            <div key={i} className="bg-white/10 p-4 rounded-lg">
              <img src="https://www.uhamka.ac.id/static/media/FKIP.73a225f609e63ab24aca.jpg" className="w-full h-36 bg-white/20 rounded" />
            </div>
          ))}
        </div>
      </section>
      <section className="max-w-5xl mx-auto mt-12 grid grid-cols-3 text-center">
        <div className="bg-white/10 p-6 rounded-lg text-center">
          <h3 className="text-xl">Total Penghargaan</h3>
          <p className="text-3xl font-bold mt-2">21.000</p>
        </div>
        <div className="bg-white/10 p-6 rounded-lg text-center">
          <h3 className="text-xl">Total Kompetisi</h3>
          <p className="text-3xl font-bold mt-2">5.000</p>
        </div>
        <div className="bg-white/10 p-6 rounded-lg text-center">
          <h3 className="text-xl">Total Mahasiswa Berprestasi</h3>
          <p className="text-3xl font-bold mt-2">12.000</p>
        </div>
      </section>
    </General>
  );
}
