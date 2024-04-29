// import { registerBlockType } from '@wordpress/blocks';
// import blocks from './block.json';
// import { __ } from '@wordpress/i18n';
// import React from 'react'; // Import both React and ReactDOM
// import Chatbot from '../includes/ChatBot.jsx'; // Assuming main.jsx is renamed to main.js

// // registerBlockType('namespace/block-name', {
// //   title: __(blocks.name, 'chatbot'),
// //   icon: blocks.icon, // Replace with the icon for your block
// //   category: blocks.category, // Choose an appropriate category for your block
// //   edit: function(props) {
    
// //   },
// //   save: (props) => {
   
// //   },
// // });
// registerBlockType('namespace/block-name', {
//   title: __(blocks.name, 'chatbot'),
//   icon: blocks.icon, // Replace with the icon for your block
//   category: blocks.category, // Choose an appropriate category for your block

//   edit: function(props) {
//     return (
//       <div className={props.className}>
//         <h3>Your Block Title</h3>
//         <Chatbot />
//       </div>
//     );
//   },

//   save: function(props) {
//     return (
//       <div className={props.className}>
//         <h3>Your Block Title</h3>
//         <Chatbot />
//       </div>
//     );
//   },
// });

import { registerBlockType } from '@wordpress/blocks';
import blocks from './block.json';
import { __ } from '@wordpress/i18n';
import { TextControl, Button } from '@wordpress/components';
// import React  from 'react';
// import { useBlockProps } from '@wordpress/block-editor';
// import ReactDOM from 'react-dom/client';
import './index.css';
// impot App from './App';
// import Home from './pages/Home.js';
// import './App.css'
// import Test from './test.js';
// import reportWebVitals from './reportWebVitals';

// import Chatbot from '../includes/ChatBot.jsx';
// import App from './App';
import React, { useState } from 'react';
registerBlockType('namespace/block-name', {
  title: __(blocks.name, 'chatbot'),
  icon: blocks.icon,
  category: blocks.category,

  // edit: function() {
    
  //   return (
  //     <div>
  //       <Home  />
  //     </div>
  //     // <Test />
  //     // <div id="root"></div>
  //   );
  // },

  // save: function() {
    
  //   return (
  //     <div  >
  //       <Home />
  //     </div>
  //     // <Test />
  //     // <div id="root"></div>
  //   );
  // },




  // Define the attributes (similar to state in React)
  attributes: {
    messages: {
      type: 'array',
      default: [],
    },
    inputText: {
      type: 'string',
      default: '',
    },
  },

  // Define the edit function to render the block in the editor
  edit: ({ attributes, setAttributes }) => {
    const [inputText, setInputText] = useState(attributes.inputText);

    const handleMessageChange = (newValue) => {
      setInputText(newValue);
      setAttributes({ inputText: newValue });
    };

    const handleSendMessage = () => {
      if (inputText.trim() === '') return;

      const newMessages = [...attributes.messages, { text: inputText, sender: 'user' }];
      setAttributes({ messages: newMessages, inputText: '' });
    };

    return (
      <div>
        <div className="chat-container">
          {attributes.messages.map((message, index) => (
            <div key={index} className={`message ${message.sender}`}>
              {message.text}
            </div>
          ))}
        </div>
        <div className="input-container">
          <TextControl
            value={inputText}
            onChange={handleMessageChange}
            placeholder={__('Type your message...', '')}
          />
          <button onClick={handleSendMessage}>{__('Send', '')}</button>
        </div>
      </div>
    );
  },

  // Define the save function to render the block on the frontend
  save: ({ attributes }) => {
    return (
      <div>
        <div className="chat-container">
          {attributes.messages.map((message, index) => (
            <div key={index} className={`message ${message.sender}`}>
              {message.text}
            </div>
          ))}
        </div>
      </div>
    );
  },
});

