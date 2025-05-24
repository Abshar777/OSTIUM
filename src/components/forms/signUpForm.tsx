"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import FormGenerator from "../global/formGenerator";
import { useForm } from "react-hook-form";
import { useAuth } from "@/hooks/useAuth";
import AnimatedButton from "../global/globalButton";
import Alert from "../ui/alertBadge";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { item_variants } from "@/constants/framer-motion";

export function SignupForm() {
  const { register, errors, onFormSubmit, isPending, isSuccess } =
    useAuth("signup");
  const [err, seterr] = useState<string | null>(null);

  useEffect(() => {
    if (isSuccess) seterr(null);
    Object.values(errors).map((e, i) => i == 0 && seterr(e?.message as string));
  }, [errors, isSuccess]);

  return (
    <form onSubmit={onFormSubmit} className="flex justify-center items-center w-full flex-col gap-6">
      <div className="md:w-[55%] w-full  flex flex-col gap-6">
        {err && <Alert cont={err} />}
        <motion.div
        variants={item_variants}
       
        className="w-full  "
      >
        <FormGenerator
          inputType="input"
          label="name"
          name="name"
          placeholder="demo"
          register={register}
          errors={errors}
          showError={false}
        />
        </motion.div>
        <motion.div
        variants={item_variants}
       
        className="w-full  "
      >
        <FormGenerator
          inputType="input"
          label="email"
          name="email"
          type="email"
          placeholder="demo@example"
          register={register}
          errors={errors}
          showError={false}
        />
        </motion.div>
        <motion.div
        variants={item_variants}
       
        className="w-full  "
      >
       
        <FormGenerator
          inputType="input"
          type="password"
          label="password"
          name="password"
          placeholder="********"
          register={register}
          errors={errors}
          showError={false}
        />
        </motion.div>

        <motion.div
        variants={item_variants}
       
        className="w-full  "
      >
        <AnimatedButton
          type="submit"
          text="signup"
          loadingText="signing up..."
          isLoading={isPending}
          disabled={isPending}
        />
        </motion.div>
      </div>
    </form>
  );
}
