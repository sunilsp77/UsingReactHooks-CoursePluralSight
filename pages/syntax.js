import React, {useState, useEffect} from 'react'

const Syntax = () => {

    const [checkBoxValue, setCheckBoxValue] = useState(false);
    useEffect(()=> {
        console.log('in UseEffect');
        return () => {
            console.log('in UseEffect cleanup');
        }
    }, [checkBoxValue])
    return (
        <div></div>
    )
}