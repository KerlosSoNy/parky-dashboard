import PageHeader from "../../../components/common/header/header";
import InputAndLabel from "../../../components/inputAndLabel/input";
import { useParams } from "react-router";
import ButtonGroup from "../../../components/common/groupButton/groupButton";
import { Book } from "lucide-react";

export default function AddTransaction() {
    const { func } = useParams();
    return (
        <div className="flex flex-col gap-2">
            <PageHeader icon={Book} mainTitle="Transaction" subTitle={func === "add" ? "Add" : "Update"} />
            <div className="flex flex-col min-w-[80%] gap-8 mx-auto mt-6 max-h-screen pb-10">
                <InputAndLabel label="Transaction Name" name="name" type='text' />
                <InputAndLabel label="Transaction Number" name="iso2Code" type='text' />
                <div className="flex flex-row justify-end w-[100%]">
                    <ButtonGroup handleSubmit={() => console.log("HI")} />
                </div>
            </div>
        </div>
    )
}
