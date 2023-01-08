import './styles.css';

import ResultCard from 'components/ResultCard';
import { useState } from 'react';
import axios from 'axios';

// Para integrar o front-End com uma API, faz-se necessário verificar o tipo de dados que 
// essa API retorna
type Address = {
  logradouro: string;
  bairro: string;
  localidade: string;
  uf: string;
  
}

type FormData = {
  cep: string;
}

const CepSearch = () => {

  // senão definir nada no useState inicial, vai começar como undefined
  const [address, setAddress] = useState<Address>( );

  const [formData, setFormData] = useState<FormData>({
    cep: ''
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // evita que o formulario seja enviado da forma padrão
    //console.log(formData);
    axios.get(`https://viacep.com.br/ws/${formData.cep}/json`)
      .then((resposta) => {
        setAddress(resposta.data);
      })
      .catch((erro) => {
        setAddress(undefined);
      });
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //console.log("Teste de mudança de conteúdo para: " + event.target.value);
    const inputName = event.target.name;
    const inputValue = event.target.value;

    // spread operator para aproveitar o que já foi digitado
    setFormData({ ...formData, [inputName]: inputValue })

  }

  return (
    <div className="cep-search-container">
      <h1 className="text-primary">Busca CEP</h1>
      <div className="container search-container">
        <form onSubmit={handleSubmit}>
          <div className="form-container">
            <input
              type="text"
              name="cep"
              value={formData.cep}
              className="search-input"
              placeholder="CEP (informe somente números)"
              onChange={handleChange}
            />
            <button type="submit" className="btn btn-primary search-button">
              Buscar
            </button>
          </div>
        </form>
        {address &&
          <>
            <ResultCard title="Logradouro" description={address.logradouro} />
            <ResultCard title="Localidade" description={address.localidade} />
            <ResultCard title="Estado" description={address.uf} />
            <ResultCard title="Bairro" description={address.bairro} />
          </>
        }
      </div>
    </div>
  );
};

export default CepSearch;
