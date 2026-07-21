import { Routes, Route } from "react-router-dom";

import MainLayout from "./components/layout/MainLayout";

import Dashboard from "./pages/Dashboard";
import Upload from "./pages/Upload";
import Tutor from "./pages/Tutor";
import Quiz from "./pages/Quiz";
import Notes from "./pages/Notes";

function App() {

  return (

    <Routes>

      <Route element={<MainLayout />}>

        <Route path="/" element={<Dashboard />} />

        <Route path="/upload" element={<Upload />} />

        <Route path="/tutor" element={<Tutor />} />

        <Route path="/quiz" element={<Quiz />} />

        <Route path="/notes" element={<Notes />} />

      </Route>

    </Routes>

  );

}

export default App;