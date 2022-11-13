import { colors } from "../styles/theme/colors";

export const getBaseColor = (pokeType: string | "") => {
  switch (pokeType) {
    case "normal":
      return colors.Normal;
    case "fighting":
      return colors.Fighting;
    case "flying":
      return colors.Flying;
    case "poison":
      return colors.Poison;
    case "ground":
      return colors.Ground;
    case "rock":
      return colors.Rock;
    case "bug":
      return colors.Bug;
    case "ghost":
      return colors.Ghost;
    case "steel":
      return colors.Steel;
    case "fire":
      return colors.Fire;
    case "water":
      return colors.Water;
    case "grass":
      return colors.Grass;
    case "electric":
      return colors.Electric;
    case "psychic":
      return colors.Psychic;
    case "ice":
      return colors.Ice;
    case "dragon":
      return colors.Dragon;
    case "dark":
      return colors.Dark;
    case "fairy":
      return colors.Fairy;
    case "unknown":
      return colors["MediumGray"];
    case "shadow":
      return colors["MediumGray"];

    default:
      return colors.White;
  }
};
