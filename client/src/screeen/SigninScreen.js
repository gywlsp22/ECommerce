import { Helmet } from "react-helmet-async";
import Container from "react-bootstrap/esm/Container";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link, useLocation } from "react-router-dom";

export default function SigninScreen(){
  const {location} =useLocation();
  const redirectInUrl =new URLSearchParams(location).get('redirect');
  const redirect = redirectInUrl? redirectInUrl : '/';

  return(
    <Container className="small-container">
      <Helmet>
        <title>Sign in</title>
      </Helmet>
      <h1 className="my-3">Sign in</h1>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <div className="mb-3">
      <Button  type="submit">Submit</Button>
      </div>
      <div className="mb-3">
        New customer?{''}
        <Link to={`/signup?redirect=${redirect}`}>Create your account</Link>
      </div>
      
      
      
    </Form>





    </Container>
  )
}