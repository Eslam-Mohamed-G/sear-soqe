import React from 'react';
import axios from "axios";
import Cookies from "js-cookie";

export default function SpecificCarAd() {
    useEffect(() => {
        const specificOffer = async () => {
            try {
                const cookieValue = Cookies.get("loginData");
                if (!cookieValue) { return; }
                const { token, user } = JSON.parse(cookieValue);
                const response = await axios.get(`https://adminsand.alrmoz.com/api/user/listings/${id}`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                            Accept: "application/json",
                        }
                    }
                );
                console.log(response);
            } catch (error) {
                console.log(error);
            } finally {

            }
        };

        specificOffer();
    }, []);
    return (
        <div>SpecificCarAd</div>
    )
};