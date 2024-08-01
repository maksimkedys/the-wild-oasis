import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Heading from "./ui/Heading";
import Row from "./ui/Row";

function App() {
  return (
    <>
      <GlobalStyles />
      <Row type="horizontal">
        <Heading as="h1">The Wild Oasis</Heading>
        <Row>
          <Heading as="h2">Check in and out</Heading>
          <Button>Check in</Button>
          <Button variation="secondary" size="small">
            Check out
          </Button>
        </Row>
      </Row>
      <Heading as="h3">The Wild Oasis</Heading>
      <Button onClick={() => console.log(123)} type="button">
        Check in
      </Button>
    </>
  );
}

export default App;
