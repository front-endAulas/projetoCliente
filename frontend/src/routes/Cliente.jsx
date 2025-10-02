import { useForm } from 'react-hook-form'

const Cliente = () => {
  const {register, setValue, setFocus} = useForm();
  
  const buscarCep = async(e) =>{
    const cep = e.target.value;
    if (cep.length === 8){
      fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((dados) => {
        if(!dados.erro){
          setValue("rua", dados.logradouro);
          setValue("bairro", dados.bairro);
          setFocus("numero");
        } else{
          alert("Cep não encontrado")
        }
      })
      .catch(error => {
        console.log("Erro ao buscar os dados", error)
      })
    }
  }


  return (
    <section>
      <form className='flex mt-8 justify-center '>
        <fieldset className='flex flex-col bg-gray-400 p-8 rounded-lg'>
          <legend className='text-2xl flex text-center '>Dados Cliente</legend>
          
          <div className='flex space-x-1'>
            <label>Cep:</label>
            <input className='rounded-lg'
              type="text"
              onBlur={buscarCep}
            />
          </div>

          <div>
            <label>Rua:</label>
            <input className='rounded-lg'
              type="text"
              // ...spread - pega as informações velhas e junta com as novas
              {...register("rua")}
            />
          </div>

          <div>
            <label>Bairro:</label>
            <input className='rounded-lg'
              type="text"
              // ...spread - pega as informações velhas e junta com as novas
              {...register("bairro")}
            />
          </div>

          <div>
            <label>Número:</label>
            <input className='rounded-lg'
              type="text"
              // ...spread - pega as informações velhas e junta com as novas
              {...register("numero")}
            />
          </div>

          <div>
            <label>Cidade:</label>
            <input className='rounded-lg'
              type="text"
              // ...spread - pega as informações velhas e junta com as novas
              {...register("localidade")}
            />
          </div>

          <div>
            <label>UF:</label>
            <input className='rounded-lg'
              type="text"
              // ...spread - pega as informações velhas e junta com as novas
              {...register("uf")}
            />
          </div>

          <div>
            <label>Estado:</label>
            <input className='rounded-lg'
              type="text"
              // ...spread - pega as informações velhas e junta com as novas
              {...register("estado")}
            />
          </div>

        </fieldset>
      </form>
    </section>
  )
}

export default Cliente;