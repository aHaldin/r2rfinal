export default function WorkflowDiagram() {
  return (
    <section className="bg-white py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <p className="text-xs font-bold section-label text-[#0FA284] uppercase mb-4">Before &amp; after</p>
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-[#25272C] max-w-3xl mb-16">
          The same business, six weeks apart.
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Before */}
          <div className="bg-[#F5F7F6] rounded-3xl border border-gray-200 p-8 md:p-10">
            <p className="text-xs font-bold section-label uppercase text-[#6B7280] mb-6">Before — manual and disconnected</p>
            <svg viewBox="0 0 400 288" className="w-full h-auto" role="img" aria-label="Diagram showing disconnected tools with manual copying between them">
              {["Email", "Spreadsheet", "CRM", "Finance", "Docs"].map((label, i) => {
                const pos = [[40, 30], [250, 25], [60, 130], [265, 135], [150, 210]][i];
                return (
                  <g key={label}>
                    <rect x={pos[0]} y={pos[1]} width="110" height="42" rx="10" fill="#F5F7F6" stroke="#D8DCDE" />
                    <text x={pos[0] + 55} y={pos[1] + 26} textAnchor="middle" fontSize="13" fontWeight="600" fill="#25272C">{label}</text>
                  </g>
                );
              })}
              <g stroke="#C6CBCE" strokeWidth="1.5" strokeDasharray="5 5" fill="none">
                <path d="M150,51 L250,46" /><path d="M95,72 L115,130" /><path d="M305,67 L320,135" />
                <path d="M170,151 L265,156" /><path d="M115,172 L190,210" /><path d="M265,177 L215,210" />
              </g>
              <text x="200" y="280" textAnchor="middle" fontSize="11" fill="#6B7280">every arrow = a person copying and pasting</text>
            </svg>
          </div>
          {/* After */}
          <div className="rounded-3xl p-8 md:p-10 hero-glow relative overflow-hidden">
            <div className="absolute inset-0 grid-pattern pointer-events-none" />
            <div className="relative">
              <p className="text-xs font-bold section-label uppercase text-[#B8F7E4] mb-6">After — one connected system</p>
              <svg viewBox="0 0 400 288" className="w-full h-auto" role="img" aria-label="Diagram showing tools connected through a central automation layer with AI">
                <rect x="130" y="105" width="140" height="50" rx="12" fill="#B8F7E4" />
                <text x="200" y="128" textAnchor="middle" fontSize="13" fontWeight="700" fill="#25272C">Automation</text>
                <text x="200" y="143" textAnchor="middle" fontSize="10" fontWeight="600" fill="#25272C">+ AI layer</text>
                {[["Email", 40, 30], ["Forms", 250, 30], ["CRM", 30, 190], ["Finance", 255, 190], ["Dashboard", 145, 205]].map(([label, x, y]) => (
                  <g key={label as string}>
                    <rect x={x as number} y={y as number} width="110" height="40" rx="10" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.22)" />
                    <text x={(x as number) + 55} y={(y as number) + 25} textAnchor="middle" fontSize="13" fontWeight="600" fill="#ffffff">{label as string}</text>
                  </g>
                ))}
                <g stroke="#B8F7E4" strokeWidth="2" fill="none" opacity="0.85">
                  <path d="M150,60 C190,70 190,95 195,105" /><path d="M285,70 C280,85 240,95 250,105" />
                  <path d="M120,190 C140,175 165,160 172,155" /><path d="M290,190 C280,175 250,160 240,155" />
                  <path d="M200,155 L200,205" />
                </g>
              </svg>
            </div>
          </div>
        </div>
        <p className="text-[#6B7280] text-sm mt-8 max-w-2xl">
          Illustrative diagram of the architecture pattern we build most often — the specific tools and flows are designed around your business.
        </p>
      </div>
    </section>
  );
}
