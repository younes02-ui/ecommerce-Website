import RobotProfileImage from '../assets/bot.png'
import UserProfileImage from '../assets/user.png'

function ChatMessage({message, sender} ) {
            return (
                <div className = {
                  sender === 'You' ? 
                  'chat-message-you' : 'chat-message-chatbot'
                }>
                    {sender === "Chatbot" && (
                      <img src= {RobotProfileImage} className="chat-message-profile" />
                      )}
                    
                    <div className="chat-message-text">
                      {message} 
                    </div>
                    {sender === "You" && (
                      <img src= {UserProfileImage} className="chat-message-profile" />
                      )}
                </div> 
              )
       
          };

          export default ChatMessage;