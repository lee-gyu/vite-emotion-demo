import { useEffect, useState } from "react";
import { Button } from "./components/button";
import { cls } from "./css/index"


export function App() {
    const [str] = useState("");

    useEffect(() => {
        console.log(str);
    }, [])

    return (
        <div className={cls}>
            <div>
                <Button>dasd</Button>
            </div>
        </div>
    );
}