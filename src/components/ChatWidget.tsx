
import React, { useRef, useState, useEffect } from "react";
import { messageCircle, send, user } from "lucide-react";

const MESSAGES_SEED = [
  { id: 1, from: "agent", text: "Hi! 👋 How can we help you today?" },
];

function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState(MESSAGES_SEED);
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open && bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [open, messages]);

  function sendMessage() {
    if (input.trim().length === 0) return;
    setMessages((msgs) => [
      ...msgs,
      { id: Date.now(), from: "user", text: input.trim() },
    ]);
    setInput("");
    // Example auto-reply - you can remove or improve it
    setTimeout(() => {
      setMessages((msgs) => [
        ...msgs,
        { id: Date.now() + 1, from: "agent", text: "We'll get back to you soon!" },
      ]);
    }, 800);
  }

  if (!open) {
    return (
      <button
        aria-label="Open chat"
        className="fixed bottom-6 right-6 z-50 p-3 rounded-full shadow-lg bg-primary text-primary-foreground hover:scale-105 transition-transform"
        onClick={() => setOpen(true)}
      >
        <messageCircle size={28} />
      </button>
    );
  }

  return (
    <>
      <button
        aria-label="Close chat"
        className="fixed bottom-72 right-6 z-50 p-1 rounded-full bg-muted text-muted-foreground shadow border hover:bg-accent"
        onClick={() => setOpen(false)}
      >
        ×
      </button>
      <div className="fixed bottom-6 right-6 z-50 w-80 max-w-[95vw] rounded-xl shadow-xl bg-white border flex flex-col"
        style={{ minHeight: "400px", maxHeight: "70vh" }}
      >
        {/* Header */}
        <div className="flex items-center gap-2 px-4 py-3 border-b bg-primary text-primary-foreground rounded-t-xl">
          <user size={28} className="bg-white/20 rounded-full p-1" />
          <div className="flex-1">
            <div className="text-base font-semibold">Support Chat</div>
            <div className="text-xs opacity-80">Typically replies in a few minutes</div>
          </div>
        </div>
        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-3 space-y-2 bg-muted"
             style={{ minHeight: 0, fontSize: "15px" }}>
          {messages.map(msg => (
            <div
              key={msg.id}
              className={
                msg.from === "user"
                  ? "flex justify-end"
                  : "flex justify-start"
              }
            >
              <div
                className={
                  "px-3 py-2 rounded-lg " +
                  (msg.from === "user"
                    ? "bg-primary text-primary-foreground rounded-br-sm"
                    : "bg-white border rounded-bl-sm")
                }
              >
                {msg.text}
              </div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>
        {/* Input */}
        <form
          className="p-3 border-t flex gap-2 bg-white"
          onSubmit={e => {
            e.preventDefault();
            sendMessage();
          }}
        >
          <input
            type="text"
            placeholder="Type your message…"
            className="flex-1 px-3 py-2 border rounded-lg bg-muted focus:outline-none focus:ring-2 focus:ring-primary text-sm"
            value={input}
            onChange={e => setInput(e.target.value)}
            autoFocus
          />
          <button
            type="submit"
            className="p-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/80 transition"
            aria-label="Send message"
            disabled={input.length === 0}
          >
            <send size={20} />
          </button>
        </form>
      </div>
    </>
  );
}

export default ChatWidget;
