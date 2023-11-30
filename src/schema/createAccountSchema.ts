import { object, string } from 'yup';

const createAccountSchema = object({
    email: string().email().required(),
    password: string().length(10).required()
})

export default createAccountSchema