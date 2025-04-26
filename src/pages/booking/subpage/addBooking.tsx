import PageHeader from "../../../components/common/header/header";
import InputAndLabel from "../../../components/inputAndLabel/input";
import { useParams } from "react-router";
import ButtonGroup from "../../../components/common/groupButton/groupButton";
import { Book } from "lucide-react";
import { useAddBoking } from "../hooks/useBooking";
import CustomSelectMenu from "../../../components/common/selectMenu/selectMenu";

export default function AddBooking() {
    const { func } = useParams();
    const {
        hangleChange,
        data,
        users,
        setData,
        loading,
        vehicles,
        parking_slot,
        handleSubmit
    } = useAddBoking()
    return (
        <div className="flex flex-col gap-2">
            <PageHeader icon={Book} mainTitle="Booking" subTitle={func === "add" ? "Add" : "Update"} />
            <div className="flex flex-col min-w-[80%] gap-8 mx-auto mt-6 max-h-screen pb-10">
                <InputAndLabel disabled={func === "view"} required onChange={hangleChange} value={data?.start_time?.split("T")[0] || data?.start_time} label="Start Time" name="start_time" type='date' />
                <InputAndLabel disabled={func === "view"} required onChange={hangleChange} value={data?.end_time?.split("T")[0] || data?.end_time} label="End Time" name="end_time" type='date' />
                <InputAndLabel disabled={func === "view"} required onChange={hangleChange} value={data?.total_cost} label="Total Cost" name="total_cost" type='number' />
                <CustomSelectMenu isDisabled={func === "view"} label="Owner" name="owner" options={users.map((user: any) => ({ name: user.username, id: user.id }))} onChange={(e: any) => setData({ ...data, user: e?.id, user_name: e?.name })} defaultData={data?.user} />
                <CustomSelectMenu isDisabled={func === "view"} label="Vehicle" name="owner" options={vehicles.map((vehicle: any) => ({ name: vehicle.license_plate, id: vehicle.id }))} onChange={(e: any) => setData({ ...data, vehicle: e?.id, license_plate: e?.name })} defaultData={data?.vehicle} />
                {/* @ts-ignore */}
                <CustomSelectMenu isDisabled={func === "view"} label="Status" name="owner" options={[{ name: "Reserved", id: "Reserved" }, { name: "Cancelled", id: "cancelled" }, { name: "Pending", id: "Pending" }]} onChange={(e: any) => setData({ ...data, statue: e?.id })} defaultData={data?.statue} />
                <CustomSelectMenu isDisabled={func === "view"} label="Parking Slots" name="owner" options={parking_slot.map((slot: any) => ({ name: slot.slot_number, id: slot.id }))} onChange={(e: any) => setData({ ...data, parking_slot: e?.id })} defaultData={data?.parking_slot} />
                <div className="flex flex-row justify-end w-[100%] pb-5">
                    <ButtonGroup handleSubmit={handleSubmit} isLoading={loading} />
                </div>
            </div>
        </div>
    )
}
