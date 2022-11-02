import './App.css';
// Layout 컴포넌트 구성
import Header from './layout/Header'
import Navbar from './layout/Navbar'

//Layout 컴포넌트 구성
import Main from './page/Main'
import Join from './page/Join'
import Login from './page/Login'
import {Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div>
    <Header></Header>
    <Navbar></Navbar>
    <Routes>
    <Route path='/' element={<Main></Main>}></Route>
    <Route path='/Join' element={<Join></Join>}></Route>
    <Route path='/Login' element={<Login></Login>}></Route>
    </Routes>
    </div>
  );
}

export default App;
