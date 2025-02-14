// custom hook

import { useEffect, useState } from "react";

// the useCurrInfo here is a custom hook

function useCurrInfo(currency) {

    const [data, setData] = useState({})

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
            .then((res) => res.json())
            .then((res) => setData(res[currency]))

        /* In -> .then((res) =>setData(res[currency]))

        'res' contains the entire JSON object from the api and,
        '(res[currency])' extracts only relevant part from it
        */

        // console.log(data)
    }, [currency])


    // return [data,setData]

    // console.log(data)
    return data
}

export default useCurrInfo;

// returning whole method using the export