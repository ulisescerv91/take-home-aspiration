import './App.css';
import {ApolloProvider} from "@apollo/client";
import {client} from './client'
import Home from './pages/Home/Home';

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
