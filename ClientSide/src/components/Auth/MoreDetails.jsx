import AvatarCard from "./AvatarCard";

function MoreDetails() {



    return (
        <>
            <h1>Choose your avatar</h1>

            <div className="row row-cols-1 row-cols-md-6 g-4">
                <div className="col"></div>

                <AvatarCard />

                <div className="col"></div>
            </div>

        </>
    )
}

export default MoreDetails;