import { notFound } from "next/navigation";
import ModalContent from "./ModalContent"; 
import {getNewsItem} from '@/lib/news'

export default async function InterceptedImagePage({ params }) {
  const newsItemSlug = params.slug;
  const newsItem = await getNewsItem(newsItemSlug)

  if (!newsItem) {
    notFound();
  }

  return <ModalContent newsItem={newsItem} />;
}
