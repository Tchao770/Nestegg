import { useState } from "react";

function useForm(options) {
    const [data, setData] = useState({});
    const [error, setError] = useState({});
    const onChange = () => {
        setData();
        setError();
    }
    const onSubmit = () => {

    }
    return {
        data,
        error,
        onChange,
        onSubmit
    }
}

export default useForm;