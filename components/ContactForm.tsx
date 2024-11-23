import { useForm, ValidationError } from "@formspree/react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useEffect, useState } from "react";

export default function ContactForm() {
  const formId = process.env.NEXT_PUBLIC_FORM_ID;
  if (!formId) {
    throw new Error("NEXT_PUBLIC_FORM_ID is not defined");
  }
  const { toast } = useToast();
  const [state, handleSubmit] = useForm(formId);
  const [email, setEmail] = useState("");

  // Handle success toast with useEffect
  useEffect(() => {
    if (state.succeeded) {
      toast({
        title: "Success!",
        description: "Thanks for your submission!",
      });
    }
  }, [state.succeeded, toast]);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email.trim()) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please enter your email address.",
      });
      return;
    }
    try {
      await handleSubmit(e);
      if (state.errors) {
        toast({
          variant: "destructive",
          title: "Error",
          description: "Please check your input and try again.",
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: `${error}`,
      });
    }
  };

  if (state.succeeded) {
    return <p></p>;
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input
          type="email"
          placeholder="Email"
          name="Email"
          className="text-sm md:text-base md:font-medium"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <Button
          type="submit"
          className="text-base font-semibold font-cormorant hover:bg-[#2563eb] hover:text-[#FFFFFF] dark:hover:text-[#FFFFFF]"
          variant="outline"
          disabled={state.submitting}
        >
          Connect
        </Button>
      </div>
    </form>
  );
}
