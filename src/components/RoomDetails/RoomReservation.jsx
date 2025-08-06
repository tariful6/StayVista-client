import PropTypes from 'prop-types'
import Button from '../Shared/Button/Button'
import { useState } from 'react';
import { DateRange } from 'react-date-range';
import BookingModal from '../Modal/BookingModal';
import { differenceInCalendarDays } from 'date-fns';
import useAuth from '../../hooks/useAuth';

const RoomReservation = ({ room }) => {
    const {user} = useAuth()
    const [isOpen, setIsOpen] = useState(false)

    const [state, setState] = useState([
      {
        startDate: new Date(),
        endDate: null,
        key: 'selection'
      }
    ]);

    const closeModal = () => {
      setIsOpen(false)
    }

  // total days * price
  const totalPrice = parseInt(differenceInCalendarDays(new Date(room.to), new Date(room.from))) * room?.price
  // console.log(totalPrice)

  return (
    <div className='rounded-xl border-[1px] border-neutral-200 overflow-hidden bg-white'>
      <div className='flex items-center gap-1 p-4'>
        <div className='text-2xl font-semibold'>$ {room?.price}</div>
        <div className='font-light text-neutral-600'>night</div>
      </div>
      <hr />
      <div className='flex justify-center'>
      {/* Calender */}
      <DateRange
        showDateDisplay = {false}
        rangeColors={['#F6536D']}
        editableDateInputs={true}
        onChange={item => setState([item.selection])}
        moveRangeOnFirstSelection={false}
        ranges={state}
      />

  

      </div>
      <hr />
      <div className='p-4'>
        <Button onClick={() => setIsOpen(true)} label={'Reserve'} />
      </div>
      {/* modal  */}
      <BookingModal closeModal={closeModal} isOpen={isOpen} bookingInfo={{
          ...room,
          price: totalPrice,
          guest: { name: user?.displayName },
        }}></BookingModal>
      <hr />
      <div className='p-4 flex items-center justify-between font-semibold text-lg'>
        <div>Total</div>
        <div>${totalPrice}</div>
      </div>
    </div>
  )
}

RoomReservation.propTypes = {
  room: PropTypes.object,
}

export default RoomReservation
