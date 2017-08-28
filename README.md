# SchooLinks Dev Challenge

## TL;DR

``cd scheduler``
``yarn start``

## Though Process, Logic Design

Given the broad question, I chose to set the following constraints:
- a week is Monday to Friday with 3 hours of classes per day
- a day is 3 slots worth a time unit each. They are the same for every workday.
- the user (a student) needs to choose at least one course in Maths (M.), Science (S.), English (E.), History (H.) and Electives (C.)

I chose the following object representation for a class:
``{ id, name, schedule: [ { day, slot } ] }``
where:
- id is a string based on the course category: M, S, E, H or C. It is appended with an incremental integer to make it unique
- name is a string
- schedule is an array of objects where day is an integer between 1 and 5 and slot is an integer between 1 and 3

To think about possible course combinations, I used a 3x5 grid on pen and paper.

As suggested by the spec, the scheduling data is loaded from ``scheduler/src/data.js``.

## Code Structure

I used React given that it's the frontend framework I'm most comfortable with. Using Redux seemed like a bit of an overkill because of the small scope of the state. The state is designed as follows:
- ``options``: an array of objects, based on the data pulled from ``data.js``, with extra attributes for the Select component
- ``selected``: a subset of ``options``, reflecting the current selection made by the user
- ``table``: a 5x3 matrix initialized with empty strings containing the schedule view fed into the Table component

The React app consists of an App component which contains all of the interaction logic, an external Library (``react-select``) and a stateless component ``Table``.

Bootstrap v3 is used as an external CSS stylesheet.
