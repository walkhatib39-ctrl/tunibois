import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

type CtaBandProps = {
  title: string;
  text: string;
  href: string;
  action: string;
};

export function CtaBand({ title, text, href, action }: CtaBandProps) {
  return (
    <section className="bg-brand py-12 text-white">
      <Container className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-semibold sm:text-3xl">{title}</h2>
          <p className="mt-3 text-sm leading-6 text-white/74 sm:text-base">{text}</p>
        </div>
        <Button href={href} variant="primary" className="shrink-0">
          {action}
        </Button>
      </Container>
    </section>
  );
}
