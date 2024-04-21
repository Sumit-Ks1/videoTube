
function AvatarBackCard(props) {

    function handleClick() {
        props.onSelect(props.id);
    }
    return (

        <div className="avatar-back col">
            <div onClick={handleClick}>
                <img src={"src/assets/avatar-back/avatar-back" + String(props.id) + ".jpg"} alt="Backgound Image" />
                {/* <h1> this is elon musk </h1> */}
            </div>
        </div>

    )
}

export default AvatarBackCard