import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

const events = (state: RootState) => state.events.allEvents;
const event = (state: RootState) => state.events.currentEvent;

export const getAllEvents = createSelector(events, e => e);
export const getCurrentEvent = createSelector(event, e => e);
