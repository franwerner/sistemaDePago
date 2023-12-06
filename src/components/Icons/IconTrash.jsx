export const IconTrash = ({ borrarItem,classAdd}) => {
    return (
        <i
            onClick={borrarItem}
            className={`text-lightdark zoom  cursor-block fa-regular fa-trash-can ${classAdd}`}></i>
    );
};