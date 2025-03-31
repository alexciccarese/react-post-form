import { useState } from "react"


function App() {

  return (
    <>
      <div className="container mt-5">
        <h1 className='mb-4'>Create a new post</h1>

        <div className="card p-4" data-bs-theme="dark">
          <form>

            <div className="mb-3">
              <label htmlFor="author" className="form-label">Author</label>
              <input
                type="text"
                className="form-control"
                name="author"
                id="author"
                aria-describedby="authorHelper"
                placeholder="Bob Smith"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="title" className="form-label">Title</label>
              <input
                type="text"
                className="form-control"
                name="title"
                id="title"
                aria-describedby="titleHelper"
                placeholder="Star Wars"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="body" className="form-label">Post description</label>
              <textarea
                className="form-control"
                id="body"
                name="body"
                rows="3"
                placeholder="Add description here..."
              ></textarea>
            </div>

            <div className="form-check">
              <input
                type="radio"
                className="form-check-input"
                name="privacy"
                id="public"
                value="public"
              />
              <label className="form-check-label" htmlFor="public">Public</label>
            </div>

            <div className="form-check mb-3">
              <input
                type="radio"
                className="form-check-input"
                name="privacy"
                id="private"
                value="private"
              />
              <label className="form-check-label" htmlFor="private">Private</label>
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default App
