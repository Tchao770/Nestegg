import { useState } from "react";

// https://felixgerschau.com/react-hooks-form-validation-typescript/
export function useForm(options) {
    const [data, setData] = useState(options?.initialValues || {});
    const [error, setError] = useState({});
    const handleChange = (field) => {
        console.log(data[field]);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        alert("files submitted!");
    }
    return {
        data,
        error,
        handleChange,
        handleSubmit
    }
}