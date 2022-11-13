export const getStatName = (statName: string) => {
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
      return "";
  }

  return transletedStatValue;
};

export const getStatsPorcentagem = (statValue: number) => {
  return (statValue * 100) / 255;
};
