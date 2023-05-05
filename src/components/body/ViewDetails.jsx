import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const ViewDetails = () => {
//   const [viewd, setViewd] = useState([]);
  const { id } = useParams();
//   console.log(id);
//   const [data] = useLoaderData();
//   console.log(data);

  useEffect(() => {
    fetch("https://chef-recipe-hunter-server-masumpost.vercel.app/viewresi")
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h3>This is view details page </h3>
     
       {/* const viewres = viewd.find(n => n.id === id) */}
     
     
    </div>
  );
};

export default ViewDetails;
