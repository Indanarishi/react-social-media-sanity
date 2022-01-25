import { useState, useEffect } from "react";

// router
import { useParams } from "react-router-dom";

// sanity
import { client } from "../client";
import { searchQuery } from "../utils/data";
import { feedQuery } from "../utils/data";

// components
import MasonryLayout from "./MasonryLayout";
import Spinner from "./Spinner";

const Feed = () => {
    const [pins, setPins] = useState(null)
    const [loading, setLoading] = useState(false)
    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)
        if (categoryId) {
            const query = searchQuery(categoryId)

            client.fetch(query)
                .then(data => {
                    setPins(data)
                    setLoading(false)
                })
        } else {
            client.fetch(feedQuery)
                .then(data => {
                    setPins(data)
                    setLoading(false)
                })
        }
    }, [categoryId])

    if (loading) return <Spinner message="We are adding new ideas to your feed!" />

    if (!pins?.length) return <h2>No pins available</h2>

    return (
        <div>
            {pins && <MasonryLayout pins={pins} />}
        </div>
    )
};

export default Feed;
