import React from 'react'
import NavbarBottom from '../components/NavbarBottom/NavbarBottom'
import ChatMessage from '../components/ChatMessage/ChatMessage'

function chat() {
  return (
    <div>
      <ChatMessage></ChatMessage>
      <NavbarBottom></NavbarBottom>
    </div>
  )
}

export default chat