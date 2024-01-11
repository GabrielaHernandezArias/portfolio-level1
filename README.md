# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Some React & Frontend concepts used here

### functional components vs class components

FUNCTIONAL COMPONENTS

- defined as functions (eg. arrow functions)
- use the 'const' or 'function' keyword
- don't have their own instance, so you can't use "this"
- historically, they were stateless, but with react hooks, now functional components can manage state using hooks like 'useState' and 'useEffect'

example:

```
const MyFunctionalComponent: React.FC<Props> = (props) => {
// Component logic here
return <div>{props.message}</div>;
};

export default MyFunctionalComponent;
```

CLASS COMPONENTS

- extend from React.Component, etc
- have their own instance so you can use "this"
- historically used for components with state and lifecycle methods
- with the introduction of react hooks, less people use class components now

example:

```
interface Props {
  message: string;
}

class MyClassComponent extends Component<Props> {
  // Component logic here
  render() {
    return <div>{this.props.message}</div>;
  }
}

export default MyClassComponent;
```
