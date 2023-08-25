import { Event } from "@/shared/types/event.model";
import { createAction } from "@reduxjs/toolkit";

export const setEvents = createAction<Event[]>('Set Events');

export const setCurrentEvent = createAction<Event>('Set Current Event');

export const createNewEvent = createAction<Event>('Create New Event');
