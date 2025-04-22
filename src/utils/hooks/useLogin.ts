import { useState } from "react";
import { toast } from "sonner";
import { useNavigate } from "react-router";
import axiosInstance from "../axios/axios";

export function useLogin() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({
        email: "",
        password: "",
    });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoading(false)
    setData({
        ...data,
        [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = () => {
    if (data.email !== '' && data.password !== '') {
    //   axiosInstance
    //     .get("/sanctum/csrf-cookie")
    //     .then(() => {
        const formData = new FormData();
        formData.append("email", data.email);
        formData.append("password", data.password);
        axiosInstance
            .post("login/", formData)
            .then((result:any) => {
            localStorage.setItem("token",result.data.access );
            navigate("/dashboard");
            setLoading(false)
        })
        .catch(() => {
                setLoading(false)
                toast.error("Wrong email or password", { id: "Error-Validation" });
            });
    } else {
        toast.error("Error", { id: "Error-Validation" });
    }
};
    return {
        handleChange,
        loading,
        data,
        handleSubmit
    }
}