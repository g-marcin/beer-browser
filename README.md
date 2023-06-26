# beer-browser

## api base url:

https://api.punkapi.com/v2/

## features:

<ul>
<li>page layout</li>
<li>data fetched from api</li>
<li>data mapped to convenient shape</li>
<li>data displayed into cards</li>
<li>data is paginated</li>
<li>beer details on separate dynamic route /details/:id </li>
<li>specific beer details fetched by useBeerDetails custom hook</li>
<li>beer details displayed in engaging way</li>
<li>slider menu with focus-lock</li>
<li>dark/light theme, saved in local-storage, passed by context </li>
<li>sub-menu with breadcrumbs navigation </li>
<li>added styles to beer cards and beer images  </li>
<li>data-loading is communicated to user with loader(spinner)  </li>
<li>app is compatible with desktop/tablet/mobile screens </li>
</ul>

## locally:

1. clone repository.
2. open repository in your IDE ( eg vs code )
3. open terminal( crtl + ` )
4. npm install // ( Node js required )
5. npm start
6. open browser and connect to localhost:5173

## live:

<a> https://beer-browser2.netlify.app/ </a>

## dependencies:

 <code>

        "axios": "^1.4.0"
        "bootstrap": "^5.3.0",
        "prettier": "^2.8.8",
        "react": "^18.2.0",
        "react-bootstrap": "^2.7.4",
        "react-dom": "^18.2.0",
        "react-feather": "^2.0.10",
        "react-focus-lock": "^2.9.4",
        "react-router-bootstrap": "^0.26.2",
        "react-router-dom": "^6.13.0"

 </code>

## dev-dependencies:

<code>

        "@testing-library/react": "^14.0.0",
        "@types/react": "^18.0.37",
        "@types/react-dom": "^18.0.11",
        "@typescript-eslint/eslint-plugin": "^5.60.0",
        "@typescript-eslint/parser": "^5.60.0",
        "@vitejs/plugin-react-swc": "^3.0.0",
        "eslint": "^8.38.0",
        "eslint-config-prettier": "^8.8.0",
        "eslint-import-resolver-typescript": "^3.5.5",
        "eslint-plugin-import": "^2.27.5",
        "eslint-plugin-jsx-a11y": "^6.7.1",
        "eslint-plugin-react": "^7.32.2",
        "eslint-plugin-react-hooks": "^4.6.0",
        "eslint-plugin-react-refresh": "^0.4.1",
        "happy-dom": "^9.20.3",
        "typescript": "^5.0.2",
        "vite": "^4.3.9",
        "vitest": "^0.32.2"

</code>
