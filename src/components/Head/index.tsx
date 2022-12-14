import NextHead from "next/head";

export default function Head() {
  return (
    <NextHead>
      <title>Pokedex</title>
      <meta name="description" content="Projeto de estudos de Next.JS" />
      <link rel="icon" href="/favicon.ico" />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap"
        rel="stylesheet"
      />
    </NextHead>
  );
}
