import ActionButton from "@/components/button/ActionButton";
import useTranslate from "@/hooks/useTranslate/useTranslate";

export default function HomeLanguage() {
  const { rich } = useTranslate("Homepage");

  return (
    <div>
      <h1>{rich("hero")}</h1>
      <ActionButton text="España" />
    </div>
  );
}
