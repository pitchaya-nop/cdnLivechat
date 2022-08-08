import React, { useState, useEffect } from 'react';

const Livechat = () => {
  const alerttext = () => {
    alert('This is test lib')
  }
  useEffect(() => {
    return (() => {

    })
  })
  return (
    <button onClick={alerttext} style={{ width: 100, height: 100, fontWeight: 700, float: 'right', position: 'fixed', bottom: '10px', right: '10px', }}>
      Live chat
    </button>
  )
}

export default Livechat;