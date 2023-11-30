import { object, string } from 'yup';

const resetPasswordSchema = object({
    email: string().email().required()
})

export default resetPasswordSchema