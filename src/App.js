import "./styles.css";

import Event from "./Event.js";
import FillterBtn from "./FillterBtn.js";
import { useState } from "react";

export default function App() {
  const EventAPI = [
    {
      id: 1,
      title: "Event 1",
      description: "Description 1",
      category: "sports",
      date: "April 25"
    },
    {
      id: 2,
      title: "Event 2",
      description: "Description 2",
      category: "technology",
      date: "May 25"
    },
    {
      id: 3,
      title: "Event 3",
      description: "Description 3",
      category: "food",
      date: "October 25"
    },
    {
      id: 4,
      title: "Event 4",
      description: "Description 4",
      category: "food",
      date: "April 25"
    },
    {
      id: 5,
      title: "Event 5",
      description: "Description 5",
      category: "sports",
      date: "January 15"
    },
    {
      id: 6,
      title: "Event 6",
      description: "Description 6",
      category: "art",
      date: "April 25"
    },
    {
      id: 7,
      title: "Event 7",
      description: "Description 7",
      category: "technology",
      date: "June 25"
    },
    {
      id: 8,
      title: "Event 8",
      description: "Description 8",
      category: "sports",
      date: "February 28"
    },
    {
      id: 9,
      title: "Event 9",
      description: "Description 9",
      category: "food",
      date: "April 25"
    },
    {
      id: 10,
      title: "Event 10",
      description: "Description 10",
      category: "sports",
      date: "August 5"
    }
  ];

  const allCategorites = [
    ...new Set(EventAPI.map((currCat) => currCat.category)),
    "all"
  ];
  const [catItems] = useState(allCategorites);
  const [items, setItems] = useState(EventAPI);
  const filterMenu = (category) => {
    if (category === "all") {
      setItems(EventAPI);
      return;
    }

    const upDateItems = EventAPI.filter((curElem) => {
      return curElem.category === category;
    });
    setItems(upDateItems);
  };
  return (
    <div className="App">
      <h1>Dynamic React Gallery</h1>
      <FillterBtn filterMenu={filterMenu} catItems={catItems} />
      <hr />
      <Event items={items} />
    </div>
  );
}
