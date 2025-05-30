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
    ],
  },
  {
    title: "Tarts & Pies",
    items: [
      {
        id: 5,
        name: "Egg Tart",
        imageUrl:
          "https://github.com/MorganEJLA/dessert-images/blob/main/Asia/HongKong/egg-tart-hk.jpeg?raw=true",
        origin: "Portugal / Hong Kong",
        type: "Custard Tart",
      },
      {
        id: 6,
        name: "Tarte à la Bouillie",
        imageUrl:
          "https://github.com/MorganEJLA/dessert-images/blob/main/North-America/Cajun/Tarte%20%C3%A0%20la%20bouillie-cajun.png?raw=true",
        origin: "France",
        type: "Custard Tart",
      },
      {
        id: 7,
        name: "Chiffon Pie",
        imageUrl:
          "https://github.com/MorganEJLA/dessert-images/blob/main/North-America/California/Los%20Angeles/chiffon-pie-los-3.jpeg?raw=true",
        origin: "United States",
        type: "Cream Pie",
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
    title: "Others",
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
        id: 25,
        name: "Taho",
        imageUrl:
          "https://github.com/MorganEJLA/dessert-images/blob/main/taho-phil.jpeg?raw=true",
        origin: "Philippines",
        type: "Silken Tofu Dessert",
      },
      {
        id: 26,
        name: "Kelewele",
        imageUrl:
          "https://github.com/MorganEJLA/dessert-images/blob/main/Africa/Ghana/kelewelee-1.png?raw=true",
        origin: "Ghana",
        type: "Spiced Fried Plantains",
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
];
export default DESSERT_DATA;
