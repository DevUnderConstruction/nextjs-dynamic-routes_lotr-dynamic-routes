import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router.js";
import books from "../../lib/books.js";

export default function Books() {
  const router = useRouter();
  const { slug } = router.query;

  const currentBook = books.find((book) => book.slug === slug);

  return (
    <>
      <h2>{currentBook.title}</h2>
      <p>{currentBook.description}</p>
      <Image
        src={currentBook.cover}
        alt={`cover image of ${currentBook.title}`}
        width={250}
        height={419}
      />
      <p>
        <Link href="/books">Back to overview</Link>
      </p>
    </>
  );
}
