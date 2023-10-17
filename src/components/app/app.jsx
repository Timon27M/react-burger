import styles from "./app.module.css";
import Main from "../main/main";
import AppHeader from "../app-header/app-header";
import { Routes, Route } from "react-router-dom";
import Login from "../login/login";
import Register from "../register/register";

function App() {
  return (
    <div className={styles.app}>
      <AppHeader />
      <Routes>
        {/* <Route path="/" element={<Main />} /> */}
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
