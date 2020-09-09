# Selectra Front-end Interview Challenge

Welcome!

Here you will find a series of challenges for you to complete as part of Selectra front-end selection process.

These are based on real-life scenarios similar to the ones you can find in your daily life at Selectra. 

## Challenges

### Landing page
For this test you will have to create a landing page with a _mobile first_ approach in mind replicating the design in the provided mockups. Focus first on all elements you know what to do, if there's something that you don't know how to resolve, keep on with the rest.
 

#### Specifications:

- Do not use any library for this exercise.
- The breaking point will be at 768px.
- No images will be used, only code and emojis. 
- [SM Mockup](./img/ex1-sm.png).
- [MD Mockup](./img/ex1-md.png).


### Form
For this test you will create a form (no styling needed) that displays a different set of questions depending on the answer given.

#### Specifications:
- Use only Vanilla JavaScript (up to ES2020)
- Fields:
  - **Name**: Input type text, minimum characters 5.
  - **Surname**: Input type text, minimum characters 5.
  - **e-mail**: Input type email, verify the validity of the address via RegEx.
  - **Pet**: Input type radio. At least one has to be selected in order to hide/display the corresponding question.
    - **Cat hair type**: Select, with three options. At least 1 has to be selected. Hidden by default, shown depending on previous questions.
    - **Dog size**: Select, with three options. At least 1 has to be selected. Hidden by default, shown depending on previous questions.
  - **Submit**: Input type submit. When clicked or invoked, the form has to go through validation before actually submitting the data. 
- Here you can find a [diagram](./img/ex2-form.jpg) of the form, to better understand the fields needed and their behavior.  

## Installation

Fork and clone the repository.

Then install project dependencies:
```
npm install
```

There's some boilerplate files in the `src` directory. We provide a basic webpack configuration targeting these files. To build the project run:
```
npm run build-dev
```
A new `dist` folder should be created in the root folder.
 
Anything beyond is up to you! 

## Contributing
When finished, submit a PR.

For any PR against this project to be taken into account, it must follow these conventions:

- Use of [_BEM methodology](http://getbem.com/).
- Use of [Idiomatic.js](https://github.com/rwaldron/idiomatic.js/) style for Javascript.
