import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";
import { useState } from "react";
import { booksTableData } from "../../data/books-table-data";

export function BooksList() {
  const [books, setBooks] = useState(booksTableData);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this book?")) {
      const updatedBooks = books.filter((book) => book.id !== id);
      setBooks(updatedBooks);
    }
  };

  return (
    <div className="mt-12 mb-8 flex flex-col gap-12">
      <Card>
        <CardHeader variant="gradient" color="gray" className="mb-8 p-6">
          <Typography variant="h6" color="white">
            Books List
          </Typography>
        </CardHeader>
        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
          <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr>
                {["Id", "Title", "Author", "Cover", "Date-Uploaded", "Operation"].map((el) => (
                  <th
                    key={el}
                    className="border-b border-blue-gray-50 py-3 px-5 text-left"
                  >
                    <Typography
                      variant="small"
                      className="text-[11px] font-bold uppercase text-blue-gray-400"
                    >
                      {el}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {books.map(({ id, title, author, cover, dateUploaded }) => {
                return (
                  <tr key={id}>
                    <td className="py-3 px-5 border-b border-blue-gray-50">
                      <Typography variant="small" color="blue-gray" className="font-semibold">
                        {id}
                      </Typography>
                    </td>
                    <td className="py-3 px-5 border-b border-blue-gray-50">
                      <Typography variant="small" color="blue-gray" className="font-semibold">
                        {title}
                      </Typography>
                    </td>
                    <td className="py-3 px-5 border-b border-blue-gray-50">
                      <Typography variant="small" color="blue-gray" className="font-semibold">
                        {author}
                      </Typography>
                    </td>
                    <td className="py-3 px-5 border-b border-blue-gray-50">
                      <Avatar src={cover} alt={cover} size="sm" variant="rounded" />
                    </td>
                    <td className="py-3 px-5 border-b border-blue-gray-50">
                      <Typography className="text-xs font-semibold text-blue-gray-600">
                        {dateUploaded}
                      </Typography>
                    </td>
                    <td className="py-3 px-5 border-b border-blue-gray-50">
                      <button
                        onClick={() => handleDelete(id)}
                        className="px-2 py-0.5 bg-red-500 hover:bg-red-600 text-white rounded-md focus:outline-none inline-block"
                        style={{ fontSize: '14px', width: 'fit-content' }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </CardBody>
      </Card>
    </div>
  );
}

export default BooksList;