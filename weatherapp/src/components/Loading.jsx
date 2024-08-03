import React from "react";

export default function Loading() {
    return (

        <> 
      {/**   <div className="h-screen w-screen relative m-0 p-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-flow animate"></div>
            <div className="flex items-center justify-center h-full w-full absolute inset-0 z-10">
                <div className="text-white mr-14 font-bold">
                    <p className="text-4xl mb-0">PHOTON</p>
                    <br />
                    <p className="text-md mt-0 ml-14">
                        Powered by{" "}
                        <a
                            className="text-md "
                            href="https://www.weatherapi.com/"
                            title="Free Weather API"
                        >
                            WeatherAPI.com
                        </a>
                    </p>
                </div>
            </div>
        </div> */}

<div className="h-screen w-screen relative m-0 p-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-flow animate"></div>
      <div className="flex items-center justify-center h-full w-full absolute inset-0 z-10">
        <div className="text-white  text-center">
          <p className="text-4xl font-bold mr-36 mb-2">
            <i className="fa-duotone rotates fa-solid fa-sun fa-rotate-by fa-2xs mx-3" > </i>
            <span className="scales">PHOTON</span></p>
          <p className="text-md mt-2">
            Powered by{' '}
            <a
              className="text-blue-300 mr-14 hover:underline"
              href="https://www.weatherapi.com/"
              title="Free Weather API"
            >
              WeatherAPI.com
            </a>
          </p></div>
      </div>
    </div>


</>


    );
}
