import React, { useContext, useEffect, useState } from 'react';
import EmployeeDetails from './components/EmployeeDetails';
import DepartmentTable from "./components/DepartmentTable"
import { AppContext } from './context/AppContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';

function App() {
  const { setIsSidebarCollapsed} = useContext(AppContext);

  useEffect(()=>{
    const handleResize = ()=>{
      if(window.innerWidth>=768){
        setIsSidebarCollapsed(false);
      }else{
        setIsSidebarCollapsed(true);
      }
    }

    window.addEventListener("resize",handleResize);

    return ()=>{
      window.removeEventListener("resize",handleResize)
    };
  },[])
  console.log(import.meta.env.VITE_API_KEY); // Outputs: your-api-key

  return (


    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="dashboard" element={<DepartmentTable />} />
          <Route path="employeeSearch" element={<EmployeeDetails />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
