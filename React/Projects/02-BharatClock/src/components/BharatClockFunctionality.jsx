const BharatClockFunctionality = () => {
  const d = new Date();
  const date = d.getDate();
  const month = d.getMonth() + 1;
  const year = d.getFullYear();
  const hours = d.getHours();
  const minutes = d.getMinutes();
  const seconds = d.getSeconds();

  const amOrPM  = hours < 12? 'AM':'PM';


  return (
    <>
      <p>This is current time: {date}/{month}/{year} - {hours}:{minutes}:{seconds} {amOrPM}</p>
    </>
  );
};

export default BharatClockFunctionality;
