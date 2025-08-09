import React, { useEffect, useState } from "react";

function GetData() {
    const [data, SetData] = useState([]);

    useEffect(() => {
            fetch("https://as-code.wuaze.com/GetDataContact.php")
                .then((response) => {
                    if (!response.ok) {
                        throw new Error("Getting Data failed");
                    }
                    return response.json();
                })
                .then((data) => SetData[data])
        .catch((error) => {
            console.error(error.message)
        });
    }, [])
    console.log(data);
    return (
        <>

        </>
    )
}
export default GetData;