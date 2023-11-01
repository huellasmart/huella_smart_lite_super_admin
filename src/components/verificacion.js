import { Auth } from 'aws-amplify';

async function sendVerificationEmail(username) {
  try {
    await Auth.verifyCurrentUserAttribute('email');
    console.log(`Verification email sent to ${username}`);
  } catch (error) {
    console.error("Error sending verification email: ", error);
  }
}

// Luego, en la lógica de tu inicio de sesión después de que un usuario inicie sesión exitosamente:
sendVerificationEmail(user.username);
