import { useState } from 'react';
import { Book } from '../types/Book';

const AdminBooksPage = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
};

export default AdminBooksPage;
