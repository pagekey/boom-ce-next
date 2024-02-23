---
status: accepted
creation-date: "2024-01-23"
authors: [ "@stephengrice" ]
coach: "n/a"
approvers: [ "@stephengrice" ]
---

# Activity Logging

## Summary

Activity Logging is perhaps the most important feature in Boom. It enables the user to keep track of their progress. Being able to look back on all the hard work they did, they will feel a sense of accomplishment and be excited to get back to it.

The Activity Logging feature provides an easy way for any other Boom feature to track user actions. It also provides an easy way to review activity on each user's profile.

Privacy settings on each log allows users to keep their actions private if they would prefer.

## Motivation

Learning a language is a long, complex, trying process. You can't learn a language in a day.

The ability to track what you've done so far makes it easier to see the progress you've made and stay motivated.

It also lends itself to social aspects of the app - people can check out how their friends are learning and possibly find new techniques, or even learn new vocabulary if they happen to be learning the same language.

### Goals

- Routes for saving activities exist.
  - They are general enough that any future Boom feature will be able to use them.
- Routes for querying activies are implemented.
- Components for displaying activites are implemented.
- Activity privacy settings are implemented.
- User profile exists and shows latest activities for the user.

### Non-Goals

Out of scope:

- User creation. For this, see `user/index.md`.

## Proposal

<!--
This is where we get down to the specifics of what the proposal actually is,
but keep it simple!  This should have enough detail that reviewers can
understand exactly what you're proposing, but should not include things like
API designs or implementation. The "Design Details" section below is for the
real nitty-gritty.

You might want to consider including the pros and cons of the proposed solution so that they can be
compared with the pros and cons of alternatives.
-->

## Design and implementation details

(note: title, description, tags, category, custom fields?)

### User Story

TODO

### Components

TODO

### Pages

TODO

### Routes

TODO

## Alternative Solutions

- Use the data produced by other features as-is:
  - Pro: don't have to do anything RIGHT NOW.
  - Con: it will be a MESS trying to query each feature separately - each will have a different interface and way of collating activity data, if it's even possible.
- Do nothing: lame because you can't see any progress as you work.
