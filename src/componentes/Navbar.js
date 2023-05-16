import React, { useState } from "react";
import { Menu } from "antd";

const items = [
  {
    label: "Personajes",
    key: "store",
    href: "/", // Agrega el enlace correspondiente
  },
  {
    label: "Teorias",
    key: "products",
    href: "/teorias", // Agrega el enlace correspondiente
  },
  {
    label: "Lugares",
    key: "SubMenu",
    children: [
      {
        type: "group",
        label: "Escuela de Magia y Hechiceria",
        children: [
          {
            label: "Hogwarts",
            key: "direccion",
            href: "/lugares/hogwarts", // Agrega el enlace correspondiente
          },
        ],
      },
    ],
  },
];

const Navbar = () => {
  const [current, setCurrent] = useState("mail");

  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
      className="container mb-4"
    />
  );
};

export default Navbar;
