import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { getTaskById } from "../../../tasksSlice";



function SingleTaskPage() {
    const { id } = useParams();
 /*    const task = useSelector(state => getTaskById(state, id)); */

    return (
        <>
            <div>
                <p>title: {id}</p>
            </div>
            <div>
                <p> Ukonczone: Nie</p>
            </div>
        </>

    );
}

export default SingleTaskPage;