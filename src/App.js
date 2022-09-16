import { createTheme, ThemeProvider } from "@mui/material";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './pages/Login'
import Signup from './pages/Signup'
import Home from './pages/Home'
import Profile from './pages/Profile'

import { theme } from "./themes/theme";
function App() {
  const [mode, setMode] = React.useState('light');
  const themeUi = React.useMemo(() => createTheme(theme(mode)), [mode]);
  return (
    <div className="App">
       <ThemeProvider  theme={themeUi}> 
      <BrowserRouter>
      <Routes>
      <Route path="/login" element={
      <Login />}/>
      <Route path="/signup" element={
      <Signup />}/>
      <Route path="/" element={
      <Home />}/>
      <Route path="/profile" element={
      <Profile />}/>
      </Routes>
      </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
