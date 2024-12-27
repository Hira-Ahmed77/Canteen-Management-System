import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "../Axios/UseAxiosPublic";

const UserFeedback = () => {
  const AxiosPublic = UseAxiosPublic();
  const { refetch, data: UserFeedback = [] } = useQuery({
    queryKey: ["UserFeedback"],
    queryFn: async () => {
      const res = await AxiosPublic.get(`/feedback`);
      return res.data;
    },
  });
  console.log(UserFeedback);
  return [UserFeedback, refetch];
};

export default UserFeedback;
