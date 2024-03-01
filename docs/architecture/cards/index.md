---
status: accepted
creation-date: "2024-01-23"
authors: [ "@stephengrice" ]
coach: "n/a"
approvers: [ "@stephengrice" ]
---

# Cards

## Summary

The Cards (or flashcards) feature of Boom allows users to save words and phrases that they want to remember as flashcards. While a mundane feature on its own, this becomes much more powerful when included conveniently in other features. This design doc proposes a way to store and retrieve cards as simply as possible. Future design docs present more elaborate ways to review cards or analyze card data for patterns.

## Motivation

This feature allows users to track words they've never encountered before. This plays heavily into the overall goal of Boom being an **integrated** language app. Users should be able to do everything in one place. One of the first things you need to do when learning a language is start remembering and reviewing the things you've learned.

### Goals

- Provide a way to store cards in the database
- Provide routes for storing cards that can be re-used by other features
- Provide routes for retrieving cards efficiently for review
- Provide pages for card CRUD: index, create, show, update, delete.
- Provide page for card review.

### Non-Goals

Out of scope:

- Any sort of fancy analytics or review features for cards.
- Spaced-repetition system (SRS) algorithms - these will need to be tackled as an effort of their own.

## Proposal

The Cards feature is implemented using a Card database table and several standard routes to read and write them.

Additionally, pages are provided for creating, reading, updating, and deleting the cards. These CRUD components are designed to be general enough that future features will be able to re-use them. They are not specific to the Cards feature.

A special review component and page are also implemented.

## Design and implementation details

### User Story

TODO

### Components

TODO

### Pages

TODO

### Routes

(pass front, back, frontLanguage, backLanguage)
TODO

## Alternative Solutions

What is proposed above is likely the simplest possible solution. Future features will augment this and make it more interesting.

Do nothing: Not including this feature would require users to switch to another app whenever they learn a new word or phrase, completely defeating the purpose of Boom.
