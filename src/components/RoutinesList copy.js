import React, { Fragment, useState, useEffect } from 'react'
import {Link} from 'react-router-dom';
// import Routine from '../components/Routine'


const RoutinesList = props => {
    // var betterProps = props.routines
    const [stateRoutines, setStateRoutines] = useState([])
    // const [sortedStatus, setSortedStatus] = useState(['false'])
    // console.log('RoutinesList -> stateRoutines', stateRoutines);
// const [routines, setRoutines] = useState(props) //! [[],fn]
        useEffect(() => {
                setStateRoutines(props.routines);
            }, [props.routines]);

    var ascSort = (a, b) =>
    {
            return a.routine_name === b.routine_name ? 0 : a.routine_name > b.routine_name ? 1 : -1
    }
    // let listOfRoutines = document.getElementById('list-of-routines')
    
    var descSort = (a, b) =>
    {
            return a.routine_name === b.routine_name ? 0 : a.routine_name < b.routine_name ? 1 : -1
    }
    // let listOfRoutines = document.getElementById('list-of-routines')

    // if (listOfRoutines.classList.contains('unsorted'))
    //     {
    //         listOfRoutines.classList.replace('unsorted', 'sorted')
    //         // console.log('List of routines', listOfRoutines)
    //         console.log('List of routines', listOfRoutines.classList.contains('sorted'))    
    //     } else {  
    //         listOfRoutines.classList.replace('sorted', 'unsorted')
    //         console.log('List of routines', listOfRoutines)
    //         console.log('List of routines', listOfRoutines.classList.contains('sorted'))
            
    //     }


                            //     if(b.routine_name < a.routine_name) { console.log(-1) }
                            //     if(a.routine_name < b.routine_name) { console.log(1) }
                            //         return 0
    // }

    var sampleData = [
        {id: 1, routine_name: "Zick Handles", drills: Array(4)},
        {id: 2, routine_name: "Xost Presence", drills: Array(2)},
        {id: 3, routine_name: "Bertical Leap", drills: Array(1)},
        {id: 4, routine_name: "Wress Break", drills: Array(17)},
        {id: 5, routine_name: "Yress Break", drills: Array(9)}
    ] 
        // sampleData.sort(alphaCompare)
        // console.log('sampleData.sort(alphaCompare)', sampleData.sort(alphaCompare));
            //        const alphaSort = [...stateRoutines].sort(alphaCompare)
            // setStateRoutines(alphaSort)
            
            useEffect(() => {
                setStateRoutines(props.routines);
            }, [props.routines]);


            // const handleSort;
            // var alphaSort;
            //    useEffect(() => {
            //         setStateRoutines( 
            //             // handleSort = () => {

            //                 // alphaSort = [...stateRoutines].sort(alphaCompare)
            //             // }
            //             // props.routines
            //             // )
            //         }, 
            //            [props.routines]);

    const sortUsingPrevious = () => {
        // ! use toggle btn to sort alpha then back to normal or auto revAlpha order and have a button to toggle to regAlpha order
        // var sorted
        // debugger
        const alphaSort = [...stateRoutines].sort(ascSort)
        let listOfRoutines = document.getElementById('list-of-routines')
        if (listOfRoutines.classList.contains('sorted')){
            setStateRoutines(stateRoutines)
            listOfRoutines.classList.replace('sorted', 'unsorted')
            console.log('List of routines', listOfRoutines)
            console.log('List of routines', listOfRoutines.classList.contains('sorted'))
        }
        else {
            setStateRoutines(alphaSort)
            listOfRoutines.classList.replace('unsorted', 'sorted')
            console.log('List of routines', listOfRoutines)
            console.log('List of routines', listOfRoutines.classList.contains('sorted'))
        }
        
        // const unSortedList = Array.from([...stateRoutines])
        // setStateRoutines(alphaSort)
        // setSortedStatus('True')
        // debugger
        // console.log('sortUsingPrevious -> alphaSort', alphaSort);
        // setStateRoutines((prevStateRoutines) =>
        // setStateRoutines = () => { 
                // unSortedList.sort(alphaCompare)
                // unSorted.sort(alphaCompare))
                // console.log(alphaSort)
                    //  ! https://stackoverflow.com/questions/1129216/sort-array-of-objects-by-string-property-value
    // }
    }

    const sortUsingSampleData = () => {
        // ! use toggle btn to sort alpha then back to normal or auto revAlpha order and have a button to toggle to regAlpha order

      var sortedList = sampleData.sort(ascSort)
      var unsortedlist = sampleData
        if (sampleData) {
            console.log('YUP sample Data inthe House!')
            sampleData = sortedList
        }
        // var sorted
        // debugger
        // setStateRoutines((prevStateRoutines) =>
                // prevStateRoutines.sort(alphaCompare))
        // setStateRoutines((prevStateRoutines) =>
        // switch (sorted.value) {
        
        // case 'false':
        //     return
                // var sortedData =
                // return
                            //    sortedList = sampleData.sort(alphaCompare)
        //         sortedData
        // case 'true':
        //     return sampleData
                    //  ! https://stackoverflow.com/questions/1129216/sort-array-of-objects-by-string-property-value
    // }
    }

// const sortUsingPrevious = () => {
    const sortUsingDivs = () => {
        // var sorted
        // debugger
        setStateRoutines((prevStateRoutines) =>
                prevStateRoutines.map(r=> `<div key=${r.id + 200}> ${r.routine_name + 100} + 30 </div>`)
                )
            }


                // console.log('sortUsingPrevious -> prevRoutines', prevStateRoutines)
                // [...prevStateRoutines, {routines: prevStateRoutines.sort()}]
                //  sorted = prevStateRoutines.sort()
                // [...prevStateRoutines, {routines: sorted}]
                // [...prevStateRoutines, {routines: prevStateRoutines.sort()}]
                // setStateRoutines(prevStateRoutines => [...prevStateRoutines, {}])
                // console.log('*sortUsingPrevious is working*')
            console.log('stateRoutines BEFORE =>>>>', stateRoutines)

            //  useEffect(() =>
            // setStateRoutines([...stateRoutines].sort()), [stateRoutines])

    
            
            console.log('stateRoutines AFTER =>>>>', stateRoutines)    //  => {
                // console.log('RoutinesList -> props', props);
                // return props
                // }
                // useEffect(() => {
                //     setSortedStatus(props.sorted);
                // }, [props.sorted]);
                // )
            //! [[],fn]
            // ! use state as a low cost mimic of lifecycle
            // console.log('ROUTINES form useState', stateRoutines);
            // fun with react hooks -- with Michael Jackson
                //  console.log('RoutinesList -> props.routines', props.routines)
                //  console.log('RoutinesList -> props.routines', props.routines.)
            //     const toggleSortAlpha = () => {
            //      setRoutines([...stateRoutines, stateRoutines.sort((a, b) =>
            //           {if(b.id < a.id) { return -1; }
            //           if(a.id < b.id) { return 1; }
            //     return 0;}
            //         )
            //     ])
            //  }
            // useEffect((
            // )=> {}, [])


            // }

            // const sortAscending = () => {
            //     console.log('ASCENDING SORT')
            //     let sortedRoutines = stateRoutines.sort((a,b) => b - a)
            //     console.log('sortAscending -> sortedRoutines', sortedRoutines);
            //     setRoutines(sortedRoutines)
            // }

            // const sortDescending = () => {
            //     let sortedRoutines = stateRoutines.sort((a, b) => b - a)
            //     setRoutines(sortedRoutines)
            // }
            // var alphaSort = [...stateRoutines].sort(alphaCompare)

         return (
        <Fragment>
            <button key={99} onClick={() => setStateRoutines([...stateRoutines].sort(ascSort))}
            >
                sort asc
            </button>   
            <button key={98} onClick={() => setStateRoutines([...stateRoutines].sort(descSort))}
            >
                sort desc
            </button>   
            
            <ul
            key={props.id} id='list-of-routines' className='routines-list unsorted'
            >
            {stateRoutines && stateRoutines.map(routine => 
                  <li key={routine.id}>
                      <Link to={`/routines/${routine.id}`}> 
                            {routine.routine_name} 
                            <button>
                                {routine.drills ? routine.drills.length : null}
                            </button> 
                      </Link> 
                  </li> 
            )
            }
            </ul>
        </Fragment>
        );
}
 
export default RoutinesList;