import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useForm, SubmitHandler } from "react-hook-form";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { yupResolver } from '@hookform/resolvers/yup';
import resetPasswordSchema from '../schema/resetPasswordSchema';
// the hoc
import { withTranslation } from 'react-i18next';


type FormData = {
    email: string
};

const schema = resetPasswordSchema

export default withTranslation()(function ResetPassword({ t }) {

    const { register, setValue, handleSubmit, formState: { errors } } = useForm<FormData>({
        mode: 'onChange',
        resolver: yupResolver(schema)
    });
    const onSubmit = handleSubmit(data => console.log(data));

    return (
        <Container className='loginComponent bg-light p-3 rounded '>
            <Row>
                <Col >

                    <div className='mb-4' >{t('resetPassword')}</div>
                    <Form>
                        <Form.Group className="mb-4" controlId="formBasicEmail">

                            <FloatingLabel controlId="floatingInputGrid" label="Email address">
                                <Form.Control {...register("email")} className='inputGroup' type="email" placeholder="Enter email" />

                            </FloatingLabel>
                            <Form.Text id="passwordHelpBlock" className="error">{errors.email?.message}</Form.Text>

                        </Form.Group>

                        <Button className="submitButton mt-2" variant="secondary" type="submit" onClick={(e) => {
                            e.preventDefault()
                            onSubmit()
                        }}>
                            {t('submit')}
                        </Button>
                    </Form>

                </Col>
            </Row>
        </Container>
    );
});
