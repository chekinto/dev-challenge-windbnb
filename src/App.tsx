import React, { FunctionComponent, useState } from 'react';
import { Container, FeatureCard, FilterBar, Flex, Grid, Header } from 'components'
import { GlobalStyles } from 'styles/global'
import STAYS from 'data/stays.json'
import 'normalize.css'

const App: FunctionComponent = (): JSX.Element => {
  const [data, setData] = useState(STAYS);

  return (
    <>
      <GlobalStyles />
      <Header />
      <FilterBar />
      <Container>
        <Flex justify="space-between" style={{ marginBottom: 32 }}>
          <h2>Stays in Finland</h2>
          <p>{data.length > 12 ? `12+ stays` : `${data.length} stays`}</p>
        </Flex>
        <Grid>
          {data.map(({ superHost, title, rating, type, photo }) => (
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







// interface IStays {
//   city?: string;
//   country?: string;
//   superHost?: boolean;
//   rating?: number;
//   title?: string;
//   maxGuests?: number;
//   type?: string;
//   beds?: number;
//   photo?: string;
// }
