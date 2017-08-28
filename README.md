# SchooLinks Dev Challenge

## TLDR;

``cd scheduler``
``yarn start``

## General

Given the broad question, I chose to set the following constraints:
- a week is Monday to Friday with 3 hours of classes per day
- a day is 3 slots worth a time unit each. They are the same for every workday.
- the user (a student) needs to choose at least one course in Maths (M.), Science (S.), English (E.), History (H.) and Electives (C.)

I chose the following object representation for a class:
``{ id, name, schedule: [ { day, slot } ], requirement }``
where:
- id is a string based on the course category: M, S, E, H or C. It is appended with an incremental integer to make it unique
- name is a string
- schedule is an array of objects where day is an integer between 1 and 5 and slot is an integer between 1 and 3
(- requirement is an ``id`` of an existing class) dropped: took too much time to implement

To think about possible course combinations, I used a 3x5 grid.

As suggested by the spec, the scheduling data is loaded from ``scheduler/src/data.js``.
