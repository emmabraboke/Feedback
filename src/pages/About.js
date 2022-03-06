import {Link} from 'react-router-dom'
function About() {
    return (
        
            <div className="card about">
                <h1>About this project</h1>
                <p>This is a react app to leave feedback for product</p>
                <p>Version : 1.0.0</p>
                <Link to="/" className='link'> Home </Link>
            </div>
        
            
    )
}

export default About
