import { createRoot } from "react-dom/client";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import "./styles/reset.css";
import "./styles/app.css";
import "./components/Main/main.css";
import "./components/Header/header.css";
import "./styles/responsive.css";

createRoot(document.getElementById("root")).render(
  //Code Here
  <>
    <Header />
    <Main />
  </>,
);
