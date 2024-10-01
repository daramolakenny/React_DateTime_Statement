import logo from './logo.svg';
import './App.css';

function App() {
  const firstName = 'kenny';
  const lastName = 'Daramola';

  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const num = 7;
  
  const currentHour = currentDate.getHours();
  let message = '';

  if (currentHour < 12) {
    message = "Good Morning";
  } else if (currentHour < 17) {
    message = "Good Afternoon";
  } else if (currentHour < 20) {
    message = "Good Evening";
  } else {
    message = "Good Night";
  }

  return (
    <div className="App">

      <div>
        <h1 >{message}</h1>
      </div>
      
      <div>
        <h1>My name is {lastName + " " + firstName}</h1>
        <h1>My name is {`${lastName} ${firstName}`}</h1>
        <h1>My Favourite Foods</h1>
        <p>Your Lucky number is {num}</p>
        <p>Copyright {year}</p>
        <ul>
          <li>Bacon</li>
          <li>Jamon</li>
          <li>Noodles</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
