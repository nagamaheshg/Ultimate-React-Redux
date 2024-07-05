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

import "bootstrap/dist/css/bootstrap.min.css"; 
import ErrorMessage from "./components/ErrorMessage";
import FoodItems from "./components/FoodItems";

const App = () => {
  // const foodItems = []
  const foodItems = ["Sabzi","Dal", "Milk", "Veggies", "Salad", "Gee"];

  /*
      if (foodItems.length === 0) {
        return <h3>I am still Hungry!...</h3>;
      }
  */

  /*
    const emptyMessage =
    foodItems.length === 0 ? "<h3>I am still Hungry</h3>" : null;

  */

  return (
    <>
      <h1>Healty Food</h1>
      {/*emptyMessage*/}
      <ErrorMessage items={foodItems} />
      <FoodItems items={foodItems} />
    </>
  );
};

export default App;
