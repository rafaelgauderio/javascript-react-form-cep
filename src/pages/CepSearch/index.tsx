import './styles.css';

import ResultCard from 'components/ResultCard';

const CepSearch = () => {

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // evita que o formulario seja enviado da forma padrão
    console.log("Evento de clicar no botão!");
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      console.log("Teste de mudança de conteúdo para: " + event.target.value);
  }

  return (
    <div className="cep-search-container">
      <h1 className="text-primary">Busca CEP</h1>
      <div className="container search-container">
        <form onSubmit={handleSubmit}>
          <div className="form-container">
            <input
              type="text"
              className="search-input"
              placeholder="CEP (informe somente números)"
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
