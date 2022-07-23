import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSingleUser, getUsersList } from "./components/usersSlice"
import Button from 'react-bootstrap/Button';

import UserDetails from "./components/UserDetails";
import './App.css';

const App = () => {
  const dispatch = useDispatch();
  const { totalUsers } = useSelector((store) => store.users);

  useEffect(() => {
    dispatch(getUsersList());
  }, [dispatch]);

  return (
    <div className="h-[100vh] w-[100vw] bg-gradient-to-r from-sky-800 to-indigo-800 flex flex-col align-middle justify-center">
      <UserDetails />
      <footer className="d-flex justify-content-center">
        {[...Array(totalUsers)].map((el, idx) => (
          <Button as="a" variant="success"
            className="btn text-xl rounded-xl mx-1 mt-5 drop-shadow-lg bg-violet-500 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
            key={idx}
            onClick={() => {
              dispatch(getSingleUser(idx + 1));
            }}
          >
            {idx + 1} 
          </Button>
          
        ))}

      </footer>
    </div>
  );
};

export default App;
