import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="w-full flex justify-center py-4 bg-[#69140E] text-[#FDCC45]">
        <div className="container flex justify-between text-lg mx-8">
          <Link
            to="/home"
            className="flex justify-center items-center gap-1 hover:underline"
          >
            {" "}
            <img
              className="w-10 hover:w-13 duration-1000"
              src="https://i.postimg.cc/wjW5X716/Gemini-Generated-Image-arn9xmarn9xmarn9-removebg-preview.png"
            />{" "}
            <p>Ananasi</p>
          </Link>
          <div className="flex gap-4">
            <Link to="/modelos" className="hover:underline">
              Modelos
            </Link>
            <Link to="/trancistas" className="hover:underline">
              Trancistas
            </Link>
            |
            <Link to="/" className="hover:underline">
              Entrar
            </Link>
            <Link to="/cadastro" className="hover:underline">
              Registrar
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
