import { BsFingerprint } from 'react-icons/bs'
import { GrUserAdmin } from 'react-icons/gr'
import MenuItem from './MenuItem';
import useRole from '../../../../hooks/useRole';
import { useState } from 'react';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import toast from 'react-hot-toast';
import HostRequestModal from '../../../Modal/HostRequestModal';
import useAuth from '../../../../hooks/useAuth';
const GuestMenu = () => {
   const [role] = useRole()
   const {user} = useAuth()
   
  const [ModalOpen, setModalOpen] = useState(false)
  const axiosSecure = useAxiosSecure()

  const closeModal = () => {
    setModalOpen(false)
  }

  const modalHandler = async () => {
    try{
      const currentUser = {
        email : user?.email,
        role : 'guest',
        status : 'Requested'
      }
      const {data} = await axiosSecure.put(`/user`, currentUser)
      console.log(data);
      if(data.modifiedCount > 0){
        toast.success('Success | Wait for admin approval')
      }else{
        toast.success('Not again | Wait for admin approval')
      }
    }catch(err){
      console.log(err);
      toast.error(err.message)
    }finally{
      closeModal()
    }
  }


    return (
     <>
      <MenuItem
        icon={BsFingerprint}
        label='My Bookings'
        address='my-bookings'
      />
      {
          role === 'guest' && (<div onClick={()=> setModalOpen(true)} className='flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform text-gray-600  hover:bg-gray-300   hover:text-gray-700 cursor-pointer'>
          <GrUserAdmin className='w-5 h-5' />

          <span className='mx-4 font-medium'>Become A Host</span>
          </div>
      )}

            <HostRequestModal isOpen={ModalOpen} closeModal={closeModal} modalHandler={modalHandler}></HostRequestModal>


    </>
    );
};

export default GuestMenu;




 
