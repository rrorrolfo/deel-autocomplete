1. Q: What is the difference between Component and PureComponent? Give an example where it might break my app.  
   A: The difference is that PureComponent will not rerender if none of its props or state have changed, while Component will rerender even if props or state have not changed. For example if the parent component has two children, one Component and one PureComponent and it passes the same props to both of them. If the Parent component rerenders, the Component child will re-render, while the PureComponent child will not. In function components a PureComponent would be the equivalent to using Memo(). Your app can break if the props or state that the PureComponent is receiving are reference values, given that for example, () => {} and () => {} are not the same. So, for example, if the PureComponent receives a function as the only prop, it will always be rerendered since the function will always be different. In function components you can avoid this situation with useCallback for example.

2. Q: Context + ShouldComponentUpdate might be dangerous. Why is that?  
   A: They both can actually lead to performance issues. In the case of context, the main problem is that all components that are related to the context will be updated when the value of the context is changed, this will cause unnecesary renders. In the case of ShouldComponentUpdate, the risk lies in the difficulty to maintain the hook and the performance boost can be not so significant.

3. Q: Describe 3 ways to pass information from a component to its PARENT.  
   A: The first way would be by passing a callback function via props, the callback function should be created inside the Parent component and passed via props to the child component. The child will trigger the callback function and this could return some value and the Parent would get such value.
   The second way, using function components would be to pass a setter function from the useState hook directly to the child component using props. This way, once the child component call the setter function with the new value, the Parent will be able to read that value from the useState hook.
   The third way would be using context, where the child component updates one of the properties of the context value and the Parent component can read it throught the same context.

4. Q: Give 2 ways to prevent components from re-rendering.  
   A: One way is to memoize the component, this can be achieved by using memo() or Purecomponent. Other way is to avoid unnecesary changes in state, props or context values.

5. Q: What is a fragment and why do we need it? Give an example where it might break my app.  
   A: A fragment is a react component that once it is compiled, it will not return an html element. This is very useful when you want to return more than one JSX elements from a component but you do not want to wrap them into an html native element to avoid unnescesarry markup or issues with the markup. One example that comes to my mind where a fragment could break an app is if you actually need to wrap the returned JSX elements into a html element, but since you wrapped the component into a Fragment, this might cause styling or markup issues.

6. Q: Give 3 examples of the HOC pattern.  
   A: One example is in Next.js v11, in order to reuse a layout, I created a HOC that would take the Page (the content) and the HOC will return the new page component wrapped within the layout, this way you will reuse the layout for any page you want. Other example is the connect component in Redux, where it will take a component and it will return a new component but this one will be "connected" to redux. Finally, you can use an HOC to pass some props or data to a component in order to share logic and avoid repeating yourself.

7. Q: What's the difference in handling exceptions in promises, callbacks and async...await?  
   A: The main difference is the way you will handle exceptions, for example, in Promises you have a reject method that will help you to handle the exception and you can chain a .catch() method to them as well. With async...await, you can use try/catch blocks in order to catch any exception and deal properly with it. Finally, with calllbacks you will need to handle the error manually with another callback and this might lead to callback hell.

8. Q: How many arguments does setState take and why is it async.  
   A: In functional components that use the useState hook, the setState (setter) function takes one argument; either the new value for the state or an updater function that in the end will update the state as well with a new value. In Class components, the setState takes the new value as a first argument or an updater function, and it takes an optional callback function as a second parameter, this is useful if you want or need to do some operation with the latest state value.

9. Q: List the steps needed to migrate a Class to Function Component.  
   A: All the functionality that class components have is available in functional components nowadays, you just need to know the equivalences. For example, to migrate lifeCycle Events you can use useEffect hook. For state you can use useState hook, for refs you can use useRef hook, for context you can use useContext, etc. In steps it could look like this:

- declare the component as a function not as a class
- Update the state of the component to useState hook
- Update all the class methos to be functions
- Update all lifecycle methods into useEffect
- the render method and its contents can stay the same

10. Q: List a few ways styles can be used with components.

- inline css
- Vanilla CSS
- CSS-in-js
- sass
- less
- styled components
- Tailwind

11. Q: How to render an HTML string coming from the server.  
    A: The most straight forward way is to insert the html into the page is using dangerouslySetInnerHTML method
