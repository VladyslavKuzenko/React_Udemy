import { Link, redirect, useLoaderData, useNavigate, useNavigation, useParams, useSubmit } from 'react-router-dom';

import Modal from '../UI/Modal.jsx';
import EventForm from './EventForm.jsx';
import { useMutation, useQuery } from '@tanstack/react-query';
import { fetchEvent, queryClient, updateEvent } from '../../util/http.js';
import LoadingIndicator from '../UI/LoadingIndicator.jsx';
import ErrorBlock from '../UI/ErrorBlock.jsx';

export default function EditEvent() {
  const navigate = useNavigate();
  const { state } = useNavigation()
  const submite = useSubmit()
  const { id } = useParams();

  const { data, isError, error } = useQuery({
    queryKey: ['events', id],
    queryFn: ({ signal }) => fetchEvent({ signal, id }),
    staleTime: 10000
  })

  // const { mutate } = useMutation({
  //   mutationFn: updateEvent,
  //   onMutate: async (data) => {
  //     await queryClient.cancelQueries({ queryKey: ['events', id] })
  //     const previousEvent = queryClient.getQueryData(['events', id])
  //     console.log("DATA: ", data.event)
  //     console.log("previousEvent: ", previousEvent)
  //     queryClient.setQueryData(['events', id], data.event);

  //     return { previousEvent }
  //   },
  //   onError: (error, data, context) => {
  //     console.log("WORK")
  //     console.log(context.previousEvent)
  //     queryClient.setQueryData(['events', id], context.previousEvent)
  //   },
  //   onSettled: () => {
  //     queryClient.invalidateQueries(['events', id])
  //   }
  // })

  function handleSubmit(formData) {
    // mutate({ id, event: formData })
    // navigate('../')
    submite(formData, { method: "PUT" })
  }

  function handleClose() {
    navigate('../');
  }
  let content;

  // if (isPending) {
  //   content = <div className='center'>
  //     <LoadingIndicator />
  //   </div>
  // }

  if (isError) {
    content = (
      <>
        <ErrorBlock title="Failed to load event" message={error.info?.message || "Failed to load email"} />
        <div className='form-action'>
          <Link to="../" className='button'>
            Okay
          </Link>
        </div>
      </>)
  }

  if (data) {
    content = (
      <EventForm inputData={data} onSubmit={handleSubmit}>
        {state === "submitting" ?
          <p>Sending data</p> :
          <>
            <Link to="../" className="button-text">
              Cancel
            </Link>
            <button type="submit" className="button">
              Update
            </button>
          </>
        }
      </EventForm>
    )
  }

  return (
    <Modal onClose={handleClose}>
      {content}
    </Modal>
  );
}


export const loader = ({ params }) => {
  console.log("PARAMS: ", params.id)
  return queryClient.fetchQuery({
    queryKey: ['events', params.id],
    queryFn: ({ signal }) => fetchEvent({ signal, id: params.id })
  });
}

export const action = async ({ request, params }) => {
  const formData = await request.formData()
  const updatedEventData = Object.fromEntries(formData)
  await updateEvent({ id: params.id, event: updatedEventData });
  await queryClient.invalidateQueries(['events'])
  return redirect('../')
}