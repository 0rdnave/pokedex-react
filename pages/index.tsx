import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { colors } from "../styles/global.json";
import evandr0 from "../public/evandr0.svg";
import pesoIcon from "../public/peso-icon.svg";
import tamanhoIcon from "../public/tamanho-icon.svg";
import { MainClient, Pokemon, PokemonSpecies } from "pokenode-ts";
import { useEffect, useState } from "react";

export default function Home() {
  const [pokemonEscolhido, setPokemonEscolhido] = useState<number | string>();
  const [pokemonInfo, setPokemonInfo] = useState<Pokemon>();
  const [pokemonInfo2, setPokemonInfo2] = useState<PokemonSpecies>();

  useEffect(() => {
    if (pokemonEscolhido) {
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
              setPokemonInfo2(data);
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
              setPokemonInfo2(data);
            })
            .catch((error) => console.error(error));
        })();
      }
    }
  }, [pokemonEscolhido]);

  const getBaseColor = (pokeType: string | "") => {
    switch (pokeType) {
      case "normal":
        return colors.Normal.value;
      case "fighting":
        return colors.Fighting.value;
      case "flying":
        return colors.Flying.value;
      case "poison":
        return colors.Poison.value;
      case "ground":
        return colors.Ground.value;
      case "rock":
        return colors.Rock.value;
      case "bug":
        return colors.Bug.value;
      case "ghost":
        return colors.Ghost.value;
      case "steel":
        return colors.Steel.value;
      case "fire":
        return colors.Fire.value;
      case "water":
        return colors.Water.value;
      case "grass":
        return colors.Grass.value;
      case "electric":
        return colors.Electric.value;
      case "psychic":
        return colors.Psychic.value;
      case "ice":
        return colors.Ice.value;
      case "dragon":
        return colors.Dragon.value;
      case "dark":
        return colors.Dark.value;
      case "fairy":
        return colors.Fairy.value;
      case "unknown":
        return colors["Medium Gray"].value;
      case "shadow":
        return colors["Medium Gray"].value;

      default:
        return "white";
    }
  };

  const corBase = getBaseColor(
    pokemonInfo ? pokemonInfo.types[0].type.name : ""
  );

  const getStatsPorcentagem = (statValue: number) => {
    return (statValue * 100) / 255;
  };
  const getStatName = (statName: string) => {
    let transletedStatValue = "";

    switch (statName) {
      case "hp":
        return "HP";
      case "attack":
        return "ATQ";
      case "defense":
        return "DEF";
      case "special-attack":
        return "SATQ";
      case "special-defense":
        return "SDEF";
      case "speed":
        return "VEL";

      default:
    }

    return transletedStatValue;
  };

  const handleInputPokemon = () => {
    let input: any = document.querySelector("#pokemonSearch");
    setPokemonEscolhido(input.value);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Pokedex</title>
        <meta name="description" content="Projeto de estudos de Next.JS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
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

        {pokemonInfo && pokemonEscolhido ? (
          <div>
            <div
              style={{
                position: "absolute",
                margin: "24px 20px 0 20px",
                width: "312px",
                display: "flex",
                justifyContent: "space-between",
                color: "white",
              }}
            >
              <p className={styles.text}>{pokemonInfo.name}</p>
              <p className={styles.text}>{`#${("000" + pokemonInfo.id).slice(
                -3
              )}`}</p>
            </div>
            <div
              style={{
                height: "640px",
                width: "360px",
                display: "flex",
                flexDirection: "column",
                backgroundColor: `${corBase}`,
                alignItems: "center",
                borderRadius: "12px",
                padding: "20px 4px",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  marginTop: "80px",
                }}
              >
                {pokemonInfo.sprites.front_default && (
                  <img
                    height="200px"
                    width="200px"
                    alt={`sprite ${pokemonInfo.name}`}
                    src={pokemonInfo.sprites.front_default}
                  ></img>
                )}
              </div>
              <div
                style={{
                  backgroundColor: "white",
                  marginTop: "200px",
                  gap: "16px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    width: "312px",
                    display: "flex",
                    justifyContent: "center",
                    gap: "8px",
                    marginTop: "56px",
                  }}
                >
                  {pokemonInfo.types.map(({ type }) => (
                    <div
                      style={{
                        backgroundColor: `${getBaseColor(type.name)}`,
                      }}
                    >
                      {type.name}
                    </div>
                  ))}
                </div>
                <p className={styles.text}>Sobre</p>
                <div
                  style={{
                    width: "312px",
                    display: "flex",
                    gap: "24px",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        gap: "8px",
                        alignItems: "center",
                      }}
                    >
                      <Image
                        src={pesoIcon}
                        alt="icone de balança"
                        width={16}
                        height={16}
                      />
                      <p className={styles.text}>{`${(
                        pokemonInfo.weight / 10
                      ).toFixed(2)} KG`}</p>
                    </div>
                    <p className={styles.text}>peso</p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        gap: "8px",
                        alignItems: "center",
                      }}
                    >
                      <Image
                        src={tamanhoIcon}
                        alt="icone de régua"
                        width={16}
                        height={16}
                      />
                      <p className={styles.text}>{`${(
                        pokemonInfo.weight / 10
                      ).toFixed(2)} KG`}</p>
                    </div>
                    <p className={styles.text}>Altura</p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    {pokemonInfo.abilities.map(({ ability }) => (
                      <p className={styles.text}>{ability.name}</p>
                    ))}
                    <p className={styles.text}>Golpes</p>
                  </div>
                </div>
                <div
                  style={{
                    margin: "0 20px",
                  }}
                >
                  <p className={styles.text}>
                    {pokemonInfo2 &&
                      pokemonInfo2.flavor_text_entries.filter(
                        (el) => el.language.name === "en"
                      )[0].flavor_text}
                  </p>
                </div>
                <p
                  className={styles.text}
                  style={{ color: `${corBase}`, fontWeight: "bold" }}
                >
                  Status Base
                </p>
                <div
                  style={{
                    width: "312px",
                    marginBottom: "4px",
                  }}
                >
                  {pokemonInfo.stats.map((stat) => (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <p
                        className={styles.text}
                        style={{ width: "100px", textAlign: "end" }}
                      >
                        {getStatName(stat.stat.name)}
                      </p>
                      <p className={styles.text} style={{ width: "50px" }}>
                        {stat.base_stat}
                      </p>
                      <div
                        style={{
                          position: "relative",
                          width: " 100%",
                          height: "8px",
                          backgroundColor: `lightgrey`,
                        }}
                      >
                        <div
                          style={{
                            position: "relative",
                            width: `${getStatsPorcentagem(stat.base_stat)}%`,
                            height: "8px",
                            backgroundColor: `${corBase}`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>Escolha um pokemon</div>
        )}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/0rdnave"
          target="_blank"
          rel="noopener noreferrer"
        >
          Criado por{" "}
          <span className={styles.logo}>
            <Image src={evandr0} alt="Evandr0" width={72} height={16} />
            {/* <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} /> */}
          </span>
        </a>
      </footer>
    </div>
  );
}
