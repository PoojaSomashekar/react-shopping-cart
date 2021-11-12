import Alert from 'react-bootstrap/Alert';

export const successAlert = (props) => {
  return <Alert variant='success'>{props.message}</Alert>
}
