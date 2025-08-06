import { useState } from "react";
import UpdateUserModal from "../../Modal/UpdateUserModal";
import { useMutation } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import useAuth from "../../../hooks/useAuth";


const UserDataRow = ({ user, refetch }) => {
    const [isOpen, setIsOpen] = useState(false);
    const axiosSecure = useAxiosSecure()
    const {user:loginUser} = useAuth()
    console.log(loginUser);

    const { mutateAsync} = useMutation({
      mutationFn : async (role) => {
        const {data} = await axiosSecure.patch(`/user/update/${user?.email}`, role)
        return data;
      },
      onSuccess : (data)=>{
        refetch()
        console.log(data);
        toast.success('user update successfully')
        setIsOpen(false)
      }
    })

    const modalHandler = async (selected)=>{
      if(loginUser.email === user?.email) {
        toast.error('Admin can not change his own role');
        return setIsOpen(false)
      } 
      if(user?.status === 'Verified') return toast.error('User not upgrade his role')
      const userRole = {
        role : selected,
        status : 'Verified',
      }
      try{
        await mutateAsync(userRole) 
      }catch(err){
        console.log(err);
        toast.error(err.message)
      }
    }

    return (
    <tr>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>{user?.email}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>{user?.role}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        {user?.status ? (
          <p
            className={`${
              user?.status === 'Verified' ? 'text-green-500' : 'text-yellow-500'
            } whitespace-no-wrap`}
          >
            {user?.status}
          </p>
        ) : (
          <p className='text-red-500 whitespace-no-wrap'>Unavailable</p>
        )}
      </td>

      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <button onClick={()=> setIsOpen(true)} className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'>
          <span
            aria-hidden='true'
            className='absolute inset-0 bg-green-200 opacity-50 rounded-full'
          ></span>
          <span className='relative'>Update Role</span>
        </button>
        {/* Update User Modal */}
        <UpdateUserModal setIsOpen={setIsOpen} isOpen={isOpen} user={user} modalHandler={modalHandler}></UpdateUserModal>
      </td>
    </tr>
    );
};

export default UserDataRow;