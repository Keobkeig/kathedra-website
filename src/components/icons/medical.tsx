export default function Medical({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path fillRule="evenodd" d="M11 5C9.89543 5 9 5.89543 9 7V9H7C5.89543 9 5 9.89543 5 11V13C5 14.1046 5.89543 15 7 15H9V17C9 18.1046 9.89543 19 11 19H13C14.1046 19 15 18.1046 15 17V15H17C18.1046 15 19 14.1046 19 13V11C19 9.89543 18.1046 9 17 9H15V7C15 5.89543 14.1046 5 13 5H11ZM11 7H13V9.5C13 10.3284 13.6716 11 14.5 11H17V13H14.5C13.6716 13 13 13.6716 13 14.5V17H11V14.5C11 13.6716 10.3284 13 9.5 13H7V11H9.5C10.3284 11 11 10.3284 11 9.5V7Z"/>
    </svg>
  );
}