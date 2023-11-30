import Login from "../components/login"

export default function LoginView() {

  (function changeStyle() {

    let body = Array.from(document.getElementsByTagName("body") as HTMLCollectionOf<HTMLElement>)

    body.forEach(body =>
      body.style.backgroundImage = "linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12)"
    )

  })();

  return (
    <div>

      <Login />

    </div>

  )

}