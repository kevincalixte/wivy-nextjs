'use client'
import React, { useState } from 'react';
import NavbarBottom from '../components/NavbarBottom/NavbarBottom';
import User from '../components/User/User';
import NavbarInfos from '../components/NavbarInfos/NavbarInfos';


function welcome() {
  // Notifications dans la NavbarInfos
  const [isNotification, setIsNotification] = useState(false);
  return (
    <>
      {isNotification && <NavbarInfos />}
      <User />
      <NavbarBottom />
    </>
  );
}

export default welcome;