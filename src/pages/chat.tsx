import React from "react";

const Chat = ({ UserObj }: any) => {
  return <>{UserObj && <div className="chat-bar">채팅</div>}</>;
};

export default Chat;
