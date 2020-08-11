import React from 'react';

import './Home.css';
import SendMessageHub from '../../components/send-message-hub/SendMessageHub';

function Home() {
  return (
    <div className="home">
      <h1>Toastify Library Test</h1>
      <p>Testing Toastify library for user notifications and requests/responses feedbacks.</p>
      <SendMessageHub/>
    </div>
  );
}

export default Home;
