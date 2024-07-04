/*
  In this chapter we are including  Bootstrap 

  Responsive: Mobile-first Design for all devices sizes

  Components: Pre-styled elements like buttons and navbars

  Customizable: Modify Default styles as needed

  Cross-Browser: Consistent looks across browsers.

  Open-Source: Free with community support.

  install:
    npm i bootstrap@5.3.2 // pick latest version
    import "bootstrap/dist/css/bootstrap.min.css";
*/

import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <>
      <h1>BootStrap</h1>
      <button type="button" className="btn btn-primary">
        Primary
      </button>
      <button type="button" className="btn btn-secondary">
        Secondary
      </button>
      <button type="button" className="btn btn-success">
        Success
      </button>
      <button type="button" className="btn btn-danger">
        Danger
      </button>
      <button type="button" className="btn btn-warning">
        Warning
      </button>
      <button type="button" className="btn btn-info">
        Info
      </button>
      <button type="button" className="btn btn-light">
        Light
      </button>
      <button type="button" className="btn btn-dark">
        Dark
      </button>

      <button type="button" className="btn btn-link">
        Link
      </button>
    </>
  );
};

export default App;
