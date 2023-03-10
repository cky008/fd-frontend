import { isLoggedInVar } from "../apollo";

export default function LoggedOutRouter() {
  return (
    <div>
      <h1>Logged Out</h1>
      <button onClick={() => isLoggedInVar(true)} type="button" className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Click to log in</button>
    </div>
  );
}