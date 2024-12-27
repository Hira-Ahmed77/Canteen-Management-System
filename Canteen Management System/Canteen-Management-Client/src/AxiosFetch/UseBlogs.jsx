
import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../Axios/UseAxiosSecure";

const UseBlogs = () => {
    const axiosSecure = UseAxiosSecure();
    const { refetch, data: blogs = [] } = useQuery({
        queryKey: ['blogs'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/blogs`);
            const sortedBlogs = res.data.sort((a, b) => new Date(b.date) - new Date(a.date));
            return sortedBlogs;
        }
    });

    console.log(blogs);
    return [blogs, refetch];
};

export default UseBlogs;
