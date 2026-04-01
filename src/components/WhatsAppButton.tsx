export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/971501234567"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 win-window flex flex-col items-center"
      style={{ textDecoration: 'none', width: 80 }}
    >
      <div
        className="win-titlebar text-[8px] w-full"
        style={{ padding: '2px 4px', justifyContent: 'space-between' }}
      >
        <span>Chat</span>
        <div className="flex gap-0.5">
          <span className="win-titlebar-btn" style={{ width: 10, height: 10 }}>_</span>
          <span className="win-titlebar-btn text-red-700" style={{ width: 10, height: 10 }}>✕</span>
        </div>
      </div>
      <div
        className="bg-[#d4d0c8] p-1 flex flex-col items-center gap-0.5 w-full"
        style={{ fontFamily: 'Tahoma, Arial, sans-serif' }}
      >
        <div style={{ fontSize: 24 }}>💬</div>
        <div className="win-btn win-btn-primary" style={{ fontSize: 8, height: 16, padding: '0 4px', minWidth: 'auto' }}>
          WhatsApp
        </div>
        <div className="win-blink" style={{ fontSize: 7, color: '#ff0000', fontWeight: 'bold' }}>
          ONLINE
        </div>
      </div>
    </a>
  );
}
