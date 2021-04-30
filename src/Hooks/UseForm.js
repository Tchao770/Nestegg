import { useState } from "react";

// https://felixgerschau.com/react-hooks-form-validation-typescript/
export function useForm(options) {
    const [data, setData] = useState(options?.initialValues || {});
    const [errors, setErrors] = useState({});
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value
        });
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        let valid = true;
        const validations = options.validations;
        const newErrors = {};
        if (validations) {
            for (var key in validations) {
                // value of the field we're validating
                const value = data[key];
                // the matching validation rule for this key
                const validation = validations[key];
                // REQUIRED
                if (validation.required.value && !value) {
                    valid = false;
                    newErrors[key] = validation.required.message;
                }
                // PATTERN
                const pattern = validation?.pattern;
                if (pattern?.value && !RegExp(pattern.value).test(value)) {
                    valid = false;
                    newErrors[key] = pattern.message;
                }
                // CUSTOM
                const custom = validation?.custom;
                if (custom?.isValid && !custom.isValid(value)) {
                    valid = false;
                    newErrors[key] = custom.message;
                }
            }
            if (!valid) {
                setErrors(newErrors);
                return;
            }
        }
        setErrors({});
        if (options?.onSubmit) {
            console.log("done!")
            options.onSubmit();
        }
    }
    return {
        data,
        errors,
        handleChange,
        handleSubmit
    }
}