"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { waitlistSchema, WaitlistFormData } from "@/schemas/waitlistSchema";
import { FaArrowRight } from "react-icons/fa";
import SuccessModal from "@/pages/components/SuccessModal";
import RoleDropdown from "@/pages/components/RoleDropdown";
import { useWaitlist } from "@/lib/queries/waitlist";

type WaitlistFormProps = {
  scrollRef?: React.RefObject<HTMLElement | null>;
};

const WaitlistForm = ({ scrollRef }: WaitlistFormProps) => {
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm<WaitlistFormData>({
    resolver: zodResolver(waitlistSchema),
  });

  const { mutate: submitWaitlist, error } = useWaitlist();

  const onSubmit = async (data: WaitlistFormData) => {
    setLoading(true);
    try {
      await submitWaitlist(data, {
        onSuccess: () => {
          setShowSuccess(true);
          reset();
        },
        onError: (err) => {
          console.error("Submission error:", err);
        },
      });
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setLoading(false);
    }
  };

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
              <p className="text-red-400 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <RoleDropdown
            value={watch("role")}
            onChange={(role) => {
              setValue("role", role, { shouldValidate: true });
            }}
            error={errors.role?.message}
          />
          {errors.role && (
            <p className="text-red-400 text-sm mt-1">{errors.role.message}</p>
          )}

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
              <p className="text-red-400 text-sm mt-1">
                {errors.company.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`relative mt-4 bg-[#A9A6F9] hover:bg-[#8f8be6] text-white font-bold text-lg py-3 rounded-xl transition flex items-center justify-center gap-2 px-6 cursor-pointer ${
              loading && "opacity-70 cursor-not-allowed"
            }`}
          >
            {loading ? (
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
                <span className="ml-2">Submitting...</span>
              </>
            ) : (
              <>
                Join Waitlist
                <FaArrowRight className="text-white text-xl cursor-pointer" />
              </>
            )}
          </button>

          {error && (
            <p className="text-red-400 text-sm mt-1">
              {error.message || "Something went wrong."}
            </p>
          )}
        </form>
      </div>

      <SuccessModal open={showSuccess} onClose={() => setShowSuccess(false)} />
    </section>
  );
};

export default WaitlistForm;
