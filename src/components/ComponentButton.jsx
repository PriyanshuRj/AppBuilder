import React from 'react';
import { useDispatch } from 'react-redux';
import { addComponent } from '../redux/actions';

function ComponentButton({ type }) {
    const dispatch = useDispatch();

    const handleAddComponent = () => {
        dispatch(addComponent(type));
    };

    return (
        <button
            className="p-2 bg-blue-500 text-white rounded-lg mr-2 cursor-pointer"
            onClick={handleAddComponent}
        >
            Create {type}
        </button>
    );
}

export default ComponentButton;