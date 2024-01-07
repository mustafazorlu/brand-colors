import React from "react";
import Modal from "react-modal";
import { useState } from "react";
import { GrClose } from "react-icons/gr";

const Sidebar = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const toggleModal = () => setModalIsOpen(!modalIsOpen);
    return (
        <>
            <aside className="sidebar">
                <div className="logo">
                    <a href="/">
                        Brand<b>Colors</b>
                    </a>
                </div>
                <div className="description">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Consequatur fugiat laboriosam et voluptas accusamus. Sequi?
                </div>
                <nav className="menu">
                    <ul>
                        <li>
                            <a onClick={toggleModal}>About BrandColors</a>
                        </li>
                    </ul>
                </nav>
            </aside>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={toggleModal}
                className="about-modal"
                overlayClassName="about-modal-overlay"
            >
                <button className="modal-close-btn" onClick={toggleModal}>
                    <GrClose />
                </button>
                <h3>BrandColors</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Culpa, alias! Optio officiis assumenda enim, quod
                    accusantium ea distinctio consequuntur nesciunt.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                    earum voluptatem quasi delectus excepturi totam?
                </p>
            </Modal>
        </>
    );
};

export default Sidebar;
