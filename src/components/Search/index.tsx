export interface SearchInterface {
  handleInputPokemon: () => void;
}

export default function Search(props: SearchInterface) {
  const { handleInputPokemon } = props;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: "8px",
        gap: "4px",
      }}
    >
      <label htmlFor="pokemonSearch">
        Digite o nome ou ID do pokemon desejado:
      </label>
      <input
        type="search"
        id="pokemonSearch"
        placeholder="IDs de 1 a 905"
        required
      />
      <button onClick={handleInputPokemon}>Procurar</button>
    </div>
  );
}
