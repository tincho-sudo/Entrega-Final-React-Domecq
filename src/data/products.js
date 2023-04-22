const products = [
  {
    id: 1,
    title: "Super Mario Bros.",
    price: 200,
    desc: "Un juego de plataformas clásico donde Mario debe salvar a la princesa Peach del malvado Bowser.",
    image:
      "https://res.cloudinary.com/dsznajbru/image/upload/v1682071709/Final-React/SI_3DSVC_SuperMarioBros_image1600w_wygj6m.jpg",
    cat: "games",
    brand: "Nintendo",
    stock: 10,
    gen: "Plataformas",
    offer: 15,
  },
  {
    id: 2,
    title: "The Legend of Zelda: Breath of the Wild",
    price: 500,
    desc: "Un juego de aventuras y acción donde el jugador asume el rol del héroe Link, quien debe salvar al reino de Hyrule de la calamidad que se avecina.",
    image:
      "https://res.cloudinary.com/dsznajbru/image/upload/v1682071779/Final-React/2920687-the_legend_of_zelda_-_breath_of_the_wild_v7_xgyfby.jpg",
    cat: "games",
    brand: "Nintendo",
    stock: 5,
    gen: "Aventura",
    offer: 0,
  },
  {
    id: 3,
    title: "Minecraft",
    price: 300,
    desc: "Un juego de construcción y aventuras en un mundo de bloques. El jugador puede construir cualquier cosa que se le ocurra, explorar cuevas y derrotar a enemigos.",
    image:
      "https://res.cloudinary.com/dsznajbru/image/upload/v1682071816/Final-React/11307uYG0CXzRuA9aryByTHYrQLFz-HVQ3VVl7aAysxK15HMpqjkAIcC_R5vdfZt52hAXQNHoYhSuoSq_46_MT_tDBcLu49I_qi1uui.webp",
    cat: "games",
    brand: "Mojang Studios",
    stock: 0,
    gen: "Sandbox",
    offer: 25,
  },
  {
    id: 4,
    title: "Fortnite",
    price: 400,
    desc: "Un juego de disparos en tercera persona y construcción. El jugador se une a otros jugadores para luchar contra hordas de monstruos mientras construye defensas para protegerse.",
    image:
      "https://res.cloudinary.com/dsznajbru/image/upload/v1682071844/Final-React/24BR_S24_EGS_Launcher_Blade_2560x1440_2560x1440-437d0424d02f5fd286ab659ddade30db_nonpq4.jpg",
    cat: "games",
    brand: "Epic Games",
    stock: 3,
    gen: "Battle Royale",
    offer: 5,
  },
  {
    id: 5,
    title: "League of Legends",
    price: 250,
    desc: "Un juego de estrategia en tiempo real donde dos equipos de cinco jugadores luchan por destruir la base del equipo contrario mientras defienden la suya propia.",
    image:
      "https://res.cloudinary.com/dsznajbru/image/upload/v1682071868/Final-React/cxmo_descargar_el_videojuego_de_league_of_legends.jpg_1753094345_a4tpen.webp",
    cat: "games",
    brand: "Riot Games",
    stock: 8,
    gen: "MOBA",
    offer: 0,
  },
  {
    id: 6,
    title: "Crash Team Racing",
    price: 250,
    desc: "Un clásico de carreras de karts con los personajes de Crash Bandicoot",
    image:
      "https://res.cloudinary.com/dsznajbru/image/upload/v1682071893/Final-React/1366_2000_gm5eif.jpg",
    cat: "games",
    brand: "Naughty Dog",
    stock: 15,
    gen: "Kart Racing",
    offer: 0,
  },
  {
    id: 7,
    title: "Diablo",
    price: 300,
    desc: "El primer juego de la legendaria saga de RPGs de Blizzard",
    image:
      "https://res.cloudinary.com/dsznajbru/image/upload/v1682071926/Final-React/download_cls7it.jpg",
    cat: "games",
    brand: "Blizzard Entertainment",
    stock: 10,
    gen: "RPG",
    offer: 0,
  },
  {
    id: 8,
    title: "Diablo II",
    price: 350,
    desc: "La secuela del juego original, que mejoró en todo a su predecesor",
    image:
      "https://res.cloudinary.com/dsznajbru/image/upload/v1682071960/Final-React/Box1_nzhjrf.jpg",
    cat: "games",
    brand: "Blizzard Entertainment",
    stock: 8,
    gen: "RPG",
    offer: 0,
  },
  {
    id: 9,
    title: "Diablo III",
    price: 400,
    desc: "La tercera entrega de la serie, que trajo cambios significativos a la mecánica de juego",
    image:
      "https://res.cloudinary.com/dsznajbru/image/upload/v1682071978/Final-React/download_fkjomx.jpg",
    cat: "games",
    brand: "Blizzard Entertainment",
    stock: 5,
    gen: "RPG",
    offer: 0,
  },
  {
    id: 10,
    title: "Chrono Cross",
    price: 1999,
    desc: "Juego de rol para PlayStation",
    image:
      "https://res.cloudinary.com/dsznajbru/image/upload/v1682071997/Final-React/2210936-box_ccross_boi2s3.png",
    cat: "games",
    brand: "Square Enix",
    stock: 5,
    gen: "RPG",
    offer: 0,
  },
  {
    id: 11,
    title: "Age of Empires II: Definitive Edition",
    price: 1499,
    desc: "Juego de estrategia en tiempo real para PC",
    image:
      "https://res.cloudinary.com/dsznajbru/image/upload/v1682072014/Final-React/age-of-empires-2-definitive-edition-button-fin-1640816883650_cqhlbe.jpg",
    cat: "games",
    brand: "Microsoft",
    stock: 8,
    gen: "Estrategia",
    offer: 0,
  },
  {
    id: 12,
    title: "Diablo IV",
    price: 400,
    desc: "El último juego de la aclamada saga Diablo",
    image:
      "https://res.cloudinary.com/dsznajbru/image/upload/v1682072029/Final-React/open-graph_liebqw.jpg",
    cat: "games",
    brand: "Blizzard Entertainment",
    stock: 1,
    gen: "RPG",
    offer: 0,
  },
  {
    id: 13,
    title: "Crash Bandicoot N. Sane Trilogy",
    price: 1499,
    desc: "Juego de plataformas para PlayStation 4",
    image:
      "https://res.cloudinary.com/dsznajbru/image/upload/v1682072051/Final-React/03ZtrPdjasIxzi8QrzOb2zCIHLMydFbh_bvtihb.avif",
    cat: "games",
    brand: "Activision",
    stock: 7,
    gen: "Plataformas",
    offer: 0,
  },
  {
    id: 14,
    title: "El Señor de los Anillos: La Comunidad del Anillo",
    year: 2001,
    price: 700,
    director: "Peter Jackson",
    image:
      "https://res.cloudinary.com/dsznajbru/image/upload/v1682072077/Final-React/3a0481d963fd8a698ffe43b535dedf4bc4c41f05f946022f346afe50b52e99a4._RI_V_TTW__ljnpto.jpg",
    cat: "movies",
    stock: 12,
    gen: "Fantasia",
    desc: "Un joven hobbit llamado Frodo Bolsón hereda un anillo mágico de su tío. Acompañado por un grupo de amigos y aliados, Frodo parte en una peligrosa misión para destruir el anillo en las profundidades del Monte del Destino.",
    offer: 0,
  },
  {
    id: 15,
    title: "Star Wars: Episodio IV - Una Nueva Esperanza",
    year: 1977,
    price: 900,
    director: "George Lucas",
    image:
      "https://res.cloudinary.com/dsznajbru/image/upload/v1682072093/Final-React/Star_Wars_cddkgm.webp",
    cat: "movies",
    gen: "Ciencia-Ficcion",
    desc: "La Princesa Leia es capturada por el Imperio Galáctico y el joven Luke Skywalker, junto con un par de robots, comienza una peligrosa misión para rescatarla. En el camino, se unen al mercenario Han Solo y su copiloto Wookiee, Chewbacca.",
    offer: 10,
  },
  {
    id: 16,
    title: "Harry Potter y la Piedra Filosofal",
    year: 2001,
    price: 10000,
    director: "Chris Columbus",
    image:
      "https://res.cloudinary.com/dsznajbru/image/upload/v1682072112/Final-React/harry-potter-piedra-filosofal_cd42xj.webp",
    cat: "movies",
    gen: "Fantasia",
    desc: "Un huérfano llamado Harry Potter descubre que es un mago y es aceptado en la Escuela de Magia y Hechicería de Hogwarts. Allí, hace nuevos amigos y enemigos mientras descubre su lugar en el mundo mágico.",
    offer: 0,
  },
  {
    id: 17,
    title: "Blade Runner",
    year: 1982,
    price: 1000,
    director: "Ridley Scott",
    image:
      "https://res.cloudinary.com/dsznajbru/image/upload/v1682072128/Final-React/harrison-ford-sean-young-poster-blade-runner-1982-RYFE96_zyginx.jpg",
    cat: "movies",
    gen: "Ciencia-Ficcion",
    desc: "En el futuro, los androides llamados 'replicantes' son usados para trabajos peligrosos en colonias extraterrestres. Cuando un grupo de replicantes rebeldes regresa a la Tierra, un ex policía llamado Rick Deckard es llamado de vuelta a servicio para encontrarlos y 'retirarlos'.",
    offer: 0,
  },
  {
    id: 18,
    title: "Indiana Jones En Busca del Arca Perdida",
    year: 1981,
    price: 100,
    director: "Steven Spielberg",
    image:
      "https://res.cloudinary.com/dsznajbru/image/upload/v1682072161/Final-React/harrison-ford-dvd-cubierta-indiana-jones-y-los-raiders-de-la-arca-perdida-1981-ryj00r_whtg0n.jpg",
    cat: "movies",
    gen: "Aventuras",
    desc: "En 1936, el arqueólogo y aventurero Indiana Jones es contratado por el gobierno estadounidense para encontrar el Arca de la Alianza antes que los nazis. Con la ayuda de una antigua amante, Marion Ravenwood, Jones se enfrenta a peligrosos enemigos y enfrenta desafiantes obstáculos en su búsqueda.",
    offer: 0,
  },
  {
    id: 19,
    title: "Game of Thrones: The Complete Series",
    price: 100,
    desc: "La épica historia de las siete casas de Westeros en una colección imprescindible.",
    image:
      "https://res.cloudinary.com/dsznajbru/image/upload/v1682072233/Final-React/91wn_Av0LGL._AC_UF894_1000_QL80__r8iu30.jpg",
    cat: "series",
    brand: "HBO",
    stock: 5,
    gen: "Fantasia",
    offer: 0,
  },
  {
    id: 20,
    title: "The Witcher: Season 1",
    price: 50,
    desc: "Geralt de Rivia, un solitario cazador de monstruos, lucha por encontrar su lugar en un mundo donde las personas a menudo son más perversas que las bestias.",
    image:
      "https://res.cloudinary.com/dsznajbru/image/upload/v1682072265/Final-React/season-1_ethdwp.jpg",
    cat: "series",
    brand: "Netflix",
    stock: 3,
    gen: "Fantasia",
    offer: 5,
  },
  {
    id: 21,
    title: "Breaking Bad: The Complete Series",
    price: 80,
    desc: "Un profesor de química de secundaria con cáncer terminal se convierte en un fabricante de metanfetamina para asegurar el futuro de su familia.",
    image:
      "https://res.cloudinary.com/dsznajbru/image/upload/v1682072281/Final-React/s-l600_wswm1k.jpg",
    cat: "series",
    brand: "AMC",
    stock: 7,
    gen: "Drama",
    offer: 0,
  },
  {
    id: 22,
    title: "Stranger Things: Season 1",
    price: 30,
    desc: "Cuando un niño desaparece, un pequeño pueblo revela un misterio relacionado con experimentos secretos, fuerzas sobrenaturales y una niña muy extraña.",
    image:
      "https://res.cloudinary.com/dsznajbru/image/upload/v1682072306/Final-React/Stranger_Things_S01_Poster_2_lulwdu.webp",
    cat: "series",
    brand: "Netflix",
    stock: 2,
    gen: "Ciencia-Ficcion",
    offer: 0,
  },
  {
    id: 23,
    title: "The Office: The Complete Series",
    price: 60,
    desc: "El cotidiano y absurdo mundo de la oficina de Dunder Mifflin.",
    image:
      "https://res.cloudinary.com/dsznajbru/image/upload/v1682072320/Final-React/81R7QZV5P1L._AC_UF894_1000_QL80__vli3sf.jpg",
    cat: "series",
    brand: "NBC",
    stock: 4,
    gen: "Comedia",
    offer: 30,
  },
  {
    id: 24,
    title: "The Crown: Season 1",
    price: 40,
    desc: "La vida de la reina Isabel II, desde su boda en 1947 hasta nuestros días.",
    image:
      "https://res.cloudinary.com/dsznajbru/image/upload/v1682072339/Final-React/The_Crown_season_1_fxaltc.jpg",
    cat: "series",
    brand: "Netflix",
    stock: 2,
    gen: "Drama",
    offer: 0,
  },

  {
    id: 25,
    title: "Nvidia GeForce RTX 3080 Ti",
    price: 1500,
    desc: "Una de las tarjetas gráficas más potentes del mercado",
    image:
      "https://res.cloudinary.com/dsznajbru/image/upload/v1682072359/Final-React/QqYHCgopfAX9CO5d_mlkiek.jpg",
    cat: "hardware",
    brand: "Nvidia",
    stock: 5,
    gen: "RTX 30 Series",
    offer: 0,
  },
  {
    id: 26,
    title: "AMD Ryzen 9 5950X",
    price: 900,
    desc: "Uno de los procesadores más potentes del mercado",
    image:
      "https://res.cloudinary.com/dsznajbru/image/upload/v1682072419/Final-React/images_g828fl.jpg",
    cat: "hardware",
    brand: "AMD",
    stock: 3,
    gen: "Ryzen 9",
    offer: 0,
  },
  {
    id: 27,
    title: "Samsung Odyssey G7",
    price: 800,
    desc: "Un monitor curvo con una tasa de refresco de 240Hz",
    image:
      "https://res.cloudinary.com/dsznajbru/image/upload/v1682072453/Final-React/hero-image.fill.size_1248x702.v1663164609_j7vobh.png",
    cat: "hardware",
    brand: "Samsung",
    stock: 2,
    gen: "Odyssey G7",
    offer: 0,
  },
  {
    id: 28,
    title: "Auriculares inalámbricos Sony WH-1000XM4",
    price: 300,
    desc: "Auriculares inalámbricos con cancelación de ruido líder en la industria",
    image:
      "https://res.cloudinary.com/dsznajbru/image/upload/v1682072479/Final-React/1366_2000_y1y4ju.jpg",
    cat: "accessories",
    brand: "Sony",
    stock: 10,
    gen: "Headphones",
    offer: 0,
  },
  {
    id: 29,
    title: "Auriculares inalámbricos Bose QuietComfort Earbuds",
    price: 280,
    desc: "Auriculares inalámbricos con cancelación de ruido avanzada y un sonido nítido y equilibrado",
    image:
      "https://res.cloudinary.com/dsznajbru/image/upload/v1682072497/Final-React/bose-quietcomfort-earbuds-ii-analisis-opinion-2934840_piqthl.webp",
    cat: "accessories",
    brand: "Bose",
    stock: 5,
    gen: "Headphones",
    offer: 20,
  },
];

export default products;
