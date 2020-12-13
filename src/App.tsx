import React, { FunctionComponent } from 'react';
import 'normalize.css'
import { GlobalStyles } from 'styles/global'
import { Container, FeatureCard, FilterDraw, Flex, Grid, Header } from 'components'
import data from 'data/stays.json'

const App: FunctionComponent = (): JSX.Element => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <FilterDraw />
      <Container>
        <Flex justify="space-between" style={{ marginBottom: 32 }}>
          <h2>Stays in Finland</h2>
          <p>{data.length > 12 ? '12+ stays' : data.length}</p>
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
