import React from 'react'
import { useState } from 'react'
import "./modal.css"

const Modal = ({closeModal}) => {


    return (
        <>
        <div className="modal-wrapper">
            <div className="overlay">
                <div className="modal-content">
                    <h2 className='hello'>안녕하세요</h2>
                    <p>모달 내용은 어쩌고 저쩌고</p>
                </div>
                    <button className='close-modal' onClick={closeModal}>닫기</button>
            </div>
        </div>
    
        </>
    )
}

export default Modal;