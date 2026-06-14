import type { Project } from "@/lib/projects";

/**
 * Logos rendus INLINE pour rester réactifs au thème (les classes Tailwind /
 * currentColor ne s'appliquent pas dans une balise <img>). Les logos
 * monochromes en image (gleam, 42) utilisent un filtre CSS.
 */
function Logo({ project }: { project: Project }) {
    const base = "w-full h-full max-w-[360px] max-h-[360px]";

    switch (project.slug) {
        case "zerodoc":
            return (
                <svg viewBox="0 0 24 24" fill="none" role="img" aria-label="zerodoc" className={base}>
                    <rect x="3" y="3" width="18" height="18" rx="5" className="fill-foreground" />
                    <rect x="7.5" y="7" width="9" height="2.2" rx="1.1" className="fill-background" />
                    <rect x="7.5" y="11" width="9" height="2.2" rx="1.1" className="fill-background opacity-70" />
                    <rect x="7.5" y="15" width="5.5" height="2.2" rx="1.1" className="fill-background opacity-45" />
                </svg>
            );
        case "parlenote":
            return (
                <svg viewBox="0 0 32 32" fill="none" role="img" aria-label="parlenote" className={`${base} text-foreground`}>
                    <rect x="14" y="6" width="4" height="20" rx="2" fill="currentColor" />
                    <rect x="7" y="10" width="4" height="12" rx="2" fill="currentColor" opacity="0.7" />
                    <rect x="21" y="10" width="4" height="12" rx="2" fill="currentColor" opacity="0.7" />
                    <rect x="0" y="13" width="4" height="6" rx="2" fill="currentColor" opacity="0.4" />
                    <rect x="28" y="13" width="4" height="6" rx="2" fill="currentColor" opacity="0.4" />
                </svg>
            );
        case "allopitch":
            return (
                <svg viewBox="0 0 562 507" fill="none" role="img" aria-label="allopitch" className={base}>
                    <path d="M364 182H508V182C508 257.111 447.111 318 372 318H364V182Z" fill="#D50100" />
                    <path d="M4 200C4 89.5431 93.543 0 204 0H367V299C367 409.457 277.457 499 167 499H4V200Z" className="fill-black dark:fill-white" />
                    <path d="M367 172H558V172C558 77.007 480.993 0 386 0H367V172Z" fill="#D50100" />
                    <circle cx="260.5" cy="99.5" r="46.5" className="fill-white dark:fill-black" />
                    <ellipse cx="272.5" cy="110" rx="23.5" ry="24" className="fill-black dark:fill-white" />
                </svg>
            );
        default: {
            // gleam & ecole-42 : logos monochromes -> couleur du thème via filtre.
            const isMono = project.slug === "gleam" || project.slug === "ecole-42";
            const filter = isMono ? "brightness-0 dark:invert" : "";
            // gleam est un logo plein cadre : on le réduit pour qu'il respire.
            const size =
                project.slug === "gleam"
                    ? "w-full h-full max-w-[220px] max-h-[220px]"
                    : base;
            return (
                <img
                    src={`/images/projects-image/${project.image}`}
                    alt={project.name}
                    className={`${size} object-contain ${filter}`}
                />
            );
        }
    }
}

export function ProjectVisual({
    project,
    rounding = "",
    padding = "p-16 md:p-40",
    heightClass = "h-full",
}: {
    project: Project;
    rounding?: string;
    padding?: string;
    heightClass?: string;
}) {
    // Projets "photo" : image plein cadre.
    if (project.fit === "cover") {
        return (
            <img
                src={`/images/projects-image/${project.image}`}
                alt={project.name}
                className={`w-full ${heightClass} object-cover ${rounding}`}
            />
        );
    }

    // Logos : panneau gris adapté au thème, logo centré.
    return (
        <div
            className={`w-full ${heightClass} grid place-items-center bg-neutral-200 dark:bg-neutral-900 ${rounding} ${padding}`}
        >
            <Logo project={project} />
        </div>
    );
}

export default ProjectVisual;
