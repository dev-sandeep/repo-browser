import React, { Suspense, lazy } from "react"
import styled from 'styled-components'
import './App.scss';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import Header from './components/Header'
import reducer from './redux/reducer'

const Repos = lazy(()=>import("./views/Repos"));
const RepoDetails = lazy(()=>import("./views/RepoDetail"));
const Users = lazy(()=>import("./views/UserSearch"));
const Fallback = ()=>(<h4>Loading...</h4>)

const RouterSt = styled.div`
  background: #eaebec;
  margin-top: 0px;
  padding: 10px;
  justify-content: center;
  display: flex;
  min-height: 100vh;
  & > section{
    padding: 10px;
    @media(min-width:800px){
      width: 800px;
    }
    @media(max-width:800px){
      width: 95vw;
    }

    box-shadow: 5px 5px 10px #bababa;
    background: #1B4C7B;
    color: #fff;
    border-top: 10px solid #ffc22e;
  }

  & a{
    text-decoration: none;
    color: #fff;  
  }
`;

const reduxData = createStore(reducer);

function App() {
  return (
    <div className="App">
       {/* <Router basename={window.location.pathname || ''}> */}
       <Router>
      <Header title={"Github Browser"} />
      <Suspense fallback={<Fallback />}>
        <Provider store={reduxData}>
          <RouterSt>
           
                <Switch>
                <Route exact path="/" component={Users} />
                <Route exact path="/:user/repos" component={Repos} />
                <Route exact path="/:user/repos/:repo" component={RepoDetails} />
                </Switch>
            
            </RouterSt>
        </Provider>
      </Suspense>
      </Router>
    </div>
  );
}

export default App;
