import { IBook } from "@/interfaces";
import Image from "next/image";

const AllBooksPage = async () => {
  // simulate a delay to mimic loading time
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // Fetching books data from the API
  const response = await fetch("https://book-api-pcoi.onrender.com/books");
  // Change response to JSON format
  const booksResponse: IBook[] = await response.json();
  //   console.log("Books Response:", booksResponse);

  return (
    <div className="min-h-screen">
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="text-5xl font-bold">Books Page</h1>
        <p>Here you can find our Books!</p>
      </div>
      <div>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {booksResponse.map((book) => (
            <li
              key={book._id}
              className="border p-4 rounded-lg shadow-md flex justify-between items-center gap-2"
            >
              <div>
                <h2 className="text-xl font-semibold">{book.title}</h2>
                <p className="text-rose-400">{book.author.name}</p>
                <p className="text-gray-300">{book.details.summary}</p>
                <p className="text-gray-600">
                  Genres: {book.genres.map((genre) => genre.name).join(", ")}
                </p>
              </div>
              <div>
                <Image
                  src={`https://picsum.photos/seed/${book._id}/200/300`}
                  width={200}
                  height={300}
                  alt="Random pictures as placeholders"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default AllBooksPage;
