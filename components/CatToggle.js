import { useState, useEffect } from "react";

export default function CatToggle() {
  const [catEnabled, setCatEnabled] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("catEnabled");
    if (saved !== null) {
      setCatEnabled(saved === "true");
    }
  }, []);

  const handleToggle = () => {
    const newValue = !catEnabled;
    setCatEnabled(newValue);
    localStorage.setItem("catEnabled", String(newValue));

    // Dispatch custom event to notify PixelCat
    window.dispatchEvent(new CustomEvent("catToggle", { detail: { enabled: newValue } }));
  };

  if (!mounted) return null;

  return (
    <div className="p-6 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-xl">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-1">
            Stray Cat
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Toggle the wandering pixel cat on/off
          </p>
        </div>

        <button
          onClick={handleToggle}
          className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors ${
            catEnabled ? "bg-blue-600" : "bg-gray-300 dark:bg-zinc-700"
          }`}
          aria-label="Toggle cat"
        >
          <span
            className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
              catEnabled ? "translate-x-7" : "translate-x-1"
            }`}
          />
        </button>
      </div>
    </div>
  );
}
