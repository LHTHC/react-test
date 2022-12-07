import "./Weather.scss";

const Weather = () => {
  return (
    <div className='weather-container'>
      <h3>New York, NY</h3>
      <div className='sun'></div>
      <h2 className='temperature'>57°</h2>
      <p className='temp-description'>Clear</p>
    </div>
  );
};
export default Weather;
