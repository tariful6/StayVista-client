
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from '@tanstack/react-query'
const useRole = () => {
    const {user, loading} = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data:role='', isLoading} = useQuery({
        queryKey : ['role'],
        enabled : ! loading && !!user?.email, // !! return true and false value..
        queryFn : async() => {
            const {data} = await axiosSecure(`/users/${user?.email}`)
            return data.role
        }
    })

    // fetch user data from db



    return [role, isLoading];
};

export default useRole;