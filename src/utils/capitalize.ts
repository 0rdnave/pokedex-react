export const capitalize = (text: any) => {
  if (typeof text !== "string") {
    return text;
  }
  return text.charAt(0).toUpperCase() + text.substring(1);
};
