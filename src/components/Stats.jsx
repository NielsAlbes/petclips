import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Global.css"

const Stats = () => {
    const [stats, setStats] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect (() => {
        axios
            .get("http://localhost:5000/api/youtube/stats")
            .then((res) => {
                setStats(res.data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error fetching stats:", err);
                setLoading(false);
            });
    },  []);

    if (loading) return <p>Loading Data...</p>;
    if (!stats) return <p>No Data available...</p>

    return (
        <section id="stats" className="stats">
            <div className="stat">
                <h3>{Number(stats.views).toLocaleString()}+</h3>
                <p>Views</p>
            </div>
            <div className="stat">
                <h3>{Number(stats.subscribers).toLocaleString()}+</h3>
                <p>Subscribers</p>
            </div>
        </section>
    );
};

export default Stats;