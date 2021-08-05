import { render } from 'preact';
import React from 'react';


function App() {
    
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
        <h1>App Page</h1>
        <a href={"/about"} >go to about page</a>
        <hr />
        <div>
           {renderUsers()}
        </div>
      </div>
    )
}

export default App

render(<App />,document.body, document.getElementById('app'));