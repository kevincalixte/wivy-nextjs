'use client'
import React, { useState } from 'react';
import NavbarBottom from '../components/NavbarBottom/NavbarBottom';
import User from '../components/User/User';
import NavbarInfos from '../components/NavbarInfos/NavbarInfos';


function welcome() {
  return (
    <>
      <NavbarInfos />
      <User />
      <NavbarBottom />
    </>
  );
}

export default welcome;