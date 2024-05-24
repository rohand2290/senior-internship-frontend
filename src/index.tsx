import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Table from './Table';
import Table2020 from "./Table2020";
import Table2021 from "./Table2021";
import Table2023 from "./Table2023";
const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Landing</div>,
  },
  {
    path: "/2019",
    element: <Table />,
  },
  {
    path: "/2020",
    element: <Table2020 />
  },
  {
    path: "/2021",
    element: <Table2021 />
  },
  {
    path: "/2023",
    element: <Table2023 />
  }

])


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <RouterProvider router={router}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
