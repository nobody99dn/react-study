# React Practice

## OVERVIEW

- This document provides a detailed estimate of the React practice. This practice creates a Products Management WebApp with goals that I can apply React knowledge.

## TIMELINE

- Estimate time: **7 days (2022/07/07 - 2022/07/14)**
- Actual time: **10 days (2022/07/07 - 2022/07/19)**

## TEAM SIZE

- 1 developer:
  - [Van Tran](van.tran@asnet.com.vn)

## TARGETS

- Optimize re-render
- Apply useContext and useReducer for state management
- Apply SWR for fetching data
- Apply unit test

## TECHNICAL STACK

- React/React hooks: Hooks are the new feature introduced in the React 16.8 version. It allows you to use state and other React features without writing a class. Hooks are the functions which "hook into" React state and lifecycle features from function components. It does not work inside classes.
- Storybook: Storybook is a tool for UI development. It makes development faster and easier by isolating components.
- TypeScript: TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.
- HTML/CSS
- [Mockapi](https://mockapi.io/): MockAPI is a simple tool that lets you easily mock up APIs, generate custom data, and preform operations on it using RESTful interface. MockAPI is meant to be used as a prototyping/testing/learning tool.
- Axios: Axios is a promise-based HTTP Client for node.js and the browser.
- SWR: The name “SWR” is derived from stale-while-revalidate, a HTTP cache invalidation strategy popularized by HTTP RFC 5861.
- Jest: Jest is a delightful JavaScript Testing Framework with a focus on simplicity.
- React Testing Library: React Testing Library builds on top of DOM Testing Library by adding APIs for working with React components.

## REQUIREMENT DETAILS

- Read more detail requirement in [here](https://docs.google.com/document/d/129n2dhTinppdSKM7Pb_7MIP3ZyIYDiamli1h6k7N2ug/edit?usp=sharing).

## ENVIRONMENT

- Windows

## EDITOR

- [Visual studio code](https://code.visualstudio.com)

## DIRECTORY STRUCTURE

```
├── __mocks__
├── .storybook
├── coverage
├── node_modules
└── src
    ├── assets
    │   ├── styles
    │   └── images
    |       └── icons
    ├── components
    │   ├── commons
    │   │   ├── Button
    │   │   ├── Card
    │   │   ├── Image
    │   │   ├── SelectItem
    │   │   ├── Text
    │   │   ├── TextField
    │   │   └── Title
    │   ├── Filter
    │   ├── Form
    │   ├── Layout
    │   ├── LoadingIndicator
    │   ├── MessagePopUp
    │   ├── Modal
    │   ├── ModalForm
    │   ├── Posts
    │   └── SearchInput
    ├── constants
    ├── helpers
    ├── hooks
    ├── layouts
    │   ├── Header
    │   ├── Main
    │   ├── ProductDetail
    │   └── SideBar
    ├── models
    ├── pages
    │   ├── DetailPage
    │   └── Home
    └── store

```

## GET STARTED

- Clone project:

  ```bash
  $ git clone git@gitlab.asoft-python.com:van.tran/react-training.git
  ```

- Checkout branch:

  ```bash
  $ git checkout feature/practice-3
  ```

- Change directory:

  ```bash
  $ cd practice-3/products-management-app
  ```

- Install packages:

  ```bash
  $ yarn install
  ```

- Start project

  ```bash
  $ yarn dev
  ```

- Run test

  ```
  $ yarn test
  ```

- Run storybook

  ```
  $ yarn storybook
  ```

- Open browser and and type http://localhost:3000 in address bar
