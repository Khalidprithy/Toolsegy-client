import { useEffect, useState } from "react";

const useClients = () => {
    const [clients, setClients] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/clients')
            .then(res => res.json())
            .then(data => setClients(data))
    }, [])
    return [clients, setClients];

}

export default useClients;