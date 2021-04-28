/**
 *
 * Counter page
 *   
 */
import { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Counter= () => {
    // declaration of variables
    const [count, setCount] = useState(0);
    
    /**
     *
     * render html data
     * 
     */
    return(
        <Container>
            <div className='text-center mt-30'>
                <p>You clicked {count} times</p>
                <Button onClick={() => setCount(count + 1)}>Click me</Button>&nbsp;
                <Button onClick={() => setCount(0)}>Reset</Button>
            </div>
      </Container>
    )
}
export default Counter;