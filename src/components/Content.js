/* eslint-disable array-callback-return */
import Search from "./Search";
import Brand from "./Brand";
import { useContext } from "react";
import MainContext from "../MainContext";
import Download from "./Download";

const Content = (props) => {
    

    // eslint-disable-next-line array-callback-return
    const {brands, selectedBrands} = useContext(MainContext)

    return (
        <main className="content">
            <header className="header">
                <Search />
                {selectedBrands.length > 0 && <Download/>}
            </header>
            <section className="brands">
                {brands.map((brand,index) => (
                    <Brand brand={brand} key={index} />
                ))}
            </section>
        </main>
    );
};

export default Content;
