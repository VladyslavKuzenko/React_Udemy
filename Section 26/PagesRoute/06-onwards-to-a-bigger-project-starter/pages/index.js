import MeetupList from '../components/meetups/MeetupList'

const DUMMY_MEETUPS = [
    {
        id: "m1",
        title: "A first Meetup",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/BMW_S1000_RR_Studio.JPG/1280px-BMW_S1000_RR_Studio.JPG",
        address: 'Some address',
        description: "Description"
    },
    {
        id: "m2",
        title: "A first Meetup",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/BMW_S1000_RR_Studio.JPG/1280px-BMW_S1000_RR_Studio.JPG",
        address: 'Some address',
        description: "Description"
    },
    {
        id: "m3",
        title: "A first Meetup",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/BMW_S1000_RR_Studio.JPG/1280px-BMW_S1000_RR_Studio.JPG",
        address: 'Some address',
        description: "Description"
    },
]

export default function HomePage() {
    return (
            <MeetupList meetups={DUMMY_MEETUPS} />
    )
}