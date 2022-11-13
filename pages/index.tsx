import Head from "components/Head/index";
import styles from "@styles/Home.module.css";
import { getBaseColor } from "utils/getBaseColor";
import { MainClient, Pokemon, PokemonSpecies } from "pokenode-ts";
import { useEffect, useState } from "react";
import Card from "components/Card";
import Footer from "src/components/Footer";
import Search from "src/components/Search";

export default function Home() {
  const [pokemonEscolhido, setPokemonEscolhido] = useState<number | string>(12);
  const [pokemonInfo, setPokemonInfo] = useState<Pokemon>();
  const [pokemonInfoSpecies, setPokemonInfoSpecies] =
    useState<PokemonSpecies>();

  useEffect(() => {
    if (pokemonEscolhido && pokemonEscolhido !== "0") {
      if (typeof pokemonEscolhido === "string") {
        (async () => {
          const api = new MainClient();

          await api.pokemon
            .getPokemonByName(pokemonEscolhido)
            .then((data) => {
              setPokemonInfo(data);
            })
            .catch((error) => console.error(error));
        })();
        (async () => {
          const api = new MainClient();

          await api.pokemon
            .getPokemonSpeciesByName(pokemonEscolhido)
            .then((data) => {
              setPokemonInfoSpecies(data);
            })
            .catch((error) => console.error(error));
        })();
      } else {
        (async () => {
          const api = new MainClient();

          await api.pokemon
            .getPokemonById(pokemonEscolhido)
            .then((data) => {
              setPokemonInfo(data);
            })
            .catch((error) => console.error(error));
        })();

        (async () => {
          const api = new MainClient();

          await api.pokemon
            .getPokemonSpeciesById(pokemonEscolhido)
            .then((data) => {
              setPokemonInfoSpecies(data);
            })
            .catch((error) => console.error(error));
        })();
      }
    }
  }, [pokemonEscolhido]);

  const showCard =
    pokemonInfoSpecies &&
    pokemonInfo &&
    pokemonEscolhido &&
    pokemonEscolhido !== "0";

  const corBase = getBaseColor(
    pokemonInfo ? pokemonInfo.types[0].type.name : ""
  );

  const handleInputPokemon = () => {
    let input: any = document.querySelector("#pokemonSearch");
    setPokemonEscolhido(input.value);
  };

  return (
    <div className={styles.container}>
      <Head />

      <main className={styles.main}>
        <Search handleInputPokemon={handleInputPokemon} />

        {showCard ? (
          <Card
            corBase={corBase}
            pokemonInfo={pokemonInfo}
            pokemonInfoSpecies={pokemonInfoSpecies}
          />
        ) : (
          <div>Escolha um pokemon</div>
        )}
      </main>

      <Footer />
    </div>
  );
}
