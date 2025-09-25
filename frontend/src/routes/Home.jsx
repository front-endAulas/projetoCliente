import { useState, useEffect } from "react";
const Home = () => {


  //HOOK - useState - Manipula o estado da variável
  const [clientes, setClientes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //HOOK - useEffect - Realiza um efeito colateral - no caso ajuda a função fetch buscar a api com sucesso no servidor
  useEffect(() => {
    const Clientes = async () => {
      //TRATAMENTO DE ERROS
      try{
        // api que busca todos os clientes cadastrados
        const response = await fetch("http://localhost:5001/clientes")
        // validação
        if (!response.ok){
          throw new Error("Erro ao buscar os dados do cliente")
        }
        // caso pegue os dados coloca em uma variável e converte para JSON
        const data = await response.json();
        setClientes(data);
      } catch(error){
        setError(error.message)
      } finally{
        setLoading(false)
      }
    };

    Clientes();

  }, []);

  if (loading){
    return(
      <div className="bg-gray-500 text-white min-h-screen items-center justify-center p-8">
        <p className="text-xl">Carregando clientes...</p>
      </div>
    )
  }

  if (error){
    return(
      <div>Error:{error}</div>
    )
  }

  return (
    <section className="bg-gray-500 text-white min-h-screen flex flex-col md:flex-row items-center justify-center p-8">
      <div className="flex-1 flex-col items-center md:items-start text-center md:text-left mb-8 mr-8">
        <p className="text-4xl font-bold">Carros Top</p>
        <h4 className="text-xl mt-4">Um carro de qualidade</h4>
        <button className="mt-4 px-6 py-4 bg-amber-700 text-blue-950 rounded-lg font-bold hover:bg-amber-500 transition-colors">Participe</button>
      </div>

      <div>
        <h2>Clientes Cadastrados</h2>
        {clientes.length > 0 ? (
          <div>
            <table>
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {clientes.map((cliente,index) => (
                  <tr key={index}>
                    <td>{cliente.nome}</td>
                    <td>{cliente.email}</td>
                  </tr>
                ))}

              </tbody>
            </table>
          </div>
        ) : (
          <p>Nenhum cliente cadastrado</p>
        )}

      </div>

    </section>
  )
}

export default Home