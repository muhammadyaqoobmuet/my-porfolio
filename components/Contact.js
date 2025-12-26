import { useState, useRef } from "react";
import LoadingSpinner from "@/components/LoadingSpinner";
import SuccessMessage from "@/components/SuccessMessage";
import ErrorMessage from "@/components/ErrorMessage";
import { FaWhatsapp, FaArrowRight } from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState(false);
  const inputEl = useRef(null);

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

      inputEl.current.value = "";
      setForm({
        state: "success",
        message: `Hooray! Expect a message soon.`,
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
    <div className="w-full my-24 p-8 md:p-12 bg-zinc-50 dark:bg-zinc-900/50 border border-gray-200 dark:border-zinc-800 rounded-3xl">
      <div className="flex flex-col md:flex-row gap-8 md:gap-12 justify-between items-center">

        {/* Left Side: Headline & WhatsApp */}
        <div className="flex-1 w-full">
            <h5 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6 leading-tight">
                Let's work together
            </h5>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8">
                Have a project in mind or want to hire me as a freelancer? Let's discuss requirements and how I can help you scale.
            </p>

            <a
                href="https://wa.me/923483314202?text=I want to work on a project with you"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-lg rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-green-500/20 group hover:-translate-y-0.5"
            >
                <FaWhatsapp className="w-6 h-6" />
                <span>Chat on WhatsApp</span>
                <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
        </div>

        {/* Right Side: Divider & Newsletter */}
        <div className="flex-1 w-full bg-white dark:bg-zinc-900/80 p-8 rounded-2xl border border-gray-200 dark:border-zinc-800 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500/5 blur-2xl rounded-full -mr-10 -mt-10" />

            <h6 className="font-bold text-xl text-gray-900 dark:text-gray-100 mb-3 relative z-10">
                Email Me Instead
            </h6>
            <p className="text-gray-500 dark:text-gray-400 mb-8 leading-relaxed relative z-10">
                Drop your email and I'll get back to you shortly.
            </p>

            <form className="relative z-10" onSubmit={subscribe}>
                <div className="flex flex-col gap-3">
                    <input
                    ref={inputEl}
                    aria-label="Email for contact"
                    placeholder="name@company.com"
                    type="email"
                    autoComplete="email"
                    required
                    disabled={isLoading}
                    className="w-full px-5 py-4 bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-xl focus:ring-2 focus:ring-gray-900/10 dark:focus:ring-white/10 focus:border-gray-400 dark:focus:border-gray-500 transition-all outline-none text-gray-900 dark:text-gray-100 placeholder:text-gray-400"
                    />
                    <button
                        className={`w-full px-6 py-4 font-bold text-lg rounded-xl flex items-center justify-center gap-2 transition-all bg-gray-900 hover:bg-black dark:bg-white dark:hover:bg-gray-200 text-white dark:text-gray-900 shadow-lg ${isLoading ? 'opacity-70 cursor-wait' : 'hover:-translate-y-0.5'}`}
                        type="submit"
                        disabled={isLoading}
                    >
                    {isLoading ? <LoadingSpinner /> : (
                        <>
                        <span>Send Message</span>
                        <FaArrowRight className="w-3 h-3" />
                        </>
                    )}
                    </button>
                </div>
            </form>

            <div className="mt-4 min-h-[24px]">
                {form.state === "error" ? (
                    <ErrorMessage>{form.message}</ErrorMessage>
                ) : form.state === "success" ? (
                    <SuccessMessage>{form.message}</SuccessMessage>
                ) : null}
            </div>
        </div>

      </div>
    </div>
  );
}