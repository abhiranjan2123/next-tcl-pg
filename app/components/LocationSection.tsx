import { GoogleMapLink } from "../constants/constant";

const LocationSection = () => {
  return (
    <section className="mt-8 py-10 ">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary text-center">Perfectly Located</h2>
      <p className="text-xl text-gray-700 text-center">Experience luxury living with our premium amenities</p>
       

      <div className="px-2  mb-10 mt-10">
        <div className="flex flex-col gap-1 lg:flex-row lg:justify-between lg:items-center ">
          <div className="flex-initial bg-primary  shadow-2xl rounded-xl w-full h-full p-2 lg:py-12 ">
            <div className="flex flex-row  flex-wrap  ">
              <div className="flex flex-col justify-start items-start p-3  bg-white shadow-2xl rounded-lg">
                <p className="text-md font-semibold">Mail Us</p>
                <a href="" className="truncate">
                  thecozyluxe.gmail.com
                </a>
              </div>
              <div className="flex flex-col justify-start items-start  rounded-lg p-3 pl-4">
                <p className="text-md font-semibold">Call Us</p>
                <p className="text-sm">+919535585524</p>
              </div>
            </div>

            <div className="flex flex-col justify-start items-start bg-white shadow-2xl p-5 rounded-lg  mt-4 ">
              <p className="text-gray-500    ">
                The Cozy Luxe
                <br />
                Address - Maruthi Garden Layout, Rainbow Drive, Bengaluru,
                Karnataka 560035
                <br />
                Phone - 09441640280
              </p>
              {/* <button
                className="ring-1 ring-[#c1a516] p-3 mt-3 rounded-tr-xl "
                onClick={() => {
                  window.open(
                     "https://maps.app.goo.gl/F4iKsPf9G4HJzeZp9"
                    );
                   
                }}
              >
                <div className="flex justify-center items-center gap-2 hover:text-secondary">
                  <p>Get Direction</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6"
                  >
                    <path d="M6 3a3 3 0 0 0-3 3v1.5a.75.75 0 0 0 1.5 0V6A1.5 1.5 0 0 1 6 4.5h1.5a.75.75 0 0 0 0-1.5H6ZM16.5 3a.75.75 0 0 0 0 1.5H18A1.5 1.5 0 0 1 19.5 6v1.5a.75.75 0 0 0 1.5 0V6a3 3 0 0 0-3-3h-1.5ZM12 8.25a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5ZM4.5 16.5a.75.75 0 0 0-1.5 0V18a3 3 0 0 0 3 3h1.5a.75.75 0 0 0 0-1.5H6A1.5 1.5 0 0 1 4.5 18v-1.5ZM21 16.5a.75.75 0 0 0-1.5 0V18a1.5 1.5 0 0 1-1.5 1.5h-1.5a.75.75 0 0 0 0 1.5H18a3 3 0 0 0 3-3v-1.5Z" />
                  </svg>
                </div>
              </button> */}
            </div>
          </div>
          <div className="w-full bg-white shadow-2xl h-[320px] rounded-xl ">
            <iframe
              className="w-full h-full aspect-square  p-2 rounded-[30px]"
              src={GoogleMapLink}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
