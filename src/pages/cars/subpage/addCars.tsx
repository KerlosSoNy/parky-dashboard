import PageHeader from "../../../components/common/header/header";
import InputAndLabel from "../../../components/inputAndLabel/input";
import { useParams } from "react-router";
import ButtonGroup from "../../../components/common/groupButton/groupButton";
import { Car } from "lucide-react";
import { useAddCar } from "../hooks/useAddCar";
import CustomSelectMenu from "../../../components/common/selectMenu/selectMenu";

export default function AddCars() {
    const {
        hangleChange,
        data,
        users,
        setData,
        loading,
        handleSubmit
    } = useAddCar()
    const { func } = useParams()
    return (
        <div className="flex flex-col gap-2">
            <PageHeader icon={Car} mainTitle="Car" subTitle={func === "add" ? "Add" : "Update"} />
            <div className="flex flex-col min-w-[80%] gap-8 mx-auto mt-6 max-h-screen pb-10">
                <InputAndLabel disabled={func === "view"} required onChange={hangleChange} value={data?.license_plate} label="License Plate" name="license_plate" type='text' />
                <InputAndLabel disabled={func === "view"} required onChange={hangleChange} value={data?.car_model} label="Car Model" name="car_model" type='text' />
                <InputAndLabel disabled={func === "view"} required onChange={hangleChange} value={data?.vehicle_color} label="Vehicle Color" name="vehicle_color" type='text' />
                <CustomSelectMenu isDisabled={func === "view"} label="Owner" name="owner" options={users.map((user: any) => ({ name: user.username, id: user.id }))} onChange={(e: any) => setData({ ...data, user: e?.id, user_name: e?.name })} defaultData={data?.user} />
                <div className="flex flex-row justify-end w-[100%]">
                    <ButtonGroup handleSubmit={handleSubmit} isLoading={loading} />
                </div>
            </div>
        </div>
    )
}
