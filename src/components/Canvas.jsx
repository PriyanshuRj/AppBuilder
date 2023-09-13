// src/components/Canvas.js

import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { useSelector } from 'react-redux';

function Canvas({ components }) {
  const grid = 25; // Adjust grid size as needed

  return (
    <div className="border border-gray-300 p-4 rounded-lg flex-1">
      <div className="relative" style={{ width: '100%', height: '400px' }}>
        {components.map((component, index) => (
          <Draggable key={component.id} draggableId={component.id} index={index}>
            {(provided, snapshot) => (
              <div
                className={`bg-blue-500 w-24 h-24 rounded-lg absolute cursor-move ${
                  snapshot.isDragging ? 'bg-blue-400' : ''
                }`}
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                style={{
                  ...provided.draggableProps.style,
                  left: `${component.x}px`,
                  top: `${component.y}px`,
                  transition: 'background-color 0.2s',
                }}
              >
                {component.type}
              </div>
            )}
          </Draggable>
        ))}
      </div>
    </div>
  );
}

export default Canvas;
