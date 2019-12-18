import { Provider } from "react-redux";
import { createStore } from "redux";
import { reducer } from "../reducer";
import { WrappedWeather } from "./Weather";
const store = createStore(reducer);

export default () => (
    <Provider store={store}>
        <WrappedWeather theme='white'/>
    </Provider>
);