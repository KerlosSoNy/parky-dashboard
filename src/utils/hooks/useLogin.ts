import {  useEffect, useState } from "react";
import { generateKey } from '../functions/encryption'
import { useDispatch } from "react-redux";
import { toast } from "sonner";
import { AppDispatch } from "../redux/store";
import { useNavigate } from "react-router";
import axiosInstance from "../axios/axios";
import { setUserData } from "../redux/login";

export function useLogin() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    generateKey(); 
  }, []);
  

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
        axiosInstance
            .post("/api/login", data)
            .then(async (result:any) => {
            localStorage.setItem("token",result.data.access_token );
            dispatch(setUserData(result.data));
            setLoading(false)
            navigate("/dashboard");
            })
            .catch((error) => {
                setLoading(true)
                console.log(error)
                toast.error("Wrong email or password", { id: "Error-Validation" });
            });
        // })
    } else {
        toast.error("Hi", { id: "Error-Validation" });
    }
};
    return {
        handleChange,
        loading,
        data,
        handleSubmit
    }
}