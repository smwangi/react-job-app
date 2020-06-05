import React from "react";
export const Card = ({ user }) => {
    
  return (
    <div className="card">
      <img
        src={user.username}
        alt=""
      />
      <div className="content">
        <h2>{user.username}</h2>
        <span>BY: {user.email}</span>
      </div>
    </div>
  );
};
export default Card;