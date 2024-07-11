const TodoItem = ({todoName, todoDate, onDeleteClick}) => {



  return (
    <>
      <div className="container">
        <div className="row todo-item-row">
          <div className="col-6">{todoName}</div>
          <div className="col-4"> {todoDate} </div>
          <div className="col-2">
            <button className="btn btn-danger todo-app-btn" onClick={() => onDeleteClick(todoName)}>Delete</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoItem;
