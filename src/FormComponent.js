import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const FormComponent=()=>{


    return(
        <div id= 'go'>
<Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>

      <Button variant="outline-primary">Primary</Button>
    </Form>
        </div>
    )
}

export default FormComponent