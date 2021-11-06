import './App.css';
import CharacterInformation from '../containers/Character-Information';
import NotFound from '../containers/NotFound';
import Aboutus from '../containers/AboutUs';
import Layout from '../components/Layout';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        { /* in the version 6 of react-router-dom, the Routes component is deprecated and replaced by Routes 
           and the atribute component is deprecated and replaced by element */ }
        <Switch>
          <Route exact path="/" component={CharacterInformation} />
          <Route exact path='/about' component={Aboutus}/>
          <Route path="*" component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  ); 
}

export default App;
