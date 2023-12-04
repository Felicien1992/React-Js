import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

const firstBook = {
  img: './images/imag7.jpg',
  author: 'Hannah Nicole Maehrer',
  title: 'Assistant to the Villain',
}
const secondBook = {
  img: './images/imag5.jpg',
  author: 'Rachel Howzell Hall',
  title: 'The Last One',
}
const thirthBook = {
  img: './images/imag4.jpg',
  author: 'Cecy Robson',
  title: 'Bloodguard',
}
const fourthBook = {
  img: './images/imag3.jpg',
  author: 'Tracy Wolff and Nina Croft',
  title: 'Star Bringer',
}
const fifthBook = {
  img: './images/imag2.jpg',
  author: 'Linde',
  title: 'The Wren in the Holly Library',
}

const sixthBook = {
  img: './images/imag6.jpg',
  author: 'Aurora Ascher',
  title: 'Sanctuary of the Shadow',
}


function BookList() {
  return (
    <main>
      <h1
        style={{ 
          color: '#457809',
          fontFamily: 'serif', 
          textAlign: 'center',
          marginTop:"10px",
          textDecoration:"underline"
        }}
      >
        LIBRARY
      </h1>
      <section className="booklist">
        <Book
          author={firstBook.author}
          title={firstBook.title}
          img={firstBook.img}
        >
          <p className="p">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
            repudiandae inventore eos qui animi sed iusto alias eius ea
            sapiente.
          </p>
          <button className="btn">By Now</button>
        </Book>

        <Book
          author={secondBook.author}
          title={secondBook.title}
          img={secondBook.img}
        >
          <p className="p">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
            repudiandae inventore eos qui animi sed iusto alias eius ea
            sapiente.
          </p>
          <button className="btn">By Now</button>
        </Book>

        <Book
          author={thirthBook.author}
          title={thirthBook.title}
          img={thirthBook.img}
        >
          <p className="p">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
            repudiandae inventore eos qui animi sed iusto alias eius ea
            sapiente.
          </p>
          <button className="btn">By Now</button>
        </Book>

        <Book
          author={fourthBook.author}
          title={fourthBook.title}
          img={fourthBook.img}
        >
          <p className="p">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
            repudiandae inventore eos qui animi sed iusto alias eius ea
            sapiente.
          </p>
          <button className="btn">By Now</button>
        </Book>
        <Book
          author={fifthBook.author}
          title={fifthBook.title}
          img={fifthBook.img}
        >
          <p className="p">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
            repudiandae inventore eos qui animi sed iusto alias eius ea
            sapiente.
          </p>
          <button className="btn">By Now</button>
        </Book>
        <Book
          author={sixthBook.author}
          title={sixthBook.title}
          img={sixthBook.img}
        >
          <p className="p">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
            repudiandae inventore eos qui animi sed iusto alias eius ea
            sapiente.
          </p>
          <button className="btn">By Now</button>
        </Book>
      </section>
    </main>
  )
}

const Book = (props) => {
  const { img, title, author, children } = props
  return (
    <article className="book">
      <img src={img} />
      <h2>{author}</h2>
      <h4>{title}</h4>
      {children}
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
