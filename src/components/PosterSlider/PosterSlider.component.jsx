import React from "react";
import Slider from "react-slick";

//config
import PosterCarousalsettings from "../../config/PoaterCarousal.config";

//Components
import Poster from "../Poster/Poster.component";

export const PosterSlider = (props) => {
  return (
    <>
      <div className="flex flex-col items-start my-2">
        <h3 className={`text-2xl font-bold ${props.isDark ? "text-white" : "text-gray-800"}`}>
          {props.title}
        </h3>
        <p className={`twxt-sm ${props.isDark ? "text-white" : "text-gray-800"}`}>{props.subtitle}</p>
      </div>
      <Slider {...PosterCarousalsettings}>
        {props.images.map((image) => (
          <Poster {...image} isDark={props.isDark} />
        ))}
      </Slider>
    </>
  );
};

export default PosterSlider;
