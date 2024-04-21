import React from "react";
import useMightyMouse from "react-hook-mighty-mouse";

const Eyes = () => {
  const {
    selectedElement: {
      position: { angle: angleLeftEye, x: mouseX, y: mouseY },
    },
  } = useMightyMouse(true, "left-eye", { x: 0, y: 0 });

  // for the black part

  const eyeOffsetX = mouseX / 30;
  const eyeOffsetY = mouseY / 30;
  // console.log(eyeOffsetX, eyeOffsetY)

  const styleLeft = {
    transform: `translate(${eyeOffsetX}px, ${eyeOffsetY}px)`,
    transition: `all .3s ease`,
  };

  const angleLeftEyeC = angleLeftEye - 180;
  const styleLeftEye = {
    transform: `rotate(${-angleLeftEyeC}deg)`,
    transition: `all .1s ease`,
  };
  const {
    selectedElement: {
      position: { angle: angleRightEye },
    },
  } = useMightyMouse(true, "Right-eye", { x: 0, y: 0 });

  const styleRight = {
    transform: `translate(${eyeOffsetX}px, ${eyeOffsetY}px)`,
    transition: `all .3s ease`,
  };

  const angleRightEyeC = angleRightEye - 180;
  const styleRightEye = {
    transform: `rotate(${-angleRightEyeC}deg)`,
    transition: `all .1s ease`,
  };

  return (
    <div className='eyes w-full h-screen overflow-hidden'>
      <div className=" w-full  h-full relative bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg')] bg-cover bg-center">
        <div className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-1/3 flex items-center justify-center gap-10'>
          <div className='w-[13vw] h-[13vw] rounded-full bg-white flex justify-center items-center'>
            <div
              style={styleLeft}
              id='left'
              className='w-2/3 relative h-2/3 rounded-full bg-zinc-800 flex justify-center items-center '
            >
              <div
                style={styleLeftEye}
                id='left-eye'
                className='line ease-ease transition-all duration-100 flex  w-full h-10'
              >
                <div className='w-6 h-6 rounded-full bg-zinc-100 ease-ease'></div>
              </div>
              <div className='absolute text-2xl'>PLAY</div>
            </div>
          </div>
          <div className='w-[13vw] h-[13vw] rounded-full bg-white flex justify-center items-center'>
            <div
              style={styleRight}
              id='right'
              className='w-2/3 relative h-2/3 rounded-full bg-zinc-800 flex justify-center items-center '
            >
              <div
                style={styleRightEye}
                id='Right-eye'
                className='line ease-ease duration-100 flex  w-full h-10'
              >
                <div className='w-6 h-6 rounded-full bg-zinc-100 ease-ease'></div>
              </div>
                <div className='absolute text-2xl'>PLAY</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eyes;
