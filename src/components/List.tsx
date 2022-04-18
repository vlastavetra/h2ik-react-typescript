import React, {FC} from 'react';
import {useNavigate} from 'react-router-dom';

interface ListProps<T> {
    items: T[];
    renderItem: (item: T) => React.ReactNode
}

export default function List<T>(props: ListProps<T>) {
  const history = useNavigate()

    return (
        <div>
            <button onClick={() => history('/')}>Back</button>
            {props.items.map(props.renderItem)}
        </div>
    )
}
