# News2Day - Admin panel appliction

This project is a Admin panel application built with React and other libraries. The application allows users to add new news articles, edit existing news articles, and delete news articles.

## Getting started

1. Clone the repository:

```bash
  git clone https://github.com/yash-chouhan/new2day-reactapp.git
```
2. Install the dependencies:

```bash
  cd new2day-reactapp
  npm install
```
3. Start the development server:

```bash
  npm run dev
```

## Components

### CreateNewsFeed Component

This component allows users to add new news articles. Users can enter a title, content, category, and status for the news article. The new news article is added to the beginning of the `newsData` array, so that it appears as the most recent item in the list.

### ManageNewsFeed Component

This component allows users to view and manage existing news articles. Users can edit or delete news articles. When a user clicks the "Edit" button for a news article, the `isEdit` state variable is set to `true`, and the `handleAddNewsFormSubmit` function is used to update the news article with the new data.

### PerformanceReport Component

This component uses the `react-apexcharts` library to display a chart of news article performance. The chart shows the number of news articles published over time.

### Dashboard Component

This component uses the `react-apexcharts` library to display a chart of news article categories. The chart shows the number of news articles in each category.

## Libraries and Tools

### Axios

The `axios` library is used to make API requests to the server.

### Tailwind CSS

The `tailwindcss` library is used for styling the application.

### React Icons

The `react-icons` library is used for adding icons to the application.

### React Router Dom

The `react-router-dom` library is used for routing in the application.

### Context API

The `Context API` is used for state management in the application.

I hope this README note helps you understand the components and features of your application. Let me know if you have any further questions or if there's anything else I can help you with!
