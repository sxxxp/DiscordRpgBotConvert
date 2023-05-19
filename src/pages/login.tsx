import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Authorize } from "../auth";

const onChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  setFunction: React.Dispatch<React.SetStateAction<any>>
) => {
  setFunction(e.currentTarget.value);
};

const Login = ({ UserObj }: { UserObj: Authorize }) => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      UserObj?.Signin(id, password);
    } catch {
      alert("아이디 혹은 비밀번호가 잘못되었습니다.");
    } finally {
      navigate(-1);
    }
  };

  if (UserObj.GetId()) {
    return (
      <>
        <div className="head">이미 로그인 된 상태입니다.</div>
      </>
    );
  }
  return (
    <>
      <div className="head">로그인</div>
      <form action="" onSubmit={onSubmit}>
        <input
          type="text"
          autoFocus
          placeholder="아이디"
          value={id}
          onChange={(e) => onChange(e, setId)}
          required
        />
        <input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => onChange(e, setPassword)}
          required
        />
        <input type="submit" name="" id="submit" value={"로그인"} />
      </form>
      <a href="/register">회원가입하기</a>
    </>
  );
};

export default Login;
