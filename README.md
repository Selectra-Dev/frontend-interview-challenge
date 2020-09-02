# Selectra Front-end Interview Challenge

Welcome!

Here you will find a series of challenges to complete for your front-end interview. These are exercises based on real-life scenarios similar to the ones you can find in your daily life at Selectra. 

## Challenges

### Landing page
For this test you will have to create a landing page with a _mobile first_ approach in mind replicating the design in the provided mockups. Focus first on all elements you know what to do, if there's something that you don't know how to resolve, keep on with the rest.
 

#### Specifications:

- The breaking point will be at 768px.
- No images will be used, only code and emojis. 
- [SM Mockup](./img/ex1-sm.png)
- [MD Mockup](./img/ex1-md.png)


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


## Contributing rules
To have any PR against this project taken into account, you must follow the following rules:

- Use of [_BEM methodology](http://getbem.com/).
- Use of [Idiomatic.js ](https://github.com/rwaldron/idiomatic.js/) style for Javascript.
- Fork the project. When finished, submit a PR. (_or send us the patch? I think the PR is easier for us..._)
