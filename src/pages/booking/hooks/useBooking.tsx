import { useEffect, useState } from "react"
import axiosInstance from "../../../utils/axios/axios"
import { appendToFormData } from "../../../utils/functions/appendFromData"
import { toast } from "sonner"
import { useNavigate, useParams } from "react-router"

export function useAddBoking() {
    const [data, setData] = useState<any>([])
    const [loading, setLoading] = useState<any>(false)
    const hangleChange = (e: any) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }
    const [parking_slot, setParkingSlot] = useState<any>([])
    const [mainUser, setMainUser] = useState<any>({})
    const [vehicles, setVehicles] = useState<any>([])
    const [users, setUsers] = useState<any>([])
    const { id } = useParams()
    useEffect(() => {
        axiosInstance.get('users/').then((res) => {
            setUsers(res.data)
        })
        axiosInstance.get('vehicles/').then((res) => {
            setVehicles(res.data)
        })
        axiosInstance.get('parking-slots/').then((res) => {
            setParkingSlot(res.data)
        })
    }, [])

    useEffect(() => {
        if (id) {
            axiosInstance.get(`reservations/${id}/`).then((res) => {
                setData(res.data)
            })
        }
    }, [id])
    const navigate = useNavigate()
    const handleSubmit = async () => {
        setLoading(true)
        let formData = new FormData();
        formData = appendToFormData(formData, data);
        if (id) {
            await axiosInstance.post(`reservations/${id}`, formData).then(() => {
                toast.success("Reservation added successfully", { id: "Error-Validation" })
                navigate(-1)
                setLoading(false)
            }).catch(() => {
                toast.error("Error adding Reservationar", { id: "Error-Validation" });
                setLoading(false)
            }).finally(() => setLoading(false))
        } else {
            await axiosInstance.post('reservations/', formData).then(() => {
                toast.success("Reservation added successfully", { id: "Error-Validation" })
                navigate(-1)
                setLoading(false)
            }).catch(() => {
                toast.error("Error adding Reservationar", { id: "Error-Validation" });
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
        vehicles,
        parking_slot,
        loading,
        handleSubmit
    }
}