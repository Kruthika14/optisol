/**
 *
 * App.js
 *   
 */
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Counter from './Components/Counter/Counter';
import Forms from './Components/Forms/Forms';
import Header from './Home/Header';

function App() {
  return <>
    <div className="App">
      <Container>
        <Header />
        <div className="p-t-40">
          <BrowserRouter>​
            <Switch>​
              <Route exact path={'/'} component={Counter} />
              <Route exact path={'/resource'} component={Forms} />
              <Route render={() => <Redirect to={{pathname: "/"}} />} />​​​
            </Switch>​
          </BrowserRouter>
        </div>
      </Container>
    </div>
  </>
}

export default App;
