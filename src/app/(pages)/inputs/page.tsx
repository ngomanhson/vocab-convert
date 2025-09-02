"use client"

import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import { HeartIcon } from "@/components/Icons";
import { useState } from "react";

export default function InputPage() {
    const [formData, setFormData] = useState({
        fullname: "",
        password: "",
    });

    const [formErrors, setFormErrors] = useState({
        fullname: "",
        password: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        console.log(name, value);
        setFormData({ ...formData, [name]: value });
        setFormErrors({ ...formErrors, [name]: "" });
    };

    const validateForm = () => {
        let valid = true;
        const newErrors: { fullname: string; password: string } = { fullname: "", password: "" };

        if (!formData.fullname) {
            newErrors.fullname = "Please enter your name.";
            valid = false;
        }

        if (!formData.password) {
            newErrors.password = "Please enter your password.";
            valid = false;
        } else if (formData.password.length > 50) {
            newErrors.password = "Password must be less than 50 characters.";
            valid = false;
        }

        setFormErrors(newErrors);
        return valid;
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (validateForm()) {
            console.log("Form submitted:", formData);
            alert("Form submitted! Check console for details.");
        }
    }

    return (
        <div className="h-screen bg-white p-8">
            <div className="max-w-[500px] mx-auto">
                <h1 className="text-2xl font-bold text-gray-800 mb-5">Demo Form</h1>
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-2 gap-4 mb-5">
                        <Input placeholder="Ex: Mason" name="fullname" inputSize="md" leftIcon={<HeartIcon />} error={formErrors.fullname} onChange={handleChange} />
                        <Input placeholder="********" name="password" inputSize="md" error={formErrors.password} onChange={handleChange} />
                    </div>

                    <Button type="submit" variant="secondary" size="sm">
                        Submit
                    </Button>
                </form>
            </div>
        </div>
    )
}
