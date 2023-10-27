import styles from "@/styles/IconBell.module.css"

 const IconBell = () => {

    return (
        <div className={`${styles.iconContainer}   position-relative`}>
            <span className="position-absolute  rounded-circle text-center text-white fw-semibold">33</span>
            <i className="fa-regular mx-2 mx-sm-3 fa-bell"></i>
        </div>
    )

}

export default IconBell