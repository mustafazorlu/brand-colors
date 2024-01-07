import "./App.css";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import MainContext from "./MainContext";
import { useEffect, useState } from "react";
import BrandsData from "./data.json";
import Copied from "./components/Copied";
import Collection from "./components/Collection";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
    const brandsArray = [];
    Object.keys(BrandsData).map((key) => brandsArray.push(BrandsData[key]));

    const [brands, setBrands] = useState(brandsArray);
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [copied, setCopied] = useState(false);
    const [search, setSearch] = useState("");

    useEffect(() => {
        console.log(selectedBrands);
    }, [selectedBrands]);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setTimeout(() => {
                setCopied(false);
            }, 2000);
        });
        return () => {
            clearTimeout(timeout);
        };
    }, [copied]);

    useEffect(() => {
        setBrands(
            brandsArray.filter((brand) =>
                brand.title.toLowerCase().includes(search)
            )
        );
    }, [search]);

    const data = {
        brands,
        setSelectedBrands,
        selectedBrands,
        setCopied,
        search,
        setSearch,
    };
    return (
        <>
            <MainContext.Provider value={data}>
                {copied && <Copied color={copied} />}
                <Sidebar />
                {/* <Router>
                    <Switch>
                        <Route path="/collection/:slugs">
                            <Collection />
                        </Route>
                        <Route path="/" exact>
                            
                        </Route>
                    </Switch>
                </Router> */}
                <Content />
            </MainContext.Provider>
        </>
    );
}

export default App;
