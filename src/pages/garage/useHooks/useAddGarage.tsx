import { useEffect, useState } from "react"
import axiosInstance from "../../../utils/axios/axios"
import { appendToFormData } from "../../../utils/functions/appendFromData"
import { toast } from "sonner"
import { useNavigate, useParams } from "react-router"

export function useAddGarage() {
    const [data, setData] = useState<any>([])
    const [loading, setLoading] = useState<any>(false)
    const hangleChange = (e: any) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }
    const { id } = useParams()
    useEffect(() => {
        if (id) {
            axiosInstance.get(`garages/${id}/`).then((res) => {
                setData(res.data)
            })
        }
    }, [id])
    const navigate = useNavigate()
    const handleSubmit = async () => {
        setLoading(true)
        let formData = new FormData();
        let newData;
        if (data?.image && data?.image instanceof File) {
            newData = {
                ...data,
                image: data.image
            }
            formData = appendToFormData(formData, newData);
        } else {
            newData = {
                name: data?.name,
                location: data?.location,
                total_capacity: data?.total_capacity,
                available_capacity: data?.available_capacity,
                opening_hours: data?.opening_hours,
                closing_hours: data?.closing_hours,
                no_of_floors: data?.no_of_floors,
                price_per_hour: data?.price_per_hour,
                price_per_month: data?.price_per_month,
                rating: data?.rating
            }
            formData = appendToFormData(formData, newData);
        }
        if (id) {
            await axiosInstance.post(`garages/${id}`, formData).then(() => {
                toast.success("Garage added successfully", { id: "Error-Validation" })
                navigate(-1)
                setLoading(false)
            }).catch(() => {
                toast.error("Error adding garage", { id: "Error-Validation" });
                setLoading(false)
            }).finally(() => setLoading(false))
        } else {
            await axiosInstance.post('garages/', formData).then(() => {
                toast.success("Garage added successfully", { id: "Error-Validation" })
                navigate(-1)
                setLoading(false)
            }).catch(() => {
                toast.error("Error adding garage", { id: "Error-Validation" });
                setLoading(false)
            }).finally(() => setLoading(false))
        }
    }
    return {
        hangleChange,
        data,
        setData,
        loading,
        handleSubmit
    }
}