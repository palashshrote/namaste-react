import { useState, useEffect } from "react";

const useNetworkConnection = ()=> {
    const [networkConnection, setNetworkConnection] = useState(true);
    useEffect(()=> {
        window.addEventListener("online", (event) => {
            setNetworkConnection(true);
        });
        window.addEventListener("offline", (event) => {
            setNetworkConnection(false);
        });
    }, []);

    return {networkConnection};
}
export default useNetworkConnection;