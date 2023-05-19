import React from "react";
import { useNavigate, NavigateFunction } from "react-router-dom";

interface Ipart {
  navigate: NavigateFunction;
  locate: string;
  children: string;
}

const Part = ({ navigate, locate, children }: Ipart) => {
  return (
    <div onClick={(e) => navigate(locate)} className="part">
      {children}
    </div>
  );
};

const Viliage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="head">마을</div>
      <div className="flex-box flex-wrap justify-space-between ">
        <Part navigate={navigate} locate={"/mining"}>
          광산
        </Part>
        <Part navigate={navigate} locate={"/reinforce"}>
          대장간
        </Part>
        <Part navigate={navigate} locate={"/trade"}>
          거래소
        </Part>
        <Part navigate={navigate} locate={"/guild"}>
          길드
        </Part>
        <Part navigate={navigate} locate={"/raid"}>
          레이드
        </Part>
      </div>
    </>
  );
};

export default Viliage;
