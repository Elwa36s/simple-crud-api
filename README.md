# *Simple CRUD API. RSSchool's task*

## Start
To start server use: 
```
    npm run start:dev
```
Server starts on PORT stored in <.env> file.

***

## Working with CRUD API

You could use the following methods and endpoints:

### **GET**

``` 
/person - allows you to receive all persons.
```
>Empty array on each application start

```
/person/{personId} - allows you to receive a person with entered id.
```
 
***
### **POST**
```
/person - used to create record about new person.
```

>This request should contain next type of body:
```
{
    name: {personName},
    age: {personAge},
    hobbies: {arrayOfPersonHobbies}
}
```
***
### **PUT**

```
/person/${personId} - provides you with an a ability to change person's data.
```
***
### **DELETE**
```
/person/${personId} - is used to delete record about existing person.
```