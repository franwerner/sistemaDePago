import { useCallback, useEffect, useState } from "react";

export const useLocalStorage = (localKey, fallBackState) => {

    const [storageValue, setValue] = useState(
        localStorage.getItem(localKey) || fallBackState
    )

    const stringRef = JSON.stringify(storageValue)

    useEffect(() => {
        localStorage.setItem(localKey, stringRef)
    }, [stringRef])

    const onLocalStorage = useCallback((newValue) => {
        setValue(newValue)
    }, [])

    return [
        onLocalStorage,
        storageValue
    ]

};

