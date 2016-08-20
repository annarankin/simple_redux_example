// Using CommonJS syntax to "require" files/libraries. Looks like Node!
// https://webpack.github.io/docs/commonjs.html
// Destructuring: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
import { createStore } from 'redux'

// ----------- PART ONE -----------

// The gist - we're going to create what's called a "store" in Redux, which represents our application's current data.
// This store can listen for events! We can send an event - or action - to the store using `store.dispatch(action)`.
// An action is just a piece of data. It's an object with a `type` property: const action = { type: 'CAT'} 
// The rest is up to you.
// We can send (DISPATCH) these objects (ACTIONS) to our data store... but what happens then?
// YOU DECIDE! :D 
// We're going to create a function that tells Redux what to do with our application's data (STATE) when it 
// receives an action.
// Redux refers to this particular kind of function as a REDUCER, since its job is to take all sorts of input 
// (in the form of user/program actions) and return the state of our application.

// Reducers take two args - the old state of your app, and an action that may change it.
// Using ES6 syntax, we can set a default value for the state parameter.
const reducer = function (state = 0, action) {
  // The only rule for this function is that it must return whatever information you want to be your state.
  // Let's just return whatever we get for now.
  // console.log(state, action)
  return state
}

// Once we have the function (REDUCER) created, we can call `Redux.createStore` and feed it the reducer.
const dataStore = createStore(reducer)

// Sweet! We can ask the store what the state of our app is by calling `getState()` on it.
let currentState = dataStore.getState()
console.log("dataStore's state:", currentState)
// Uncomment the line above. What's the current state?

// We can dispatch any action we want and see what the state is afterwards.

const someAction = { type: "KITTEN_ATTACK"}
// dataStore.dispatch(someAction)

// We dispatched an action - what's the state?
currentState = dataStore.getState()
// console.log("dataStore's state:", currentState)

// SO USEFUL. 
// We have an app that can store information for us, recieve actions, and return state.

// ----------- PART TWO -----------

// Now we're going to build an application that tells us the noise level in the room.
// We want our app to be able to tell us when something gets loud.

// Let's build a reducer that takes in an action, looks at its type, and performs a change to our state based on the action.

const noiseLevelReducer = function (state, action) {
  // console.log(state, action)
  switch(action.type) {
    case 'SILENCE':
      return 0
    case 'MURMUR':
      return 5
    case 'SCREAM':
      return 10
    default:
      return 0 
  }
}

const noisyAppStore = createStore(noiseLevelReducer)

let noiseLevel = noisyAppStore.getState()
// console.log('noise level:', noiseLevel)

noisyAppStore.dispatch({type: 'SCREAM'})
noiseLevel = noisyAppStore.getState()
// console.log('noise level:', noiseLevel)

noisyAppStore.dispatch({type: 'SILENCE'})
noiseLevel = noisyAppStore.getState()
// console.log('noise level:', noiseLevel)

noisyAppStore.dispatch({type: 'MURMUR'})
noiseLevel = noisyAppStore.getState()
// console.log('noise level:', noiseLevel)

// Let's try dispatching an action that our reducer doesn't know how to handle.

noisyAppStore.dispatch({type: 'BABBLE'})
noiseLevel = noisyAppStore.getState()
console.log('noise level:', noiseLevel)

// Let's recap!
// Write your answers/notes below if you find that sort of thing helpful.

// 1. What is the function of a STORE, a REDUCER, and an ACTION in Redux?
// 2. What does it mean to "dispatch an action?" What systems have you used that are similar? 
// 3. What makes a reducer special? Can we use it on its own?

// What's Next:

// - Subscribing to events
// - Immutability
// - Practical Applications