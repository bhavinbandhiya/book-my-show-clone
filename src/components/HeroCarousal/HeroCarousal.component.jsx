import React from "react";
import HeroSlider from "react-slick";

//component
import {NextArrow,PrevArrow} from "./Arrows.component"

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroCarousal = () =>{

    const settingsLG = {
        arrows:true,
        autoPlay:true,
        centerMode: true,
        centerPadding:"300px",
        slidesToShow:1,
        slidesToScroll: 1,
        infinite: true,
        nextArrow:<NextArrow/>,
        prevArrow:<PrevArrow/>,

    };

    const settings = {
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow:<NextArrow/>,
        prevArrow:<PrevArrow/>,
      };

      const images = [
        "https://images.unsplash.com/photo-1626185748518-6a979b2c51bd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
        "https://images.unsplash.com/photo-1626257974266-d1dd30a8159c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
        "https://images.unsplash.com/photo-1626202835545-ed4c3127850f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
        "https://images.unsplash.com/photo-1626243048488-f224f98c4784?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",

      ];

    return (
        <>
        <div className="lg:hidden">
        <HeroSlider {...settings}>
            {
                images.map((image) =>(
                    <div className="w-full h-44 md:h-80 py-3">
                        <img src={image} alt=""  className="w-full h-full rounded-md"/>
                    </div>
                ))
            }
        </HeroSlider>
        </div>

        <div className="hidden lg:block">
        <HeroSlider {...settingsLG}>
            {
                images.map((image) =>(
                    <div className="w-full h-96 px-2 py-3">
                        <img src={image} alt=""  className="w-full h-full rounded-md"/>
                    </div>
                ))
            }
        </HeroSlider>
        </div>
        </>
    );
};

export default HeroCarousal;