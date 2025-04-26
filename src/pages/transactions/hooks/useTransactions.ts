import { useEffect, useState } from "react"
import axiosInstance from "../../../utils/axios/axios"
import { appendToFormData } from "../../../utils/functions/appendFromData"
import { toast } from "sonner"
import { useNavigate, useParams } from "react-router"

export function useAddCar() {
    const [data, setData] = useState<any>([])
    const [loading, setLoading] = useState<any>(false)
    const hangleChange = (e: any) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }
    const [mainUser, setMainUser] = useState<any>({})
    const [users, setUsers] = useState<any>([])
    const { id } = useParams()
    useEffect(() => {
        axiosInstance.get('users/').then((res) => {
            setUsers(res.data)
        }) 
    },[])
    useEffect(() => {
        if (id) {
            axiosInstance.get(`transactions/${id}/`).then((res) => {
                setData(res.data)
            })
        }
    }, [id])
    const navigate = useNavigate()
    const handleSubmit = async () => {
        setLoading(true)
        let formData = new FormData();
       formData = appendToFormData(formData, data);
       if(id){
        await axiosInstance.post(`transactions/${id}`, formData).then(() => {
            toast.success("Car added successfully", { id: "Error-Validation" })
            navigate(-1)
            setLoading(false)
        }).catch(() => {
            toast.error("Error adding Car", { id: "Error-Validation" });
            setLoading(false)
        }).finally(() => setLoading(false))
       }else{
        await axiosInstance.post('transactions/', formData).then(() => {
            toast.success("Car added successfully", { id: "Error-Validation" })
            navigate(-1)
            setLoading(false)
        }).catch(() => {
            toast.error("Error adding Car", { id: "Error-Validation" });
            setLoading(false)
        }).finally(() => setLoading(false))
       }

    }
    return {
        hangleChange,
        data,
        users,
        setMainUser,
        mainUser,
        setData,
        loading,
        handleSubmit
    }
}