export default function Tooltip({ message }: { message: string }) {
  return (
    <div className="group relative flex">
      <div className="icon-container hover:filter-dark">
        <svg
          className="w-6 h-6 text-gray-300 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            fillRule="evenodd"
            d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm9.008-3.018a1.502 1.502 0 0 1 2.522 1.159v.024a1.44 1.44 0 0 1-1.493 1.418 1 1 0 0 0-1.037.999V14a1 1 0 1 0 2 0v-.539a3.44 3.44 0 0 0 2.529-3.256 3.502 3.502 0 0 0-7-.255 1 1 0 0 0 2 .076c.014-.398.187-.774.48-1.044Zm.982 7.026a1 1 0 1 0 0 2H12a1 1 0 1 0 0-2h-.01Z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <span className="absolute z-0 left-8 mb-0 scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100  min-w-[300px] max-w-xs">
        {message}
      </span>
    </div>
  );
}
