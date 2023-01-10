import { useCallback, useState } from "react";

export default (initlValue = null) => {
    const [value, setter] = useState(initlValue);
    const handler = useCallback((e) => {
        setter(e.target.value);
    }, []);
    return [value, handler, setter];
};