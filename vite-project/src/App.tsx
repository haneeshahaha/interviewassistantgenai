import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { PublicLayout } from './layouts/public-layout'
import HomePage from './routes/home'
import AuthenticationLayout from './layouts/auth-layout'
import SignUpPage from './routes/sign-up'
import SignInPage from './routes/sign-in'
import ProtectRoutes from './layouts/protected_routes'
import { MainLayout } from './layouts/MainLayout'

const App = () => {
  console.log('App component rendering');
  return (
   <Router>
    <Routes>
      {/* Public routes */}
      <Route path="/" element={<PublicLayout />}>
        <Route index element={<HomePage />} />
      </Route>
      
      {/* Authentication routes */}
      <Route element={<AuthenticationLayout />}>
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Route>
      
      {/* Protected routes */}
      <Route
        path="/dashboard/*"
        element={
          <ProtectRoutes>
            <MainLayout />
          </ProtectRoutes>
        }
      />
    </Routes> 
   </Router>
  );
};

export default App;