import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "beetroot",
      price: 0.35,
      amount: 0,
    },
    {
      id: 2,
      name: "carrot",
      price: 0.35,
      amount: 0,
    },
    {
      id: 3,
      name: "apple",
      price: 0.35,
      amount: 0,
    },
    {
      id: 4,
      name: "apricot",
      price: 0.35,
      amount: 0,
    },
    {
      id: 5,
      name: "avocado",
      price: 0.35,
      amount: 0,
    },
    {
      id: 6,
      name: "bananas",
      price: 0.35,
      amount: 0,
    },
    {
      id: 7,
      name: "bell-pepper",
      price: 0.35,
      amount: 0,
    },
    {
      id: 8,
      name: "berry",
      price: 0.35,
      amount: 0,
    },
    {
      id: 9,
      name: "blueberry",
      price: 0.35,
      amount: 0,
    },
    {
      id: 10,
      name: "eggplant",
      price: 0.35,
      amount: 0,
    },
  ]);
  return (
    <>
      <Header />
      <Main />
    </>
  );
}

export default App;
