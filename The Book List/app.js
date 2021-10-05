/* Exercise 3: My Book List */

const books = [
  {
    title: 'Đàn ông sao hỏa, đàn bà sao kim',
    author: 'Join Gray',
    alreadyRead: true,
    img: 'https://static.epub.vn/epubvn-image/optimized-cover1615955078716-dan-ong-sao-hoa,-dan-ba-sao-kim.jpg',
    link: 'https://www.epub.vn/books/dan-ong-sao-hoa-dan-ba-sao-kim-1615955079'
  },
  {
    title: 'Phát huy tiềm năng cùng NLP',
    author: 'Anne Linden, Kathrinz Peruts',
    alreadyRead: true,
    img: 'https://static.epub.vn/epubvn-image/optimized-cover1583329943057-blob.jpg',
    link: 'https://www.epub.vn/books/dark-psychology-super-advanced-techniques-to-persuade-anyone-secretly-manipulate-people-and-influence-their-behaviour-without-them-noticing-emotional-body-language-nlp-psychology-tricks-1583329943'
  },
  {
    title: 'Sherlock Holmes',
    author: 'Guy Stuart Ritchie',
    alreadyRead: false,
    img: 'https://static.epub.vn/epubvn-image/chuyen-khong-cong-bo-cua-sherlock-holmes-1543906971.jpg',
    link: 'https://www.epub.vn/books/chuyen-khong-cong-bo-cua-sherlock-holmes-1543906971'
  },
  {
    title: 'Sapiens: Lược sử về loài người',
    author: 'Yuval Noal Harari',
    alreadyRead: false,
    img: 'https://static.epub.vn/epubvn-image/optimized-cover1628754802575-blob.jpg',
    link: 'https://www.epub.vn/books/sapiens-luoc-su-loai-nguoi-1628754803'
  },
  {
    title: 'Nghĩ đơn giản, sống đơn thuần',
    author: 'Tolly Burkan',
    alreadyRead: true,
    img: 'https://static.epub.vn/epubvn-image/optimized-cover1629261582305-sach-nghi-don-gian-song-don-thuan.jpg',
    link: 'https://www.epub.vn/books/nghi-don-gian-song-don-thuan-1629261583'
  }
]

const bookList = document.querySelector('.book-list')

books.forEach((book) => {
  let bookItem = document.createElement('li')
  let title = document.createElement('p')
  let author = document.createElement('p')
  let img = document.createElement('img')
  let link = document.createElement('a')

  //style for title
  title.style.fontWeight = 'bold'

  author.textContent = book.author

  //style for img
  img.src = book.img

  //style for link
  link.textContent = book.title
  link.href = book.link

  let already = document.createElement('p')

  //style for already read
  if (book.alreadyRead) {
    already.textContent = 'Done'

    already.style.backgroundColor = 'rgb(54 74 76 / 37%)'
  } else {
    already.textContent = 'Ready to Start'

    already.style.backgroundColor = 'rgb(15 165 115 / 55%)'
  }

  already.style.display = 'table'
  already.style.padding = '5px 5px'
  already.style.borderRadius = '5%'

  title.appendChild(link)

  bookItem.appendChild(title)
  bookItem.appendChild(author)
  bookItem.appendChild(img)
  bookItem.appendChild(already)

  bookList.appendChild(bookItem)
})
