import React, { useState } from 'react';
import { Auth, DataStore } from 'aws-amplify';
import { User } from '../models';
import { TextField, Checkbox, Button, FormControlLabel, Grid } from '@mui/material';

function UserCreateForm2({ initialCompanyId }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [isActive, setIsActive] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [companyId, setCompanyId] = useState(initialCompanyId);

  async function handleSubmit(event) {
    event.preventDefault();

    console.log("handleSubmit triggered");
    console.log("Form state:", { username, password, email, isActive, isAdmin, companyId });

    try {
      console.log("Trying to create user in Cognito...");

      const signUpResponse = await Auth.signUp({
        username: email,
        password,
        attributes: {
          'custom:companyID': companyId
        }
      });
      console.log("signUpResponse:", signUpResponse);

      const cognitoUserSub = signUpResponse.userSub;
      console.log("New Cognito User Sub:", cognitoUserSub);

      console.log("Trying to create user in DataStore...");

      const userToSave = new User({
        name: username,
        email: email,
        isActive: isActive,
        isAdmin: isAdmin,
        companyID: companyId,
        sub: cognitoUserSub // Sub from newly created Cognito User
      });

      console.log("userToSave:", userToSave);

      const savedUser = await DataStore.save(userToSave);

      console.log("savedUser:", savedUser);

    } catch (error) {
      console.error("Error creating new user: ", error);
    }
  }


  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Email"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                checked={isActive}
                onChange={e => setIsActive(e.target.checked)}
              />
            }
            label="Is Active"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                checked={isAdmin}
                onChange={e => setIsAdmin(e.target.checked)}
              />
            }
            label="Is Admin"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Company ID"
            value={companyId}
            onChange={e => setCompanyId(e.target.value)}
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">
            Crear usuario
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default UserCreateForm2;
