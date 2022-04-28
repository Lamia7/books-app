/**
 * Rechercher livres sur API Google
 */

import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchBooks } from '../redux/actions/fetchBooks'

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
      <div className='accordion'>
          <div className='card mb-2'>
            <div className='card-header'>
                <div className="collapse" data-parent="accordion">
                    <div className='card-body'>
                        {/* 
                        - Image
                        - Titre
                        - Auteur
                        - Description
                        - Btn plus d'infos
                        - Brn Enregistrer
                        */}
                    </div>
                </div>
            </div>
          </div>
      </div>
    </div>
  </main>
  )
}

export default SearchBooks;