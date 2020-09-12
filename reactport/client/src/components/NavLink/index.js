import React from "react";
import { useLocation, useHistory } from "react-router-dom";

const NavLink = (props) => {
  const location = useLocation();
  const history = useHistory();

  const classes = [
    ...props.classes,
    "mx-2",
    "my-1",
    location.pathname === props.path ? "text-info " : "text-light ",
  ];

  return (
    <span
      onClick={() => history.push(props.path)}
      className={classes.join(" ")}
    >
      {props.children}
    </span>
  );
};

NavLink.defaultProps = {
  classes: [],
};

export default NavLink;
