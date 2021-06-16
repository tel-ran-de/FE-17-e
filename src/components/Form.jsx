import React, {useState} from "react";

const Form = ({onAdd}) => {

    const [todoItem, setTodoItem] = useState('')


    const changeHanlde = event => {
        setTodoItem( event.target.value )
    }

    const onSubmitHandle = event => {
        event.preventDefault()
        if (!todoItem.trim().length) return null
        onAdd(todoItem.trim())
        setTodoItem('')
    }

  return (
    <div className="container pt-5">
      <div className="w-75 mx-auto border border-1 border-success shadow p-2 rounded-2">
        <form onSubmit={ onSubmitHandle }>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="New ToDo Item"
              onChange={ changeHanlde }
              value={ todoItem }
            />
            <button
              className="btn btn-primary"
              type="submit"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
