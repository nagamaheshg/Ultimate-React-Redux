const TodoItem1 = () => {

    const todoName = 'Buy Milk';
    const todoDate = '07/04/2024'
  return (
    <>
      <div className="container">
        <div className="row todo-item-row">
          <div className="col-6">{todoName}</div>
          <div className="col-4"> {todoDate} </div>
          <div className="col-2">
            <button className="btn btn-danger todo-app-btn">Delete</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoItem1;
