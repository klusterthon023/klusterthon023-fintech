import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function KeyFeaturesVideo() {
  const [playing, setPlaying] = useState(false);

  const togglePlay = () => {
    setPlaying(!playing);
  };

  return (
    <div className="relative">
      <div className="absolute w-full z-10 rounded-md">
        <video
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          controls={playing}
          autoPlay={playing}
          className="w-full rounded-lg"
        >
          <source src="./video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <>
          {!playing && (
            <button
              onClick={togglePlay}
              className="absolute inset-0 flex max-xsm:w-full max-xsm:bg-opacity-0 max-[200px]:w-60 items-center justify-center w-full h-full text-white bg-color-black bg-opacity-50"
            >
              <div className="p-3 bg-tertiary-400 justify-center items-center flex rounded-full w-14 h-14 ">
                <FontAwesomeIcon
                  icon={playing ? faPause : faPlay}
                  fontSize={20}
                />
              </div>
            </button>
          )}
        </>
      </div>
    </div>
  );
}
