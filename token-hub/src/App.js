import './App.css';
import { NavigationBar } from './Components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from './Components/jumbotron';
import UploadCsv from './Components/uploadcsv';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Jumbotron />
      <UploadCsv />
      
    </div>
  );
}

export default App;
