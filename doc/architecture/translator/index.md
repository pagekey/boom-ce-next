---
status: proposed
creation-date: "2024-01-23"
authors: [ "@stephengrice" ]
coach: "n/a"
approvers: [ "@stephengrice" ]
---

# Translator (Text)

## Summary

One of the most common needs when learning a language is to be able to quickly translate words and phrases to and from your target language. An example would be pasting "hola" into a translation app to find out that it means "hello" in Spanish. This feature is included in Boom so that the user's translation history can be integrated with other features, such as the `cards` feature. While it is mostly just be a pass-through to another translation API, the ability to intercept this traffic and save words that the user wants to remember later makes this a valuable feature.

## Motivation

Switching between apps is not part of an integrated language learning experience and must be avoided. By including a translation feature in Boom, allows the user to translate words and phrases without leaving the app.

The user benefits because they can review their previous translations, save the entire translation as a card for later review, or even pick and choose words within a pasted phrase to save as cards.

This feature can also be integrated into other views within Boom.

### Goals

- Provide a translation interface where the user can paste text and receive a translation
- Allow fast switching between the current target language and the user's native language
- Store the translation history
- Allow saving of cards from translations (entire phrase)
- Allow saving of cards from translations (single words within translation)

### Non-Goals

Out of scope:

- How local translation history is synced with server. See `storage` blueprint.
- How cards are saved. See `cards` blueprint.

## Proposal

1. Create the `src/component/Translator.tsx` component that allows you to paste text and receive a translation, and switch languages.

2. Provide hooks in the `Translator` component for:

- Saving translation history
- Saving cards

3. Add the page `pages/translator/index.tsx` to display the translator component and feed data into it.

## Design and implementation details

### `Translator` Component

The `Translator` component contains the following elements:

Field  | Type     | Description
------ |------    | ------------
Left   | TextArea | Left-hand side (text to translate)
Right  | Text  | Right-hand side (translated text)
SwapButton | Button | Button to swap the languages
SaveCard | Button | Button to save the translation as a card
SaveSingleCard | Button | Button to save a single word as a card. On click, select word(s) from each side

It accepts these props from the parent:

TODO

It maintains the following internal state:

TODO

### `Translator` Page

Page contains:

- Title
- `Translator` component
- State: TODO

<!--
This section should contain enough information that the specifics of your
change are understandable. This may include API specs (though not always
required) or even code snippets. If there's any ambiguity about HOW your
proposal will be implemented, this is the place to discuss them.

If you are not sure how many implementation details you should include in the
blueprint, the rule of thumb here is to provide enough context for people to
understand the proposal. As you move forward with the implementation, you may
need to add more implementation details to the blueprint, as those may become
an important context for important technical decisions made along the way. A
blueprint is also a register of such technical decisions. If a technical
decision requires additional context before it can be made, you probably should
document this context in a blueprint. If it is a small technical decision that
can be made in a merge request by an author and a maintainer, you probably do
not need to document it here. The impact a technical decision will have is
another helpful information - if a technical decision is very impactful,
documenting it, along with associated implementation details, is advisable.

If it's helpful to include workflow diagrams or any other related images.
Diagrams authored in GitLab flavored markdown are preferred. In cases where
that is not feasible, images should be placed under `images/` in the same
directory as the `index.md` for the proposal.
-->

## Alternative Solutions

An intent to another app to provide the translation could work, but the experience would likely feel clunky. It may not be possible to control how/when the user returns to the app and it's possible that they'll get distracted and forget to come back.

Not including this feature at all would require the user to manually switch between apps to translate text when working on a project.
