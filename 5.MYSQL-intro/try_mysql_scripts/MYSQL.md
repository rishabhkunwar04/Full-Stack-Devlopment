... Generally, accessing as a root user from remote machine is disabled and it is not a best practice, because of security concerns...
... to start mysql:- mysql -u root -p ...


 # Setting up MySQL Database and User

 1. mysql> create database mytestdb;

 2. mysql> create user myuser identified by 'mypass'; //here myuser is user name and mypass is passwprd
 3. mysql> use mytestdb
 4. mysql> GRANT ALL PRIVILEGES ON mytestdb.* to myuser;
 5. mysql> flush privileges;

 
 # Setting up MySQL Database and User

mysql -u root -p

create database sampledb22;
create user sampleuser22 identified with mysql_native_password by 'samplepass22';
grant all privileges on sampledb22.* to sampleuser22;
flush privileges;



# login using new user
PS C:\Users\RISHABH SINGH> mysql -u myuser -p //myuser is username
Enter password: ******    //mypass is password