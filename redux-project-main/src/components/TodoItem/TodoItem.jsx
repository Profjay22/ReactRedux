import React from 'react'
import { Checkbox } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { setCheck } from '../../features/todoSlice'

export const TodoItem = ({description, isDone, id}) => {
    const dispatch = useDispatch()
    const handleCheck=()=>{
        dispatch(setCheck(id))
    }

  return (
    <div>
        <p className={isDone && 'todoItem--done'}>~ {description}</p>
        <Checkbox
            checked={isDone}
            color="primary"
            onChange={handleCheck}
            inputProps={{ 'aria-label': 'controlled' }}
        />
    </div>
  )
}
