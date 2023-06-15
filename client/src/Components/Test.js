import React, {useContext} from 'react';
import MainPaneContext from './MainPaneContext';

const Test = () => {
    const [message, setMessage] = useContext(MainPaneContext);

    const changeMessage = (msg) => {
        if(msg === 'unchanged'){
            setMessage('meep');

        }else{
            setMessage('unchanged');
        }
    }

   return (
    <div>
        <h1>Test {message}</h1>
        <button onClick={ () => {changeMessage(message)}}>{message}</button>
    </div>
    );
};

export default Test;