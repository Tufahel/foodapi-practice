import { useState } from "react";
import "../styles/Popup.css";
import Modal from "react-overlays/Modal";

function Popup() {
    const [showModal, setShowModal] = useState(false);

    const renderBackdrop = (props) => <div className="backdrop" {...props} />;

    var handleClose = () => setShowModal(false);

    return (
        <div className="modal-example">
            <div>
                <button type="button" onClick={() => setShowModal(true)}>
                    Open Modal
                </button>
            </div>

            <Modal
                className="modal"
                show={showModal}
                onHide={handleClose}
                renderBackdrop={renderBackdrop}
            >
                <div>
                    <div className="modal-header">
                        <div className="modal-title">Modal Heading</div>
                        <div>
                            <span className="close-button" onClick={handleClose}>
                                x
                            </span>
                        </div>
                    </div>
                    <div className="modal-desc">
                        <p>Modal body contains text.</p>
                    </div>
                    <div className="modal-footer">
                        <button className="secondary-button" onClick={handleClose}>
                            Close
                        </button>
                    </div>
                </div>
            </Modal>
        </div>
    );
}

export default Popup;