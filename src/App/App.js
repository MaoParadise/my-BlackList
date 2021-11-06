import './App.css';
import CharacterInformation from '../containers/Character-Information';
import NotFound from '../containers/NotFound';
import Layout from '../components/Layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        { /* in the version 6 of react-router-dom, the Routes component is deprecated and replaced by Routes 
           and the atribute component is deprecated and replaced by element */}
        <Routes>
          <Route exact path="/" element={CharacterInformation} />
          <Route element={NotFound} />
        </Routes>
      </Layout>
    </BrowserRouter>
  ); 
}

export default App;
