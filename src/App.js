import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { getUsersFetch } from './redux/actions';

function App() {
  const dispatch = useDispatch();
  const users = useSelector(state=>state.myFirstReducer.users)
  return (
    <div className="App">
      <button onClick={()=>dispatch(getUsersFetch())}>GET USERS</button>
      <div>
        Users: {users.map(user => (
          <div key={user.id}> {user.name} </div>
        ))}
      </div>
    </div>
  );
}

export default App;
