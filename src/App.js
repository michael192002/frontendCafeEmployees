import logo from './logo.svg';
import './App.css';
import MenuNav from './navigation/menu';
import { Button, Space, DatePicker, version } from 'antd';

function App() {
  return (
    <div className="App">
      <nav style={{margin : "2rem"}} className="App-header"> 
        <MenuNav/>
        <div style={{width : "100%", height : "100vh", backgroundColor : "gray"}}>
        asdfasdf
        </div>
      </nav>
    </div>
  );
}

export default App;
