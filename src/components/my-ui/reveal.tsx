"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

const EASE: [number, number, number, number] = [0.21, 0.47, 0.32, 0.98];

type RevealProps = {
    children: ReactNode;
    className?: string;
    /** Délai avant le déclenchement (utile pour un effet décalé / stagger). */
    delay?: number;
    /** Décalage vertical de départ en pixels. */
    y?: number;
    /** Rejouer l'animation à chaque passage dans le viewport. */
    once?: boolean;
};

/**
 * Révèle son contenu en fondu + glissement vers le haut lorsqu'il entre
 * dans le viewport. Composant client : peut être utilisé depuis des
 * Server Components sans les convertir.
 */
export const Reveal = ({
    children,
    className,
    delay = 0,
    y = 40,
    once = true,
}: RevealProps) => {
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, y }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once, margin: "-80px" }}
            transition={{ duration: 0.6, delay, ease: EASE }}
        >
            {children}
        </motion.div>
    );
};

export default Reveal;
