import { EyeClosed, EyeIcon } from "lucide-react";
import { useEffect, useState } from "react";

type InputAndLabelProps = {
    label?: string;
    error?: string;
    imgSrc?: string;
    placeholder?: string;
    icon?: React.ReactNode;
    see?: boolean;
    hight?: string;
    required?: boolean;
    type?: React.ComponentProps<"input">["type"];
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
} & React.ComponentProps<"input">;

export default function InputAndLabel({
    label,
    error,
    placeholder,
    required,
    imgSrc,
    icon,
    see = false,
    type,
    height,
    onChange,
    ...props
}: InputAndLabelProps) {
    const [visible, setVisible] = useState(true);
    const [typeInput, setTypeInput] =
        useState<React.ComponentProps<"input">["type"]>("");

    const handleVisible = () => {
        setTypeInput(typeInput === "password" ? "text" : "password");
        setVisible(!visible);
    };


    useEffect(() => {
        setTypeInput(type);
    }, [type]);

    return (
        <div
            className={`${height ? height : null
                } flex flex-col my-2 relative font-semibold text-[#0E4E5D] dark:text-white w-full `}
        >
            <div className="flex flex-row text-[#0E4E5D]">
                {label && (<label
                    id={label}
                    htmlFor={label}
                    className={`mb-[6px] text-[#0E4E5D] font-medium text-base flex flex-row items-center dark:text-shadow_blue `}
                >
                    {imgSrc && <img alt={imgSrc} src={imgSrc} className="w-[40px] h-[40px] object-scale-down" />}
                    {label && <span className="ms-2">{`${label}`}</span>}
                    <div className="ms-1"> : </div>
                    {required && <span className="text-[#F55157] block ms-1">*</span>}
                </label>)}

            </div>
            <div className="relative w-[100%]">
                <input
                    placeholder={placeholder}
                    id={label}
                    {...props}
                    type={typeInput}
                    min={type === "number" ? 1 : undefined}
                    onChange={onChange}
                    className={`${icon ? "ps-14" : ""
                        } text-[#333] outline-none  mb-1 focus:outline-none
                        w-full h-12 p-3 rounded-lg border ${error ? "border-[#F55157]" : "border-gray-200 "
                        } w-full px-6 py-3 text-base font-normal  bg-inherit `}
                />
                {icon && (
                    <div
                        className={`absolute  start-2 -mt-10 text-[#D6D6D6] transform mx-3   text-2xl`}
                    >
                        {icon}
                    </div>
                )}
                {error && <span className="ps-3 pt-2  font-semibold text-[#F55157]">{error}</span>}
                {see && (
                    <button
                        type="button"
                        onClick={handleVisible}
                        className={`absolute z-50 ${document.body.dir === "rtl" ? "left-2" : "right-2"
                            } ${error ? "top-1/3" : "top-1/2"} -translate-y-1/2 text-2xl`}
                    >
                        {visible ? (
                            <EyeClosed className="text-primary" />
                        ) : (
                            <EyeIcon className="text-primary" />
                        )}
                    </button>
                )}
            </div>
        </div>
    );
}