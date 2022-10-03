import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export const NavigationBar = () =>{

    return(
  
      <div className="bg-gray-800">
  
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <h1>Token Hub</h1>
          </Navbar.Brand>
        </Container>
        <p className="lead">
            <a className="btn btn-light" target="_blank" rel='noreferrer' href="https://www.rbi.org.in/commonman/English/scripts/FAQs.aspx?Id=2917" role="button">FAQs by RBI</a>
        </p>
      </Navbar>
  
      </div>
  
    )
  
  }

//   export default NavigationBar