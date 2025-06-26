import React from "react";
import Images from "./common/Images";

const Banner = () => (
  <section className=" container py-12">
    <div className="flex flex-col md:flex-row items-start gap-8 justify-between">
      <h2 className="text-2xl md:text-3xl font-semibold leading-snug md:w-1/2">
        Et nunc ut tempus duis nisl sed <br /> massa
      </h2>

      <p className="text-sm text-gray-600 md:w-1/2 leading-relaxed">
        Nunc sed a nisl purus. Nibh dis faucibus proin lacus tristique. Sit congue non
        vitae odio sit erat in. Felis eu ultrices a sed massa. Commodo fringilla sed
        tempor risus laoreet ultricies ipsum. Habitasse morbi faucibus in iaculis lectus.
        Nisi enim feugiat enim volutpat. Sem quis viverra viverra odio mauris nunc.
      </p>
    </div>

    <div className="mt-10 bg-slate-50 rounded-xl overflow-hidden">
      <Images src="/Images/bgg.png" className="w-full h-full md:h-96 object-cover" />
    </div>
  </section>
);

export default Banner;
