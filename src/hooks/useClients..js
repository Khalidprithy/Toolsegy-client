import { useEffect, useState } from "react";

const useClients = () => {
    const [clients, setClients] = useState([]);

    useEffect(() => {
        fetch('client.json')
            .then(res => res.json())
            .then(data => setClients(data))
    }, [])
    return [clients, setClients];

}

export default useClients;