import useTranslate from "@/hooks/useTranslate/useTranslate";

export default function About() {
  const { raw } = useTranslate("About");
  return (
    <div>
      <h1>{raw("title")}</h1>
    </div>
  );
}
