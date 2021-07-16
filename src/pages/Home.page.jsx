import React from "react";
import Slider from "react-slick";

//component
import EntertainmentCardSlider from "../components/Entertainment/Entertainment.componentcard";
import PosterSlider from "../components/PosterSlider/PosterSlider.component";

//config

import TempPoster from "../config/TempPoster.config";

const HomePage = () => {
  return (
    <>
      <div className="flex flex-col gap-10">
        <div className="container mx-auto px-4 ">
          <h1 className="text-2xl font-bold text-gray-800 my-3">
            The best of Entertainment
          </h1>
          <EntertainmentCardSlider />
        </div>
        <div className="bg-bms-800 py-12 ">
          <div className="container mx-auto flex flex-col gap-3">
            <div className="hidden md:flex">
              <img
                src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
                alt="Premier"
                className="w-full h-full"
              />
            </div>
            <PosterSlider
              images={TempPoster}
              title="Premieres"
              subtitle="Brand ner relese every friday"
              isDark
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <PosterSlider
          images={TempPoster}
          title="Online Streming Events"
          isDark={false}
        />
      </div>

      <div className="container mx-auto px-4">
        <PosterSlider
          images={TempPoster}
          title="Outdoor Events"
          isDark={false}
        />
      </div>

      <div className="container mx-auto px-4">
        <PosterSlider
          images={TempPoster}
          title="Laughter Therapy"
          isDark={false}
        />
      </div>

    </>
  );
};
export default HomePage;
