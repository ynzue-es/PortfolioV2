"use client";

import { PlaceholdersAndVanishInput } from "../ui/placeholders-and-vanish-input";
import { Cover } from "@/components/ui/cover";
import { Reveal } from "../my-ui/reveal";
import { useState } from "react";

type ChatMessage = { role: "user" | "assistant"; content: string };

const Ai = () => {

    const placeholders = [
        "What is the Yannis School?",
        "What is the most complex project?",
        "Where is Yannis located?",
        "What is their favorite technology?",
        "What is Yannis' favorite project?",
    ];

    const [inputValue, setInputValue] = useState('');
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const question = inputValue.trim();
        if (!question || loading) return;

        const nextMessages: ChatMessage[] = [...messages, { role: "user", content: question }];
        setMessages(nextMessages);
        setInputValue('');
        setLoading(true);

        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ messages: nextMessages }),
            });

            const data = await response.json();
            const reply = response.ok
                ? data.reply
                : data.error || "Désolé, une erreur est survenue.";

            setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
        } catch (error) {
            console.error('There was an error!', error);
            setMessages((prev) => [
                ...prev,
                { role: "assistant", content: "Impossible de joindre l'assistant pour le moment." },
            ]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="h-[100vh] flex justify-center items-center" id="ai">
            <div className="px-8">
                <Reveal>
                    <p className="font-mono text-gray-400 font-semibold pb-4">FAQ</p>
                    <h2 className="text-4xl md:text-7xl pb-14">Ask <Cover>Yannis AI</Cover> Anything</h2>
                </Reveal>
                <div>
                    <div className="relative border rounded-2xl h-[50vh] overflow-hidden">
                        <div className="absolute bottom-[20%] w-full px-10 md:px-20 h-[80%] overflow-y-auto">
                            {messages.map((msg, index) => (
                            <div
                                key={index}
                                className={`md:max-w-[70%] max-w-[90%] p-4 rounded-2xl ${
                                msg.role === 'user'
                                    ? 'my-4 md:ml-[30%] ml-[10%] bg-blue-500 text-white text-left self-end rounded-br-none'
                                    : 'my-4 bg-gray-200 text-black self-start text-left rounded-bl-none'
                                }`}
                            >
                                {msg.content}
                            </div>
                            ))}
                            {loading && (
                                <div className="my-4 bg-gray-200 text-black self-start text-left rounded-2xl rounded-bl-none p-4 max-w-[90%] md:max-w-[70%]">
                                    Yannis AI réfléchit…
                                </div>
                            )}
                        </div>
                        <div className="absolute bottom-5 w-full px-10">
                            <PlaceholdersAndVanishInput
                            placeholders={placeholders}
                            onChange={handleChange}
                            onSubmit={onSubmit}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ai
