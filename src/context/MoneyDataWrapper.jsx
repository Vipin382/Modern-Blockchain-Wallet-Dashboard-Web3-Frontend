import React, { useMemo } from "react";
import { useEffect } from "react";
import { createContext, useState } from "react";
import { FaWallet, FaHandHoldingUsd } from "react-icons/fa";
import { TbRotateRectangle } from "react-icons/tb";

export const MoneyDataContext = createContext();

const CardData = [
  {
    name: "Balance",
    icon: <FaWallet />,
    value: "$40,000.063",
    change: "+35,75%",
    data: "",
  },
  {
    name: "Spending",
    icon: <TbRotateRectangle />,
    value: "-$103,000",
    change: "+10,74%",
    data: "",
  },
  {
    name: "Saved",
    icon: <FaHandHoldingUsd />,
    value: "$103,000",
    change: "+10.74%",
    data: "",
  },
];

const MoneyDataWrapper = ({ children }) => {
  const [select, setSelect] = useState(new Set(["Balance"]));

  return (
    <MoneyDataContext.Provider value={{ select, setSelect, NewData: CardData }}>
      {children}
    </MoneyDataContext.Provider>
  );
};

export default MoneyDataWrapper;
