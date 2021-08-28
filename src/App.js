import './App.css';
import {ApolloProvider} from "@apollo/client";
import {client} from './client'
import Home from './pages/Home';

//const API_KEY='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';


function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Home/>
      </div>
    </ApolloProvider>
  );
}

export default App;
