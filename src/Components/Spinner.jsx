import React from "react";
import { useSelector } from "react-redux";
import { PacmanLoader } from "react-spinners";

const Spinner = () => {
    const { isLoading } = useSelector((state) => state.spinnerReducer);

    return isLoading ? (
        <div className="h-screen w-screen fixed z-50 flex items-center justify-center bg-yellow-300 top-0 left-0">
            <PacmanLoader />
        </div>
    ) : (
        ""
    );
};

export default Spinner;
