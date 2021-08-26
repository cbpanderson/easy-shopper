export function loadFromLocalStorage() {
    try {
      const serialisedState = localStorage.getItem("shoppingLists");
      if (serialisedState === null) return undefined;
      let dataFromLocalStorage = JSON.parse(serialisedState);
      return dataFromLocalStorage.the_usual;
    } catch (e) {
      console.warn(e);
      return undefined;
    }
}

export function saveToLocalStorage(state) {
  try {
    const serialisedState = JSON.stringify(state);
    localStorage.setItem("shoppingLists", serialisedState);
  } catch (e) {
    console.warn(e);
  }
}