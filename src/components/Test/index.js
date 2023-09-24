import { useRef, useState } from 'react';

export default function Test() {
    const aRef = useRef(0);
    const [number, setNumber] = useState(0);
    let a = 0;

    const handleUp = () => {
        setNumber(number + 1);
        aRef.current += 1;
        a += 1;
        console.log('useState: ' + number);
        console.log('aRef: ' + aRef.current);
        console.log("a: " + a)
    }

    return (
        <>
            {/* <h2>{number}</h2> */}
            <button onClick={handleUp}>Up</button>
        </>
    )
}