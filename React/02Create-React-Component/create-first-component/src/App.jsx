/* 
  Here App is component. Component is nothing but function.
  We are using functional components. 

  Functional Components:

    i.  Inistially stateless
    ii. Can use Hooks for state and effects
    iii.Simpler and more conise
    iv. More Popular

JSX(Javascript XML):

   How determines how the UI will look wherever the components is used.

   Not HTML: Through it resembles HTML, You're actually writing JSX, Which stands for javascript XML.

   Conversion: JSX gets converted to regular javascript

   Babeljs.io/repl is a tool that allow you to see how JSX is transformed into JavaScript.

Exporting Components

  1. default export

  2. Multiple named exports

  3. Named export(s) and one default export

  1. Enables the use of a component in other parts.

  2. Default Export: Allows exporting single component as default from a module

  3. Named Export: Allows exporting multiple items from a module.

  4. Importing: To use exported component, you need to import it in the destination
     file using import syntax.

Naming Conventions:

  Naming: Must be Captialized; lowercase for default HTML.

  In React, CSS can be directly imported into component files, allowing for modular 
  and component-specific styling.

Dyanmic Components:

  1. Dyanmic Content: JSX allows the creation of dyanmic and interactive UI Components

  2. Javascript Expressions: Using {}, We can embed any JS expression diretly within JSX.
     This includes variables, function calls, and more.

Reusable Components:

  1. Modularity: Components are modular, allowing for easy across different parts of an application.

  2. Consistency: Reusing components ensures UI consistency and reduces the chance of discrepancies.

  3. Efficency: Reduce development time and effort by avoiding duplication of code.

  4. Maintainability: Changes made to reused component relfect everywhere it's used simplifying updates
     and bug fixes
*/

import Buttons from "./Buttons";
import Hello from "./Hello";
import Random from "./Random";

const App = () => {
  return (
    <>
      <h1>This is Best React Course</h1> 
      <Hello/>
      <Random/>
      <Random/>
      <Random/>

      <Buttons/>
    </>
  ); 
};

export default App
