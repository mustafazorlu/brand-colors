import React, { useContext } from "react";
import { getContrastYIQ } from "../helpers";
import MainContext from "../MainContext";
import ClipboardButton from "react-clipboard.js";

const Brand = ({ brand }) => {
    const { selectedBrands, setSelectedBrands, setCopied } = useContext(MainContext);
    const setColor = (color) => {
        setCopied(color);
    }
    const toggleSelected = () => {
        if (selectedBrands.includes(brand.slug)) {
            setSelectedBrands(
                selectedBrands.filter((slug) => slug !== brand.slug)
            );
        } else {
            setSelectedBrands([...selectedBrands, brand.slug]);
        }
    };
    return (
        <div
            className={`brand ${
                selectedBrands.includes(brand.slug) ? "selected" : ""
            }`}
        >
            <h5 onClick={toggleSelected}>{brand.title}</h5>
            <div className="brand-colors">
                {brand.colors.map((color, index) => (
                    <ClipboardButton data-clipboard-text={color} onSuccess={() => setColor(color)} component='span'
                        style={{
                            backgroundColor: `#${color}`,
                            color: `#${getContrastYIQ(color)}`,
                        }}
                        key={index}
                    >
                        {color}
                    </ClipboardButton>
                ))}
            </div>
        </div>
    );
};

export default Brand;
