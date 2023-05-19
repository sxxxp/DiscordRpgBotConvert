import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
interface IminingObj {
  name: string;
  floor: number;
  type: string;
  required?: number;
  amount?: number;
}
type categoryType = "normal" | "periodic" | "special";
const Mining = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState<categoryType>("normal");
  const miningObj: Array<IminingObj> = [
    { name: "기본광산", floor: 1, type: "normal" },
    { name: "깊은광산", floor: 2, type: "normal" },
    { name: "반짝이는광산", floor: 3, type: "normal" },
    {
      name: "요일광산EASY",
      floor: -1,
      type: "periodic",
      required: 2,
      amount: 1,
    },
    {
      name: "주간광산EASY",
      floor: -2,
      type: "periodic",
      required: 4,
      amount: 1,
    },
    { name: "지옥광산", floor: -666, type: "special", required: 12, amount: 1 },
  ];

  const miningInfo = miningObj
    .filter((v) => v.type === category)
    .map((v) => {
      return (
        <button
          className="miningObj"
          onClick={(e) => navigate(`/mining/${v.floor}`)}
        >
          {v.name}
        </button>
      );
    });

  return (
    <>
      <div className="head">광산</div>
      <div className="category-wrapper">
        <div
          className={category === "normal" ? "category-selected" : "category"}
          onClick={(e) => setCategory("normal")}
        >
          일반
        </div>
        <div
          className={category === "periodic" ? "category-selected" : "category"}
          onClick={(e) => setCategory("periodic")}
        >
          일간/주간/월간
        </div>
        <div
          className={category === "special" ? "category-selected" : "category"}
          onClick={(e) => setCategory("special")}
        >
          특별
        </div>
      </div>

      {miningInfo}
    </>
  );
};

export default Mining;
