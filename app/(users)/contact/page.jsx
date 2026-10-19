import { contactAction } from "./contactaction";

export const metadata = {
  title: "Contact Page",
  description: "This is my contact page",
  authors: [
    { name: "Sneha Mishra" },
    {
      name: "Sneha Technical",
      url: "https://example.com",
    },
  ],
  keywords: ["nextjs", "reactjs", "fullstack"],
};

const Contact = async () => {
  return (
    <div className="min-h-screen bg-[rgb(14,14,14)] text-white flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-gray-900 p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6">
          Contact Us
        </h1>

        <form action={contactAction} className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-2">
              Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Enter your name"
              required
              className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
              className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white"
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Enter your message"
              required
              className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 p-3 rounded-lg font-semibold"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;