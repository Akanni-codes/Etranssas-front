function Home() {
  return (
    <>
      <div className="bg-[#FDCC45] flex justify-center">
        <div className="container grid grid-cols-2 text-[#A44200]">
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h2 className="text-5xl font-bold">Seja Bem Vinde !</h2>
            <p className="text-xl">Promovendo conexões ancestrais</p>

            <div className="flex justify-around gap-4">
                <div className="rounded text-[#A44200] border-[#A44200] border-solid border-2 py-2 px-4  hover:bg-[#A44200] hover:text-[#FDCC45] transition duration-300">Agendar</div>
            </div>
          </div>
          <div className="flex justify-center">
            <img src="https://i.postimg.cc/L6H7VQ95/Gemini-Generated-Image-w0s0efw0s0efw0s0.png" alt="Imagem Página Home" className="w-2/3"/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
