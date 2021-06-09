import { Router } from "express";
import * as React from "react";
import { renderToNodeStream } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";

import { App } from "shared/containers";

const header = (initialData: Payload): string => {
  return `
      <meta charset="utf8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta name="theme-color" content="#202020">
      <meta name="description" content="Personal blog">
      <meta name="author" content="Bruno Fernandes">
      <title>kao</title>
      <link href="https://fonts.googleapis.com/css?family=Roboto|Roboto+Mono&display=swap" rel="stylesheet">
      <link href="https://unpkg.com/highlight.js@10.3.1/styles/github.css" rel="stylesheet">
      <link href="https://unpkg.com/katex@0.12.0/dist/katex.min.css" rel="stylesheet">
      <link href="/static/styles/main.css" rel="stylesheet">
      <script src='/static/javascripts/bundle.js' defer></script>
      <script>window.__INITIAL_DATA__ = ${JSON.stringify(initialData)}</script>
    `;
};

export default function (): Router {
  const router = Router();

  // GET / is an alias for GET /posts
  router.get("/", (req, res) => {

    const stream = renderToNodeStream(
      <StaticRouter location={req.url}>
        <App />
      </StaticRouter>
    );

    res.write(
      `<!DOCTYPE html><html lang="en"><head></head><body><div id="root">`
    );
    stream.pipe(res, { end: false });
    stream.on("end", () => res.end("</div></body></html>"));
  });



  // 404 handler
  router.get("*", (req, res) => {
    const stream = renderToNodeStream(
      <StaticRouter location={req.url}>
        <App />
      </StaticRouter>
    );
    res.status(404);
    res.write(
      `<!DOCTYPE html><html lang="en"><head>${header(
        null
      )}</head><body><div id="root">`
    );
    stream.pipe(res, { end: false });
    stream.on("end", () => res.end("</div></body></html>"));
  });
  return router;
}
