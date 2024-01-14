import "./App.css";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

// 1. import `ChakraProvider` component
import { Box, ChakraProvider } from "@chakra-ui/react";
import Navbar from "./Components/Navbar";
import Contact from "./Pages/Contact";
import PersonalInfo from "./Pages/PersonalInfo";
import Teaching from "./Pages/Teaching";
import Home from "./Pages/Home";

function App() {
  return (
    <ChakraProvider>
      <Box>
        <Router>
          <Navbar>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/personalInfo" element={<PersonalInfo />} />
              <Route path="/teaching" element={<Teaching />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<>not found</>} />
            </Routes>
          </Navbar>
        </Router>
      </Box>
    </ChakraProvider>
  );
}

export default App;
