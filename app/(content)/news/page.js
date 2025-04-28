
import NewsList from '@/components/news-list';
import { getAllNews } from '../../../lib/news';

export default async function NewsPage() {
  const news = await getAllNews()// Parse the response to JSON

  return (
    <>
      <h1>News Page</h1>
      <NewsList news={news} />
    </>
  );
}