import { object, string } from 'yup';

const loginSchema = object({
        email: string().email().required(),
        password: string().length(10).required()
    })

export default loginSchema