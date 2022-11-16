import Image from "next/image";
import styles from "../../styles/Home.module.css";
import {
  infoFooter,
  infoHeader,
  stats,
  text,
  title,
} from "../../styles/theme/typography";
import { getBaseColor } from "../../utils/getBaseColor";
import pesoIcon from "../../../public/peso-icon.svg";
import tamanhoIcon from "../../../public/tamanho-icon.svg";
import { Badge } from "components/Badge";
import { Pokemon, PokemonSpecies } from "pokenode-ts";
import { getStatName, getStatsPorcentagem } from "../../utils/stats";
import backgroundImage from "public/pokeball_background.svg";
import { capitalize } from "src/utils/capitalize";

export interface CardProps {
  pokemonInfo: Pokemon;
  pokemonInfoSpecies: PokemonSpecies;
  corBase: string;
}

export default function Card(props: CardProps) {
  const { pokemonInfo, corBase, pokemonInfoSpecies } = props;

  return (
    <div style={{ position: "relative" }}>
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
        <p
          className={styles.text}
          style={{
            fontSize: `${title.fontSize}`,
            fontWeight: `${title.fontWeight}`,
            lineHeight: `${title.lineHeight}`,
          }}
        >
          {capitalize(pokemonInfo.name)}
        </p>
        <p
          className={styles.text}
          style={{
            fontSize: `${title.fontSize}`,
            fontWeight: `${title.fontWeight}`,
            lineHeight: `${title.lineHeight}`,
          }}
        >{`#${("000" + pokemonInfo.id).slice(-3)}`}</p>
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
            top: 0,
            right: 0,
            margin: "8px",
          }}
        >
          <Image src={backgroundImage} alt="Evandr0" width={208} height={208} />
        </div>
        <div
          style={{
            position: "absolute",
            marginTop: "80px",
            zIndex: "1",
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
            position: "absolute",
            backgroundColor: "white",
            borderRadius: "8px",
            margin: "0 4px 4px 4px",
            bottom: "0px",
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
          <p
            className={styles.text}
            style={{
              color: `${corBase}`,
              fontSize: `${infoHeader.fontSize}`,
              fontWeight: `${infoHeader.fontWeight}`,
              lineHeight: `${infoHeader.lineHeight}`,
            }}
          >
            Sobre
          </p>
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
                <p
                  className={styles.text}
                  style={{
                    fontSize: `${text.fontSize}`,
                    lineHeight: `${text.lineHeight}`,
                  }}
                >{`${(pokemonInfo.weight / 10).toFixed(2)} KG`}</p>
              </div>
              <p
                className={styles.text}
                style={{
                  fontSize: `${infoFooter.fontSize}`,
                  lineHeight: `${infoFooter.lineHeight}`,
                }}
              >
                Peso
              </p>
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
                <p
                  className={styles.text}
                  style={{
                    fontSize: `${text.fontSize}`,
                    lineHeight: `${text.lineHeight}`,
                  }}
                >{`${(pokemonInfo.weight / 10).toFixed(2)} KG`}</p>
              </div>
              <p
                className={styles.text}
                style={{
                  fontSize: `${infoFooter.fontSize}`,
                  lineHeight: `${infoFooter.lineHeight}`,
                }}
              >
                Altura
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              {pokemonInfo.abilities.map(({ ability }) => (
                <p
                  className={styles.text}
                  style={{
                    fontSize: `${text.fontSize}`,
                    lineHeight: `${text.lineHeight}`,
                  }}
                >
                  {ability.name}
                </p>
              ))}
              <p
                className={styles.text}
                style={{
                  fontSize: `${infoFooter.fontSize}`,
                  lineHeight: `${infoFooter.lineHeight}`,
                }}
              >
                Golpes
              </p>
            </div>
          </div>
          <div
            style={{
              margin: "0 20px",
            }}
          >
            <p
              className={styles.text}
              style={{
                fontSize: `${text.fontSize}`,
                lineHeight: `${text.lineHeight}`,
              }}
            >
              {pokemonInfoSpecies &&
                pokemonInfoSpecies.flavor_text_entries.filter(
                  (el) => el.language.name === "en"
                )[0].flavor_text}
            </p>
          </div>
          <p
            className={styles.text}
            style={{
              color: `${corBase}`,
              fontSize: `${infoHeader.fontSize}`,
              fontWeight: `${infoHeader.fontWeight}`,
              lineHeight: `${infoHeader.lineHeight}`,
            }}
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
                  style={{
                    color: `${corBase}`,
                    width: "100px",
                    textAlign: "end",
                    fontSize: `${stats.fontSize}`,
                    fontWeight: `${stats.fontWeight}`,
                    lineHeight: `${stats.lineHeight}`,
                  }}
                >
                  {getStatName(stat.stat.name)}
                </p>
                <p
                  className={styles.text}
                  style={{
                    width: "50px",
                    fontSize: `${text.fontSize}`,
                    lineHeight: `${text.lineHeight}`,
                  }}
                >
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
