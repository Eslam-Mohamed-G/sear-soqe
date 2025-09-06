import React, { useEffect, useState } from 'react';
import axios from "axios";
import Cookies from "js-cookie";
import { useParams } from 'react-router-dom';

export default function SpecificCarAd() {
    const {id} = useParams();
    const [specificCar, setSpecificCar] = useState([]);
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
                setSpecificCar(response.data);
            } catch (error) {
                console.log(error);
            } finally {

            }
        };

        specificOffer();
    }, []);
    return (
        <div className="">
        </div>
    )
};