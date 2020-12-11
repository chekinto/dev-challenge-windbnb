import React from 'react';
import { GlobalStyles } from 'styles/global'
import { Container, FeatureCard, Header } from 'components'
import 'normalize.css'

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Container>
        <FeatureCard />
      </Container>
    </>
  )
}

export default App;
