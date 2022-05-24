import "./App.scss";
import { Routes, Route } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/Pages/Home/Home";
import Buy from "./components/Pages/Buy/Buy";


const client = new ApolloClient({
  uri: "http://localhost:1337/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Routes>
          <Route
            path="*"
            element={
              <Route>
                <Navbar />
                <h1 style={{ marginTop: "3rem", color: "rgb(26, 55, 58)" }}>
                  404 NOT FOUND
                </h1>
              </Route>
            }
          />
          <Route path="/" element={<Home />} />
          <Route path="buy" element={<Buy />} />
          <Route path="buy" element={<Buy />} />
          <Route path="buy">
            <Route path=":propertyId" element={<Buy />} />
          </Route>
          <Route
            path="/about"                                                                                                                                     
            element={
              <main>
                <Navbar />
                <h1 style={{ marginTop: "3rem", color: "rgb(26, 55, 58)" }}>
                  ABOUT
                </h1>
              </main>
            }
          />
        </Routes>
      </div>
    </ApolloProvider>
  );
}

export default App;

