import React from 'react'
import { useState } from 'react'
const BookEdit = ({ book, onEdit }) => {
  const [title, setTitle] = useState(book.title)
  const [des, setDes] = useState(book.des)
  const handlChangeTitle = (e) => {
    setTitle(e.target.value);
  }
  const handlChangeDes = (e) => {
    setDes(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    onEdit(book.id, {
      title,
      des,
    })
  }
  return (
    <div >
      <form onSubmit={handleSubmit}>
        <input onChange={handlChangeTitle}
          type="text"
          id="title"
          name="title"
          value={title}
        />
        <input onChange={handlChangeDes}
          type="text"
          id="des"
          name="des"
          value={des}
        />
        <input type="submit" value="Save" />
        <button>Cancel</button>
      </form>
    </div>
  )
}

export default BookEdit