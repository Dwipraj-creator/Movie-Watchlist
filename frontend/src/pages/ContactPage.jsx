import React, { useState } from "react";
import {
  Mailbox,
  MessageCircle,
  MessageCircleDashedIcon,
  MessageSquare,
  Phone,
  SendHorizonal,
  User,
} from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [phoneError, setPhoneError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      setPhoneError("");
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validatePhone = (phone) => /^\d{10}$/.test(phone);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validatePhone(formData.phone)) {
      setPhoneError("Enter a valid 10 digit mobile number");
      return;
    }

    setIsSubmitting(true);

    const whatsappMessage =
      `Name: ${formData.name}%0A` +
      `Email: ${formData.email}%0A` +
      `Phone: ${formData.phone}%0A` +
      `Subject: ${formData.subject}%0A` +
      `Message: ${formData.message}`;

    const whatsappUrl = `https://wa.me/916295403978?text=${whatsappMessage}`;

    window.open(whatsappUrl, "_blank");

    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

      setIsSubmitting(false);
    }, 1500);
  };

  const isFormValid =
    formData.name &&
    formData.email &&
    validatePhone(formData.phone) &&
    formData.subject &&
    formData.message;

  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-zinc-950 to-red-950 text-white px-6 py-14">

      <div className="max-w-6xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-14">

          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
            🎬 Contact <span className="text-red-500">Studio</span>
          </h1>

          <p className="text-zinc-400 max-w-2xl mx-auto">
            Have a project idea, collaboration, or feedback?
            Send your message directly to WhatsApp.
          </p>

        </div>

        {/* Main Card */}

        <div className="bg-zinc-900/70 backdrop-blur-xl border border-zinc-800 rounded-3xl shadow-[0_0_40px_rgba(239,68,68,0.15)] overflow-hidden">

          <div className="grid lg:grid-cols-2">

            {/* Left Side */}

            <div className="p-10 md:p-14">

              <h2 className="text-3xl font-bold mb-2">
                Lights. Camera. Connect.
              </h2>

              <p className="text-zinc-400 mb-10">
                Fill the form below and let's create something cinematic.
              </p>

              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >

                <div className="grid md:grid-cols-2 gap-5">

                  <InputField
                    icon={<User size={18} />}
                    placeholder="Full Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />

                  <InputField
                    icon={<Mailbox size={18} />}
                    type="email"
                    placeholder="Email Address"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />

                </div>

                <div>

                  <InputField
                    icon={<Phone size={18} />}
                    placeholder="Phone Number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    maxLength={10}
                  />

                  {phoneError && (
                    <p className="text-red-400 text-sm mt-2">
                      {phoneError}
                    </p>
                  )}

                </div>

                <div className="relative">

                  <MessageSquare
                    className="absolute left-4 top-4 text-red-400"
                    size={18}
                  />

                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-zinc-950 border border-zinc-700 rounded-xl px-12 py-4 outline-none focus:border-red-500 transition"
                  >
                    <option value="">Select Subject</option>
                    <option>General Inquiry</option>
                    <option>Project Collaboration</option>
                    <option>Support</option>
                    <option>Feedback</option>
                    <option>Other</option>
                  </select>

                </div>

                <div className="relative">

                  <MessageCircleDashedIcon
                    className="absolute left-4 top-4 text-red-400"
                    size={18}
                  />

                  <textarea
                    rows="6"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message..."
                    className="w-full bg-zinc-950 border border-zinc-700 rounded-xl px-12 py-4 outline-none resize-none focus:border-red-500 transition"
                  />

                </div>

                <button
                  disabled={!isFormValid || isSubmitting}
                  className={`w-full flex items-center justify-center gap-3 py-4 rounded-xl font-semibold transition duration-300
                  
                  ${
                    isFormValid
                      ? "bg-red-600 hover:bg-red-500 hover:shadow-[0_0_25px_rgba(239,68,68,0.6)]"
                      : "bg-zinc-700 cursor-not-allowed"
                  }`}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <SendHorizonal size={18} />
                      Send Message
                    </>
                  )}
                </button>

              </form>

            </div>

            {/* Right Side */}

            <div className="hidden lg:flex items-center justify-center bg-gradient-to-br from-red-950 via-black to-zinc-950 p-12">

              <div className="text-center">

                <div className="text-8xl mb-8">
                  🍿
                </div>

                <h2 className="text-4xl font-bold mb-4">
                  Movie Night Vibes
                </h2>

                <p className="text-zinc-400 leading-relaxed max-w-md">
                  Whether it's a portfolio project, freelance work,
                  or collaboration — your next blockbuster starts here.
                </p>

              </div>

            </div>

          </div>
        </div>

        {/* Footer */}

        <div className="mt-10 text-center">

          <div className="inline-flex items-center gap-3 bg-zinc-900 px-6 py-4 rounded-full border border-zinc-800">

            <MessageCircle className="text-red-500" />

            <p className="text-zinc-400 text-sm">
              Messages go directly to WhatsApp for quick response.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};

const InputField = ({
  icon,
  type = "text",
  ...props
}) => {
  return (
    <div className="relative">

      <div className="absolute left-4 top-4 text-red-400">
        {icon}
      </div>

      <input
        type={type}
        {...props}
        className="w-full bg-zinc-950 border border-zinc-700 rounded-xl px-12 py-4 outline-none focus:border-red-500 transition"
      />

    </div>
  );
};

export default ContactPage;