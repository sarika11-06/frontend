import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, User, MessageCircle } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Replace with your EmailJS serviceID, templateID, and publicKey
    emailjs
      .send(
        "service_1tndpap",
        "template_25q3lam",
        formData,
        "FQ3US5PB-e4fs0X6t"
      )
      .then(() => {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("Failed to send message:", error);
        alert("Failed to send message. Please try again later.");
      });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[91vh] px-4">
      <div className="bg-white p-10 rounded-2xl shadow-lg mt-6 w-full max-w-md">
        <h3 className="text-xl font-semibold text-center text-[#f54a00]">
          Send us a Message
        </h3>

        <form className="mt-4 space-y-4" onSubmit={handleSubmit}>
          <div className="relative">
            <User className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              className="w-full pl-10 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>

          <div className="relative">
            <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full pl-10 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>

          <div className="relative">
            <MessageCircle
              className="absolute left-3 top-3 text-gray-400"
              size={20}
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              value={formData.message}
              onChange={handleChange}
              className="w-full pl-10 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#f54a00] hover:bg-orange-700 text-white py-2 rounded-lg font-semibold"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
