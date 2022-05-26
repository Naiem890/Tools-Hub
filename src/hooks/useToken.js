import axios from "axios";
import { useEffect, useState } from "react";

const useToken = (user) => {
  const [token, setToken] = useState("");

  useEffect(() => {
    const email = user?.user?.email;
    const currentUser = { email: email };

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
  }, [user?.user?.email]);

  return [token];
};
export default useToken;
