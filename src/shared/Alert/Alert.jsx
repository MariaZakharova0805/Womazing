import React from "react";
import c from "./Alert.module.css";
import { useAlert } from "../../store/useStore";

const Alert = ({ children }) => {
  const { visible, setVisible } = useAlert((state) => state);

  const rootClasses = [c.myAlert];
  if (visible) {
    rootClasses.push(c.active);
  }
  return (
    <div className={rootClasses.join(" ")} onClick={() => setVisible(false)}>
      <div className={c.content} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Alert;
