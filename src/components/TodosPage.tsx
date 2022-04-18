import React, {FC, useEffect, useState} from 'react';
import List from "./List";
import {ITodo} from "../types/types";
import TodoItem from "./TodoItem";
import axios from "axios";
import {useNavigate} from 'react-router-dom';

const TodosPage: FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([])
    const history = useNavigate();

    useEffect(() => {
        fetchTodos()
    }, [])

    async function fetchTodos() {
        try {
            const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10')
            setTodos(response.data)
        } catch (e) {
            alert(e)
        }
    }

    return (
        <List
            items={todos}
            renderItem={(todo: ITodo) =>
              <TodoItem
                todo={todo}
                onClick={(todo) => history('/todos/' + todo.id, { replace: true })}
                key={todo.id}
              />}
        />
    );
};

export default TodosPage;
