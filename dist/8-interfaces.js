"use strict";
const book = {
    id: 1,
    title: 'Cementerio de mascotas',
    author: 'Stephen King'
};
const books = [
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
];
function getBook() {
    return {
        id: 2,
        title: 'It',
        author: 'Stephen King'
    };
}
const myBook = getBook();
console.log(myBook.title);
