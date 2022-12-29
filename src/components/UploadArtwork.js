import React, { useState } from "react";
import imgArt from "../img/uploadArtwork.jpg"

const UploadArtwork = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button
        className="text-teal-400 hover:text-gray-500"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Upload
      </button>
      {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-2 border-black rounded-lg shadow-lg relative flex flex-col w-full bg-barco outline-none focus:outline-none">
                <div className="flex flex-col items-start justify-between p-5 border-b border-solid border-black rounded-t ">
{/*                 <button
                    className="bg-transparent text-black float-right"
                    onClick={() => setShowModal(false)}
                    >
                    <p className="text-black opacity-7 h-6 w-6 text-xl block border-2 border-black py-0 rounded-full">
                      
                    </p>
                  </button> */}
                  <h3 className="text-3xl font=semibold">UPLOAD ARTWORK</h3>

                </div>
                <div className="relative w-full p-6 flex-auto">
                <img  src={imgArt} alt="imgArt" />

                <h3 className="text-xl mt-5">TITLE</h3>
                <p className="mt-5 border-2 border-black pl-2 pt-1 pb-5">Artwork Title</p>

                <h3 className="text-xl mt-5">DESCRIPTION</h3>
                <p className="mt-5 border-2 border-black pl-2 pt-1 pb-10">Max 300 caracteres</p>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-black rounded-b">
                  <button
                    className="text-black hover:text-gray-400 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="border-2 border-black  text-black hover:text-white hover:bg-black font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Upload
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default UploadArtwork;
