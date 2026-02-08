'use client'

const ThankYou: React.FC = () => {
  return (
    <main
      className="flex flex-col justify-center items-center gap-12 w-full"
      style={{ height: "calc(100vh - 80px)" }}
    >
      <div className="flex flex-col justify-center items-center text-center gap-6">
        <h1 className="font-semibold text-6xl leading-18 tracking-[-0.02em] text-[#181D27]">
          Thank you for contacting Codifyx!
        </h1>
        <p className="w-120 font-normal text-xl leading-7.5 text-[#535862]">
          Our team has received your message and will reach out to you within 24 hours.
        </p>
      </div>

      <button
        onClick={() => window.location.href = "/"}
        className="flex gap-2 font-semibold leading-6 bg-pr text-[#003AD1]"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M15 17.4994H12.3334C12.195 17.4994 12.0833 17.3877 12.0833 17.2494V13.7494C12.0833 12.5986 11.1508 11.6661 10 11.6661C8.84917 11.6661 7.91667 12.5986 7.91667 13.7494V17.2494C7.91667 17.3877 7.80496 17.4994 7.66663 17.4994H5C3.33333 17.4994 2.5 16.6661 2.5 14.9994V9.70858C2.5 8.04358 2.93588 7.78779 3.69171 7.15446L8.6617 2.98687C9.43587 2.33771 10.565 2.33771 11.3392 2.98687L16.3092 7.15446C17.0642 7.78779 17.5008 8.04358 17.5008 9.70858V14.9994C17.5 16.6661 16.6667 17.4994 15 17.4994Z" fill="#003AD1"/>
        </svg>

        <span className="hover:cursor-pointer">Bring me to the main page</span>
      </button>
    </main>
  );
}

export default ThankYou;