'use client'

const NotFound: React.FC = () => {
  return (
    <main
      className="flex flex-col justify-center items-center gap-12 w-full"
      style={{ height: "calc(100vh - 80px)" }}
    >
      <div className="flex flex-col justify-center items-center text-center gap-6">

        <div className="flex flex-col gap-3">
          <h6 className="font-semibold leading-6 text-primary">404 ERROR</h6>
          <h1 className="font-semibold text-6xl leading-18 tracking-[-0.02em] text-text-primary">
            Opps, Page Not Found
          </h1>
        </div>
        <p className="w-100 font-normal text-xl leading-7.5 text-text-muted">
          Sorry, the page you are looking for doesn&apos;t exist. Here are some helpful links:
        </p>
      </div>

      <div className="flex gap-3">
        <button
          className="
            flex items-center gap-2 py-3 px-5 
            bg-white border border-[#D5D7DA] 
            rounded-lg font-semibold leading-6 
            text-[#414651] shadow-xs
            hover:bg-gray-100 transition-colors
            hover:cursor-pointer
          "
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.1252 9.99917C18.1252 10.3442 17.8452 10.6242 17.5002 10.6242H4.00941L8.77606 15.3908C9.02022 15.635 9.02022 16.0308 8.77606 16.275C8.65439 16.3967 8.49437 16.4583 8.33437 16.4583C8.17437 16.4583 8.01434 16.3975 7.89267 16.275L2.05934 10.4417C2.00184 10.3842 1.95612 10.3151 1.92445 10.2384C1.86112 10.0859 1.86112 9.91342 1.92445 9.76092C1.95612 9.68426 2.00184 9.61497 2.05934 9.55747L7.89267 3.72414C8.13684 3.47997 8.5327 3.47997 8.77687 3.72414C9.02104 3.96831 9.02104 4.36417 8.77687 4.60834L4.01023 9.37498H17.5002C17.8452 9.37415 18.1252 9.65417 18.1252 9.99917Z"
              fill="#414651"
            />
          </svg>
          <span>Go back</span>
        </button>

        <button
          className="
            py-3 px-5 rounded-lg font-semibold leading-6 
            bg-[#003AD1] text-white shadow-xs
            hover:bg-blue-700 transition-colors hover:cursor-pointer
          "
        >
          Bring me home
        </button>
      </div>
    </main>
  );
}

export default NotFound;