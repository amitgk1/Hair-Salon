# Hair-Salon
Hair salon scheduler

A react + django project that allows the user costumer to book appointmets in any available time slot (no double booking)
## Dependencies & How to set up:

#### Dependencies list:
1. python 3
2. node.js (version 12 [lts])+ npm
3. PostgreSQL database

#### Set up instructions:
- git clone the project thus creating a folder named Hair-Salon with all the code in it :)

- download PostgreSQL from here - https://www.postgresql.org/download/
- install PostgreSQL and run on port 5432 with the user postgres (the defaults of course...) and set the password to Aa123456 **
- create a Database called "hair salon"** using psql(CLI) or pgadmin4(GUI)

** you can choose any value / name you want, but you'll have to also change it in the settings/settings.py file in the DATABASES section.

- install the python packages - run in command line: "pip install django django-cors-headers djangorestframework psycopg2"
- intsall the node packages - cd into the Hair-Salon folder, then into the frontend folder and type: "npm install" (notice, might take a long time...)
- create a build for the optimal react environment using the command: "npm run build", again inside the frontend folder.
- and... you're all set !

to run the project cd back to the Hair-Salon folder and type "python manage.py runserver 80" and it should be running
now go to your preferred browser (Chrome, come on...) and enter "localhost"

and voila !
