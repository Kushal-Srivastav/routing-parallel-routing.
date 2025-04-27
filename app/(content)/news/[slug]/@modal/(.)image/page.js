import { notFound } from "next/navigation";
import { DUMMY_NEWS } from "@/dummy-news";
import ModalContent from "./ModalContent"; // 👈 we'll make this next

export default function InterceptedImagePage({ params }) {
  const newsItemSlug = params.slug;
  const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === newsItemSlug);

  if (!newsItem) {
    notFound();
  }

  return <ModalContent newsItem={newsItem} />;
}
