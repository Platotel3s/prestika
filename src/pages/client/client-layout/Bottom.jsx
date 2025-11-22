import { Link } from 'react-router-dom'
export default function Bottom() {
  return (
    <div className="flex justify-between items-center">
      <div>
        <div className="flex items-center space-x-2 px-1 py-2">
          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#1f6b82" }}></div>
          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#63b29c" }}></div>
          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "yellow" }}></div>
          <span className="font-semibold italic text-black">
            INTEGRITY, TRUST, COMPASSION
          </span>
        </div>
      </div>
      <div className='flex flex-row items-center'>
        <div className='flex flex-row-reverse mr-10 gap-4'>
          <Link to="#">
            <span><i className='fab fa-facebook text-2xl'></i></span>
          </Link>
          <Link to="#">
            <span><i className='fab fa-youtube text-2xl'></i></span>
          </Link>
          <Link to="#">
            <span><i className='fab fa-whatsapp text-2xl'></i></span>
          </Link>
          <Link to="#">
            <span><i className='fab fa-tiktok text-2xl'></i></span>
          </Link>
          <Link to="#">
            <span><i className='fab fa-x text-2xl'></i></span>
          </Link>
          <Link to="#">
            <span><i className='fab fa-instagram text-2xl'></i></span>
          </Link>
        </div>
        <p>Uhamka.id</p>
      </div>
    </div>
  );
}
