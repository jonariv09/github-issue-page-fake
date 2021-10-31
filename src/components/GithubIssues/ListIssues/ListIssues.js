import { loadIssues } from 'actions/issues';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Issue } from '../Issue/Issue';

export const ListIssues = () => {

  const { issues } = useSelector((state) => state.issues);
  const dispatch = useDispatch()
  let notes = []

  useEffect(() => {
    
    // consulta a base de datos
    

    dispatch(loadIssues(notes));
  }, []);

  return (
    <>
      {
        notes &&
        notes.map(note => <Issue { ...note }/>) 
      }
    </>
  )
}
