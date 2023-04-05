import './App.css';
import Header from './Header';
import Login from './Login';
import Theftreport from './Theft report';
import Main from './Main';
import Error from './Error';



import { BrowserRouter as Router,Routes ,Route ,Link } from 'react-router-dom';


function App() {
  return (
    <>
    
      <Router>
        <Header/>
        <Routes>
          <Route exact path="/" element={<Main/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/theft report" element={<Theftreport/>}/>
          <Route path="*" element={<Error/>}/>

        </Routes>

      </Router>
     </>
  
    
  
  );
}

export default App;

  




