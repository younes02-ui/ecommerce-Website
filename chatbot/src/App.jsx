import { useState} from 'react'

import './App.css'
import ChatInput from './components/ChatInput'
import ChatMessages from './components/ChatMessages'


function App () {
        const [chatMessages, setChatMessages] = useState(
        [
        {
          message: 'Hello chatbot!',
          sender: 'You',
          id: "id1"
        }, {
          message: 'How can I help you today?',
          sender: 'Chatbot',
          id: "id2"
        }, {
          message: 'What is the weather like today?',
          sender: 'You',
          id: "id3"
        }, {
          message: 'The weather is sunny with a high of 25 degrees.',
          sender: 'Chatbot',
          id: "id4"
        }
        ]);

     
        return (
          <div className="app-container">
            
            <ChatMessages
            chatMessages={chatMessages}
            setChatMessages={setChatMessages}
            />
            <ChatInput
            chatMessages={chatMessages}
            setChatMessages={setChatMessages} 
            />
          </div> 
        );
      }


export default App
