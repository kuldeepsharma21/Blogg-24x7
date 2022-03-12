import { MDBBadge } from "mdb-react-ui-kit";
import React from "react";

const Badge = ({ childern, styleInfo }) => {
  const colorKey = {
    Fashion: "primary",
    Travel: "success",
    Fitness: "danger",
    Food: "warning",
    Tech: "info",
    Sports: "dark",
  };
  return (
    <h5 style={styleInfo}>
      <MDBBadge color={colorKey[childern]}>{childern}</MDBBadge>
    </h5>
  );
};

export default Badge;
