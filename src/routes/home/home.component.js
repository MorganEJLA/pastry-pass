import { Outlet } from "react-router";

import Directory from "../../components/directory/directory.component";

const Home = () => {
  const categories = [
    {
      id: 1,
      title: "Cakes",
      blurb: "Sponge, cream, and everything dreamy",
      imageUrl:
        "https://github.com/MorganEJLA/dessert-images/blob/main/South-America/Argentina/rogel-argentina.jpg?raw=true",
    },
    {
      id: 2,
      title: "Tarts & Pies",
      blurb: "Petite, powerful, and polished",
      imageUrl:
        "https://github.com/MorganEJLA/dessert-images/blob/main/Asia/Philippines/buko-pie-phil.jpg?raw=true",
    },
    {
      id: 3,
      title: "Cookies",
      blurb: "Crisp edges, chewy centers, pure joy",
      imageUrl:
        "https://github.com/MorganEJLA/dessert-images/blob/main/North-America/black-and-white-cookie-nyc.jpg?raw=true",
    },
    {
      id: 4,
      title: "Fried Doughs",
      blurb: "Hot oil, sweet soul",
      imageUrl:
        "https://github.com/MorganEJLA/dessert-images/blob/main/Africa/Nigeria/puff-puff-nigeria.png?raw=true",
    },
    {
      id: 5,
      title: "Custards & Puddings",
      blurb: "Silky spoons of comfort",
      imageUrl:
        "https://github.com/MorganEJLA/dessert-images/blob/main/Asia/Japan/purin-cus-jp.jpg?raw=true",
    },
    {
      id: 6,
      title: "Confections",
      blurb: "Tiny treats, big personality",
      imageUrl:
        "https://github.com/MorganEJLA/dessert-images/blob/main/Middle-East/Iran/gaz-iran.jpeg?raw=true",
    },
    {
      id: 7,
      title: "Street Food",
      blurb: "Handheld happiness, local flavor",
      imageUrl:
        "https://github.com/MorganEJLA/dessert-images/blob/main/North-America/Creole/sno-ball-nola.jpg?raw=true",
    },
  ];

  return (
    <div>
      <Outlet />
      <Directory categories={categories} />
    </div>
  );
};

export default Home;
