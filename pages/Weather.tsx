import React from 'react';

interface WeatherProps {
    temperature: number;
    scale: 'C' | 'F';
}

interface Props extends WeatherProps {
    theme: 'yellow' | 'white'
}

export const Weather: React.FunctionComponent<Props> = ({temperature, scale}) => {
    return (
        <div> {temperature} * {scale}</div>
    );
};

// HOC takes a component to provide inner component props
// To exclude required props - temperature scale, we use ts omit function
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

function withWeatherProps<P extends WeatherProps>(Component: React.ComponentType<P>) {
    return (props: Omit<P, keyof WeatherProps>) => {
        return <Component {...props as P} temperature={30} scale={'C'} />
    }
}

export const WrappedWeather = withWeatherProps(Weather);
// render function pattern
interface WithWeatherProps {
    children(props: WeatherProps): JSX.Element;
}
export const WithWeatherProps: React.FunctionComponent<WithWeatherProps> = ({children}) => {
    const props: WeatherProps = {
        temperature: 100,
        scale: 'F'
    }
    return children(props);
};