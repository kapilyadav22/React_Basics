import ReactDom from "react-dom/client";
// import App from "./components/modal_component/app";
import NestedComments from "./components/hard/reddit_nested_comments/NestedComments";
import LiveChat from "./components/hard/yt_live_chat_ui/LiveChat";
// import NestedCheckBox from "./components/Nested_CheckBoxes/NestedCheckBox";


const App = ()=>{
    return <> 
    {/* <Pagination></Pagination> */}
    {/* <Meme></Meme> */}
    {/* <CounterApp></CounterApp> */}
    {/* <DebouncedSearch></DebouncedSearch> */}
    {/* <ToastContainer></ToastContainer> */}
   {/* <ControlledForm></ControlledForm>
   <UncontrolledForm>
   </UncontrolledForm>
    </> */}
    {/* <ImageSlider></ImageSlider> */}
    {/* <ChipsInput/> */}
    {/* <OTP/> */}
    {/* <TabForm/> */}
    {/* <Employee/> */}
    {/* <ProductStore/> */}
    {/* <Auto/> */}
    {/* <NestedComments/> */}
    <LiveChat/>
    </>
};

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<App/>);