import React from 'react';
import { GoogleLogout } from 'react-google-login';

const clientId =
  '638909240637-lj43pimncaemvl2eovmrnb2srcpii0e8.apps.googleusercontent.com';

function Logout() {
  const onSuccess = () => {
    console.log('Logout made successfully');
    alert('Logout made successfully ✌');
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      ></GoogleLogout>
    </div>
  );
}

export default Logout;