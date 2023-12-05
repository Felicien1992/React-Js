import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

const books = [
  {
    img: './images/imag7.jpg',
    author: 'Hannah Nicole Maehrer',
    title: 'Assistant to the Villain',
  },
  {
    img: './images/imag5.jpg',
    author: 'Rachel Howzell Hall',
    title: 'The Last One',
  },
  {
    img: './images/imag4.jpg',
    author: 'Cecy Robson',
    title: 'Bloodguard',
  },
  {
    img: './images/imag3.jpg',
    author: 'Tracy Wolff and Nina Croft',
    title: 'Star Bringer',
  },
  {
    img: './images/imag2.jpg',
    author: 'Linde',
    title: 'The Wren in the Holly Library',
  },

  {
    img: './images/imag6.jpg',
    author: 'Aurora Ascher',
    title: 'Sanctuary of the Shadow',
  },
]

function BookList() {
  return (
    <section className="booklist">
      {books.map((book, id) => {
        return <Book key={book.id} {...book}></Book>
      })}
    </section>
  )
}
const Book = (props) => {
  return (
    <article className="book">
      <img src={props.img} />
      <h2>{props.title}</h2>
      <h5>{props.author}</h5>
      <p className='p'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum odio
        enim accusantium vero, non nisi, dicta possimus expedita eos eligendi
        vel itaque blanditiis, at omnis exercitationem consequuntur ipsam!
        Harum, veniam!
      </p>
      <button className='btn'>Click Me</button>
    </article>
  )
}

//********************************************* */

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

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)
