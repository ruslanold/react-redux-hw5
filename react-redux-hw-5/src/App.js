import { useSelector } from "react-redux";

import './App.css';
import Content from './components/content/Content';
import Header from './components/header/Header';
import LoginPage from './components/loginPage/LoginPage';

function App() {

  const auth = useSelector(({ auth }) => auth);

  return (
    <div className="app">

      {
        auth ? 
          <>
            <Header />
            <Content />
          </>
         : 
         <LoginPage />
        
      }
    </div>
  );
}

export default App;
