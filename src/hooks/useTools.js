import { useQuery } from "react-query";

const useTools = () => {
  const { isLoading, error, data } = useQuery(
    "tools",
    async () =>
      await fetch(`${process.env.REACT_APP_BACKEND_URL}/tools`).then((res) => res.json())
  );

  return { isLoading, error, data };
};

export default useTools;
