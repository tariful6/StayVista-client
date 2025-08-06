
import { BsFillHouseAddFill } from 'react-icons/bs'
import { MdHomeWork, MdOutlineManageHistory } from 'react-icons/md'
import MenuItem from './MenuItem';
const HostMenu = () => {
    return (
        <>
            <MenuItem label="Add Room" address="add-room" icon={BsFillHouseAddFill}></MenuItem>
            <MenuItem label="My Listings" address="my-listings" icon={MdHomeWork}></MenuItem>
            <MenuItem label="Manage Bookings" address="manage-bookings" icon={MdOutlineManageHistory}></MenuItem>
        </>
    );
};

export default HostMenu;