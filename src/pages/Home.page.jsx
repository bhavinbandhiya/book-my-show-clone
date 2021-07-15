import React from "react";



//component
import EntertainmentCardSlider from "../components/Entertainment/Entertainment.componentcard";

const HomePage = () =>{
    return (
        <>
        <div className="container mx-auto px-4 ">
          <h1 className="text-2xl font-bold text-gray-800 my-3">
            The best of Entertainment
          </h1>
          <EntertainmentCardSlider />
        </div>
        </>
    );
};
export default HomePage;