
export default function Navbar() {
  return (
    <nav className="grid place-items-center bg-glay-500 p-2">
        <div className="navbar-brand" href="#home">ระบบลงทะเบียนจองเตียงผู้ป่วยโควิด</div>
        <span className="p-2">
          <button type="button" className="inline-block px-7 py-3 bg-blue-400 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-500 hover:shadow-lg focus:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg transition duration-150 ease-in-out m-1">ลงทะเบียน</button>
   
          <button type="button" className="inline-block px-7 py-3 bg-yellow-500 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-700 active:shadow-lg transition duration-150 ease-in-out m-1">ตรวจสอบสถานะ</button>
        </span>
    </nav>
  )
}
