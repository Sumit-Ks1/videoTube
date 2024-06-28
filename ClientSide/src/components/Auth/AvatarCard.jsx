
function AvatarCard(props) {

    function handleClick() {
        props.onSelect(props.id);
    }

    return (
        <>
            <div className="col">
                <div className="avatar-card-div card  rounded-5 text-light" onClick={handleClick}>
                    <img src={"src/assets/avatars/avatar" + String(props.id) + ".svg"} className="card-img-top" alt="avatar image" />
                    {/* <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div> */}
                </div>
            </div>
        </>
    )
}

export default AvatarCard