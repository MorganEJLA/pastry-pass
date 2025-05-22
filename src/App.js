import "./categories.styles.scss";

const App = () => {
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
  return (
    <div className="categories-container">
      {categories.map(({ id, title, subtitle, imageUrl }) => (
        <div key={id} className="category-container">
          <div
            className="background-image"
            style={{
              backgroundImage: `url(${imageUrl}}`,
            }}
          />
          <div className="category-body-container">
            <h2>{title}</h2>
            <p>{subtitle || "Savor the Flavor"}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default App;
