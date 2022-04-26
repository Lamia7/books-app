import React, { useState } from "react";
import { connect } from "react-redux";
import addBook from "../redux/actions/actionAddBooks";


const AddBooks = ({ libraryData, addBook }) => {
  console.log(libraryData);


  const initialState = {
    title: "",
    author: "",
  };

  const [newData, setNewData] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(newData);
    addBook(newData);

    // Vider input
    setNewData(initialState);
  };

  const displayData = libraryData.length > 0 ? libraryData.map((data) => {
      return (
        <li key={data.id} className="list-group-item list-group-item-light d-flex justify-content-between">
            <span><strong>Titre: </strong>{data.title}</span>
        <span><strong>Auteur: </strong>{data.author}</span>
        <span className="btn btn-danger">X</span>
      </li>
      )
  }) : <p className="text-center">Aucune donnée à afficher</p>

  return (
    <main role="main">
      <div className="jumbotrom jumbotrom-fluid">
        <div className="container text-center mb-3">
          <h1 className="display-4">BOOKS</h1>
          <p>Ajouter un livre</p>

          <form
            className="form-inline d-flex justify-content-around"
            onSubmit={handleSubmit}
          >
            <div className="form-group">
              <input
                value={newData.title}
                type="text"
                className="form-control"
                placeholder="Titre"
                required
                onChange={(e) =>
                  setNewData({ ...newData, title: e.target.value })
                }
              />
            </div>
            <div className="form-group">
              <input
                value={newData.author}
                type="text"
                className="form-control ml-3"
                placeholder="Auteur"
                required
                onChange={(e) =>
                  setNewData({ ...newData, author: e.target.value })
                }
              />
            </div>

            <div className="form-group">
              <button className="btn btn-outline-secondary ml-3">
                Ajouter un livre
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="container" style={{ minHeight: "200px" }}>
        <div className="row">
          <div className="col-md-12">
            <ul className="list-group">
              {displayData}
            </ul>
            <div className="d-flex justify-content-center">
              <button className="btn btn-danger mt-4 mb-5">
                Effacer tous les livres
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

const mapStateToProps = (state) => {
  return {
    libraryData: state.library,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // si j'invoke ce props, je vais dispatcher l'action addBook()
    addBook: (param) => {
      console.log(`mapDispatchToProps: ${param}`);
      dispatch(addBook(param));
    },
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(AddBooks);
