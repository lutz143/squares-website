import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  // createHttpLink,
} from "@apollo/client";
// import { setContext } from "@apollo/client/link/context";

// import classes from "./App.css";

import Header from "./containers/Header";
import Footer from "./containers/Footer";

import Home from "./pages/Home";
import Squares from "./pages/Squares";
import Register from "./pages/Register";
import LoginHome from "./pages/LoginHome";
import Login from "./pages/LoginForm";
import Profile from "./pages/Profile";
// import SearchResults from "./pages/SearchResults";


// const httpLink = createHttpLink({
//   uri: "/graphql",
// });

// const authLink = setContext((_, { headers }) => {
//   const token = localStorage.getItem("id_token");
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : "",
//     },
//   };
// });

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});


function App() {
  return (
   <ApolloProvider client={ client }>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game/:id" element={<Squares />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login-home" element={<LoginHome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          {/* <Route path="/search" element={<SearchResults />} /> */}
        </Routes>
        <Footer />
      </Router>
    </ApolloProvider>
  );
}

export default App;
