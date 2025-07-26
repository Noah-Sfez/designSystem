import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./themes/ThemeProvider";
import { ToastProvider } from "./components/ui/GlassToast";
import ComponentLibrary from "./ComponentLibrary";

function App() {
  return (
    <ThemeProvider>
      <ToastProvider>
        <div className="App">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<ComponentLibrary />} />
            </Routes>
          </BrowserRouter>
        </div>
      </ToastProvider>
    </ThemeProvider>
  );
}

export default App;
