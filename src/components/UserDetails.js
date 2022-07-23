import React from "react";
import { useSelector } from "react-redux";
const UserDetails = () => {
  const { singleUser } = useSelector((store) => store.users);
  return (
    <section className="mt-5 userdata d-flex justify-content-evenly" >
      {!singleUser ? (
        <div className="mt-5 d-flex justify-content-center heading">Want to see user's data ? Click on any of the following buttons !!</div>
      ) : (
        <figure className="d-flex justify-content-center">
          <img 
            className="rounded mx-4 image my-3"
            src={singleUser?.data.avatar}
            alt="user"
          />
          <div className="mt-4 userinfo">
            <div className=""> Name : {singleUser?.data.first_name} {singleUser?.data.last_name}
            </div>
            <div className="italic">Email : {singleUser?.data.email}</div>
          </div>
        </figure>
      )}
    </section>
  );
};

export default UserDetails;
