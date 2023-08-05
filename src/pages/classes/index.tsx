import { api } from "@/utils/api";

const Classes = () => {
  const { data } = api.classes.getAll.useQuery();
  return <h1>{JSON.stringify(data)}</h1>;
};

export default Classes;
