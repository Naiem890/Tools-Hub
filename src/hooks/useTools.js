import { useQuery } from "react-query";

const useTools = () => {
  const { isLoading, error, data } = useQuery(
    "tools",
    async () =>
      await fetch("https://morning-sands-54796.herokuapp.com/tools").then(
        (res) => res.json()
      )
  );

  return { isLoading, error, data };
};

export default useTools;
