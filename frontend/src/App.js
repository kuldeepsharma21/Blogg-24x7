
import './App.css';
import { Routes, BrowserRouter, Route } from "react-router-dom"
import Home from './pages/Home';
import AddEditBlog from './pages/AddEditBlog';
import Blog from './pages/Blog';
import About from './pages/About';
import NotFound from './pages/NotFound';
import UpdateBlogs from './pages/UpdateBlogs';
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Header from './components/Header';


function App() {
  return (
    <BrowserRouter>

      <div className="App">
        <Header />
        <ToastContainer />
        <Routes>
          <Route path='/' element={<Home/> } />
          <Route path='/addBlog' element={<AddEditBlog/> } />
          <Route path='/UpdateBlogs/:id' element={<UpdateBlogs/> } />
          <Route path='/blog/:id' element={<Blog/> } />
          <Route path='/about' element={<About/> } />
          
          <Route path='*' element={<NotFound/> } />
          
        </Routes>
      </div>

    </BrowserRouter>

  );
}

export default App;
