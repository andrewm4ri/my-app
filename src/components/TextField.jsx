import React from "react";

export default function TextField(props) {
  return (
    <div>
      <label
        htmlFor="first_name"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {props.label}
      </label>
      <input
        type="text"
        value={props.value}
        id="first_name"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        // placeholder="John"
        required
        onChange={props.onChange}
      />
      <label
        htmlFor="first_name"
        className="block mb-2 text-sm font-small text-red-900 dark:text-red-200"
      >
        {props.error}
      </label>
    </div>
  );
}
