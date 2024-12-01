// importing react, libraries and other...
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
// importing components
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import PostPage from "./components/PostPage";
// importing css
import "./styles/app.css";

function App() {
  // state for routing loged user and unloged user
  const [isLogedIn, setIsLogedIn] = useState<boolean>(false);
  console.log(isLogedIn);
  return (
    <div className="App bg__app">
      <Routes>
        <Route
          path="/"
          element={<Home isLogedIn={isLogedIn} setIsLogedIn={setIsLogedIn} />}
        />
        <Route
          path="/sign-up"
          element={<SignUp isLogedIn={isLogedIn} setIsLogedIn={setIsLogedIn} />}
        />
        <Route
          path="/sign-in"
          element={<SignIn setIsLogedIn={setIsLogedIn} />}
        />
        <Route
          path="/post"
          element={
            <PostPage isLogedIn={isLogedIn} setIsLogedIn={setIsLogedIn} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
