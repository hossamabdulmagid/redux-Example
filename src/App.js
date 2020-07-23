import React, { useEffect, Fragment } from 'react';
import { GetAllTodos } from './redux/todos/todoAction'
import { GetAllUsers } from './redux/user/userAction'
import { GetAllComments } from './redux/comments/commentsAction'
import { connect } from 'react-redux'

import './App.css';

const App = ({ GetAllUsers, GetAllComments, allusers, allcomments, GetAllTodos, alltodos }) => {


  useEffect(() => {

    GetAllUsers() // render This Function With Compoient didMOunt
  }, [])
  useEffect(() => {
    GetAllComments()
  }, [])
  useEffect(() => {
    GetAllTodos()

  }, [])
  return (
    <div className="container">
      <header className="row  App">
        <div className="col-4">
          <h1>*AllUsers</h1>
          <ul>
            {allusers.map((singleUser, i) => (
              <Fragment>
                <li key={i}>{singleUser.name}</li>
                <li key={i}>{singleUser.email}</li>
                <li key={i}>{singleUser.phone}</li>
                <li key={i}>{singleUser.address.geo.lng} / lng</li>
                <li key={i}>{singleUser.username}</li>
              </Fragment>

            ))}
          </ul>
        </div>
        <div className="col-4">
          <h1>*AllComments</h1>
          <ul>
            {allcomments.map((singleComment, i) => (
              <Fragment>
                <li key={i}> {singleComment.name}</li>
                <li key={i}> {singleComment.email}</li>
                <li key={i}> {singleComment.body}</li>
              </Fragment>

            ))}
          </ul>

        </div>
        <div className="col-4">
          <h1>*All Todos</h1>
          <ul>
            {alltodos.map((Singletodo, i) => (
              <Fragment>

                <li key={i}> {Singletodo.id}</li>
                <li key={i}> {Singletodo.title}</li>
                <li key={i}> {Singletodo.url}</li>

                <li key={i}> {Singletodo.thumbnailUrl}</li>
              </Fragment>

            ))}
          </ul>
        </div>
      </header>
    </div>
  );
}


const mapStateToProps = state => ({
  allusers: state.user.users,
  allcomments: state.comment.comments,
  alltodos: state.todo.todos
})



const mapDispatchToProps = dispatch => ({

  GetAllUsers: () => dispatch(GetAllUsers()),
  GetAllComments: () => dispatch(GetAllComments()),
  GetAllTodos: () => dispatch(GetAllTodos())


  // تعريف للفانكشن
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
