import { useState, useRef } from "react";
import Link from "next/link";
// import useSWR from "swr";
import format from "comma-number";
// import { trackGoal } from "fathom-client";

// import fetcher from "@/lib/fetcher";
import SuccessMessage from "@/components/SuccessMessage";
import ErrorMessage from "@/components/ErrorMessage";
import LoadingSpinner from "@/components/LoadingSpinner";

export default function Contact() {
  const Divider = () => {
    return (
      <div className="border border-gray-200 dark:border-gray-600 w-full my-8" />
    );
  };

  const [form, setForm] = useState(false);
  const inputEl = useRef(null);
  //   const { data } = useSWR("/api/subscribers", fetcher);
  //   const subscriberCount = format(data?.count);

  const subscribe = async (e) => {
    e.preventDefault();
    setForm({ state: "loading" });

    try {
      const res = await fetch("/api/sendgrid", {
        body: JSON.stringify({
          email: inputEl.current.value,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      const data = await res.json();

      if (data.error) {
        setForm({
          state: "error",
          message: data.error,
        });
        return;
      }

      // trackGoal("JYFUFMSF", 0);
      inputEl.current.value = "";
      setForm({
        state: "success",
        message: `Hooray! You're now on the list. Check your inbox or promotions for a mail.`,
      });
    } catch (error) {
      setForm({
        state: "error",
        message: "Something went wrong. Please try again.",
      });
    }
  };

  const isLoading = form.state === "loading";

  return (
    <div className="border border-blue-200 rounded p-6 my-4 w-full dark:border-gray-800 bg-blue-50 dark:bg-blue-opaque">
      <h5 className="text-lg md:text-xl font-bold text-gray-900 dark:text-gray-100">
        Want to hire me as a freelancer? Let's discuss.
      </h5>
      <p className="my-1 text-gray-800 dark:text-gray-200">
        Drop your message and let's discuss about your project.
      </p>
      <a
        href="https://wa.me/923483314202?text=I want to work on a project with you"
        className="mt-4 px-4 text-center w-full font-bold h-8 bg-green-400 hover:bg-green-500 dark:bg-green-400 dark:hover:bg-green-500 text-gray-900 py-1 dark:text-gray-900 rounded transition-colors duration-200 block"
      >
        Chat on WhatsApp
      </a>

      <Divider />
      <p className="my-1 text-gray-800 dark:text-gray-200">
        Drop in your email ID and I will get back to you.
      </p>
      <form className="relative my-4" onSubmit={subscribe}>
        <input
          ref={inputEl}
          aria-label="Email for contact"
          placeholder="your.email@example.com"
          type="email"
          autoComplete="email"
          required
          disabled={isLoading}
          className={`px-4 py-2 mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full border-gray-300 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 transition-colors duration-200 ${isLoading
            ? 'opacity-50 cursor-not-allowed'
            : 'hover:border-blue-400 dark:hover:border-blue-400'
            }`}
        />
        <button
          className={`flex items-center justify-center absolute right-1 top-1 px-4 font-bold h-8 rounded w-28 transition-all duration-200 ${isLoading
            ? 'bg-gray-200 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed'
            : 'bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-gray-100 hover:shadow-sm'
            }`}
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <LoadingSpinner />
              <span className="ml-2">Sending...</span>
            </>
          ) : (
            "Send"
          )}
        </button>
      </form>

      {form.state === "error" ? (
        <ErrorMessage>{form.message}</ErrorMessage>
      ) : form.state === "success" ? (
        <SuccessMessage>{form.message}</SuccessMessage>
      ) : (
        <p className="text-sm text-gray-800 dark:text-gray-200"></p>
      )}
    </div>
  );
}