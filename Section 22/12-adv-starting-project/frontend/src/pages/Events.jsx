import EventsList from '../components/EventsList';
import { useLoaderData } from 'react-router-dom';

export const EventsPage = () => {
    const events = useLoaderData()
    return (
        <>
            <EventsList events={events} />
        </>
    );
}

export const loader = async () => {
    const response = await fetch('http://localhost:8080/events');
    console.log("RESPONSE: ", response)
    if (!response.ok) {
    } else {
        const resData = await response.json();
        console.log("RESULT ", resData.events)
        return resData.events;
    }
}