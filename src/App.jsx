import GlobalStyles from "./GlobalStyles/GlobalStyles.js";
import ResetStyles from "./GlobalStyles/ResetStyles.js";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import LoginPage from "./Pages/Login/Login.jsx";
import { AuthProvider } from "./contexts/authContext.jsx";
import SignUp from "./Pages/SignUp/SignUp.jsx";

function App() {
  return (
    <div className="App">
      <ResetStyles />
      <GlobalStyles />
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />}></Route>
            <Route path="sign-up" element={<SignUp />}></Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
