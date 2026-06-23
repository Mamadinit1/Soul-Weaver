import React from "react";

function SelectClass({ targetClass, setTargetClass }) {
  const chooseClass = (e) => {
    setTargetClass(e.target.value);
  };

  const classes = [
    {
      id: 0,
      title: "— Choose a Class —",
      value: "",
    },
    {
      id: 1,
      title: "Warrior",
      value: "warrior",
    },
    {
      id: 2,
      title: "Mage",
      value: "mage",
    },
    {
      id: 3,
      title: "Assassin",
      value: "assassin",
    },
    {
      id: 4,
      title: "Archer",
      value: "archer",
    },
    {
      id: 5,
      title: "Healer",
      value: "healer",
    },
  ];

  return (
    <div className="select-wrapper">
      <label htmlFor="classSelect" className="select-label">
        ▸ Select Class
      </label>
      <select
        id="classSelect"
        className="class-select"
        onChange={(e) => chooseClass(e)}
      >
        {classes.map((item) => (
          <option value={item.value} key={item.id}>
            {item.title}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectClass;
