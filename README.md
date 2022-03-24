
# Blog 24x7

### About

This application helps the user to Read,Create,Delete,Update the Blog post,The app uses django for the server side and React for the client side of the application.
This is my first project built with all this tech, so if you have suggestions on how to improve it - I'd really appreciate them. I will keep gradually improving this blog and adding more features.

### Tech/Framework used

- Frontend: ReactJS
- Rest Api: Django rest framework
- Backend: Django
- Design: Material Design for Bootstrap

### Features 

- Single Page App
- Create Post
- Read Post
- Update Post
- Delete Post



## Installation

Clone this repository:
 ```bash
  git clone https://github.com/kuldeepsharma21/Blogg-24x7.git
```

Change the working directory to blog website which contains the manage.py .

Install the dependencies using pip:

```bash
  pip install -r requirements.txt
```
Then migrate and create a super user:

```bash
  python manage.py makemigrations 
  python manage.py migrate
  python manage.py createsuperuser
```
Finally you should be able to start your server by running:
```bash
  python manage.py runserver
```
the backend is now running on http://127.0.0.1:8000 

### Frontend
Navigate the current working directory to frontend: cd frontend.

Install node modules:
```bash
  yarn install 
  or
  npm install
```

Run frontend:
```bash
  yarn start
  or
  npm start
```
the Frontend is now running on http://localhost:3000 

http://127.0.0.1:8000 is the Django app
http://localhost:3000 is the React app

### Creating First Post

1. Make sure that both Backend and Frontend Servers are running.
2. Open your browser and navigate to localhost:3000.
3. Click on 'Add Blog' button on top of homepage.
4. Fill out the title, description, image and category of post and upload it.
5. After uploading post you will be redirected to homepage with your post displaying on home page.
6. Click on 'Read More' button inside the post to read full description of the post.
7. You can delete or update the post by clicking on icons on the botttom of the post. 

