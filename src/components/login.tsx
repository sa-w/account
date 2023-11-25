import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useForm, SubmitHandler } from "react-hook-form";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { yupResolver } from '@hookform/resolvers/yup';
import loginSchema from '../schema/loginSchema';

type FormData = {
    email: string,
    password: string,
};

const schema = loginSchema

export default function Login() {

    const { register, setValue, handleSubmit, formState: { errors } } = useForm<FormData>({
        mode: 'onChange',
        resolver: yupResolver(schema)
    });
    const onSubmit = handleSubmit(data => console.log(data));

    return (
        <Container className='bg-light p-3 rounded w-100'>
            <Row>
                <Col >

                    <div className='mb-3' >Please login to continue</div>
                    <Form>
                        <Form.Group className="mb-4" controlId="formBasicEmail">
                            <FloatingLabel controlId="floatingInputGrid" label="Email address">
                                <Form.Control {...register("email")} type="email" placeholder="Enter email" />
                                <p className='error'>{errors.email?.message}</p>
                            </FloatingLabel>
                        </Form.Group>
                        <Form.Group className="mb-4" controlId="formBasicPassword">
                            <FloatingLabel controlId="floatingInputGrid" label="Password">
                                <Form.Control {...register("password")} type="password" placeholder="Password" />
                                <p className='error'>{errors.password?.message}</p>
                            </FloatingLabel>
                        </Form.Group>
                        <Button className=" submitButton" variant="primary" type="submit" onClick={(e) => {
                            e.preventDefault()
                            onSubmit()
                        }}>
                            Submit
                        </Button>
                    </Form>

                </Col>
            </Row>
        </Container>
    );
}
