import './styles.css';

import ResultCard from 'components/ResultCard';
import { useState } from 'react';

const CepSearch = () => {

  type FormData = {
    cep: string;
    teste: string;
  }
   const [formData, setFormData] = useState<FormData> ({
      cep: '',
      teste: ''
   });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // evita que o formulario seja enviado da forma padrão
    console.log(formData);
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //console.log("Teste de mudança de conteúdo para: " + event.target.value);
    const inputName = event.target.name;
    const inputValue = event.target.value;

    // spread operator para aproveitar o que já foi digitado
    setFormData({...formData, [inputName]:inputValue })

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
            <input
              type="text"
              name="teste"
              value={formData.teste}
              className="search-input"
              placeholder="Teste"
              onChange={handleChange}
            />
            <button type="submit" className="btn btn-primary search-button">
              Buscar
            </button>
          </div>
        </form>

        <ResultCard title="Logradouro" description="Lalala" />
        <ResultCard title="Número" description="234" />

      </div>
    </div>
  );
};

export default CepSearch;
