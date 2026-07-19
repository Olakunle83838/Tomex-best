import { useEffect } from "react";

function ChatBot() {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "module";

    script.textContent = `
      import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';

      createChat({
        webhookUrl: 'https://kcemma.dedyn.io/webhook/4091fa09-fb9a-4039-9411-7104d213f601/chat',
        target: '#n8n-chat',
        mode: 'window',
        chatInputKey: 'chatInput',
        chatSessionKey: 'sessionId',
        showWelcomeScreen: false,
        initialMessages: [
          "Hi, I'm Tomex Bot — your guide to the TOMEX project."
        ],
      });
    `;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div id="n8n-chat"></div>;
}

export default ChatBot;