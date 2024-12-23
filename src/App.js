
import TodoApp from './TodoApp/TodoApp';
import React,{Component} from 'react';
import About from './TodoApp/About/About';
import Header from './TodoApp/Header/Header';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


export class App extends Component {
  render(){
    return(
      <div>
        {/* <Header/>
        <About/>
        
        // <TodoApp/> */}

<Router>
      <Header />
      <Routes>
        <Route path="/" exact element={<TodoApp />} />
        <Route path='/about'  element={<About/>}/>
      </Routes>
    </Router>
      </div>
    )
  }
}
export default App;
