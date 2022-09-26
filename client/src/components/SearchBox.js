import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import { useNavigate } from "react-router-dom";

export default function SearchBox(){
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const submitHandler= (e)=>{
    e.preventDefault();
    navigate(query ? `/serch/?query={query}` : '/serch');
  };

  return(
    <Form className='d-flex me-auto' onSubmit={submitHandler}>
      <InputGroup>
      <FormControl 
      type="text"
      name="q"
      id="q"
      onChange={(e)=> setQuery(e.target.value)} 
      placeholder="serch products.."
      aria-lable="Search Products"
      aria-describedby="button-serch"></FormControl>
      <Button variant="outline-priary" type="submit" id="button-search">
      <i className="fas fa-search"></i>
      </Button>
      </InputGroup>
    </Form>
  )
}