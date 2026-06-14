import { NextResponse } from "next/server";

// Évite toute mise en cache de la réponse de l'IA
export const dynamic = "force-dynamic";

const MISTRAL_URL = "https://api.mistral.ai/v1/chat/completions";

// Contexte injecté à chaque conversation : "Yannis AI" répond à propos de Yannis.
const SYSTEM_PROMPT = `Tu es "Yannis AI", l'assistant du portfolio de Yannis Nzue Essono.
Tu réponds aux visiteurs à propos de Yannis, de manière concise, chaleureuse et professionnelle.
Réponds toujours dans la langue de la question (français ou anglais).
Si une question sort du cadre de Yannis, recadre poliment vers son parcours, ses projets ou comment le contacter.
Ne fabrique jamais d'informations : si tu ne sais pas, dis-le et propose de contacter Yannis directement.

# À propos de Yannis
- Développeur full-stack (frontend, backend, architecture) et entrepreneur.
- Étudiant à l'École 42 (la "Yannis School" / 42 fait référence à l'École 42).
- CEO de GLEAM : automatisations code et no-code, intégration d'IA pour aider les entreprises à se concentrer sur leur cœur de métier.
- Basé en France (Paris / Lyon). Disponible en freelance, travail à distance.
- Gagnant d'une compétition d'entrepreneuriat à Lyon en 2024 (projet Osmoze).

# Parcours
- 2025 - aujourd'hui : École 42 & CEO de GLEAM.
- 2023 - 2024 : Alternance chez HomeServe Energy Services en Data Product Management (qualité des données, workflow).
- 2022 - 2023 : DUT Data Science à l'IUT Lumière de Lyon (Business Intelligence, analyse de données).

# Stack technique
Python, React, Django, C/C++, n8n, Selenium, Playwright, UiPath, PostgreSQL, Power BI, Excel, Azure, Git, Figma.

# Projets
- Tiktok Bot (2025) : création automatique de contenu et publication directe sur TikTok (Python, Raspberry Pi).
- Winorwin (2024) : application web pour les réunions d'affaires.
- Homeserve (2023) : gestion de données pour les produits HomeServe.
- Trading Bot (2023) : analyse de prix automatisée via indicateurs et exécution de trades.
- Minishell : recréation d'un terminal en C.
- Transcendance : application web pour jouer à Pong en ligne avec fonctionnalités sociales.
- Osmoze (2024) : projet gagnant d'une compétition d'entrepreneuriat à Lyon.
- Gleam : analyse de données, simulation et automatisation pour l'industrie.
- Youtube : chaîne YouTube "Le Monde de Yannis 42" présentant ses projets.

# Contact
- Email : yannis.nzuepro@gmail.com
- LinkedIn : https://www.linkedin.com/in/yannis-nzue-essono-0089571a6/
- YouTube : https://www.youtube.com/@LeMondeDeYannis42
- GitHub : https://github.com/xxbadgame`;

type ChatMessage = { role: "system" | "user" | "assistant"; content: string };

export async function POST(req: Request) {
  const apiKey = process.env.MISTRAL_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "MISTRAL_API_KEY manquante. Ajoute-la dans .env.local." },
      { status: 500 }
    );
  }

  let body: { messages?: ChatMessage[]; message?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Corps de requête invalide." }, { status: 400 });
  }

  // Accepte soit une liste de messages, soit un message unique.
  const history: ChatMessage[] = Array.isArray(body.messages)
    ? body.messages
    : body.message
    ? [{ role: "user", content: body.message }]
    : [];

  if (history.length === 0) {
    return NextResponse.json({ error: "Aucun message fourni." }, { status: 400 });
  }

  try {
    const res = await fetch(MISTRAL_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: process.env.MISTRAL_MODEL || "mistral-small-latest",
        messages: [{ role: "system", content: SYSTEM_PROMPT }, ...history],
        temperature: 0.4,
        max_tokens: 600,
      }),
    });

    if (!res.ok) {
      const detail = await res.text();
      console.error("Mistral API error:", res.status, detail);
      return NextResponse.json(
        { error: "Erreur de l'API Mistral." },
        { status: 502 }
      );
    }

    const data = await res.json();
    const reply: string =
      data?.choices?.[0]?.message?.content?.trim() ??
      "Désolé, je n'ai pas de réponse pour le moment.";

    return NextResponse.json({ reply });
  } catch (err) {
    console.error("Chat route error:", err);
    return NextResponse.json({ error: "Erreur serveur." }, { status: 500 });
  }
}
