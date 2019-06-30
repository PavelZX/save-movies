import express from 'express';

// models
import movieModel from '../models/Movie';
import userModel from '../models/User';

const addMoviesRoute = express.Router();

addMoviesRoute.get('/', (request, response) => {
  response.render('add', {
    title: 'Film ekle',
    login: (request.session.username) ? true : false,
    username: request.session.username,
    user_role: request.session.role
  });
});

addMoviesRoute.post('/', async (request, response) => {

  const { name, genre, content, public_user } = request.body;

  // Kullanıcı bilgileri buradan id alacağız.
  const user = userModel.findOne({username: request.session.username});

  user.then(user_id => {

    // Filmi kaydetme
    // public_user checkbox'ından gelen değer eğer işaretli ise on geliyor
    // işaret yok ise değer gelmiyor haliyle false oluyor.
    const addMovie = new movieModel({
      user_id,
      name,
      genre,
      image_name: (request.files) ? request.files.movie_img.name : "default.jpg",
      content,
      public_user: (public_user === "on") ? true : false
    });

    const moviePromise = addMovie.save();

    // Filmi kaydetme başarılı ise
    moviePromise.then(movie => {
      // Filmi veritabanına kayıt ettikten sonra yüklenen filmin resmini kaydediyor. 
      if(request.files) {
        request.files.movie_img.mv('./public/img/movies/', request.files.movie_img.name);
      }
      
      response.redirect('/');
    });

    // Hata oluşmuş ise
    moviePromise.catch(error => console.log(error));

  });

  user.catch(error => console.log(error));

});

export default addMoviesRoute;