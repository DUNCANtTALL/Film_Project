import React, { useState } from "react";
import InputCategorie from "./InputCategorie";
import { Col } from "react-bootstrap";

function DeleteCategory({}) {

  const [name, setName] = useState([]);

  return (

    <div>
        <h3 className="ps-4">Supprimer une catégorie</h3>
        <Col className="deleteCategorie">
            <InputCategorie type={"text"} placeholder={"Supprimez une catégorie"} value={name} onChange={(e) => setName(e.target.value)}/>

            <button className="buttonCategorie">
                Supprimer
            </button>
        </Col>
    </div>
  );
}

export default DeleteCategory;
