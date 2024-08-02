import { useRef } from "react";
import { Link } from "react-router-dom";

function Cadastro() {
    const nameRef = useRef()
    const email = useRef()
    const passwordRef = useRef()

function handleSubmit(event){
    event.preventDefault()
    console.log(nameRef)
}


  return (

    <div className="max-w-md mx-auto mt-10 bg-white p-8  border-gray-300 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 ">Cadastro</h2>
      <form action="" className="flex flex-col gap-6 " onSubmit={handleSubmit}>
        <input ref={nameRef} placeholder="Nome" type="text" name="" id="" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none" />
        <input ref={email} placeholder="Email" type="email" name="" id="" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none" />
        <input ref={passwordRef} placeholder="Senha" type="password" name="" id="" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none" />

        <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-400">Cadastrar-se</button>
      </form>
      <Link className="m-4 block text-center" to={'/Login'}>Ja tem uma conta? Faça login</Link>
      <video src="Projeto-Cadastro/videos/6929602-hd_1920_1080_30fps.mp4"></video>
    </div>
  );
}

export default Cadastro;
