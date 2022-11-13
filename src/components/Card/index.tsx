import Image from "next/image";
import styles from "../../styles/Home.module.css";
import { getBaseColor } from "../../utils/getBaseColor";
import pesoIcon from "../../../public/peso-icon.svg";
import tamanhoIcon from "../../../public/tamanho-icon.svg";
import { Badge } from "components/Badge";
import { Pokemon, PokemonSpecies } from "pokenode-ts";
import { getStatName, getStatsPorcentagem } from "../../utils/stats";

export interface CardProps {
  pokemonInfo: Pokemon;
  pokemonInfoSpecies: PokemonSpecies;
  corBase: string;
}

export default function Card(props: CardProps) {
  const { pokemonInfo, corBase, pokemonInfoSpecies } = props;
  return (
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
              <Badge
                key={type.name}
                baseColor={getBaseColor(type.name)}
                name={type.name}
              />
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
              {pokemonInfoSpecies &&
                pokemonInfoSpecies.flavor_text_entries.filter(
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
  );
}
