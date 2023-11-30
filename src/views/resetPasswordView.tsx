
import ResetPassword from "../components/resetPassword";

export default function ResetPasswordView() {

    (function style() {

        let body = Array.from(document.getElementsByTagName("body") as HTMLCollectionOf<HTMLElement>)

        body.forEach(body =>
            body.style.backgroundImage = "linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12)"
        )

    })();

    return (
        <ResetPassword />
    )

}