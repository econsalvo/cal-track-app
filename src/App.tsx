import calLogo from './assets/cal-logo.svg';

export const App = () => {
  return (
    <div className=" bg-[#0D0D0D] min-h-screen flex justify-center items-center pt-[14px]" >
      <h1 className="text-amber-50 text-4xl">
        Cal-Track
      </h1>
      <img src={calLogo} className="w-10 h-10" />
    </div>
  )
};