
// sanity
import { urlFor } from "../client";

const Pin = ({ pin }) => {

    const { image, postedBy, _id, destination } = pin

    return (
        <div>
            <img src={urlFor(image).width(250).url()} alt="user-post" className="rounded-lg w-full" />
        </div>
    )
};

export default Pin;
