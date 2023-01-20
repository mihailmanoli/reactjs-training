import './App.css';
import MyClassComponent from './MyClassComponent';
import FirstClassComponent from './FirstClassComponent';
import SecondFunctionalComponent from './SecondFunctionalComponent';
import ListComponent from './ListComponent';

function App() {
  // functional component = dumb component = has no self state
  const names = ["Mihail", "Miha", "Ionut", "Ioana"];
  const myList = names.map(name => <li key={name}>{name}</li>)
  
  return <>
    <ul className="stronger">{myList}</ul>
    <MyClassComponent />
    <FirstClassComponent />
    <SecondFunctionalComponent />
    <ListComponent />
  </>
}

export default App;
