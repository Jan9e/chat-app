import { ChatEngine } from 'react-chat-engine';
import './app.css';
import ChatFeed from './components/ChatFeed.jsx';
import LoginFeed from './components/LoginForm.jsx';
// import dotenv from 'dotenv';

// dotenv.config();

const projectID = "9b3defe2-2c71-4a8c-86b9-0f29695028cb";

const App = () => {
  if (!localStorage.getItem('username')) return <LoginFeed />;

  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      // onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  );
};

export default App;
