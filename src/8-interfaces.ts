interface Book {
    id: number;
    title: string;
    author: string;
    coauthor?: string;
}

const book: Book = {
    id: 1,
    title: 'Cementerio de mascotas',
    author: 'Stephen King'
}

const books: Book[] = [
    {
        id: 1,
        title: 'Cementerio de mascotas',
        author: 'Stephen King'
    },
    {
        id: 2,
        title: 'It',
        author: 'Stephen King'
    },
]

function getBook(): Book {
    return {
        id: 2,
        title: 'It',
        author: 'Stephen King',
        coauthor: 'Juan'
    }
}

const myBook = getBook()
console.log(myBook.title);

function createBook(book: Book):Book {
    return book
}