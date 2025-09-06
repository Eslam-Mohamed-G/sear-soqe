import React from 'react';
import axios from "axios";
import Cookies from "js-cookie";

export default function SpecificCarAd({id}) {
    useEffect(() => {
        const specificOffer = async () => {
            try {
                const cookieValue = Cookies.get("loginData");
                if (!cookieValue) { return; }
                const { token, user } = JSON.parse(cookieValue);
            } catch (error) {

            } finally {

            }
        }
    }, []);
    return (
        <div>SpecificCarAd</div>
    )
};