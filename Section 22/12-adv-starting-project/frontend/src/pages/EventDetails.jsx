// import { json } from "react-router-dom"
import { redirect, useRouteLoaderData } from "react-router-dom"
import EventItem from "../components/EventItem"

export const EventDetailPage = () => {
    const data = useRouteLoaderData("event-detail")
    return (
        <>
            <EventItem event={data.event} />
        </>)
}

export const loader = async ({ request, params }) => {

    const response = await fetch('http://localhost:8080/events/' + params.eventId)

    if (!response.ok) {
        // throw json({ message: "Could not fetch" }, { status: 500 })
    } else {
        return response
    }
}


export const action = async ({ request, params }) => {

    const response = await fetch('http://localhost:8080/events/' + params.eventId, {
        method: request.method
    })

    if (!response.ok) {
        // throw json({ message: "Could not fetch" }, { status: 500 })
    } else {
        return redirect('/events')
        // return response
    }
}