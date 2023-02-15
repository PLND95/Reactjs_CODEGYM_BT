import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/propApp";
import Welcome from "./components/propdemo";
import Alert from "./components/PropsBtap1"





const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
   <Alert
      text= "Cảnh báo ! Tài nguyên của bạn vừa truy cập không tồn tại"/>
)
