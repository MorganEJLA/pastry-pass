import { useContext } from "react";

import { DessertsContext } from "../../contexts/crumbs.context";
import DessertsCard from "../../components/crumbs-card/crumbs-card.component";
import "./explore.styles.scss";
const Explore = () => {
  const { desserts } = useContext(DessertsContext);
  return (
    <div className="desserts-container">
      {desserts?.map((dessert) => (
        <DessertsCard key={dessert.id} dessert={dessert} />
      ))}
    </div>
  );
};
export default Explore;
