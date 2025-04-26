import PageHeader from "../../../components/common/header/header";
import InputAndLabel from "../../../components/inputAndLabel/input";
import { useParams } from "react-router";
import ButtonGroup from "../../../components/common/groupButton/groupButton";
import { BiSolidCarGarage } from "react-icons/bi";
import { useAddGarage } from "../useHooks/useAddGarage";

export default function AddGarage() {
    const { func } = useParams();
    const { hangleChange,
        data,
        setData,
        handleSubmit
    } = useAddGarage()
    return (
        <div className="flex flex-col gap-2">
            <PageHeader icon={BiSolidCarGarage} mainTitle="Garage" subTitle={func === "add" ? "Add" : "Update"} />
            <div className="flex flex-col min-w-[80%] gap-8 mx-auto mt-6 max-h-screen pb-10">
                <InputAndLabel required onChange={hangleChange} value={data?.name} label="Garage Name" name="name" type='text' />
                <InputAndLabel required onChange={hangleChange} value={data?.location} label="Garage Location" name="location" type='text' />
                <InputAndLabel required onChange={hangleChange} value={data?.total_capacity} label="Total Capacity" name="total_capacity" type='number' />
                <InputAndLabel required onChange={hangleChange} value={data?.available_capacity} label="Available Capacity" name="available_capacity" type='number' />
                <InputAndLabel required onChange={hangleChange} value={data?.opening_hours} label="Opening Hours" name="opening_hours" type='time' />
                <InputAndLabel required onChange={hangleChange} value={data?.closing_hours} label="Closing Hours" name="closing_hours" type='time' />
                <InputAndLabel required onChange={hangleChange} value={data?.no_of_floors} label="No of Floors" name="no_of_floors" type='number' />
                <InputAndLabel required onChange={hangleChange} value={data?.price_per_hour} label="Price per Hour" name="price_per_hour" type='number' />
                <InputAndLabel required onChange={hangleChange} value={data?.price_per_month} label="Price per Month" name="price_per_month" type='number' />
                <InputAndLabel required onChange={hangleChange} value={data?.rating} label="Rating" name="rating" type='number' />
                <div className="flex flex-col">
                    <label htmlFor="image" className="mb-[6px] text-[#0E4E5D] ps-2 font-medium text-base">Image</label>
                    <input type="file" id="image" name="image" onChange={(e) => setData({ ...data, image: e.target.files?.[0] })} className="border-[1px] border-black/10 rounded-[8px] h-[50px] ps-3 pt-2.5" />
                </div>
                <div className="flex flex-row justify-end w-[100%]">
                    <ButtonGroup handleSubmit={handleSubmit} />
                </div>
            </div>
        </div>
    )
}
