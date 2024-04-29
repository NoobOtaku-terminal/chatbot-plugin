// import React, { useState, useEffect, useRef } from 'react';
// import * as THREE from 'three'; // Import Three.js

// function Chatbot() {
//   const [messages, setMessages] = useState([]);
//   const [userInput, setUserInput] = useState('');

//   const mount = useRef(); // Create a reference for Three.js mount point

//   useEffect(() => {
//     // Three.js setup
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//     camera.position.z = 5;
//     const renderer = new THREE.WebGLRenderer({ antialias: true });
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     mount.current.appendChild(renderer.domElement);

//     // Add a cube to the scene
//     const geometry = new THREE.BoxGeometry();
//     const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
//     const cube = new THREE.Mesh(geometry, material);
//     scene.add(cube);

//     // Animation function
//     const animate = () => {
//       requestAnimationFrame(animate);
//       cube.rotation.x += 0.01;
//       cube.rotation.y += 0.01;
//       renderer.render(scene, camera);
//     };

//     // Call animation function
//     animate();

//     // Clean up Three.js scene on component unmount
//     return () => {
//       renderer.domElement.remove();
//     };
//   }, []); // Empty dependency array to run once on component mount

//   const handleMessageSubmit = () => {
//     if (userInput.trim() !== '') {
//       setMessages([...messages, { text: userInput, isUser: true }]);
//       // Call function to send message to backend and get response
//       sendMessageToBackend(userInput);
//       setUserInput('');
//     }
//   };

//   const sendMessageToBackend = (message) => {
//     // Send message to backend and handle response
//     // Example:
//     // fetch('/path/to/your/backend', {
//     //   method: 'POST',
//     //   body: JSON.stringify({ message: message })
//     // })
//     // .then(response => response.json())
//     // .then(data => {
//     //   setMessages([...messages, { text: data.response, isUser: false }]);
//     // })
//     // .catch(error => console.error('Error:', error));
//     // Replace '/path/to/your/backend' with your actual backend endpoint
//   };

//   return (
//     <div>
//       <div ref={mount} style={{ position: 'absolute', top: 0, left: 0, zIndex: -1 }} />
//       <div style={styles.chatbotContainer}>
//         <div style={styles.chatbotHeader}>
//           <h2>Chat with our Bot</h2>
//         </div>
//         <div style={styles.chatbotMessages}>
//           {messages.map((message, index) => (
//             <div key={index} style={message.isUser ? styles.userMessage : styles.botMessage}>
//               {message.text}
//             </div>
//           ))}
//         </div>
//         <div style={styles.chatbotInput}>
//           <input
//             type="text"
//             placeholder="Type your message..."
//             value={userInput}
//             onChange={(e) => setUserInput(e.target.value)}
//             style={styles.inputField}
//           />
//           <button onClick={handleMessageSubmit} style={styles.sendButton}>Send</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// // Inline styles
// const styles = {
//   chatbotContainer: {
//     position: 'relative',
//     width: '350px',
//     margin: 'auto',
//     border: '1px solid #ccc',
//     borderRadius: '8px',
//     overflow: 'hidden',
//   },
//   chatbotHeader: {
//     backgroundColor: '#007bff',
//     color: '#fff',
//     padding: '10px',
//   },
//   chatbotMessages: {
//     maxHeight: '300px',
//     overflowY: 'auto',
//     padding: '10px',
//   },
//   userMessage: {
//     backgroundColor: '#007bff',
//     color: '#fff',
//     padding: '8px',
//     borderRadius: '8px',
//     margin: '5px 0',
//     textAlign: 'right',
//   },
//   botMessage: {
//     backgroundColor: '#f0f0f0',
//     color: '#000',
//     padding: '8px',
//     borderRadius: '8px',
//     margin: '5px 0',
//     textAlign: 'left',
//   },
//   chatbotInput: {
//     display: 'flex',
//     alignItems: 'center',
//     padding: '10px',
//   },
//   inputField: {
//     flex: '1',
//     padding: '8px',
//     borderRadius: '8px',
//     border: '1px solid #ccc',
//     marginRight: '10px',
//   },
//   sendButton: {
//     backgroundColor: '#007bff',
//     color: '#fff',
//     padding: '8px 15px',
//     border: 'none',
//     borderRadius: '8px',
//     cursor: 'pointer',
//   },
// };

// export default Chatbot;


import React, { useState } from 'react';

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');

  const handleMessageSubmit = () => {
    if (userInput.trim() !== '') {
      setMessages([...messages, { text: userInput, isUser: true }]);
      // sendMessageToBackend(userInput); // Commented out the backend part
      setUserInput('');
    }
  };

  // Placeholder function for sending message to backend AI and receiving response
  // const sendMessageToBackend = (message) => {
  //   const response = `Response from AI for "${message}"`;
  //   setMessages([...messages, { text: response, isUser: false }]);
  // };

  return (
    <div style={styles.chatbotContainer}>
      <div style={styles.chatbotHeader}>
        <h2>Chat with our Bot</h2>
      </div>
      <div style={styles.chatbotMessages}>
        {messages.map((message, index) => (
          <div key={index} style={message.isUser ? styles.userMessage : styles.botMessage}>
            {message.isUser ? (
              <>
                <div style={styles.userLogo}>&#128100;</div> {/* Default logo for customer messages */}
                {message.text}
              </>
            ) : (
              <div>{message.text}</div>
            )}
          </div>
        ))}
      </div>
      <div style={styles.chatbotInput}>
        <input
          type="text"
          placeholder="Type your message..."
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          style={styles.inputField}
        />
        <button onClick={handleMessageSubmit} style={styles.sendButton}>Send</button>
      </div>
    </div>
  );
}

// Inline styles
const styles = {
  chatbotContainer: {
    maxWidth: '400px',
    margin: 'auto',
    border: '1px solid #ccc',
    borderRadius: '8px',
    overflow: 'hidden',
    fontFamily: 'Arial, sans-serif',
  },
  chatbotHeader: {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '10px',
    borderBottom: '1px solid #ccc',
  },
  chatbotMessages: {
    maxHeight: '300px',
    overflowY: 'auto',
    padding: '10px',
  },
  userMessage: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '8px',
    borderRadius: '8px',
    margin: '5px 10px',
    textAlign: 'right',
  },
  botMessage: {
    backgroundColor: '#f0f0f0',
    color: '#000',
    padding: '8px',
    borderRadius: '8px',
    margin: '5px 10px',
    textAlign: 'left',
  },
  userLogo: {
    marginRight: '8px',
    fontSize: '24px',
  },
  chatbotInput: {
    display: 'flex',
    alignItems: 'center',
    borderTop: '1px solid #ccc',
    padding: '10px',
  },
  inputField: {
    flex: '1',
    padding: '8px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    marginRight: '10px',
    outline: 'none',
  },
  sendButton: {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '8px 15px',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    outline: 'none',
  },
};

export default Chatbot;
