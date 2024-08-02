import React from "react";

// Components
import "./imageModel.scss";

export default function ImageModal({ isOpen, onClose, image }) {

    return (
        <div className={`imageModal ${isOpen ? "show" : "hidden"}`}>
            <span className="close" onClick={onClose}><i className="bx bx-x"/></span>
            <div className="imageModalContent">
                <img src={image} alt="Selected Image"/>
            </div>

            <div className="clickField" onClick={() => onClose()}/>
        </div>
    )

};