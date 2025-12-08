import { useEffect, useState } from 'react';
import Places from './Places.jsx';
import ErrorPage from './Error.jsx';
import { sortPlacesByDistance } from '../loc.js'
import { fetchAvailablePlaces } from '../http.js'

export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces, setAvailablePlaces] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState()

  useEffect(() => {
    async function fetchPlaces() {
      setIsLoading(true)
      try {
        const places=await fetchAvailablePlaces()
        navigator.geolocation.getCurrentPosition((position) => {
          const sortedPlaces = sortPlacesByDistance(
            places,
            position.coords.latitude,
            position.coords.longitude
          )
          setAvailablePlaces(sortedPlaces)
          setIsLoading(false)
        });
        setAvailablePlaces(resData.places);
      } catch (error) {
        setError({ message: error.message || "Failed to fetch cus" })
        setIsLoading(false)
      }
    }

    // fetch('http://localhost:3000/places')
    //   .then((response) => {
    //     return response.json()
    //   })
    //   .then((resData) => {
    //     setAvailablePlaces(resData.places)
    //   });
    fetchPlaces()
  }, [])

  if (error) {
    return <ErrorPage title="An error occured" message={error.message} />
  }
  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isLoading}
      loadingText="Fetching place data..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}