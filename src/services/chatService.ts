// This service handles the fallback logic as requested:
// Groq Key 1 -> Groq Key 2 -> OpenRouter Key 1 -> OpenRouter Key 2

const KEYS = [
    { provider: 'groq', key: import.meta.env.VITE_GROQ_API_KEY_1, url: 'https://api.groq.com/openai/v1/chat/completions', model: 'llama3-8b-8192' },
    { provider: 'groq', key: import.meta.env.VITE_GROQ_API_KEY_2, url: 'https://api.groq.com/openai/v1/chat/completions', model: 'llama3-8b-8192' },
    { provider: 'openrouter', key: import.meta.env.VITE_OPENROUTER_API_KEY_1, url: 'https://openrouter.ai/api/v1/chat/completions', model: 'meta-llama/llama-3-8b-instruct:free' },
    { provider: 'openrouter', key: import.meta.env.VITE_OPENROUTER_API_KEY_2, url: 'https://openrouter.ai/api/v1/chat/completions', model: 'meta-llama/llama-3-8b-instruct:free' }
];

export async function sendMessageToAI(messages: { role: 'user' | 'assistant' | 'system', content: string }[]) {
    // System prompt to guide the AI
    const systemPrompt = {
        role: 'system',
        content: "You are a helpful, professional AI assistant for Localcollab (formerly impact.com). Your goal is to help users learn about the platform, schedule demos, and navigate partnerships, affiliates, and creator marketing. Keep answers concise and human-like."
    };

    const payloadMessages = [systemPrompt, ...messages];

    // Fallback engine
    for (let i = 0; i < KEYS.length; i++) {
        const config = KEYS[i];

        // Skip if key is missing in .env
        if (!config.key) continue;

        try {
            const response = await fetch(config.url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${config.key}`,
                    // OpenRouter specific headers (good practice)
                    ...(config.provider === 'openrouter' ? { 'HTTP-Referer': 'http://localhost:5173', 'X-Title': 'Localcollab' } : {})
                },
                body: JSON.stringify({
                    model: config.model,
                    messages: payloadMessages,
                    max_tokens: 500,
                    temperature: 0.7
                })
            });

            if (!response.ok) {
                console.warn(`[API] ${config.provider} (Key ${i + 1}) failed: ${response.statusText}`);
                continue; // Try next key
            }

            const data = await response.json();
            return data.choices[0].message.content;

        } catch (error) {
            console.warn(`[API] ${config.provider} (Key ${i + 1}) crashed:`, error);
            // Let the loop continue to the next fallback Key
        }
    }

    // If all keys fail
    return "I'm currently experiencing high traffic and all my connections are busy! Please try again in a moment or contact our support team directly.";
}
