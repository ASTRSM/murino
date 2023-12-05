'use client'
import Image from 'next/image'
// import FullCalendar from '@fullcalendar/react'
// import dayGridPlugin from '@fullcalendar/daygrid'
// import timeGridPlugin from '@fullcalendar/timegrid'
// import { useRef } from 'react'

const events = [{ title: 'Meeting', start: new Date() }]

export default function Page() {
  // const calendarRef = useRef(null)
  return (
    <main className='flex justify-center px-6'>
      <section className='w-[400px]'>
        <div className='justify-between border border-primary rounded-3xl py-1 px-4 flex my-8'>
          <form>
            <input
              type='search'
              id='event'
              name='q'
              placeholder='Search event'
            />
          </form>
          <Image src='/icon/search.svg' width={20} height={20} />
        </div>
        <div className='flex text-neutral-500 justify-between'>
          <h3>Upcoming Event</h3>
          <Image src='/icon/calendar-event.png' width={25} height={20} />
        </div>
        <div className='flex p-2 gap-4 bg-[#F7F1E5] border border-primary rounded-2xl py-2 px-5 my-2'>
          <Image src='/icon/image 176.png' width={50} height={30} />
          <div>
            <h4 className='font-bold text-gray-700'>Black owl event</h4>
            <p className='text-sm text-gray-500'>Apr 24, 2023</p>
          </div>
        </div>
        {/* <div className='calendar-container'>
          <FullCalendar
            plugins={[
              dayGridPlugin, timeGridPlugin
            ]}
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'resourceTimelineWeek,dayGridMonth,timeGridWeek'
            }}
            initialView='resourceTimelineWeek'
          />
        </div> */}
      </section>
    </main>
  )
}

// let calendar = new Calendar(calendarEl, {
//   plugins: [ dayGridPlugin, timeGridPlugin, listPlugin ],
//   initialView: 'dayGridMonth',
//   headerToolbar: {
//     left: 'prev,next today',
//     center: 'title',
//     right: 'dayGridMonth,timeGridWeek,listWeek'
//   }
// });