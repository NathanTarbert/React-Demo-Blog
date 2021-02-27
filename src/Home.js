//useState is a hook imported from the react library
import { useState } from 'react';

const Home = () => {
    
    //this example does not pass in the dynamic value when the button is clicked.
    // let name = 'mario'; this value is not dynamic. Now lets add a hook!
    //the first param is our dynamic name, the second is setting it.
    const [name, setName] = useState('Chuck Norris =');
    const [age, setAge] = useState(62);
    const handleClick = () => {
        setName('Nathan');
        setAge(42);
        // name = 'luigi';
        // console.log('Hello, ninjas', event);
    };
    //this example passes in the dynamic value when the button is clicked.
    // const handleClickAgain = (name, event) => {
    //     console.log('hello' + name, event.bubbles);
    // };
    return (
        <div className="home">
        <h2>Homepage</h2>
        <p>{ name } is { age } years old</p>
        <button onClick={ handleClick }>Click Me</button>
        {/* <button onClick={(event) => handleClickAgain('mario', event)}>Click Me Again</button> */ }
        </div>
      );
}
 
export default Home;