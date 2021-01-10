/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./modules/custom/carocim_simulateur/js/carocim-simulateur.js":
/*!********************************************************************!*\
  !*** ./modules/custom/carocim_simulateur/js/carocim-simulateur.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (Drupal, $) {
  "use strict"; // votre code ici

  Drupal.behaviors.carocimSimulateur = {
    attach: function attach(context, settings) {
      console.log('fake news ...');
      /*function ticker() {
          var date = new Date();
           // si le comportement est exécuté plusieurs fois en raison
          // d'une gestion interne de l'objet Drupal
          //$(context).find('.clock').once('demoClock').html(date.toLocaleTimeString());
           $(context).find('.clock').html(date.toLocaleTimeString());
      }
       setInterval(function() { ticker(); }, 1000);*/

      alert('hamdollah');
    }
  };
})(Drupal, jQuery);

var markup = "\n    <div id=\"app\" class=\"vue-todo-container\">\n\n      <div>\n        <span>New:</span><input v-model=\"newItem.text\" name=\"text\" type=\"text\" />\n        <span>Due:</span><input v-model=\"newItem.due\" name=\"due\" type=\"date\" />\n        <button v-on:click=\"addNew\">Add</button>\n      </div>\n\n      <hr/>\n\n      <div v-for=\"(todo, idx) in todos\" class=\"vue-todo-margins\">\n\n        <div class=\"vue-todo-items\">\n\n          <h4 class=\"vue-todo-margins vue-todo-inline\">\n            <strike v-if=\"todo.completed\">{{todo.text}}</strike>\n            <span v-else>{{todo.text}}</span>\n          </h4>\n\n          <p class=\"vue-todo-inline\">\n            <small>Due: {{todo.due}}</small>\n          </p>\n\n          <div class=\"vue-todo-inline\">\n            <button v-if=\"!todo.completed\"\n                    v-on:click=\"done(idx)\">\n                    Done\n            </button>\n            <button v-else\n                    v-on:click=\"undone(idx)\">\n                    Undo\n            </button>\n            <a v-on:click=\"remove(idx)\" href='#'>\n              <span>&times;</span>\n            </a>\n          </div>\n\n        </div>\n\n      </div>\n\n    </div>\n";
var app = new Vue({
  el: '#app',
  data: {
    newItem: {
      text: null,
      due: null,
      completed: false
    },
    todos: null,
    csrfToken: null
  },
  template: markup,
  methods: {
    addNew: function addNew() {
      //
      app.todos.push(app.newItem); //

      app.newItem = {
        text: null,
        due: null,
        completed: false
      };
    },
    done: function done(idx) {
      app.todos[idx].completed = true;
      app.update(app.todos);
    },
    undone: function undone(idx) {
      app.todos[idx].completed = false;
      app.update(app.todos);
    },
    remove: function remove(idx) {
      //
      app.todos = app.todos.filter(function (item, key) {
        return key !== idx;
      });
    },
    update: function update(data) {
      //
      if (null === app.csrfToken) {
        return;
      } //


      axios.put('/api/vue/todo?_format=json', data, {
        headers: {
          'X-CSRF-Token': app.csrfToken,
          'Content-Type': 'application/json'
        }
      }).then(function (response) {
        console.log(response.data);
      })["catch"](function (error) {
        console.error(error);
      });
    }
  },
  watch: {
    todos: function todos(newTodos) {
      return app.update(newTodos);
    }
  },
  mounted: function mounted() {
    var _this = this;

    //
    axios.get('/api/vue/todo?_format=json').then(function (response) {
      return _this.todos = response.data;
    }); //

    axios.get('/rest/session/token').then(function (response) {
      return _this.csrfToken = response.data;
    });
  }
});

/***/ }),

/***/ "./modules/custom/carocim_simulateur/sass/app.scss":
/*!*********************************************************!*\
  !*** ./modules/custom/carocim_simulateur/sass/app.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!****************************************************************************************************************************!*\
  !*** multi ./modules/custom/carocim_simulateur/js/carocim-simulateur.js ./modules/custom/carocim_simulateur/sass/app.scss ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /var/www/clients/client1/web1/web/carocim/modules/custom/carocim_simulateur/js/carocim-simulateur.js */"./modules/custom/carocim_simulateur/js/carocim-simulateur.js");
module.exports = __webpack_require__(/*! /var/www/clients/client1/web1/web/carocim/modules/custom/carocim_simulateur/sass/app.scss */"./modules/custom/carocim_simulateur/sass/app.scss");


/***/ })

/******/ });