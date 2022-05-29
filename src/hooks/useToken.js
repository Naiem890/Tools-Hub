import axios from "axios";
import { useEffect, useState } from "react";

const useToken = (user) => {
  const [token, setToken] = useState("");
  console.log(user);
  useEffect(() => {
    const email = user?.user?.email;
    const currentUser = {
      email: email,
      displayName: user?.user?.displayName,
      photoURL: user?.user?.photoURL,
    };
    console.log(currentUser);
    console.log(email, currentUser);
    if (email) {
      axios
        .put(`http://localhost:5000/user/${email}`, { currentUser })
        .then((res) => {
          localStorage.setItem("accessToken", res.data.token);
          setToken(res.data.token);
          return console.log(res.data);
        })
        .then((error) => console.error(error));
    }
  }, [
    user?.displayName,
    user?.user?.displayName,
    user?.user?.email,
    user?.user?.photoURL,
  ]);

  return [token];
};
export default useToken;
