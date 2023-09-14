import { addElement, setElement, selectElement } from "../../redux/slices/canvas.slice";
export function saveToLocalStorage(elements) {
    localStorage.setItem("elements", JSON.stringify(elements));
}

export function addNewElement(element, dispatch, totalElements) {
    console.log(element)
    let newElement = {
        id: `canvas-element-${totalElements + 1}`,
        x: 0,
        y: 0,
        w: 3,
        h: 2,
        component: element,
    };
    if (element === "button") {

        newElement.value = "Button";
        newElement.borderRadius = 8;
        newElement.backgroundColor = "green";
    }
    else if (element === "input") {
        newElement.placeholder = "Input Field";
    }
    else if (element === "dropdown") {
        console.log("Added element")
        newElement.label = "Dropdown";
        newElement.options = ["Option 1", "Option 2", "Option 3", "Option 4"];
    }
    else if (element === "table") {
      newElement.h = 4;
      newElement.w = 6;
      newElement.headings = ["Head 1", "Head 2", "Head 3", "Head 4"];

   
    }
    dispatch(addElement(newElement));
}
export function updatePosition(elements, dispatch){
    console.log(elements)
    dispatch(setElement(elements));
}

