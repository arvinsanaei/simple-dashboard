import React, { Component, useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const CodingIn = () => {
  const [UserInfo, setUserInfo] = useState([]);
  const [UserInfoFirst, setUserInfoFirst] = useState();
  const BtnClick = () => {
    setUserInfoFirst(UserInfo[0].name);
  };
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setUserInfo(response.data);
        console.log(response);
      });
  }, []);

  return (
    <div>
      <button onClick={BtnClick}>click to see the first data</button>
      <p>{UserInfoFirst}</p>
    </div>
  );
};

export default CodingIn;
