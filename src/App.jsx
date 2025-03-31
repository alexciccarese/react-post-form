import { useState } from "react"


function App() {

  const [formData, setFormData] = useState({
    author: '',
    title: '',
    body: '',
    public: '',
  })

  function handleFormData(e) {
    console.dir(e.target);
    const type = e.target.type
    const value = type === 'checkbox' ? e.target.checked : e.target.value
    const key = e.target.name
    console.log(type, key, value);
    console.dir(e.target)

    setFormData({...formData, [key]: value})
  
  }

  function handleFormSubmit(e) {
    e.preventDefault()
    console.log(formData);

    //validazione form


    fetch('https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      
    })
    .catch(err => {
      console.log(err);
      
    })

  }

  return (
    <>
      <div className="container mt-5">
        <h1 className='mb-4'>Create a new post</h1>

        <div className="card p-4" data-bs-theme="dark">
          <form method="POST" onSubmit={handleFormSubmit}>

            <div className="mb-3">
              <label htmlFor="author" className="form-label">Author</label>
              <input
                type="text"
                className="form-control"
                name="author"
                id="author"
                aria-describedby="authorHelper"
                placeholder="Bob Smith"
                value={formData.author}
                onChange={handleFormData}
                required
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
                value={formData.title}
                onChange={handleFormData}
                required
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
                value={formData.body}
                onChange={handleFormData}
                required
              ></textarea>
            </div>

            <div className="form-check my-3">
              <input
                type="checkbox"
                className="form-check-input"
                name="public"
                id="public"
                value={formData.public}
                onChange={handleFormData}
              
              />
              <label className="form-check-label" htmlFor="public">Publish as public post</label>
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default App
