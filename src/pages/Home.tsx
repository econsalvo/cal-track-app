import calLogo from '../assets/cal-logo.svg';

export const Home = () => {
    return (
        <>
            <h1 className="text-amber-50 text-4xl">
                Cal-Track
            </h1>
            <img src={calLogo} className="w-10 h-10" />
        </ >
    )
}
