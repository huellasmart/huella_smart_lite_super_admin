
import '@aws-amplify/ui-react/styles.css';
import './style/Authenticator.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Amplify, Auth } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import awsExports from './aws-exports';
import React, { useEffect, useState } from 'react';
import Companies from './components/Companies';
import Users from './components/Users';

Amplify.configure(awsExports);

const checkIfUserIsSuperAdmin = async () => {
    const currentUser = await Auth.currentAuthenticatedUser();
    const userGroups = currentUser.signInUserSession.accessToken.payload["cognito:groups"];
    return userGroups && userGroups.includes("SuperAdmin");
};

function App() {
  const [isSuperAdmin, setIsSuperAdmin] = useState(false);
  
  useEffect(() => {
    checkIfUserIsSuperAdmin()
      .then(result => setIsSuperAdmin(result))
      .catch(err => console.error(err));
  }, []);
  
  if (!isSuperAdmin) {
    return (
      <div>No tiene el nivel de acceso. Comuníquese con la administración.
 <button onClick={() => Auth.signOut()}>Cerrar Sesión</button>
      </div>
    );
  }

  return (
    <Router>
      <Routes>
        <Route path="/users/:companyId" element= {<Users />} />
        <Route path="/" element={<Companies />} />
      </Routes>
    </Router>
  );
}

export default withAuthenticator(App);
