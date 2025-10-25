import { Link } from "react-router-dom"


function Navbar() {
  return (
    <>
    <div className="w-full flex justify-center py-4 bg-[#69140E] text-white">
        <div className="container flex justify-between text-lg mx-8">
            <Link to="/home" className="flex justify-center items-center gap-1 hover:underline"> <img className="w-10 hover:w-15 duration-1000" src="https://i.postimg.cc/wjW5X716/Gemini-Generated-Image-arn9xmarn9xmarn9-removebg-preview.png"  /> <p>Ananasi</p>
            </Link>
            <div className="flex gap-4">
                Modelos 
                Trancistas
                |
                Entrar
                Registrar
            </div>
        </div>

    </div>
    </>
  )
}

export default Navbar