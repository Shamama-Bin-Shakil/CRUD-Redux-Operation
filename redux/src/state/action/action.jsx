export const addNote = (data) => {
  return async (dispatch) => {
    const response = await fetch("http://localhost:8080/post", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    dispatch({
      type: "ADD_NOTE",
      payload: result.data,
    });
  };
};

export const getNote = () => {
  return async (dispatch) => {
    const response = await fetch("http://localhost:8080/get", {
      method: "GET",
      headers: { "content-type": "application/json" },
    });
    const result = await response.json();
    dispatch({
      type: "GET_NOTE",
      payload: result.data
    });
  };
};

export const deleteNote = (id) => {
  return async (dispatch) => {
    const response = await fetch(`http://localhost:8080/delete/${id}`, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({id})
    });
    const result = await response.json();
    dispatch({
      type: "DELETE_NOTE",
      payload: id,
    });
  };
};
