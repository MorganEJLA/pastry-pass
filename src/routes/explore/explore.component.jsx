import { useContext } from "react";

import { CrumbsContext } from "../../contexts/crumbs.context";
import CrumbsCard from "../../components/crumbs-card/crumbs-card.component";
import "./explore.styles.scss";
const Explore = () => {
  const { crumbs } = useContext(CrumbsContext);
  return (
    <div className="crumbs-container">
      {crumbs?.map((crumbs) => (
        <CrumbsCard key={crumbs.id} crumbs={crumbs} />
      ))}
    </div>
  );
};
export default Explore;
