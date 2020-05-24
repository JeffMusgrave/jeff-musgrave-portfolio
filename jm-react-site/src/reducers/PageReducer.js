import { useLocation } from "react-router-dom";

export const reducer = (state, action) => {
  let location = useLocation();
  switch (location.pathname) {
    case "/":
      return { gridColumn: "logo/pre-margin" };
    case "/video":
      return { gridColumn: "logo/right-fold" };
    case "/design":
      return { gridColumn: "logo/logo-pad" };
    case "/contact":
      return { gridColumn: "logo/pre-margin" };
    default:
      throw new Error();
  }
};
