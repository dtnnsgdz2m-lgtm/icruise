import { useState } from "react";
function CruiseControl() {
    const [velocidade, setVelocidade] = useState(30);
    const aumentar10 = () => {
        setVelocidade(
            Math.ceil((velocidade +1) / 10) * 10
        );
    };
    const diminuir10 = () => {
        if (velocidade > 30) {
            setVelocidade(
                Math.floor((velocidade -1) / 10) * 10
            );
        }
    };

    return (
        <>
            <h1>iCruise powered by Pedro</h1>
            <p>Velocidade</p>
            <h2>{velocidade} km/h</h2>
            <button onClick={() => setVelocidade(velocidade + 1)}>
                 + 
                </button>
            <button onClick={() => {
                if (velocidade > 30) {
                    setVelocidade(velocidade - 1);
                }   

            }}>
            -
            </button>
            <button onClick={aumentar10}>+10</button>
            <button onClick={diminuir10}>-10</button>
            
        </>
    );
}
export default CruiseControl;