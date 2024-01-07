/* eslint-disable default-case */
import React, { useContext, useEffect, useState } from "react";
import MainContext from "../MainContext";
import { GrLink, GrDownload, GrClose } from "react-icons/gr";

const Download = () => {
    const { selectedBrands, setSelectedBrands, brands } =
        useContext(MainContext);
    const [downloadUrl, setDownloadUrl] = useState();
    const [documentFormat, setDocumentFormat] = useState("css");
    const getLink = () => {
        prompt(
            "Here is the URL to share",
            `https://localhost:3000/collection/${selectedBrands.join("+")}`
        );
    };
    useEffect(() => {
        if (selectedBrands.length > 0) {
            let output = "";

            switch (documentFormat) {
                case "css":
                    output += ":root {\n";
                    selectedBrands.map((slug) => {
                        let brand = brands.find((brand) => brand.slug === slug);
                        brand.colors.map((color, key) => {
                            output += `--${slug}-${key}: #${color};\n`;
                        });
                    });
                    output += "}";
                    break;

                case "scss":
                    selectedBrands.map((slug) => {
                        let brand = brands.find((brand) => brand.slug === slug);
                        brand.colors.map((color, key) => {
                            output += `$_${slug}-${key}: #${color};\n`;
                        });
                    });
                    break;

                case "less":
                    selectedBrands.map((slug) => {
                        let brand = brands.find((brand) => brand.slug === slug);
                        brand.colors.map((color, key) => {
                            output += `@${slug}-${key}: #${color};\n`;
                        });
                    });
                    break;
            }

            const blob = new Blob([output]);
            const url = URL.createObjectURL(blob);
            setDownloadUrl(url);
            return () => {
                URL.revokeObjectURL(url);
                setDownloadUrl("");
            };
        }
    }, [selectedBrands, documentFormat]);

    return (
        <div className="download">
            <div className="actions">
                <select onChange={(e) => setDocumentFormat(e.target.value)}>
                    <option value="css">CSS</option>
                    <option value="scss">SCSS</option>
                    <option value="less">LESS</option>
                </select>
                <a download={`brands.${documentFormat}`} href={downloadUrl}>
                    <GrDownload />
                </a>
                <button onClick={getLink}>
                    <GrLink />
                </button>
            </div>
            <div className="selected" onClick={() => setSelectedBrands([])}>
                <button>
                    <GrClose />
                </button>
                {selectedBrands.length} brands selected
            </div>
        </div>
    );
};

export default Download;
