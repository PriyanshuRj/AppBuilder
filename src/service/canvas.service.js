import { addElement, setElement, selectElement } from "../redux/slices/canvas.slice";

export function saveElementsToLocalStorage(elements) {
    localStorage.setItem("elements", JSON.stringify(elements));
}
export function saveSelectedToLocalStorage(selected) {
    if(selected)
        localStorage.setItem("selected", JSON.stringify(selected));
    else 
        localStorage.removeItem("selected");
}

export function addNewElement(element, dispatch, totalElements) {
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
        newElement.textColor = "black";
    }
    else if (element === "input") {
        newElement.placeholder = "Input Field";
        newElement.textColor = "black";
        newElement.backgroundColor = "white";
        newElement.borderRadius = 8;
    }
    else if (element === "dropdown") {
        newElement.label = "Dropdown";
        newElement.options = ["Option 1", "Option 2", "Option 3", "Option 4"];
        newElement.textColor = "black";
        newElement.backgroundColor = "white";

    }
    else if (element === "table") {
        newElement.h = 4;
        newElement.w = 6;
        newElement.headings = ["Head 1", "Head 2", "Head 3", "Head 4"];
        newElement.rows = 1;
        newElement.textColor = "black";
        newElement.backgroundColor = "white";


   
    }
    dispatch(addElement(newElement));
}
export function updatePosition(elements, dispatch){
    dispatch(setElement(elements));
}

export function grabElement(id, elements, dispatch){

  const element = elements.find((element) => element.id === id);
  dispatch(selectElement(element));
  saveSelectedToLocalStorage(element);
}


export function updateProperties(dispatch, element, elements){
    var resultElements = elements.filter((e) => e.id !== element.id);
    dispatch(setElement([...resultElements, element]))
    dispatch(selectElement(null));
    saveSelectedToLocalStorage(null);
}

export function removeFromCanvas(dispatch, element, elements){
    var resultElements = elements.filter((e) => e.id !== element.id);
    dispatch(setElement(resultElements));
    dispatch(selectElement(null));
    saveSelectedToLocalStorage(null);
}