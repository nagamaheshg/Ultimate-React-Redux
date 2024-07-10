/* 
Fragments:

  1. What?
      Allows grouping of multiple elements without extra DOM 
      
  2. Why?

      Return Multiple elements without a wrapping parrent.
      Cleaner DOM and consistent styling.

  3. How? Two Syntaxes:

    1. <React.Fragment>...</React.Fragment>
    2. short <>...</>

Map Method:

  1. Purpose: Render lists from array data.

  2. JSX Element: Transform array items into jsx.

  3. Inline Rendering: Directly inside JSX
      {items.map((item) => <li key={item.id}>{item.name}</li>)}

  4. Key Prop:  Assign unique key for optimized re-renders.
      <div key={item.id}> {item.name} </div>

Conditional Rendering:

  Conditional Rendering:

    * Displaying content based on certain conditions
    * Allows for dyanmic user interface
  
  Methods:

    * if-else statements: Choose between two blocks of content.
    * Ternary Operators: Quick way to choose the two options.
    * Logical Operators: Useful for rendering content when a condition is true.
  
  Benfits:

    * Enhances User Experience.
    * Reduce Unnessary rendering
    * Makes apps more interactive and responsive
  
  { condition && <div> write something </div> }
  { !condition ? <div> Error do it again </div>: <div> Congratulations </div> }

Passing Data via Props:

  Props in React:

    * Short for properties
    * Mechanism for passing data.
    * Read-only by default.
  
  Usage:

    * pass data from parent to child Component
    * Makes components reusable.
    * Defined as attribute in JSX.
  
  Key Points:

    * Data flows one-way (downwards)
    * Props are immutable
    * Used for communication between components.
  
  Example:
    
    <Header title="MyApp"/>

          Parent

      Child     Child

  grand Child   grand Child


CSS Modules:

  cat.css                                       CSS
    .meow{                                    .cat_meow_j3xk{
    
      color: orange;   CSS Modules Compiler        color: orange
}                                               }

1. Localized class Names to avoid global conflits.
2. Styles are scoped to individual components
3. Helps in creating component-specific styles.
4. Automatically generates unique class names.
5. Promotes modular and maintainable CSS.
6. Can use alongside global css when needed

*/

/* 

Passing Childrean:

  function Container(props){
    return (
      <div className = "container-style"> {props.children} </div>

    )
  }

  <Container> 
  <h1> Welcome to my App </h1> 
  <p> This content is passed as children to the  Container Component. </p>
  </Container>

Handling Events:
              Build                       Build
              ------>                    ------------>
 Application               Virtual DOm                   DOM
               <------
               Event Delivery            <-------------
                                          Event Delivery

  React event use camelcase e.g. onClick

  Uses synthetic event, not direct browser events.

  Event handlers can be functions or arrow functions

  Use onChange for controlled form inputs

  Avoid inline arrow functions in JSX for performance 

Passing Functions via props

      parent
        | ^
   emit | |  props
events  | |
       child

  1. pass dyanmic behavior between components

  2. Enables upward communication from child to parent

  3. Commonly used for event handling

  4. parent defines a function, child invokes it.

  5. Enhance component interactivity

  Example:
    <Button onClick={handleClick}/>

Managing State:

  initial Value: Pass the initial value to useState hook 

  Array with two elements

  const [ selectedRoom, setSelectedRoom ] = useState( initialValue );

    value:
      React assign the current value to the first element
    
    update function:
      React assign the updater function to the second element.

  1. State repersents data that changes overtime

  2. State is local and private to the component

  3. State Changes causes the component to re-render

  4. For functonal components, use the useState hook.

  5. React Functions start with word use are called hooks
  
  6. Hooks should only be used inside components

  7. Parent components can pass state down to children via props

  8. Lifiting state up: Share state between components by moving it to their


State vs Props:

    State:
      Local and muitable data within a component
      initialized within the component
      can change over time
      causes re-render when updated
      Managed using useState is functional components
    
    Props:
      Passed into a components from its parents
      Read-only (immutiable) within the receiving component.
      Allow parent-to-child component communication.
      Changes in props can also cause re-render
*/

import "bootstrap/dist/css/bootstrap.min.css";
import ErrorMessage from "./components/ErrorMessage";
import FoodItems from "./components/FoodItems";
import Container from "./components/Container";
import SearchBox from "./components/SearchBox";
import styles from "./App.module.css";
import { useState } from "react";

const App = () => {
  // const foodItems = []

  const [foodItems, setFoodItems] = useState([
    "Sabzi",
    "Dal",
    "Milk",
    "Veggies",
    "Salad",
    "Gee",
  ]);
  const [textToShow, setTextState] = useState();

  /*
      if (foodItems.length === 0) {
        return <h3>I am still Hungry!...</h3>;
      }
  */

  /*
    const emptyMessage =
    foodItems.length === 0 ? "<h3>I am still Hungry</h3>" : null;

  */

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      const newFoodItem = event.target.value;
      event.target.value = "";
      const newItems = [...foodItems, newFoodItem];
      setFoodItems(newItems);
      console.log("Food value entered is" + newFoodItem);
    }
  };

  return (
    <Container>
      <h1 className={styles["food-heading"]}>Healty Food</h1>
      {/*emptyMessage*/}
      <SearchBox handleKeyDown={onKeyDown} />
      <FoodItems items={foodItems} />
      <ErrorMessage items={foodItems} />
    </Container>
  );
};

export default App;
