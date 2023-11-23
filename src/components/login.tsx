import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useForm, SubmitHandler } from "react-hook-form";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

type Inputs = {
    example: string,
    exampleRequired: string,
};

export default function Login() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

    console.log(watch("example"))

    return (
        <Container>
            <Row>
                <Col style={{ width: '50em'}}>

                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                        <FloatingLabel controlId="floatingInputGrid" label="Email address">
                            <Form.Control type="email" placeholder="Enter email" />
                            </FloatingLabel>
                        </Form.Group>

                        <Form.Group className="mb-3"  controlId="formBasicPassword">
                        <FloatingLabel controlId="floatingInputGrid" label="Password">
                            
                            <Form.Control type="password" placeholder="Password" />
                            </FloatingLabel>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>

                </Col>
            </Row>
        </Container>
    );
}
