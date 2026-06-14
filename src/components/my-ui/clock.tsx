"use client";

import { useState, useEffect } from "react";

const formatTime = (date: Date): string => {
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
};

const Clock = () => {
    // Vide au premier rendu (serveur) pour éviter un mismatch d'hydratation,
    // puis mis à jour côté client chaque seconde.
    const [time, setTime] = useState("");

    useEffect(() => {
        const update = () => setTime(formatTime(new Date()));
        update();
        const interval = setInterval(update, 1000);
        return () => clearInterval(interval);
    }, []);

    // <span> (et non <div>) : ce composant est rendu à l'intérieur de balises <p>.
    return <span suppressHydrationWarning>{time}</span>;
};

export default Clock;
