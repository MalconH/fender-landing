import { useEffect } from "react";
import "./CollapseNav.css";
import { CloseIcon, MenuIcon } from "./Icons";
import { useState } from "react";

export function CollapseNav({ onCollapse, isCollapsed }) {
  const [icon, setIcon] = useState();

  useEffect(() => {
    const icon = isCollapsed ? <MenuIcon /> : <CloseIcon />;
    setIcon(icon);
  }, [isCollapsed]);

  return (
    <button className="nav-collapse" type="button" onClick={onCollapse}>
      {icon}
    </button>
  );
}
