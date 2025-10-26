function Cadastro() {
  return (
    <>
      <div className="bg-[#FDCC45] grid grid-cols-1 lg:grid-cols-2 h-screen place-items-center font-bold">
        <div className="bg-[url('https://i.imgur.com/ZZFAmzo.jpg')] lg:block hidden bg-no-repeat w-full min-h-screen bg-cover bg-center"></div>
        <form className="flex justify-center items-center flex-col w-2/3 gap-3">
          <h2 className="text-[#69140E] text-5xl">Cadastrar</h2>
          <div className="flex flex-col w-full">
            <label htmlFor="nome">Nome</label>
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Nome"
              className="border-2 border-[#A44200] rounded p-2"
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="usuario">Email</label>
            <input
              type="text"
              id="usuario"
              name="usuario"
              placeholder="Email"
              className="border-2 border-[#A44200] rounded p-2"
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="senha">Senha</label>
            <input
              type="text"
              id="senha"
              name="senha"
              placeholder="Senha"
              className="border-2 border-[#A44200] rounded p-2"
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="confirmarSenha">Confirmar Senha</label>
            <input
              type="text"
              id="confirmarSenha"
              name="confirmarSenha"
              placeholder="Confirmar Senha"
              className="border-2 border-[#A44200] rounded p-2"
            />
          </div>
          <div className="flex justify-around w-full gap-8">
            <button
              type="reset"
              className="rounded text-[#D58936] bg-[#A44200] hover:bg-[#69140E] hover:text-[#FAF628] w-1/2 py-2"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="rounded text-[#D58936] bg-[#A44200] hover:bg-[#FAF628] hover:text-[#69140E] hover:border-[#69140E] w-1/2 py-2"
            >
              Cadastrar
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Cadastro;
