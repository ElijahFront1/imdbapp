import { Container } from 'react-bootstrap';
import './App.scss';
import SearchPage from './pages/SearchPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import MoviePage from './pages/MoviePage';
import { Redirect, Route, Switch } from 'react-router';

function App() {
  return (
    <Container fluid>
      <Switch>
        <Route path='/search' component={SearchPage} />
        <Route path='/moviepage' component={MoviePage} />
        <Redirect to='/search' />
      </Switch>
    </Container>
  );
}

export default App;
