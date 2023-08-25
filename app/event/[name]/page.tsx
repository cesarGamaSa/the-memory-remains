'use client';

import { getCurrentEvent } from '@/shared/store/events/events.selector';
import { useAppSelector } from '@/shared/store/hooks';
import Image from 'next/image';
import Link from 'next/link';

export default function Event() {
  const state = useAppSelector(state => state);
  const event = getCurrentEvent(state);

  return (
    <div className='p-24'>
        <Link href='/'>Back</Link>
        <div className='columns-2 mt-10'>
            {event.image 
                ? <Image src={'https:' + event.image[0].fields.file.url} alt='Event image' width={500} height={500} />
                : <Image src="/image-not-found.jpg" alt='Not found' width={500} height={500} />
            }
            <div>
                <p>{event.name}</p>
                <p>{new Date(event.date).toDateString()}</p>
                <p className='mt-5'>{event.description}</p>
            </div>
        </div>
    </div>
  );
}