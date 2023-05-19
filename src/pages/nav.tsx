import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = ({ UserObj }: any) => {
  return (
    <>
      <ul>
        <li>
          <NavLink to="/">홈</NavLink>
        </li>
        <li>
          <NavLink to="/viliage">마을</NavLink>
        </li>
        {UserObj ? (
          <li>
            <NavLink to="/logout">로그아웃</NavLink>
          </li>
        ) : (
          <li>
            <NavLink to="/login">로그인</NavLink>
          </li>
        )}
      </ul>
    </>
  );
};

export default Navigation;
