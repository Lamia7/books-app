/**
 * Rechercher livres sur API Google
 */

import React from 'react'

const SearchBooks = () => {
  return (
    <main role="main">
    <div className="jumbotrom jumbotrom-fluid">
      <div className="container text-center mb-3">
        <h1 className="display-4">BOOKS</h1>
        <p>Indiquer le sujet de livre à rechercher sur Google API</p>

        <form
          className="form-inline d-flex justify-content-center"
        >
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Que recherchez-vous ?"
              required
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