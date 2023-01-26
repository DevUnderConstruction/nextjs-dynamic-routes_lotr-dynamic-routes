import Link from "next/link";
import lotrBooks from "../../lib/books";

export default function Books() {
  return (
    <>
      <h2>Overview about all Books</h2>
      <ul>
        {lotrBooks.map((book) => (
          <li key={book.title}>
            <Link href={`books/${book.slug}`}>{book.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
