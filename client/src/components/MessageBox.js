import Alert from 'react-bootstrap/Alert';

function MessageBox(props){
  return(
    <Alert  variant={props.variant}>
    {props.children}
  </Alert>

  )
}

export default MessageBox;