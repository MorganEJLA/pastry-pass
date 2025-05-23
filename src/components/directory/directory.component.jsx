import CategoryItem from "../category-item/category-item.component";
import "./directory.styles.scss";
const Directory = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

const categories = [
  {
    id: 1,
    title: "Cookies",
    imageUrl:
      "https://github.com/MorganEJLA/pastry-hero-images/blob/main/images/amaretti-it.jpg?raw=true",
  },
  {
    id: 2,
    title: "Pastries",
    imageUrl:
      "https://github.com/MorganEJLA/pastry-hero-images/blob/main/images/pastel-de-nata-pt.jpg?raw=true",
  },
  {
    id: 3,
    title: "Confections",
    imageUrl:
      "https://github.com/MorganEJLA/pastry-hero-images/blob/main/images/torrone-di-bagnara-italy.jpg?raw=true",
  },
  {
    id: 4,
    title: "Global",
    subtitle: "Taste the World",
    imageUrl:
      "https://github.com/MorganEJLA/pastry-hero-images/blob/main/images/clifford-5ZB0w0vSgPk-unsplash.jpg?raw=true",
  },
  {
    id: 5,
    title: "Ingredients",
    subtitle: "Unlock the Secrets",
    imageUrl:
      "https://github.com/MorganEJLA/pastry-hero-images/blob/main/images/chocolate-banner.jpg?raw=true",
  },
];
export default Directory;
