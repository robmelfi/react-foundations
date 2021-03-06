# React Foundations

[Components](#components)
- [Props and State](#props-and-state)
- [Working with List & Conditional](#working-with-list--conditional)   

[Debugging React apps](#debugging-react-apps)

[Diving Deeper](#diving-deeper)

[Available Scripts](#available-scripts)

## Components

Components are the core building block of React apps. Actually, React really is just a library for creating components in its core.

A typical React app therefore could be depicted as a component tree - having one root component ("App") and then an potentially infinite amount of nested child components.

Each component needs to return/ render some JSX code - it defines which HTML code React should render to the real DOM in the end.

**JSX is NOT HTML** but it looks a lot like it. Differences can be seen when looking closely though (for example className in JSX vs class in "normal HTML"). JSX is just syntactic sugar for JavaScript, allowing you to write HTMLish code instead of nested React.createElement(...) calls.

When creating components, you have the choice between **two different ways**:

1. **Functional components** (also referred to as "presentational", "dumb" or "stateless" components - more about this later in the course) => `const cmp = () => { return <div>some JSX</div> }` (using ES6 arrow functions as shown here is recommended but optional)
2. **class-based components** (also referred to as "containers", "smart" or "stateful" components) => `class Cmp extends Component { render () { return <div>some JSX</div> } }`

you should use 1) as often as possible though. It's the best-practice.
   
### Props and State

`props` and `state` are CORE concepts of React. Actually, only changes in `props` and/or `state` trigger React to re-render your components and potentially update the DOM in the browser.

#### Props

`props` allow you to pass data from a parent (wrapping) component to a child (embedded) component.

##### Example:

##### People Component
```
const people = (props) => {
    return (
        <div>
            <Person name="Bob" />
        </div>
    );
};
```
Here, `name` is the custom property ( prop ) set up on the custom Person component. We basically replicate the default HTML attribute behavior we already know (e.g. <input type="text"> informs the browser about how to handle that input).

##### Person Component

```
const person = (props) => {
    return <p>I'm {props.name}!</p>
};
```

The Person component receives the props argument. You can of course name this argument whatever you want - it's your function definition, React doesn't care! But React will pass one argument to your component function => An object, which contains all properties you set up on <Person ... />.

`{props.name}` then dynamically outputs the name property of the props object - which is available since we set the name property inside People component (see above).

#### State
Whilst props allow you to pass data down the component tree (and hence trigger an UI update), state is used to change the component, well, state from within. Changes to state also trigger an UI update.

````
class NewPost extends Component { // state can only be accessed in class-based components!
    state = {
        counter: 1
    };  
 
    render () { // Needs to be implemented in class-based components! Needs to return some JSX!
        return (
            <div>{this.state.counter}</div>
        );
    }
}
````

Here, the `NewPost` component contains `state`. Only class-based components can define and use `state`. You can of course pass the state down to functional components, but these then can't directly edit it.

`state` simply is a property of the component class, you have to call it `state` though - the name is not optional. You can then access it via `this.state` in your class JSX code (which you return in the required `render()` method).

Whenever `state` changes, the component will re-render and reflect the new state. The difference to `props` is, that this happens within one and the same component - you don't receive new data (`props`) from outside!

##### Manipulating the state

“state” is a reserved property name (and can only be set in class-based components!)

`state = {submitted: false}`

Mutate state & trigger re-render

`someMethod () { this.setState({submitted: true}) }`

##### Passing method references between components [87066fa](https://github.com/robmelfi/react-foundations/commit/87066fa9454743c786f50e003dbfc8db3e3a5a68)
##### Adding two way binding [b76d3c8](https://github.com/robmelfi/react-foundations/commit/b76d3c8b440bd7274fd6cd6f7472dc0862d48a70)
##### Adding styling with stylesheet [021bc87](https://github.com/robmelfi/react-foundations/commit/021bc87433857cd3bfd7c612cc7e370495a9596d)
##### Working with inline style [8c9d8c1](https://github.com/robmelfi/react-foundations/commit/8c9d8c1c18d7961cb10c1bb628d3a739953c9ddf)

### Working with List & Conditional
#### Rendering Content Conditionally
```
let conditionalContent = null
if (someThing === true) {
    conditionalContent = <p>Visible Content!</p>
}

...

<div>
    <p>Other Visible Content</p>
    { conditionalContent }
</div>
```
check [2cc4d9d](https://github.com/robmelfi/react-foundations/commit/2cc4d9d2f1f0110a16722518ceafc7c9d1444d6e)

#### Outputting Lists

check [aa2559f](https://github.com/robmelfi/react-foundations/commit/aa2559f116ec92ee4a451aa85f08ad10affcee31)

##### Add delete handler

check [098c93a](https://github.com/robmelfi/react-foundations/commit/098c93a18ff2dad6f56af6ae9d21d447417f3f33)

##### Update state immutably

check [c0efe9f](https://github.com/robmelfi/react-foundations/commit/c0efe9f85ad767f2695310f2115018fb1885945e)

##### Add keys to List

check [dc1d970](https://github.com/robmelfi/react-foundations/commit/dc1d970b158ec0c28a1f8aad7d716b8497ed93b4)

##### Update property of object's list

check [9f893cc](https://github.com/robmelfi/react-foundations/commit/9f893cc1aae1eb4f9200639dbb34d2895436e108)

## Debugging React apps

...

## Diving deeper

...

## Redux

...

___

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
