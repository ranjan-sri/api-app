import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, connect } from "react-redux";
import { getUsersStart } from "./actions";

const UserList = ({ users, usersLoading, usersLoaded }) => {
  const [userList, setUserList] = useState(users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersStart());
  }, []);

  useEffect(() => {
    setUserList(users);
  }, [users]);

  if (users.length === 0) {
    return (
      <>
        {usersLoading && (
          <div className="loader">
            <div className="circle"></div>
            <div className="circle"></div>  
          </div>
        )}
        {!usersLoading && !usersLoaded && (
          <div className="load-failed"> Something went wrong, no users loaded</div>
        )}
      </>
    );
  } else {
    return (
      <div className="users-list">
        <h1> Users</h1>
        <ul>
          {userList.map((user) => (
            <li className="list-group-item" key={user.id}>
              <Link to={`user/${user.id}`}> {user.name} </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    users: state.users,
    usersLoading: state.usersLoading,
    usersLoaded: state.usersLoaded,
  };
};
export default connect(mapStateToProps)(UserList);
