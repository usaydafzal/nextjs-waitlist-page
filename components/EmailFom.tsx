import { InfoCircledIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { toast } from "react-hot-toast";

export default function EmailForm() {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // As you are submitting to an external service, you might omit the fetch block
    // that sends data to your API endpoint and handle only the Mailchimp form processing
  };

  return (
    <>
      <form 
        onSubmit={handleSubmit} 
        action="https://wearably.us22.list-manage.com/subscribe/post?u=46cc38378ffa4772023b50e4f&id=eaf7242092&f_id=008cc9e1f0" 
        method="post" 
        id="mc-embedded-subscribe-form" 
        name="mc-embedded-subscribe-form" 
        className="validate mt-2 max-w-sm"
        target="_self"
        noValidate
      >
        <div className="flex flex-col gap-2 lg:flex-row">
          <input
            autoComplete="email"
            className="text-accent-500 block h-10 w-full focus:invalid:border-red-400 focus:invalid:text-red-500 focus:invalid:ring-red-500 appearance-none rounded-lg border-2 border-slate-300 px-4 py-2 placeholder-zinc-400 duration-200 focus:outline-none focus:ring-zinc-300 sm:text-sm"
            pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
            id="mce-EMAIL"
            name="EMAIL"
            placeholder="johndoe@example.com"
            required
            type="email"
            value={email}
            onChange={handleEmailChange}
          />
          <button
            className="flex h-10 shrink-0 items-center justify-center gap-1 rounded-lg bg-[#000F2D] px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-zinc-700"
            type="submit"
          >
            <span>Join the waitlist</span>
          </button>
        </div>
        <div style={{ position: "absolute", left: "-5000px", ariaHidden: "true"}}>
          <input type="text" name="b_46cc38378ffa4772023b50e4f_eaf7242092" tabIndex="-1" value="" />
        </div>
      </form>

      <div className="flex items-start gap-2 text-gray-500">
        <InfoCircledIcon />
        <p className="text-xs -mt-[0.5] max-w-sm">
          No worries! Your data is completely safe and will only be utilized to
          provide you with updates about our product.
        </p>
      </div>
    </>
  );
}
