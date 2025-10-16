import ReactDom from "react-dom/client";
import Demo from "./Demo";


const App = ()=>{
    return <>
    <Demo/>
    </>
};

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<App/>);