import {
  isRouteErrorResponse,
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useNavigate,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  const navigate = useNavigate();

  return (
    <>
      <header className=" text-black py-4 shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center">
              <Link
                to="/"
                className="text-orange-600 text-2xl font-bold italic"
              >
                Nritalaya
              </Link>
            </div>

            {/* Navigation */}
            <div className="flex items-center space-x-8">
              <nav className="flex space-x-6 items-center">
                <Link
                  to="/"
                  className="hover:text-orange-200 transition-colors cursor-pointer"
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="hover:text-orange-200 transition-colors cursor-pointer"
                >
                  About
                </Link>
                {/* <Link
                  to="/contact"
                  className="hover:text-orange-200 transition-colors cursor-pointer"
                >
                  Contact
                </Link> */}
              </nav>
              <button
                onClick={() => navigate("/signup")}
                className="hover:bg-white text-orange-600 px-4 py-2 rounded-lg bg-orange-100 transition-colors font-medium cursor-pointer"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </header>
      <Outlet />
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold text-orange-500">
                Bharatanatyam Academy
              </h3>
              <p className="text-gray-400">
                Preserving tradition, inspiring innovation
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <a
                href="#"
                className="text-gray-400 hover:text-orange-500 transition"
              >
                About
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-orange-500 transition"
              >
                Classes
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-orange-500 transition"
              >
                Events
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-orange-500 transition"
              >
                Gallery
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-orange-500 transition"
              >
                Contact
              </a>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-6 pt-6 text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Bharatanatyam Academy. All rights
            reserved.
          </div>
        </div>
      </footer>
    </>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
