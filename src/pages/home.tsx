import React from "react";
import Chat from "./chat";

const Home = ({ UserObj }: any) => {
  return (
    <>
      <div className="head">홈</div>
      <Chat />
    </>
  );
};

export default Home;
