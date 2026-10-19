import React from "react";
import { Home, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      <div className="max-w-lg w-full text-center">

        <h1 className="text-9xl font-bold text-white mb-4">
          404
        </h1>

        <h2 className="text-3xl font-semibold text-white mb-4">
          Page Not Found
        </h2>

        <p className="text-gray-400 mb-8">
          Sorry, the page you are looking for does not exist.
        </p>

        <div className="flex items-center justify-center gap-4">

          <Link
            href="/"
            className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            <Home size={20} />
            Go Home
          </Link>

          <Link
            href="/"
            className="flex items-center gap-2 border border-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
          >
            <ArrowLeft size={20} />
            Back to Home
          </Link>

        </div>
      </div>
    </div>
  );
}