import React, { useRef, useEffect, useState } from 'react'
import Header from '../UI/Header'
import ButtonInput from '../InputComponents/Button';
import TextInput from '../InputComponents/Text';
import DropdownInput from "../InputComponents/Dropdown"
import TableInput from "../InputComponents/Table"
import { Responsive, WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import { useDispatch, useSelector } from "react-redux";
import { saveElementsToLocalStorage, updatePosition, grabElement } from "../../service/canvas.service";
import PolkaDotGrid from '../UI/PolkaDot';
import { gridItemHeight, gridItemWidth,gridCols } from '../../helpers/constants';
const ResponsiveGridLayout = WidthProvider(Responsive);

export default function EditorCanvas() {
  const [showDots, setShowDots] = useState(false);
  const canvas = useSelector((state) => state.canvas);
  const dispatch = useDispatch();
  const sizeRef = useRef({});


  useEffect(() => {
    saveElementsToLocalStorage(canvas.elements);
  }, [canvas])
  function handleDragStart() {
    setShowDots(true);
  }
  function handleDragStop(layouts) {
    const updatedElements = canvas.elements.map((element) => {
      const matchingElement = layouts.find((item) => item.i === element.id);
      if (matchingElement) {
        const { x, y, w, h } = matchingElement;
        return {
          ...element,
          x: matchingElement.x,
          y: matchingElement.y,
          w: Math.round(w),
          h,
        };
      }

      return element;
    });
    updatePosition(updatedElements, dispatch);
    setShowDots(false);
  }
  function handleResizeStop(layout, oldItem, newItem) {
    
    const updatedElements = canvas.elements.map((element) => {
      if (element.id === newItem.i) {
        const { w, h } = newItem;
        const previousSize = sizeRef.current[element.id] || {};

        const updatedElement = {
          ...element,
          w,
          h,
          prevW: previousSize.w || w,
          prevH: previousSize.h || h,
        };
        sizeRef.current[element.id] = { w, h };
        return updatedElement;
      }
      return element;
    });
    updatePosition(updatedElements, dispatch);
    setShowDots(false);
  }
  function handleResizeStart() {
    setShowDots(true);
  }
  function handleDrag(layouts) {

    const updatedElements = canvas.elements.map((element) => {
      const matchingLayout = layouts.find((item) => item.i === element.id);
      if (matchingLayout) {
        return {
          ...element,
          x: matchingLayout.x,
          y: matchingLayout.y,
        };
      }
      return element;
    });

  }

  function elementClickHandler(id) {
    grabElement(id, canvas.elements, dispatch);
    setShowDots(false);
  }
  return (
    <div className='flex flex-col flex-grow'>
      <Header />
      <div className="overflow-x-hidden bg-[#E9EFF2] overflow-y-scroll relative canvas-scrollbar h-full">
        {canvas.elements.length === 0 && (
          <div className='bg-[#E9EFF2] h-full w-full flex items-center justify-center'>

            <h1 className=" text-center text-[#1a1a1a1a] text-[2rem] font-extrabold">
              Drag & drop components here.
            </h1>
          </div>
        )}

          <ResponsiveGridLayout
            className="layout"
            layouts={{ xxs: canvas.elements }}
            breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
            cols={{
              lg: gridCols,
              md: gridCols,
              sm: gridCols,
              xs: gridCols,
              xxs: gridCols,
            }}
            preventCollision={false}
            rowHeight={gridItemHeight}
            margin={[0, 0]}
            compactType={["horizontal", "vertical"]}
            containerPadding={[0, 0]}
            onDragStart={handleDragStart}
            onDragStop={handleDragStop}
            onDrag={handleDrag}
            onResizeStart={handleResizeStart}
            onResizeStop={handleResizeStop}
            style={{
              width: "100%",
            }}
          >
            {canvas.elements.map((item) => (
              <div
                key={item.id}
                className="flex items-center mt-3 self-start z-20"
                data-grid={{
                  x: item.x,
                  y: item.y,
                  w: item.w,
                  h: item.h,
                }}
                style={{
                  width: `${item.w * gridItemWidth}px`,
                  height: `${item.h * gridItemHeight}px`,
                }}
                onClick={() => elementClickHandler(item.id)}
              >
                {item.component === "button" && <ButtonInput element={item} />}
                {item.component === "input" && (
                  <TextInput element={item} />
                )}
                {item.component === "dropdown" && (
                  <DropdownInput element={item} />
                )}
                {item.component === "table" && <TableInput element={item} />}
              </div>
            ))}
          </ResponsiveGridLayout>

          {showDots && (
          <div className='absolute top-0 left-0 h-full w-full z-0'>

            <PolkaDotGrid rows={gridCols} columns={gridCols} />
          </div>
        )}

      </div>
    </div>
  )
}
