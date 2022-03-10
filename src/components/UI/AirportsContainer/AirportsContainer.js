import { useState } from 'react';
import './AirportsContainer.scss'

function AirportsContainer(props) {
    const data = props.data;
    const [activeButton, setActiveButton] = useState();

    return (
        <div className='AirportsContainer'>
            {
                data.map((name) => {
                    return (
                        <button 
                            key={name}
                            className={activeButton === name ? 'active' : ''} 
                            onClick={() => {
                                    console.log(name);
                                    props.onChooseFrom(name);
                                    setActiveButton(name);}}
                            value={name}
                            >
                                {name}
                        </button>
                            
                    )
                })
            }
        </div>
    );
}

export default AirportsContainer;