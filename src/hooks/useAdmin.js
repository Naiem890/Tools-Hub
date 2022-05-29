import axios from "axios";
import { useEffect, useState } from "react";

const useAdmin = (user) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminLoading, setAdminLoading] = useState(true);
  useEffect(() => {
    const email = user?.email;
    // console.log("email", email);

    if (email) {
      axios(`https://morning-sands-54796.herokuapp.com/admin/${email}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => {
          setIsAdmin(res.data);
          setAdminLoading(false);
          return console.log(res.data);
        })
        .catch((error) => console.error(error));
    }
  }, [user?.user?.email, user]);

  return [isAdmin, adminLoading];
};
export default useAdmin;
