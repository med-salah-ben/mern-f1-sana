import {Link , Routes , Route} from "react-router-dom";
import { Button } from 'semantic-ui-react';
import { useDispatch } from "react-redux";

import { toggleFalse } from "./JS/actions/edit";
import './App.css';
import Home from "./Pages/Home/Home";
import Contacts from "./Pages/Contacts/Contacts";
import AddContact from "./Pages/AddContact/AddContact";

function App() {
  const dispatch = useDispatch();
  const handleFalse =()=>{
    dispatch(toggleFalse())
  }
  return (
    <div className="app">
      <div style={{padding:"1rem 35%" }}>
      <Link to="/">
      <Button primary>Home</Button>
      </Link>
      <Link to="/contacts">
      <Button style={{marginLeft:"3rem"}} secondary>Contacts List</Button>
      </Link>
      <Link to="/add">
      <Button onClick={handleFalse} style={{marginLeft:"3rem"}} grey>Add Contact</Button>
      </Link>
      </div>
      <Routes>
        <Route path="/" element={<Home /> } />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/add" element={<AddContact />} />
        <Route path="/edit" element={<AddContact />} />

      </Routes>
    </div>
  );
}

export default App;
