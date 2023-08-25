import { Event } from "@/shared/types/event.model";
import { createReducer } from "@reduxjs/toolkit";
import { createNewEvent, setCurrentEvent, setEvents } from "./events.actions";

interface EventState {
    allEvents: Event[];
    currentEvent: Event;
}

const initialState: EventState = {
    allEvents: [],
    currentEvent: {} as Event
};

export const eventsReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(setEvents, (state: EventState, action) => {
            state.allEvents = action.payload
        })
        .addCase(setCurrentEvent, (state: EventState, action) => {
            state.currentEvent = action.payload
        })
        .addCase(createNewEvent, (state: EventState, action) => {
            state.allEvents.push(action.payload)
        })
});
