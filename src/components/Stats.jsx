import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Global.css";

const animateValue = (start, end, duration, callback) => {
    const startTime = performance.now();

    const tick = (now) => {
        const progress = Math.min((now - startTime) / duration, 1);
        const value = Math.floor(start + (end - start) * progress);
        callback(value);

        if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
};

const Stats = () => {
    const [stats, setStats] = useState(null);
    const [loading, setLoading] = useState(true);

    const [views, setViews] = useState(0);
    const [subs, setSubs] = useState(0);
    const [country, setCountries] = useState(0);

    useEffect(() => {
        axios
            .get("https://petclips-backend.onrender.com/api/youtube/stats")
            .then((res) => {
                setStats(res.data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error fetching stats:", err);
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        if (stats) {
            animateValue(0, stats.views, 4000, setViews);
            animateValue(0, stats.subscribers, 3000, setSubs);
            animateValue(0, 185, 2000, setCountries);
        }
    }, [stats]);

    if (loading) return <p className="loading">Loading Data...</p>;
    if (!stats) return <p>No Data available...</p>;

    return (
        <section id="stats" className="stats">
            <div className="stat">
                <h3>{views.toLocaleString()}</h3>
                <p>Views</p>
            </div>

            <div className="stat">
                <h3>{subs.toLocaleString()}</h3>
                <p>Subscribers</p>
            </div>

            <div className="stat">
                <h3>{country}</h3>
                <p>Countries</p>
            </div>
        </section>
    );
};

export default Stats;