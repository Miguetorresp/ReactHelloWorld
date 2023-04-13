import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting';
import GreetingF from './components/pure/greetingF';
import TaskListComponent from './components/container/task_list';
import ContactList from './components/container/contact_list';
import Ejemplo1 from './hooks/Ejemplo1';
import Ejemplo2 from './hooks/Ejemplo2';
import MiComponenteConContexto from './hooks/Ejemplo3';
import Ejemplo4 from './hooks/Ejemplo4';
import GreetingStyled from './components/pure/greetingStyled';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Componente propio Greeting.jsx */}
        {/* <Greeting name="Miguel"></Greeting>*/}
        {/* Componente de ejemplo funcional */}
        {/* <GreetingF name="Miguel" ></GreetingF> */}
        {/* <TaskListComponent></TaskListComponent> */}
        {/* <ContactList></ContactList> */}
        {/* Ejemplos de uso de hooks */}
        {/* <Ejemplo1></Ejemplo1> */}
        {/* <Ejemplo2></Ejemplo2> */}
        {/* <MiComponenteConContexto></MiComponenteConContexto> */}
        {/*<Ejemplo4 nombre="Miguel" >
             Todo lo que hay aquí, es tratado como prop.children 
            <h3 id="id1">Contenido del prop.children</h3>
        </Ejemplo4>*/}
        <GreetingStyled name="Miguel"></GreetingStyled>
      </header>
    </div>
  );
}

export default App;
