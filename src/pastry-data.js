// {
//   id: 21,
//   name: "Turrón de Doña Pepa",
//   imageUrl: "https://github.com/MorganEJLA/dessert-images/blob/main/South-America/Peru/turron-de-dona-pepa-peru.jpeg?raw=true",
//   origin: "Peru",
//   type: "Anise-Flavored Nougat",
//   description: "A traditional Peruvian dessert enjoyed during the Señor de los Milagros festival.",
//   ingredients: ["anise", "flour", "honey", "sprinkles", "melted sugar"],
//   flavorProfile: "sweet, anise, herbal",
//   texture: "chewy, crumbly",
//   region: "South America",
//   servingTemp: "room temperature",
//   specialNotes: "Served in October to honor the Lord of Miracles",
//   tags: ["festival", "traditional", "anise"]
// }

const DESSERT_DATA = [
  {
    title: "Cakes",
    items: [
      {
        id: 1,
        name: "Schwarzwälder Kirschtorte",
        imageUrl:
          "https://github.com/MorganEJLA/dessert-images/blob/main/Europe/Germany/schwarzwalder-kirschtorte-ger.jpeg?raw=true",
        origin: "Germany",
        type: "Layer Cake",
      },
      {
        id: 2,
        name: "Prinsesstårta",
        imageUrl:
          "https://github.com/MorganEJLA/dessert-images/blob/main/Europe/Sweden/prinsesstarta-swe-2.jpeg?raw=true",
        origin: "Sweden",
        type: "Layer Cake",
      },
      {
        id: 3,
        name: "Rogel",
        imageUrl:
          "https://github.com/MorganEJLA/dessert-images/blob/main/South-America/Argentina/rogel-argentina.jpg?raw=true",
        origin: "Argentina",
        type: "Layer Cake",
      },
      {
        id: 4,
        name: "Bojo Cake",
        imageUrl:
          "https://github.com/MorganEJLA/dessert-images/blob/main/South-America/Suriname/bojo-cake-suriname.jpeg?raw=true",
        origin: "Suriname",
        type: "Cassava Cake",
      },
      {
        id: 5,
        name: "Medovik",
        imageUrl:
          "https://github.com/MorganEJLA/dessert-images/blob/main/Europe/Russia/medovik-russia.jpeg?raw=true",
        origin: "Russia",
        type: "Layer Cake",
      },
      {
        id: 6,
        name: "Toucinho do Céu",
        imageUrl:
          "https://github.com/MorganEJLA/dessert-images/blob/main/Europe/Portugal/toucinho-do-ceu_atlas.jpeg?raw=true",
        origin: "Portugal",
        type: "Cake",
      },
      {
        id: 7,
        name: "Kasutera",
        imageUrl:
          "https://github.com/MorganEJLA/dessert-images/blob/main/Asia/Japan/kasutera.jpeg?raw=true",
        origin: "Japan",
        type: "Sponge Cake",
      },
      {
        id: 8,
        name: "Tres Leches",
        imageUrl:
          "https://github.com/MorganEJLA/dessert-images/blob/main/Central-America/Nicuraugua/tres-leches-cake-nic.jpeg?raw=true",
        origin: "Nicuragua",
        type: "Sponge Cake",
      },
      {
        id: 9,
        name: "Krémes",
        imageUrl:
          "https://github.com/MorganEJLA/dessert-images/blob/main/Europe/Hungary/kremes-hungary.jpg?raw=true",
        origin: "Hungary",
        type: "Puff Pastry Cream Cake",
      },
      {
        id: 10,
        name: "Dacquoise",
        imageUrl:
          "https://github.com/MorganEJLA/dessert-images/blob/main/Europe/France/dacquoise-france.jpg?raw=true",
        origin: "France",
        type: "Sponge Cake",
      },
      {
        id: 11,
        name: "Molten Chocolate Cake",
        imageUrl:
          "https://github.com/MorganEJLA/dessert-images/blob/main/North-America/molten-choco-cake-nyc.jpg?raw=true",
        origin: "New York City, NY, USA",
        type: "Chocolate Cake",
      },
      {
        id: 12,
        name: "Jamaican Rum Cake",
        imageUrl:
          "https://github.com/MorganEJLA/dessert-images/blob/main/Caribbean/Jamaica/jamaican-rum-cake.jpg?raw=true",
        origin: "Jamaica",
        type: "Rum Cake",
      },

      {
        id: 13,
        name: "Bibingka",
        imageUrl:
          "https://github.com/MorganEJLA/dessert-images/blob/main/Asia/Philippines/bibingka-philippines.jpeg?raw=true",
        origin: "Philippines",
        type: "Rice Cake",
      },
      {
        id: 14,
        name: "Black Fruit Cake",
        imageUrl:
          "https://github.com/MorganEJLA/dessert-images/blob/main/South-America/Guyana/black-cake-guyana.png?raw=true",
        origin: "Guyana, Belize, Jamaica, Trinidad and Tobago",
        type: "Rum Cake",
      },
      {
        id: 15,
        name: "Chocotorta",
        imageUrl:
          "https://github.com/MorganEJLA/dessert-images/blob/main/South-America/Argentina/chocotorta-argentina.jpeg?raw=true",
        origin: "Argentina",
        type: "No-bake Cake",
      },
      {
        id: 16,
        name: "Mississippi Mud Pie",
        imageUrl:
          "https://github.com/MorganEJLA/dessert-images/blob/main/North-America/mississippi-mud-pie.jpg?raw=true",
        origin: "Mississippi, USA",
        type: "Chocolate Cake",
      },
    ],
  },
  {
    title: "Tarts & Pies",
    items: [
      {
        id: 17,
        name: "Egg Tart",
        imageUrl:
          "https://github.com/MorganEJLA/dessert-images/blob/main/Asia/HongKong/egg-tart-hk.jpeg?raw=true",
        origin: "Portugal / Hong Kong",
        type: "Custard Tart",
      },
      {
        id: 18,
        name: "Tarte à la Bouillie",
        imageUrl:
          "https://github.com/MorganEJLA/dessert-images/blob/main/North-America/Cajun/Tarte%20%C3%A0%20la%20bouillie-cajun.png?raw=true",
        origin: "Cajun",
        type: "Custard Tart",
      },
      {
        id: 19,
        name: "Chiffon Pie",
        imageUrl:
          "https://github.com/MorganEJLA/dessert-images/blob/main/North-America/California/Los%20Angeles/chiffon-pie-los-3.jpeg?raw=true",
        origin: "Los Angeles, CA, USA",
        type: "Cream Pie",
      },
      {
        id: 20,
        name: "Haupia Pie",
        imageUrl:
          "https://github.com/MorganEJLA/dessert-images/blob/main/Oceana/Hawaii/haupia-pie_hawaii.jpeg?raw=true",
        origin: "Hawaii",
        type: "Chilled Layered Pie",
      },
      {
        id: 21,
        name: "Sugar Pie",
        imageUrl:
          "https://github.com/MorganEJLA/dessert-images/blob/main/North-America/French-Canada/sugar-pie-queb.jpeg?raw=true",
        origin: "Quebec, Canada",
        type: "Open Pie",
      },
      {
        id: 22,
        name: "Cazuela",
        imageUrl:
          "https://github.com/MorganEJLA/dessert-images/blob/main/Caribbean/Puerto-Rico/cazuela-pie-pr.jpg?raw=true",
        origin: "Puerto Rico",
        type: "Traditional Open Pie",
      },
      {
        id: 23,
        name: "Banoffee Pie",
        imageUrl:
          "https://github.com/MorganEJLA/dessert-images/blob/main/Europe/England/banoffee-pie-england.jpeg?raw=true",
        origin: "Jevington, England",
        type: "Cream Pie",
      },
      {
        id: 24,
        name: "Buko Pie",
        imageUrl:
          "https://github.com/MorganEJLA/dessert-images/blob/main/Asia/Philippines/buko-pie-phil.jpg?raw=true",
        origin: "Philippines",
        type: "Flaky Cream Pie",
      },
      {
        id: 25,
        name: "Apple Frushie",
        imageUrl:
          "https://github.com/MorganEJLA/dessert-images/blob/main/Europe/Scotland/apple-frushie-scotland.jpg?raw=true",
        origin: "Scotland",
        type: "Apple Tart",
      },
      {
        id: 27,
        name: "Sharlotka",
        imageUrl:
          "https://github.com/MorganEJLA/dessert-images/blob/main/Europe/Russia/sharlotka-russia.jpeg?raw=true",
        origin: "Russia",
        type: "Apple Pie",
      },
      {
        id: 28,
        name: "Sweet Potato Pie",
        imageUrl:
          "https://github.com/MorganEJLA/dessert-images/blob/main/North-America/Southern/sweet-potato-pie-south.jpeg?raw=true",
        origin: "Southern United States",
        type: "Cream Pie",
      },
      {
        id: 29,
        name: "Tarte Normande",
        imageUrl:
          "https://github.com/MorganEJLA/dessert-images/blob/main/Europe/France/tarte-normande-2.jpeg?raw=true",
        origin: "France",
        type: "Tart",
      },
      {
        id: 30,
        name: "Carac",
        imageUrl:
          "https://github.com/MorganEJLA/dessert-images/blob/main/Europe/Switzerland/carac-tart-switz.jpg?raw=true",
        origin: "Switzerland",
        type: "Tart",
      },
    ],
  },
  {
    title: "Cookies",
    items: [
      {
        id: 8,
        name: "Casadinhos",
        imageUrl:
          "https://github.com/MorganEJLA/dessert-images/blob/main/South-America/Brazil/casadinhos-1.png?raw=true",
        origin: "Brazil",
        type: "Sandwich Cookie",
      },
      {
        id: 9,
        name: "Soplillos",
        imageUrl:
          "https://github.com/MorganEJLA/dessert-images/blob/main/Europe/Spain/soplillos.jpg?raw=true",
        origin: "Spain",
        type: "Almond Meringue Cookie",
      },
      {
        id: 10,
        name: "Sorghum Cookies",
        imageUrl:
          "https://github.com/MorganEJLA/dessert-images/blob/main/North-America/Appalachia/sorghum-cookies-appl.jpeg?raw=true",
        origin: "United States",
        type: "Molasses Cookie",
      },
      {
        id: 10,
        name: "Alfajores",
        imageUrl:
          "https://github.com/MorganEJLA/dessert-images/blob/main/South-America/Argentina/alfajor-arg-2.jpeg?raw=true",
        origin: "Argentina, Uruguay",
        type: "Sandwich Cookies",
      },
      {
        id: 10,
        name: "Baci di Dama",
        imageUrl:
          "https://github.com/MorganEJLA/dessert-images/blob/main/Europe/Italy/baci-di-dama-2.jpeg?raw=true",
        origin: "Italy",
        type: "Hazelnut sandwich cookies",
      },
      {
        id: 10,
        name: "Macaron",
        imageUrl:
          "https://github.com/MorganEJLA/dessert-images/blob/main/Europe/France/macaron-fr.jpeg?raw=true",
        origin: "France",
        type: "Meringue-based sandwich cookies",
      },
      {
        id: 10,
        name: "Štramberské-uši",
        imageUrl:
          "https://github.com/MorganEJLA/dessert-images/blob/main/Europe/Czech/%C5%A0trambersk%C3%A9-u%C5%A1i-czech.jpeg?raw=true",
        origin: "Czech Republic",
        type: "Molasses Cookie",
      },
      {
        id: 10,
        name: "Amaretti",
        imageUrl:
          "https://github.com/MorganEJLA/dessert-images/blob/main/Europe/Italy/amaretti-it.jpg?raw=true",
        origin: "Italy",
        type: "Almond Biscotti",
      },
      {
        id: 10,
        name: "Macau Almond Cookies",
        imageUrl:
          "https://github.com/MorganEJLA/dessert-images/blob/main/Asia/Macau/macau-almond-cookies.jpeg?raw=true",
        origin: "Macau",
        type: "Almond Cookie",
      },
      {
        id: 10,
        name: "Black and White Cookie",
        imageUrl:
          "https://github.com/MorganEJLA/dessert-images/blob/main/North-America/black-and-white-cookie-nyc.jpg?raw=true",
        origin: "New York City, NY, USA",
        type: "Half Moon Cookie",
      },
      {
        id: 10,
        name: "Bizcochito",
        imageUrl:
          "https://github.com/MorganEJLA/dessert-images/blob/main/North-America/Southwest/bizcochito-newmex.jpeg?raw=true",
        origin: "New Mexico",
        type: "Butter Cookie",
      },
      {
        id: 10,
        name: "Stroopwafel",
        imageUrl:
          "https://github.com/MorganEJLA/dessert-images/blob/main/Europe/Netherlands/stroopwafel-2-ned.jpeg?raw=true",
        origin: "Netherlands",
        type: "Treacle Waffle",
      },
      {
        id: 10,
        name: "Mamoulia",
        imageUrl:
          "https://github.com/MorganEJLA/dessert-images/blob/main/Europe/Greece/Mamoulia-greece.jpeg?raw=true",
        origin: "Greece",
        type: "Traditional Cookies",
      },
    ],
  },
  {
    title: "Fried Doughs",
    items: [
      {
        id: 11,
        name: "Puff Puff",
        imageUrl:
          "https://github.com/MorganEJLA/dessert-images/blob/main/Africa/Nigeria/puff-puff-nigeria.png?raw=true",
        origin: "Nigeria",
        type: "Fried Dough",
      },
      {
        id: 12,
        name: "Mandazi",
        imageUrl:
          "https://github.com/MorganEJLA/dessert-images/blob/main/Africa/Tanzania/mandazi-2.jpeg?raw=true",
        origin: "East Africa",
        type: "Fried Dough",
      },
      {
        id: 13,
        name: "Zeppole",
        imageUrl:
          "https://github.com/MorganEJLA/dessert-images/blob/main/Europe/Italy/zeppole-2.jpeg?raw=true",
        origin: "Italy",
        type: "Fried Dough",
      },
      {
        id: 14,
        name: "Calas",
        imageUrl:
          "https://github.com/MorganEJLA/dessert-images/blob/main/North-America/Creole/calas-creole.jpeg?raw=true",
        origin: "United States (Louisiana)",
        type: "Rice Fritter",
      },
    ],
  },
  {
    title: "Custards & Puddings",
    items: [
      {
        id: 15,
        name: "Papo de Anjo",
        imageUrl:
          "https://github.com/MorganEJLA/dessert-images/blob/main/Europe/Portugal/papos-de-anjo-1.jpg?raw=true",
        origin: "Portugal",
        type: "Egg Yolk Custard",
      },
      {
        id: 16,
        name: "Ile Flottante",
        imageUrl:
          "https://github.com/MorganEJLA/dessert-images/blob/main/Europe/France/ile-flottante-france.jpg?raw=true",
        origin: "France",
        type: "Floating Island",
      },
      {
        id: 17,
        name: "Tavuk Göğsü",
        imageUrl:
          "https://github.com/MorganEJLA/dessert-images/blob/main/tavuk-gogsu-turk2.jpeg?raw=true",
        origin: "Turkey",
        type: "Milk Pudding",
      },
      {
        id: 18,
        name: "Zapekanka",
        imageUrl:
          "https://github.com/MorganEJLA/dessert-images/blob/main/Europe/Ukraine/zapekanka.png?raw=true",
        origin: "Russia",
        type: "Cottage Cheese Pudding",
      },
    ],
  },
  {
    title: "Breads & Buns",
    items: [
      {
        id: 19,
        name: "Bolo Bao",
        imageUrl:
          "https://github.com/MorganEJLA/dessert-images/blob/main/Asia/HongKong/pineapple-bun-bolo-bao-hk.jpeg?raw=true",
        origin: "Hong Kong",
        type: "Sweet Bun",
      },
      {
        id: 20,
        name: "Kasutera",
        imageUrl:
          "https://github.com/MorganEJLA/dessert-images/blob/main/Asia/Japan/kasutera.jpeg?raw=true",
        origin: "Japan",
        type: "Sponge Cake",
      },
    ],
  },
  {
    title: "Confections",
    items: [
      {
        id: 21,
        name: "Turrón de Doña Pepa",
        imageUrl:
          "https://github.com/MorganEJLA/dessert-images/blob/main/South-America/Peru/turron-de-dona-pepa-peru.jpeg?raw=true",
        origin: "Peru",
        type: "Anise-Flavored Nougat",
        description:
          "A traditional Peruvian dessert enjoyed during the Señor de los Milagros festival.",
        ingredients: ["anise", "flour", "honey", "sprinkles", "melted sugar"],
        flavorProfile: "sweet, anise, herbal",
        texture: "chewy, crumbly",
        region: "South America",
        servingTemp: "room temperature",
        specialNotes: "Served in October to honor the Lord of Miracles",
        tags: ["festival", "traditional", "anise"],
      },

      {
        id: 22,
        name: "Gaz",
        imageUrl:
          "https://github.com/MorganEJLA/dessert-images/blob/main/Middle-East/Iran/gaz-iran.jpeg?raw=true",
        origin: "Iran",
        type: "Persian Nougat",
      },
      {
        id: 23,
        name: "Fudge",
        imageUrl:
          "https://github.com/MorganEJLA/dessert-images/blob/main/North-America/Baltimore/fudge-baltimore.jpeg?raw=true",
        origin: "United States",
        type: "Sugar Confection",
      },
    ],
  },
  {
    title: "Flambéed Desserts",
    items: [
      {
        id: 24,
        name: "Bananas Foster",
        imageUrl:
          "https://github.com/MorganEJLA/dessert-images/blob/main/North-America/Creole/bananas_foster-nola.jpeg?raw=true",
        origin: "United States (New Orleans)",
        type: "Flambéed Dessert",
      },

      {
        id: 27,
        name: "Ron Ponche",
        imageUrl:
          "https://github.com/MorganEJLA/dessert-images/blob/main/Central-America/Panama/ron-ponche_panama.png?raw=true",
        origin: "Panama",
        type: "Spiced Egg Nog",
      },
    ],
  },
  {
    title: "Street Food",
    items: [
      {
        id: 26,
        name: "Kelewele",
        imageUrl:
          "https://github.com/MorganEJLA/dessert-images/blob/main/Africa/Ghana/kelewelee-1.png?raw=true",
        origin: "Ghana",
        type: "Spiced Fried Plantains",
      },
    ],
  },
];
export default DESSERT_DATA;
