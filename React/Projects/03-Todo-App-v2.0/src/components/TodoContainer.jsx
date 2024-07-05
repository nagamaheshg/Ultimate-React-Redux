const TodoContainer = () => {
  return (
    <>
      <div className="container">
        <div className="row todo-item-row">
          <div className="col-6">
            <input type="text" placeholder="Enter Todo Here" />
          </div>
          <div className="col-4">
            <input type="date" />
          </div>
          <div className="col-2">
            <button className="btn btn-primary todo-app-btn">Add</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoContainer;
