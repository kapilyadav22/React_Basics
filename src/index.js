import ReactDom from "react-dom/client";
import Pagination from "./components/pagination_code/pagination";
import Meme from "./components/Infinite_Scrolling/Meme";
import CounterApp from "./Counter/counter";
import DebouncedSearch from "./Debounced_Search/Debounced";
// import App from "./components/autoComplete_dropdown/app";
// import App from "./components/modal_component/app";
import ToastContainer from "./components/toast_container/toast";
import ControlledForm from "./components/formdemo/controlled_form";
import UncontrolledForm from "./components/formdemo/uncontrolled_form";


const App = ()=>{
    return <>
    {/* <Pagination></Pagination> */}
    {/* <Meme></Meme> */}
    {/* <CounterApp></CounterApp> */}
    {/* <DebouncedSearch></DebouncedSearch> */}
    {/* <App></App> */}
    {/* <ToastContainer></ToastContainer> */}
   <ControlledForm></ControlledForm>
   <UncontrolledForm>
   </UncontrolledForm>
    </>
};

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<App/>);