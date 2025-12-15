import { Link, Outlet, useNavigate, useParams } from 'react-router-dom';

import Header from '../Header.jsx';
import { useMutation, useQuery } from '@tanstack/react-query';
import { deleteEvent, fetchEvent, queryClient } from '../../util/http.js';
import ErrorBlock from '../UI/ErrorBlock.jsx';
import { useState } from 'react';
import Modal from '../UI/Modal.jsx';

export default function EventDetails() {
  const [isDeleting, setIsDeleting] = useState(false)
  const { id } = useParams()
  const navigate = useNavigate();

  const { data, isPending, isError, error } = useQuery({
    queryKey: ['events', id],
    queryFn: ({ signal }) => fetchEvent({ id, signal })
  })

  const { mutate, isPending: isPendingDeletion, isError: isErrorDeleting, error: deleteError } = useMutation({
    mutationFn: deleteEvent,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['events'],
        refetchType: 'none'
      })
      navigate('/events'
      )
    }
  })

  const hadnleStartDelete = () => {
    setIsDeleting(true)
  }

  const hadnleStopDelete = () => {
    setIsDeleting(false)
  }

  const handleDelete = () => {
    mutate({ id })
  }

  let content;

  if (isPending) {
    content =
      <article id="event-details">
        <div id="event-details-content">
          <p id="event-details-description">Fetching data...</p>
        </div>
      </article>
  }

  if (isError) {
    content = (
      <ErrorBlock title="An error occurred" message={error.info?.message || 'Failed to fetch event'} />
    );
  }

  if (data) {
    console.log(data)
    content = (
      <article id="event-details">
        <header>
          <h1>{data.title}</h1>
          <nav>
            <button onClick={hadnleStartDelete}>Delete</button>
            <Link to="edit">Edit</Link>
          </nav>
        </header>
        <div id="event-details-content">
          <img src={`http://localhost:3000/${data.image}`} alt="" />
          <div id="event-details-info">
            <div>
              <p id="event-details-location">{data.location}</p>
              <time dateTime={`Todo-DateT$Todo-Time`}>{data.time}</time>
            </div>
            <p id="event-details-description">{data.description}</p>
          </div>
        </div>
      </article>
    )
  }

  return (
    <>
      {isDeleting &&
        <Modal onClose={hadnleStopDelete}>
          <h2>Are you sure?</h2>
          <p>Do you really want delete this event? This action cannot be undone</p>
          <div className='form-action'>
            {isPendingDeletion && <p>Deleting,please wait...</p>}
            {!isPendingDeletion &&
              <>
                <button onClick={hadnleStopDelete} className='button-text'>Cancel</button>
                <button onClick={handleDelete} className='button'>Delete</button>
              </>}
          </div>
          {isErrorDeleting && <ErrorBlock title="Failed to delete event" message={deleteError.info?.message || 'Failed to delete event, please try again later'} />}
        </Modal>}
      <Outlet />
      <Header>
        <Link to="/events" className="nav-item">
          View all Events
        </Link>
      </Header>
      {content}
    </>
  );
}
