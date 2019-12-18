// HOC
// import { Provider } from "react-redux";
// import { createStore } from "redux";
// import { reducer } from "../reducer";
// import { Weather, WithWeatherProps } from "./Weather";
// const store = createStore(reducer);

// export default () => (
//     <Provider store={store}>
//         {/* <WrappedWeather theme='white'/> */}
//         <WithWeatherProps>
//             {
//                 props => {
//                     return (
//                     <Weather temperature={props.temperature} scale={props.scale} theme='white'>
//                     </Weather>);
//                 }
//             }
//         </WithWeatherProps>
//     </Provider>
// );

// Event handling
import React, { useState } from 'react';
import { NextPage } from 'next';

interface InitialProps {}

interface Props extends InitialProps {}

const IndexPage: NextPage<Props, InitialProps> = () => {
    const [email, setEmail] = useState(''); 
    const hanldeChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setEmail(value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert(`thanks, email: ${email}`);
    }
    return (
        <form onSubmit={handleSubmit}>
            <p>
                <input type='email' value={email} onChange={hanldeChange}></input>
            </p>
            <button type='submit'>Subscribe</button>
        </form>
    );
}

export default IndexPage;