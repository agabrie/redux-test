import './App.css';
// imports needed to access the store
import { useDispatch, useSelector } from 'react-redux';
//import both mutators for first name only and profile
import { setProfile,setFirstName } from './state/profile';

function App() {
  // select state to use by the name specified in the store.js
  const profile = useSelector(state => state.profile)
  const dispatch = useDispatch();
  const handleChange = (e)=>{
      dispatch(setProfile({...profile,[e.target.name]: e.target.value}))
  }
  const handleSingleChange = (e)=>{
    if(e.target.name === "firstName")
    {
      dispatch(setFirstName(e.target.value));
    }
}
  return (
    <div className="App">
      <header className="App-header">
        {/* using variables from the profile state */}
        <p>{profile.firstName} {profile.lastName}</p>
        <label htmlFor='firstName'>First Name</label>
        {/* fields are populated based on the state */}
        <input type="text" name="firstName" id="input-first-name" value={profile.firstName} onChange={handleChange}/>
        <label htmlFor='lastName'>Last Name</label>
        <input type="text" name="lastName" id="input-first-name" value={profile.lastName} onChange={handleChange}/>
        <label htmlFor='email'>Email</label>
        <input type="text" name="email" id="input-first-name" value={profile.email} onChange={handleChange}/>

        <label htmlFor='firstName'>First Name (Only updates state)</label>
        <input type="text" name="firstName" id="input-first-name-only" onChange={handleSingleChange}/>
      </header>
    </div>
  );
}

export default App;
