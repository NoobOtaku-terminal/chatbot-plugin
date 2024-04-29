/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./src/block.json":
/*!************************!*\
  !*** ./src/block.json ***!
  \************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"apiVersion":3,"name":"chatbot/bot","title":"bot","category":"widgets","icon":"businesswoman","description":"A front-end of chatbot","keywords":["chatbot","bot","help"],"version":"1.0.0","textdomain":"chatbot","editorScript":"file:./index.js"}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block.json */ "./src/block.json");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.css */ "./src/index.css");

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





// import React  from 'react';
// import { useBlockProps } from '@wordpress/block-editor';
// import ReactDOM from 'react-dom/client';

// impot App from './App';
// import Home from './pages/Home.js';
// import './App.css'
// import Test from './test.js';
// import reportWebVitals from './reportWebVitals';

// import Chatbot from '../includes/ChatBot.jsx';
// import App from './App';

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)('namespace/block-name', {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)(_block_json__WEBPACK_IMPORTED_MODULE_2__.name, 'chatbot'),
  icon: _block_json__WEBPACK_IMPORTED_MODULE_2__.icon,
  category: _block_json__WEBPACK_IMPORTED_MODULE_2__.category,
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
      default: []
    },
    inputText: {
      type: 'string',
      default: ''
    }
  },
  // Define the edit function to render the block in the editor
  edit: ({
    attributes,
    setAttributes
  }) => {
    const [inputText, setInputText] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(attributes.inputText);
    const handleMessageChange = newValue => {
      setInputText(newValue);
      setAttributes({
        inputText: newValue
      });
    };
    const handleSendMessage = () => {
      if (inputText.trim() === '') return;
      const newMessages = [...attributes.messages, {
        text: inputText,
        sender: 'user'
      }];
      setAttributes({
        messages: newMessages,
        inputText: ''
      });
    };
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "chat-container"
    }, attributes.messages.map((message, index) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      key: index,
      className: `message ${message.sender}`
    }, message.text))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "input-container"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
      value: inputText,
      onChange: handleMessageChange,
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Type your message...', '')
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      onClick: handleSendMessage
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Send', ''))));
  },
  // Define the save function to render the block on the frontend
  save: ({
    attributes
  }) => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "chat-container"
    }, attributes.messages.map((message, index) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      key: index,
      className: `message ${message.sender}`
    }, message.text))));
  }
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map