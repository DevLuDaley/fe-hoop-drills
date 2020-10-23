import React, { Fragment } from 'react';
import {Link} from 'react-router-dom'
// import NewRoutineForm from './NewRoutineForm'

const Home = () => {
    
        // console.log("object");
        // const element = <h1>Hello, world!</h1>;
        return (
<Fragment>
    
<h1> Welcome to Hoop Drills </h1>
 <Link to={'/routines'}><button>View Routines</button>
 </Link>
 <Link to={'/routines/new'}><button>New Routine</button>
 </Link>
</Fragment>
)
    }

 
export default Home;
