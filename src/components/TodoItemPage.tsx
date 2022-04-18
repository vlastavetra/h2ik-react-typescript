import React, {FC, useEffect, useState} from 'react';
import axios from "axios";
import {ITodo} from "../types/types";
import {useParams, useNavigate} from 'react-router-dom';

type UserItemPageParams = {
    id: string;
};

const TodoItemPage: FC = () => {
    const [user, setUser] = useState<ITodo | null>(null)
    const params = useParams<UserItemPageParams>()
    const history = useNavigate()

    useEffect(() => {
        fetchUser()
    }, [])

    async function fetchUser() {
        try {
            const response = await axios.get<ITodo>('https://jsonplaceholder.typicode.com/todos/' + params.id)
            setUser(response.data)
        } catch (e) {
            alert(e)
        }
    }

    return (
        <div>
            <button onClick={() => history('/todos')}>Back</button>
            <h1>{user?.title}</h1>
            <div>
                {user?.id}
            </div>
            <div>
                {user?.completed}
            </div>
        </div>
    );
};

export default TodoItemPage;
