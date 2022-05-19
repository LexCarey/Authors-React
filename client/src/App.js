import './App.css';
import { BrowserRouter, Routes, Route  } from "react-router-dom"
import Main from './views/Main';
import Create from './views/Create';
import Update from './views/Update';
import Error from './views/Error';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/new" element={<Create />} />
          <Route path="/edit/:id" element={<Update />} />
          <Route path="error" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
