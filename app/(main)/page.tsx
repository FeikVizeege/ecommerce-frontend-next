"use client";

import { useEffect, useState } from "react";
import { MyCarousel } from "./_components/Carousel";
import axios from "axios";

export default function Home() {
    const [message, setMessage] = useState("");
    useEffect(() => {
        const fetchMessage = async () => {
            try {
                const res = await axios.get("http://localhost:8080/api/greeting");
                setMessage(res.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchMessage();
    }, []);

    return (
        <div className="flex flex-col items-center">
            <MyCarousel/>
            <div>This is bestseller</div>
            <div>This is new arrivals</div>
            <div>Message from Spring Boot: {message}</div>
            <div>HomePage</div>
            <div>HomePage</div>
            <div>HomePage</div>
            <div>HomePage</div>
            <div>HomePage</div>
            <div>HomePage</div>
            <div>HomePage</div>
            <div>HomePage</div>
            <div>HomePage</div>
        </div>
    );
}
