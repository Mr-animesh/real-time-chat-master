import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar"
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import SignupPage from "./pages/SignupPage"
import SettingsPage from "./pages/SettingsPage"
import ProfilePage from "./pages/ProfilePage";

const App = () => {
  return (
    <div className="text-red-500">
      Hello
      <Navbar />
      <Routes>
        <Route path="/" element = {<HomePage />}> </Route>
        <Route path="/login" element = {<LoginPage/>}> </Route>
        <Route path="/signup" element = {<SignupPage />}> </Route>
        <Route path="/profile" element = {<ProfilePage />}> </Route>
        <Route path="/setting" element = {<SettingsPage />}> </Route>
      </Routes>
    </div>
  )
}
export default App;