import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";


const User = ({users}) => { 
  const { id } = useParams();
  const [user, setUser] = useState({});
  
   console.log(typeof(id), typeof(users[0].id));
  useEffect( () => {
    setUser(users.find( userItem => userItem.id === parseInt(id,10) )) ;
  },[users])
  // console.log( users.filter(user => user.id === id));
  return (
    <div className="user">
      <h1>{user.name}</h1>
      <div className="email">Email: {user.email}</div>
      <div className="phone">Phone: {user.phone}</div>
      <div className="website">Website: {user.website}</div>
    </div>
  );
};

const mapStateToProps = state =>{
  return { users: state.users,}
}
export default connect(mapStateToProps)(User);
