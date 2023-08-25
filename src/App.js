import './style.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Create from './components/create';
import Read from './components/read';
import Update from './components/update';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (

    <BrowserRouter>

 <Router>
       <div className="main">
         <h2 className="main-header">React Crud Operations</h2>

    
      <Routes>
        <Route path="/" element={<Create />}></Route>
      </Routes>

    </BrowserRouter>
    // <Router>
    //   <div className="main">
    //     <h2 className="main-header">React Crud Operations</h2>

    //     {/* <div> */}
    //     <Routes>
    //       <Route exact path="create " component={Create} />
    //     </Routes>
    //     {/* </div> */}
    //     {/* <div style={{ marginTop: 20 }}>
    //       <Routes>
    //         <Route exact path="/read" component={Read} />
    //       </Routes>
    //     </div>
    //     <Routes>
    //       <Route path="/update" component={Update} /> */}
    //     {/* </Routes> */}
    //   </div>
    // </Router>
  );
}

export default App;
