import React from "react";
import { useParams } from "react-router-dom";
import error400 from "../assets/error400.jpg";
import error401 from "../assets/error401.jpg";
import error403 from "../assets/error403.jpg";

// Mapping kode ke deskripsi dan gambar
const errorData = {
  400: {
    gambar: error400,
  },
  401: {
    gambar: error401,
  },
  403: {
    gambar: error403,
  },
};

export default function Error() {
  const { code } = useParams(); // Example: /error/401
  const data = errorData[code];

  // Komponen ErrorPage yang mendisplay detail error
  const ErrorPage = ({ kode, gambar }) => {
    return (
      <div className="error-page">
        <img src={gambar} alt={`Error ${kode}`} />
      </div>
    );
  };

  return (
    <ErrorPage
      kode={code}
      gambar={data.gambar}
    />
  );
}
