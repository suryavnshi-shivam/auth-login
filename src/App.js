import { Route, Routes } from 'react-router-dom';
import './App.css';
import CreateAccount from './components/CreateAccount';
import Layout from './components/Layout';
import ShowAccount from './components/ShowAccount';
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <div className="spinner-border text-primary ms-5 mt-5 mx-auto" role="status"></div>;
  }
  return (
    <div className="App">
      <h1>Welcome to our Web Page</h1>
      <Layout />

      <Routes>
        <Route path="/login" element={<ShowAccount />} ></Route>
      </Routes>
      <br />

    </div>
  );
}

export default App;
