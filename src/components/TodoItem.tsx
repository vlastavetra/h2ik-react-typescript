import React, {FC} from 'react';
import {ITodo} from "../types/types";

interface TodoItemProps {
    todo: ITodo;
    onClick: (user: ITodo) => void;
}

const TodoItem: FC<TodoItemProps> = ({todo, onClick}) => {
    return (
        <div>
            <label>
              <input type="checkbox" defaultChecked={todo.completed}/>
              {todo.id}. {todo.title}
            </label>
            <button onClick={() => onClick(todo)}>Show more</button>
        </div>
    );
};

export default TodoItem;
