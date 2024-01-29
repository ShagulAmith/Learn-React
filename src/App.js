import React from "react"; 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Task1 from './tasks/task1.js';
import Task2 from "./tasks/task2.js";
import Task3 from "./tasks/task3.js";
import Task4 from "./tasks/task4.js";
import Task5 from "./tasks/task5.js";
import Task6 from "./tasks/task6.js";
import Task7 from "./tasks/task7.js";
import Dashboard from "./tasks/dashboard.js";
import PrivateRouter from "./components/PrivateRouter.js";
import LifeCycle from "./tasks/task-lifecycle.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Task1 />} />
        <Route path="/task2" element={<Task2 />} />
        <Route path="/task3" element={<Task3 />} />
        <Route path="/task4" element={<Task4 />} />
        <Route path="/task5" element={<Task5 />} />
        <Route path="/task6" element={<Task6 />} />
        <Route path="/task7" element={<Task7 />} />
        <Route path="/life-cycle" element={<LifeCycle />} />
        <Route 
          path="/dashboard" 
          element={
            <PrivateRouter>
              <Dashboard />
            </PrivateRouter>
          } 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
