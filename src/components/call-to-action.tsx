import { Button } from "@/components/ui/button";
import { config } from "@/config";
import { Mail, SendHorizonal } from "lucide-react";

export default function CallToAction() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;
    
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, subject, message }),
      });

      if (response.ok) {
        alert('Message sent successfully!');
        e.currentTarget.reset();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      alert('Failed to send message. Please try again later.');
    }
  };

  return (
    <section className="py-16 md:py-32 relative z-10" id="contact">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-left relative">
          <h2 className="text-balance text-4xl font-semibold lg:text-5xl">
            {config.contact.title}
          </h2>
          <p className="mt-4 max-w-xl">{config.contact.subtitle}</p>

          <form onSubmit={handleSubmit} className="mt-10 max-w-xl lg:mt-12 relative">
            <div className="space-y-4">
              <div className="flex flex-col gap-2">
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  placeholder="Your email address"
                  className="h-12 w-full rounded-lg border bg-transparent px-4 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div className="flex flex-col gap-2">
                <input
                  id="subject"
                  type="text"
                  name="subject"
                  required
                  placeholder="What's this about?"
                  className="h-12 w-full rounded-lg border bg-transparent px-4 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div className="flex flex-col gap-2">
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Your message here..."
                  className="w-full rounded-lg border bg-transparent p-4 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-lg bg-primary px-6 py-3 text-primary-foreground hover:bg-primary/90 cursor-pointer"
              >
                <span className="text-base font-medium">Send Message</span>
                <SendHorizonal className="ml-2 size-5" strokeWidth={2} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
