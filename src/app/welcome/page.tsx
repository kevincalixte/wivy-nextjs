'use client'
import React from 'react';
import NavbarBottom from '../components/NavbarBottom/NavbarBottom';
import User from '../components/User/User';
import NavbarInfos from '../components/NavbarInfos/NavbarInfos';

function welcome() {

  return (
    <>
    {/* <NavbarInfos></NavbarInfos> */}
    
      <div className='text-white'>
        {/* Configuration du profil */}
        {/* Page principale 'if last_mode is list'*/}
        {/* Load account (navbartop: profile picture..., navbarbottom: messages, notifications,...) */}
        {/* Load profiles (cards)*/}
        <User/>
        {/* Load */}
      </div>
      <NavbarBottom />
    </>
  );
}

export default welcome;