import { useState } from 'react';

import ChracterContainer from "./components/ChracterContainer";
import Container from "./components/Container";
import Header from "./components/Header";
import Welcome from "./components/Welcome";


function App() {

  const [chracters, setChracters] = useState(null);

  const reqApi = async () => {
    const api = await fetch('https://simpsons-quotes-api.herokuapp.com/quotes?count=3');
    const frases = await api.json();
    setChracters(frases);
  }


  return (
    <Container >
      <Header />
      {!chracters ? (
        <Welcome reqApi={reqApi} />
      ):(
        <ChracterContainer chracters={chracters} />
      )}
    </Container>
  );
}


export default App;
