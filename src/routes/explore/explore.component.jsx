import { useContext } from "react";

import { CrumbsContext } from "../../contexts/crumb.context";
const Explore = () => {
  const { crumbs } = useContext(CrumbsContext);
  return (
    <div>
      {crumbs?.map(({ id, name }) => (
        <div key={id}>
          <h1>{name}</h1>
        </div>
      ))}
    </div>
  );
};
export default Explore;
