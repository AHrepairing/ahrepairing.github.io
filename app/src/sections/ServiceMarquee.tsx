export default function ServiceMarquee() {
  const services = 'Split AC Repairing \u25C6 Washing Machine Repair \u25C6 Oven Repair \u25C6 Non-Frost Refrigerator Repair \u25C6 TV Repairing \u25C6 Dishwasher Repair \u25C6 '

  return (
    <div className="w-full bg-white py-5 overflow-hidden border-y border-gray-100">
      <div className="flex whitespace-nowrap animate-marquee">
        {[0, 1].map((i) => (
          <span
            key={i}
            className="text-[clamp(32px,4vw,48px)] font-extrabold mx-8 shrink-0"
            style={{
              WebkitTextStroke: '1px #E5E7EB',
              color: 'transparent',
            }}
          >
            {services}
          </span>
        ))}
      </div>
    </div>
  )
}
