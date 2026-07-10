import { useState , useEffect } from "react";
import "./CruiseControl.css";
function CruiseControl() {
    const [velocidade, setVelocidade] = useState(30);
    useEffect(() => {
        document.title = `🚗 iCruise - ${velocidade} km/h`;
    }, [velocidade]);
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
        <div className="dashboard">
            <div className="gauges-row">
                <div className="gauge">
                    <div className="gauge-circle">
                        <h3>RPM</h3>
                        <span>2200</span>
                    </div>
                </div>

                <div className="cruise-display">
                    <h1>iCruise</h1>
                    <p className="subtitle">Powered by Pedro</p>

                    <div className="speed-card">
                        <p className="label">CRUISE CONTROL</p>
                        <h2>{velocidade}</h2>
                        <p className="unit">km/h</p>
                        <p className="status">● ACTIVE</p>
                    </div>
                </div>

                <div className="gauge">
                    <div className="gauge-circle">
                        <h3>SPEED</h3>
                        <span>{velocidade}</span>
                    </div>
                </div>
            </div>

            <div className="button-group">
                <div>
                    <button onClick={() => setVelocidade(velocidade + 1)}>+1</button>
                    <button onClick={() => {
                        if (velocidade > 30) {
                            setVelocidade(velocidade - 1);
                        }
                    }}>-1</button>
                </div>

                <div>
                    <button onClick={aumentar10}>+10</button>
                    <button onClick={diminuir10}>-10</button>
                </div>
            </div>
        </div>
    );
}
export default CruiseControl;