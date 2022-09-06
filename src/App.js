import Container from "./components/Container";
import Header from "./components/Header";
import Welcome from "./components/Welcome";


function App() {

  const reqApi = async() =>{
    const api = await fetch('https://simpsons-quotes-api.herokuapp.com/quotes?count=3');
    const frases = await api.json();
    console.log(frases);
  }

  reqApi();

  return (
    <Container >
      <Header />
      <Welcome />
    </Container>
  );
}


export default App;
