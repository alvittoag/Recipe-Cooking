import React from "react";
import { useParams } from "react-router-dom";

const Recipes = () => {
  const params = useParams();
  return (
    <div className="text-xl md:text-2xl md:mt-7 font-semibold text-slate-700">
      <div>
        {params.key === "resep-dessert" ? <h1>Resep Dessert</h1> : null}
      </div>
      <div>
        {params.key === "masakan-hari-raya" ? <h1>Masakan Hari Raya</h1> : null}
      </div>
      <div>
        {params.key === "masakan-tradisional" ? (
          <h1>Masakan Traditional</h1>
        ) : null}
      </div>
      <div>
        {params.key === "makan-malam" ? <h1>Menu Makan Malam</h1> : null}
      </div>
      <div>
        {params.key === "makan-siang" ? <h1>Menu Makan Siang</h1> : null}
      </div>
      <div>{params.key === "resep-ayam" ? <h1>Resep Ayam</h1> : null}</div>
      <div>{params.key === "resep-daging" ? <h1>Resep Daging</h1> : null}</div>
      <div>
        {params.key === "resep-sayuran" ? <h1>Resep Sayuran</h1> : null}
      </div>
      <div>
        {params.key === "resep-seafood" ? <h1>Resep Seafood</h1> : null}
      </div>
      <div>{params.key === "sarapan" ? <h1>Sarapan</h1> : null}</div>
    </div>
  );
};

export default Recipes;
