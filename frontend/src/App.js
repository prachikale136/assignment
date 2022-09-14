// import logo from './logo.svg';
// import './App.css';

import React, { Suspense, useEffect, useState } from "react";
import Axios from "axios";
import { BrowserRouter as Router } from "react-router-dom"
import { Container } from "@mui/material"
import { NotificationContainer } from "react-notifications"
import { AppLayout } from "./components/layout/app-layout"
import { UserProvider } from "./context/user-context"

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
const App = () =>{
    <UserProvider>
      <Suspense fallback={null}>
        <Container className="page-container">
          <Router>
            <AppLayout />
            <NotificationContainer />
          </Router>
        </Container>
      </Suspense>
    </UserProvider>
  // const [data, setData]= useState();
  // const getData = async()=>{
  //   const response= await Axios.get("http://localhost:4000/getData");
  //   setData(response.data);
  // }

  // useEffect(()=>{
  //   getData()
  // }, []);

  // return(
  //   <div>{data}</div>
  // )
}

export default App;
