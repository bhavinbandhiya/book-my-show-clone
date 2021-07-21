import React from "react";

//components
import Poster from "../components/Poster/Poster.component";
import PlaysFilter from "../components/PlaysFilter/PlaysFilter.component";

const Plays = () => {
  return (
    <>
      <div className="container mx-auto px-4">
        <div className="w-full lg:flex flex-row-reverse">
          <div className="lg:w-3/4">
            <h2 className="text-2xl font-bold mb-4 ">Plays In Rajkot</h2>
            <div className="flex flex-wrap  ">
              <div className="w-1/2 md:w-1/3 my-3 lg:w-3/12 my-3">
                <Poster
                  src={
                    "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAzMSBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00311987-grtmzzwwnt-portrait.jpg"
                  }
                  title="Crazy Thieves in Palavakkam"
                  subtitle="Telugu -> ₹400"
                />
              </div>

              <div className="w-1/2 md:w-1/3 my-3 lg:w-3/12 my-3">
                <Poster
                  src={
                    "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAzMSBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00311987-grtmzzwwnt-portrait.jpg"
                  }
                  title="Crazy Thieves in Palavakkam"
                  subtitle="Telugu -> ₹400"
                />
              </div>

              <div className="w-1/2 md:w-1/3 my-3 lg:w-3/12 my-3">
                <Poster
                  src={
                    "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAzMSBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00311987-grtmzzwwnt-portrait.jpg"
                  }
                  title="Crazy Thieves in Palavakkam"
                  subtitle="Telugu -> ₹400"
                />
              </div>

              <div className="w-1/2 md:w-1/3 my-3 lg:w-3/12 my-3">
                <Poster
                  src={
                    "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAzMSBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00311987-grtmzzwwnt-portrait.jpg"
                  }
                  title="Crazy Thieves in Palavakkam"
                  subtitle="Telugu -> ₹400"
                />
              </div>
            </div>
          </div>

          <div className="lg:w-3/12">
            <h2 className="text-2xl font-bold mb-4 ">Filters</h2>
            <div>
           
              <PlaysFilter
                title="Date"
                tags={["Today", "Tomorrow", "This Weekend"]}
              />
                 <PlaysFilter
                title="Language"
                tags={["Tamil", "Gujrati", "Hindi"]}
              />

              <PlaysFilter
                title="Date"
                tags={["Today", "Tomorrow", "This Weekend"]}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Plays;
