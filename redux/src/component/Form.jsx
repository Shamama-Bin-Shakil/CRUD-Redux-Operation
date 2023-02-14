import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addNote } from "../state/action/action";
export const Form = () => {
  const dispatch = useDispatch();
  const [note, setNote] = useState({
    title: "",
    description: "",
  });

  const handleEvent = (e) => {
    const { name, value } = e.target;
    setNote((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    dispatch(addNote(note));
  };

  return (
    <>
      <div className="container my-5">
        <h1>Add Notes</h1>
        <form onSubmit={formSubmit}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              name="title"
              value={note.title}
              onChange={handleEvent}
              id="title"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="desc" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              name="description"
              value={note.description}
              onChange={handleEvent}
              id="description"
            />
          </div>

          <button type="submit" className="btn btn-info text-white">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};
