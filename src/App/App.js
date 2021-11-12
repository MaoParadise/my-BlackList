import './App.css';
import CharacterInformation from '../containers/Character-Information';
import NotFound from '../containers/NotFound';
import Aboutus from '../containers/AboutUs';
import Layout from '../components/Layout';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import GlobalContext from '../context/globalContext';
import useList from '../hooks/useList';

function App() {
  return (
    <GlobalContext.Provider value={useList()}>
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
    </GlobalContext.Provider>
  ); 
}

export default App;
