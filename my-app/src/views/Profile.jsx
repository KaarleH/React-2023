import {useUser} from "../hooks/ApiHooks.js";
import {useEffect, useState} from "react";

const Profile = () => {

  const [user, setUser] = useState({})
  const {getUserByToken} = useUser();

  const getUserInfo = async () => {
    const userToken = localStorage.getItem('userToken');
    const user = await getUserByToken(userToken);
    setUser(user);
  };

  useEffect(()=>{
    getUserInfo();
  }, []);

  return (
    <>
      <h1>Profile</h1>
      <p>Username: {user.username}</p>
      <p>full name: {user.full_name}</p>
      <p>email: {user.email}</p>
    </>
  );
};

export default Profile;
