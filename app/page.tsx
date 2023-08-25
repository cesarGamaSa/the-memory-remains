'use client';

import { getEvents } from '@/shared/services/contentful.service';
import { setCurrentEvent, setEvents } from '@/shared/store/events/events.actions';
import { getAllEvents } from '@/shared/store/events/events.selector';
import { useAppDispatch, useAppSelector } from '@/shared/store/hooks';
import { Event } from "@/shared/types/event.model";
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';

export default function Home() {
  const state = useAppSelector(state => state);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!storedEvents.length) {
      const getValtechEvents = async () => {
      const events = await getEvents();

      dispatch(setEvents(events as unknown as Event[]));
    }
    getValtechEvents();
    }
  }, [dispatch]);

  const storedEvents = getAllEvents(state);

  return (
    <main className="flex min-h-screen flex-col justify-between px-24 py-12">
      <div className="z-10 w-full max-w-5xl columns-1 justify-between font-mono text-sm">
        {storedEvents?.length > 0 && storedEvents.map((event, index) => (
          <li key={index} className='list-none columns-2 mb-5'>
            {event.image 
              ? <Image src={'https:' + event.image[0].fields.file.url} alt='Event image' width={500} height={500} />
              : <Image src="/image-not-found.jpg" alt='Not found' width={500} height={500} />
            }
            <div>
              <Link href={`event/${event.name}`} onClick={() => dispatch(setCurrentEvent(event))}>{event.name}</Link>
              <p>{new Date(event.date).toDateString()}</p>
            </div>
          </li>
        ))}
      </div>
    </main>
  )
}
