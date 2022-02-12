export default function Mail() {
  return (
    <div className="flex my-3 p-3">
      <a href="mailto:jamesplant@gmail.com" className="flex text-gray-900 hover:text-violet-900 transition-transform duration-500 hover:translate-x-3">
        <div className="flex-none w-10">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <div className="flex-1 fira-mono py-1 pl-4">
          jamesplant@gmail.com
        </div>
      </a>
    </div>
  )
}