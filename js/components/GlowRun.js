import React from "react";

function GlowRun() {
  return (
    <>
      <div className="w-screen flex justify-center">
        <iframe
          title="Glow run"
          id="ts-iframe"
          src="https://www.townscript.com/v2/widget/glowrun-electrica-2o-433402/booking"
          frameborder="0"
          height="800"
          width="100%"
        ></iframe>
      </div>
    </>
  );
}

export default GlowRun;
