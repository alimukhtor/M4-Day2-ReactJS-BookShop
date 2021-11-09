import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './components/MyNavbar'
import MyFooter from './components/MyFooter'
import Welcome from './components/Welcome'
import LatestRelease from './components/LatestRelease'
import {Container, Row, Col} from 'react-bootstrap'

function App() {
  return (
    <div>
    <MyNavbar />
    <Welcome />
    <LatestRelease />
    <MyFooter />
    </div>
  );
}

export default App;
