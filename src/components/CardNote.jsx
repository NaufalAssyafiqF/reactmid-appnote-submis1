import React from "react";

const CardNote = () => {
  return (
    <div className="max-w-[350px] h-fit flex flex-col items-end shadow-[9px_5px_0px_0px_rgba(0,_0,_0,_0.8)] rounded-lg">
      <div className="flex items-center justify-end bg-[#8BD3DD] rounded-t-lg border-x-2 border-t-2 border-black  w-fit p-1">
        <p className="text-black font-comfortaa font-medium text-xs">Senin, 12 Agustus 2025</p>
      </div>
      <div
        className="w-full h-full bg-[#D9D9D9] rounded-lg border-2 border-black px-3 pt-2 pb-8"
        style={{ borderRadius: "5px 0 5px 5px" }}
      >
        <h1 className="text-black font-ibmPlexMono font-medium text-2xl mb-2">
          Modularization
        </h1>
        <p className="w-full h-full text-black font-comfortaa font-medium text-base overflow-hidden line-clamp-6 text-ellipsis">
          Untuk memastikan panjang card Anda konsisten meskipun jumlah teks
          berbeda-beda, Anda dapat mengatur maksimal jumlah karakter yang
          ditampilkan dalam teks dan memotongnya jika melebihi batas tersebut.
          Hal ini dapat dicapai dengan menggunakan CSS atau JavaScript.
        </p>
      </div>
    </div>
  );
};

export default CardNote;
