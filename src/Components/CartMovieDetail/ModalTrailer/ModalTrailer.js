import React from 'react'
// import { CSSTransition } from "react-transition-group";
import './ModalTrailer.scss';
import { MdClose } from 'react-icons/md';
const ModalTrailer = ({ trailer, open, handleToggle, nameMovie }) => {
    const getId = (url) => {
        if (!url) return null;
        const regExp =
            /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);

        return match && match[2].length === 11 ? match[2] : null;
    };
    const video_id = getId(trailer);
    return (
        <div className="modal-trailer">
            <div onClick={() => handleToggle(false)} className="overlay-trailer"></div>
            <div className='form-modal '>
                <span className='font-medium'>{nameMovie}</span>
                <div className="modal-content mt-4">
                    <iframe
                        style={{ position: "relative" }}
                        title="title4"
                        width="800px"
                        height="400px"
                        src={`https://www.youtube.com/embed/${video_id}`}
                        frameborder="0"
                        allowfullscreen
                    ></iframe>
                </div>
                <button className="close-modal font-medium text-orange-500 text-2xl hover:opacity-90" onClick={() => handleToggle(false)}>
                    <MdClose />
                </button>
            </div>
        </div >
    )
}

export default ModalTrailer;