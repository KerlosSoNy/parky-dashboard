import { useState, useEffect, FC } from "react";
import Select, { SingleValue, MultiValue, StylesConfig } from "react-select";

interface OptionType {
    id: number;
    name: string;
}

interface CustomSelectMenuProps {
    options?: OptionType[];
    selected?: boolean;
    name?: string;
    sx?: object;
    isMultiChoices?: boolean;
    label?: string;
    isDisabled?: boolean;
    placeholder?: string;
    onChange?: (
        value: SingleValue<OptionType> | MultiValue<OptionType>,
        name?: string
    ) => void;
    defaultData?: number | undefined | null;
    customstyle?: object;
    loading?: boolean;
    helperText?: string;
    fullWidth?: boolean;
    error?: string;
    width?: string;
    higth?: string;
}

const CustomSelectMenu: FC<CustomSelectMenuProps> = ({
    options = [],
    name,
    isMultiChoices = false,
    label,
    isDisabled,
    placeholder,
    onChange,
    customstyle,
    defaultData,
    loading,
    error,
    width,
    higth,
}) => {
    const [selectedValue, setSelectedValue] = useState<any>(null);

    useEffect(() => {
        if (defaultData !== undefined) {
            const updatedSelectedObject =
                options.length > 0 &&
                options?.find((option) => option.id === defaultData);
            setSelectedValue(updatedSelectedObject || null);
        }
    }, [defaultData, options]);

    const handleOnChange = (
        selectedOption: SingleValue<OptionType> | MultiValue<OptionType>
    ) => {
        setSelectedValue(selectedOption);
        if (onChange) onChange(selectedOption, name);
    };

    const customStyles: StylesConfig<OptionType, boolean> = {
        control: (provided, state) => ({
            ...provided,
            height: higth,
            borderColor: error
                ? "red"
                : state.isFocused
                    ? "blue"
                    : provided.borderColor,
            borderWidth: error ? "2px" : "1px",
            boxShadow: state.isFocused ? "0 0 0 2px blue" : "0 0 0 2px #eee",
            "&:hover": {
                borderColor: error ? "red" : "blue",
            },
        }),
        menu: (provided) => ({
            ...provided,
            color: "#333",
        }),
        container: (provided) => ({
            ...provided,
            borderRadius: "80px",
            ...customstyle,
        }),
        menuPortal: (provided) => ({
            ...provided,
        }),
    };
    return (
        <div
            className="-mb-[20px]"
            style={{
                width: `${width}`,
                height: `${higth}`,
            }}
        >
            {label ? (
                <h1 className={`text-[18px]`}>
                    {label}:<span className="text-red-500">*</span>
                </h1>
            ) : null}

            <Select
                placeholder={placeholder}
                isDisabled={!!isDisabled}
                isSearchable={true}
                isClearable={false}
                isLoading={loading}
                isMulti={isMultiChoices}
                defaultValue={selectedValue}
                name={name}
                value={selectedValue}
                onChange={handleOnChange}
                getOptionLabel={(option) => option.name}
                getOptionValue={(option) => option.id.toString()}
                options={
                    options?.length > 0
                        ? options?.map((item) => ({ ...item, name: item.name }))
                        : []
                }
                styles={customStyles}
            />
            {error ? (
                <div className="ps-2 text-red-500">{error}</div>
            ) : (
                <div className="ps-2 opacity-0 disabled">" "</div>
            )}
        </div>
    );
};

export default CustomSelectMenu;
