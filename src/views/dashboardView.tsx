
import TopNavigationBar from "../components/topNavigationBar";

export default function DashboardView() {

    (function style() {

        let body = Array.from(document.getElementsByTagName("body") as HTMLCollectionOf<HTMLElement>)

        body.forEach(body =>{
            body.style.display = "initial";
           // body.style.marginLeft = "0"
           body.style.padding = "0"
        }
        )

    })();

    return (

        <div className='topNavigationBar'>
        <TopNavigationBar />

        </div>
        
        
    )

}