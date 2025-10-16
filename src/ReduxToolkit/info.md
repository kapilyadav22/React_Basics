Redux Toolkit:

1. Create a store : 

import counterReducer from './features/counterSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,  
  },
});


2. Create a slice: 

const counterSlice = createSlice({
    name:counter,
    initialState: {
        value = 0;
    }
    reducers:{actionName : (state, action)=>{ state.value+=1}},
});

 export const {action1, action2} = counterSlice.actions;
 export default counterSlice.reducer;



3. add store in provider

import { Provider } from 'react-redux';
  <Provider store={store}>
    <App />
  </Provider>


4. use the store using useSelector() and useDispatch()


 const todos = useSelector((state) => state.counter.value);  
 //subscribe only to necessary part, not whole store


 const dispatch = useDispatch();
 dispatch(actionname());