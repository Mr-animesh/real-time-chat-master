import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar"
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import SignupPage from "./pages/SignupPage"
import SettingsPage from "./pages/SettingsPage"
import ProfilePage from "./pages/ProfilePage";
import { useAuthStore } from "./store/useAuthStore";
import { useEffect } from "react";
import {Loader} from "lucide-react";

const App = () => {
  const {authUser, checkAuth}= useAuthStore()
  useEffect(()=>{
    checkAuth()
  }, [checkAuth]);
  console.log({authUser})
  if(isCheckingAuth && !authUser) return (
    <div className="flex items-center justify-center h-screen">
      <Loader className="size-10 animate-spin"></Loader>
    </div>
  )
  return (
    <div className="text-red-500">
      Hello
      <Navbar />
      <Routes>
        <Route path="/" element = {authUser ? <HomePage /> : <Navigate to='/login'/>}> </Route>
        <Route path="/login" element = {!authUser? <LoginPage/> : <Navigate to='/'/>}> </Route>
        <Route path="/signup" element = {!authUser?<SignupPage />: <Navigate to='/'/>}> </Route>
        <Route path="/profile" element = {authUser? <ProfilePage /> : <Navigate to='/login'/>}> </Route>
        <Route path="/setting" element = {<SettingsPage />}> </Route>
      </Routes>
    </div>
  )
}
export default App;