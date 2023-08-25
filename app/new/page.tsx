'use client';

import { SubmitHandler, useForm } from "react-hook-form";
import { Event } from "@/shared/types/event.model";
import { useAppDispatch } from "@/shared/store/hooks";
import { createNewEvent } from "@/shared/store/events/events.actions";

export default function NewEvent() {
    const dispatch = useAppDispatch();

    const { register, handleSubmit } = useForm<Event>();
    const onSubmit: SubmitHandler<Event> = data => dispatch(createNewEvent(data));

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-6/12 flex flex-col p-4">
            <label>Event Name</label>
            <input {...register("name", { required: true })} className="mb-8" />
            <label>Date</label>
            <input type="date" {...register("date", { required: true })} className="mb-8" />
            <label>Description</label>
            <input {...register("description")} />
            <input type="submit" />
        </form>
    );
}
