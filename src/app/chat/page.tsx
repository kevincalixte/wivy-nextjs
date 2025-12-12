import React from 'react'
import NavbarBottom from '../components/NavbarBottom/NavbarBottom'
import ChatMessage from '../components/ChatMessage/ChatMessage'

function chat() {
  return (
    <div>
      <ChatMessage></ChatMessage>
      <NavbarBottom onChat={true}></NavbarBottom>
    </div>
  )
}

export default chat