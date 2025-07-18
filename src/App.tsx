// React import
import React from "react";
// Router import
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// QueryClient import
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// Pages import
import Home from "./pages/Home";
// Layout import
import { Layout } from "./layout/Layout";
import ProductPage from "./pages/ProductPage";

const queryClient = new QueryClient();

export const App: React.FC = () => {

       return (
    <>
      <QueryClientProvider client={queryClient}>
        <Router basename="/CyclingShop">
          <Routes>
            <Route element={<Layout />}> 
              <Route path="/" element={<Home />} />
              <Route path="/product/:id" element={<ProductPage />} />
            </Route>
          </Routes>
        </Router>
      </QueryClientProvider>
    </>
  );
}

export default App; 