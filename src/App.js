import logo from './logo.svg';
import './App.css';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const App = () => (
  
  <Container className="container-fluid">
    <style type="text/css">
  {`
    .btn-huge {
      padding: 3rem 5rem;
      font-size: 4rem;
    }
  `}
  </style>
  <Row className="position-absolute top-50 start-50 translate-middle">
  
    <Button variant="success" size="huge" block>Click ME!</Button>{''}
  
  </Row>
  </Container>
    

);

export default App;
