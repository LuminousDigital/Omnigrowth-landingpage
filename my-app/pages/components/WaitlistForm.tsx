"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { waitlistSchema, WaitlistFormData } from "@/schemas/waitlistSchema";
import { FaArrowRight } from "react-icons/fa";
import { MdDone } from "react-icons/md";
import RoleDropdown from "@/pages/components/RoleDropdown";

type WaitlistFormProps = {
  scrollRef?: React.RefObject<HTMLElement | null>;
};

async function submitWaitlist(data: WaitlistFormData) {
  return new Promise((resolve) => setTimeout(resolve, 1500));
}

const WaitlistForm = ({ scrollRef }: WaitlistFormProps) => {
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
    setValue,
    watch,
  } = useForm<WaitlistFormData>({
    resolver: zodResolver(waitlistSchema),
  });

const onSubmit = async (data: WaitlistFormData) => {
  try {
    await submitWaitlist(data);
    console.log("Submitted Data:", data);
    setSuccess(true);
    reset();
  } catch (error) {
    console.error("Submission error:", error);
  }
};

  useEffect(() => {
    if (success) {
      const timeout = setTimeout(() => setSuccess(false), 3000);
      return () => clearTimeout(timeout);
    }
  }, [success]);

  return (
    <section ref={scrollRef} className="relative z-10 w-full py-16 scroll-mt-24">
      <div className="w-full">
        <h2 className="text-[20px] sm:text-[36px] leading-[24px] font-bold text-white tracking-normal text-left">
          Get Early Access
        </h2>
        <p className="text-[19px] sm:text-[36px] leading-[64px] font-bold text-[#b0b0b0] mb-3 md:mb-5 text-left">
          Join the waitlist
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-6 w-full sm:px-6 md:px-0"
        >
          {/* Name */}
          <div className="relative">
            <input
              type="text"
              {...register("name")}
              placeholder="Your name"
              className="w-full bg-transparent border-b border-[#888] py-3 pr-10 pl-0 text-white placeholder-[#b0b0b0] focus:outline-none"
            />
            <span className="absolute right-0 top-1/2 -translate-y-1/2 text-[#b0b0b0] text-xl">
              <FaArrowRight />
            </span>
            {errors.name && (
              <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div className="relative">
            <input
              type="email"
              {...register("email")}
              placeholder="Email address"
              className="w-full bg-transparent border-b border-[#888] py-3 pr-10 pl-0 text-white placeholder-[#b0b0b0] focus:outline-none"
            />
            <span className="absolute right-0 top-1/2 -translate-y-1/2 text-[#b0b0b0] text-xl">
              <FaArrowRight />
            </span>
            {errors.email && (
              <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Role Dropdown */}
          <RoleDropdown
            value={watch("role")}
            onChange={(role) => setValue("role", role)}
          />
          {errors.role && (
            <p className="text-red-400 text-sm mt-1">{errors.role.message}</p>
          )}

          {/* Company */}
          <div className="relative">
            <input
              type="text"
              {...register("company")}
              placeholder="Company"
              className="w-full bg-transparent border-b border-[#888] py-3 pr-10 pl-0 text-white placeholder-[#b0b0b0] focus:outline-none"
            />
            <span className="absolute right-0 top-1/2 -translate-y-1/2 text-[#b0b0b0] text-xl">
              <FaArrowRight />
            </span>
            {errors.company && (
              <p className="text-red-400 text-sm mt-1">{errors.company.message}</p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting || success}
            className={`relative mt-4 bg-[#A9A6F9] hover:bg-[#8f8be6] text-white font-bold text-lg py-3 rounded-xl transition flex items-center justify-center gap-2 px-6 cursor-pointer ${
              (isSubmitting || success) && "opacity-70 cursor-not-allowed"
            }`}
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  />
                </svg>
                Joining...
              </>
            ) : success ? (
              <>
                Thanks for Joining Waitlist!
                <MdDone className="text-2xl" />
              </>
            ) : (
              <>
                Join Waitlist
                <FaArrowRight className="text-white text-xl" />
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default WaitlistForm;
