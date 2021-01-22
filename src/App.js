import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home, About, Tiles, Contact, NoMatch, Layout, NavBar, Jumbotron } from './components'

function App() {
  return (
      <>
      <NavBar />
      <Jumbotron />
      <Layout>
        <Router>
          <Switch>
            <Route exact path ="/" component={Home} />
            <Route path ="/about" component={About} />
            <Route path ="/Tiles" component={Tiles} />
            <Route path ="/Contact" component={Contact} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
        </Layout>
      </>
  );
}

export default App;
