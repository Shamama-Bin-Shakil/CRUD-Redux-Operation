import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteNote, getNote } from "../state/action/action";
export const Table = () => {
  const dispatch = useDispatch();
  const myState = useSelector((state) => state.noteReducer);
  useEffect(() => {
    dispatch(getNote());
  }, []);

  return (
    <>
      <table className="table container">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th>Operation</th>
          </tr>
        </thead>
        <tbody>
          {myState.data.map((element) => {
            return (
              <tr key={element._id}>
                <td>{element._id}</td>
                <td>{element.title}</td>
                <td>{element.description}</td>
                <td onClick={() => dispatch(deleteNote(element._id))}>
                  <a href="#">Delete</a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
