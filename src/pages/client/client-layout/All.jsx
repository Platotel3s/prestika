import Sidebar from "./Sidebar";
import Bottom from "./Bottom";

export default function All({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-[#295f7b]">
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex-1 p-4">
          <div className="p-6 bg-[#1d4b62] min-h-[99%] overflow-y-scroll">
            <div className="max-w-6xl mx-auto">
              {children}
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-white p-1 shadow-inner shadow-black">
        <Bottom />
      </footer>
    </div>
  );
}
