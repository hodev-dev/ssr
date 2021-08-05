import { render } from 'preact';
import React from 'react';


function About() {
    
    const { users } = JSON.parse(_props);
    
    const renderUsers = () => {
        return users.map((user) => {
            return (
                <h1>{user.name}</h1>
            )
        });
    }
    
    return (
      <div>
        <h1>About Page</h1>
        <hr />
        <div>
           {renderUsers()}
        </div>
      </div>
    )
}

export default About

render(<About />,document.body, document.getElementById('app'));