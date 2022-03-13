import './Route.scss'

function Route(props) {
    const data = props.data;

    return (
        <div>
            {
                data.map((name, i)=>{
                    if(i === 0){
                        return <div>Start: <big>{data[0]}</big>, Destination: <big>{data[i+1]}</big></div>
                    }
                    else if(i === data.length-1){
                        return <div>Final destination: <big>{data[data.length-1]}</big></div>
                    }
                    else {
                        return (
                            <div>Transfer At: <big>{name}</big>, To: <big>{data[i+1]}</big></div>
                        ); 

                    }
                })
                    
            }
        </div>
    );
}

export default Route;