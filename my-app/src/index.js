import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'


const firstBook = {
  img: './images/imag2.jpg',
  author: 'Felicien',
  title: 'Best Book',
}
const secondBook = {
  img: './images/imag5.jpg',
  author: 'Blaisby',
  title: 'Funny Book',
}
const thirthBook = {
  img: './images/imag4.jpg',
  author: 'Synforien',
  title: 'Commedy Book',
}

// const Book = (props) => {
//   return (
//     <article className="book">
//       <img src={props.img} />
//       <h2>{props.author}</h2>
//       <h4>{props.title}</h4>
//     </article>
//   )
// }


// function BookList() {
//   return (
//     <section className="booklist">
//       <Book author={firstBook.author} title={firstBook.title} img={firstBook.img} />
//       <Book author={secondBook.author} title={secondBook.title} img={secondBook.img} />
//       <Book author={thirthBook.author} title={thirthBook.title} img={thirthBook.img} />
//     </section>
//   )
// }

//********************************************* */

const Book = (props) => {
  const {img,title,author} = props
  return (
    <article className="book">
      <img src={img} />
      <h2>{author}</h2>
      <h4>{title}</h4>
    </article>
  )
}

function BookList() {
  return (
    <section className="booklist">
      <Book
        author={firstBook.author}
        title={firstBook.title}
        img={firstBook.img}
      />
      <Book
        author={secondBook.author}
        title={secondBook.title}
        img={secondBook.img}
      />
      <Book
        author={thirthBook.author}
        title={thirthBook.title}
        img={thirthBook.img}
      />
    </section>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)
