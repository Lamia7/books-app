/**
 * Rechercher livres sur API Google
 */

import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { fetchBooks } from '../redux/actions/fetchBooks'
import { addBook } from '../redux/actions/actionAddBooks'

// Configurer le toast
toast.configure()

const SearchBooks = () => {
    const [searchSubject, setSearchSubject] = useState('')

    // Sélectionner la propriété que l'on veut depuis le state du store, ici propriété: 'search'
    const state = useSelector(state => state.search)
    // Via ce dispatch on peut dispatcher des actions 
    const dispatch = useDispatch()

    console.log(state)

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(searchSubject)
        // dispatcher de l'action qui appelle l'API
        dispatch(fetchBooks(searchSubject))
    }

    /**
     * Enregistre un livre dans la liste (page accueil)
     * @param {string} bookTitle 
     * @param {string} bookAuthors 
     */
    const saveBook = (bookTitle, bookAuthors) => {
      const bookToSave = {
        title: bookTitle,
        author: bookAuthors
      }
      dispatch(addBook(bookToSave))
      toast.info('Livre enregistré avec succès', { position: toast.POSITION.BOTTOM_RIGHT })
    }

    const dispayFetchedBooks = state.isLoading ? (
      <div className="d-flex justif-content-center">
        <div className="spinner-border text info" role="status">
          <span className="sr-only"></span>
        </div>
      </div>
    )
    : state.error !== '' ? (
      <p>{state.error}</p>
    )
    :
    (
      state.fetchedBooks.map((data) => {
        return (
          <div className='card mb-2' key={data.id}>
            {/* HEADER */}
            <div className='card-header'>
              <h5 className="mb-0">
                <button 
                  className="btn btn-link collapsed"
                  data-toggle="collapse"
                  data-target={`#${data.id}`}
                  aria-expanded="false"
                >
                  {data.volumeInfo.title}
                </button>
              </h5>
            </div>

            <div id={data.id} className="collapse" data-parent="#accordion">
                <div className='card-body'>
                  {
                    data.volumeInfo.hasOwnProperty('imageLinks') &&
                    <img 
                      src={data.volumeInfo.imageLinks.thumbnail}
                      alt={data.volumeInfo.title}
                    />
                  }

                  <br />
                  {/* CONTENU */}
                  <h4 className="card-title">Titre: {data.volumeInfo.title}</h4>
                  <h5 className="card-title">Auteurs: {data.volumeInfo.authors}</h5>
                  <p className="description">{data.volumeInfo.description}</p>
                  
                  {/* LIEN / BOUTON */}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-secondary"
                    href={data.volumeInfo.previewLink}
                  >Plus d'infos</a>
                  <button
                    className="btn btn-outline-secondary ml-3"
                    onClick={() => saveBook(data.volumeInfo.title, data.volumeInfo.authors)}
                  >Enregistrer</button>
                </div>
            </div>
        </div>
        )
      })
    )

  return (
    <main role="main">
    <div className="jumbotrom jumbotrom-fluid">
      <div className="container text-center mb-3">
        <h1 className="display-4">BOOKS</h1>
        <p>Indiquer le sujet de livre à rechercher sur Google API</p>

        <form
          className="form-inline d-flex justify-content-center"
          onSubmit={handleSubmit}
        >
          <div className="form-group">
            <input
                value={searchSubject}
                type="text"
                className="form-control"
                placeholder="Que recherchez-vous ?"
                required
                onChange={(e) => setSearchSubject(e.target.value)}
            />
          </div>

          <div className="form-group">
            <button
                className="btn btn-outline-secondary ml-3"
            >
              Rechercher
            </button>
          </div>
        </form>
      </div>
    </div>
    <div className="container" style={{ minHeight: "200px" }}>
      <div id="accordion">
      { dispayFetchedBooks }
      </div>
    </div>
  </main>
  )
}

export default SearchBooks;