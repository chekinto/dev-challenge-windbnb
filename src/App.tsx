import React, { FunctionComponent, useState, useEffect } from 'react';
import { Container, FeatureCard, FilterContainer, Flex, Grid, Header, Spinner } from 'components'
import { GlobalStyles } from 'styles/global'
import STAYS from 'data/stays.json'
import 'normalize.css'

export interface IPlaces {
  key?: string;
  city?: string;
  country?: string;
  superHost?: boolean;
  title?: string;
  rating: number;
  maxGuests?: number;
  type?: string;
  beds?: number | null;
  photo?: string;
}

const App: FunctionComponent = (): JSX.Element => {
  const [loading, setLoading] = useState(true)
  const [places, setPlaces] = useState<IPlaces[]>([])
  const [filteredPlaces, setFilteredPlaces] = useState<IPlaces[]>(STAYS)
  const [location, setLocation] = useState<string>('')
  const [guestTotal, setGuestTotal] = useState<{ adults: number, children: number }>({ adults: 0, children: 0 })
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false)
  const { adults, children } = guestTotal
  let totalGuests = adults + children;

  const incrementAdultTotal = () => setGuestTotal(prevState => ({ ...guestTotal, adults: prevState.adults + 1 }))
  const decrementAdultTotal = () => setGuestTotal(prevState => ({ ...guestTotal, adults: prevState.adults - 1 }))
  const incrementChildrenTotal = () => setGuestTotal(prevState => ({ ...guestTotal, children: prevState.children + 1 }))
  const decrementChildrenTotal = () => setGuestTotal(prevState => ({ ...guestTotal, children: prevState.children - 1 }))

  const handleSubmit = (e: any) => {
    e.preventDefault()
    setFilteredPlaces(places.filter(place => (place.maxGuests! <= totalGuests && place.city?.toLowerCase().includes(location.toLowerCase()))))
    setLocation('')
    setIsFilterOpen(false)
  }

  useEffect(() => {
    setPlaces(STAYS)
    setLoading(false)
  }, [])

  if (loading) return <Spinner />

  return (
    <>
      <GlobalStyles />
      <Header
        isFilterOpen={isFilterOpen}
        setIsFilterOpen={setIsFilterOpen}
        filteredPlaces={filteredPlaces}
        totalGuests={totalGuests}
      />

      <FilterContainer
        isFilterOpen={isFilterOpen}
        setIsFilterOpen={setIsFilterOpen}
        location={location}
        setLocation={setLocation}
        handleSubmit={handleSubmit}
        totalGuests={totalGuests}
        incrementAdultTotal={incrementAdultTotal}
        decrementAdultTotal={decrementAdultTotal}
        incrementChildrenTotal={incrementChildrenTotal}
        decrementChildrenTotal={decrementChildrenTotal}
        guestTotal={guestTotal}
        places={places}
      />

      <Container>
        <Flex justify="space-between" style={{ marginBottom: 32 }}>
          <h2>Stays in Finland</h2>
          <p>{filteredPlaces.length > 12 ? `12+ stays` : `${filteredPlaces.length} stays`}</p>
        </Flex>
        <Grid>
          {filteredPlaces.map(({ superHost, title, rating, type, photo }) => (
            <FeatureCard
              key={title}
              image={photo}
              superHost={superHost}
              info={type}
              rating={rating}
              description={title}
            />
          ))}
        </Grid>
      </Container>
    </>
  )
}

export default App;

