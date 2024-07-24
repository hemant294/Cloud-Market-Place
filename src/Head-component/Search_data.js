import { useState } from "react";
import Input from "../components/input/Input"
import "./Service.css";
const SearchData = ({ search, srchSet, values }) => {

    return (
        <>
            <div className="search-val">
                <Input
                    autoComplete="off"
                    type="text"
                    name="text"
                    value={values}
                    placeholder="search services here"
                    onChange={(e) => srchSet(e.target.value)}
                />
            </div>
        </>
    )
}
export default SearchData;