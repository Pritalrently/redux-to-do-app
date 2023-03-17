import React, { useState } from 'react'
import "./todo.css"

import { useDispatch, useSelector } from "react-redux"
import { addToDo, deleteToDo, removeToDo } from "../actions/index"

const Todo = () => {



    const [inputData, setInputData] = useState('');
    const list = useSelector((state) => (state.toDoReducers.list))
    const dispatch = useDispatch();



    return (

        <>
            <div className='main-div'>
                <div className='child-div'>
                    <figure>
                        <figcaption>Add your list here.</figcaption>
                    </figure>

                    <div className='addItems'>
                        <input type='text' placeholder='Add items'
                            value={inputData} onChange={(event) => setInputData(event.target.value)}></input>
                        <i className='fa fa-plus add-btn' onClick={() => dispatch(addToDo(inputData), setInputData(''))}  ></i>
                    </div>

                    <div className='showItems'>



                        {


                            list.map((elem) => {


                                return (
                                    <div className='eachItems' key={elem.id}>
                                        <h3 style={{color: "white", fontSize: "20px", paddingTop:"20px"}}>{elem.data}</h3>
                                        <div className='todo-btn'>
                                        <i className="far fa-trash-alt add-btn" title="Delete Items" onClick={() => dispatch(deleteToDo(elem.id), setInputData(''))}></i>
                                    </div>
                                    </div>

                                )


                            })
                        }


                    </div>

                  <div className="showItems">

                    <button className="btn effect04" data-sm-link-text="remove all"
                    onClick={() => dispatch(removeToDo())}><span>Check List</span></button>
                  </div>



                </div>
            </div>
        </>
    )
}

export default Todo