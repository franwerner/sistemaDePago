import styles from "@/styles/IconMessage.module.css"

const IconMessage = () => {
    return (

        <div className={`${styles.iconContainer}  position-relative `}>
            <span className="position-absolute bg-danger rounded-circle text-center text-white fw-semibold">12</span>
            <i className="fa-regular  mx-2 mx-sm-3 fa-message"></i>
        </div>
    );
};

export default IconMessage