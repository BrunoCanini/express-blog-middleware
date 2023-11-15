const express = require("express");
const fs = require("fs");
const path = require("path");
const {kebabCase} = require("lodash");

const postsDb = require("../db");

function index (req, res) {

    res.format({
      text: () => {
        res.type("text").send("POSTS");
      },
      html: () => {
       const html = ["<h1>POSTS</h1>"];
    
       html.push("<ul>");

       for ( post of postsDb ) {
        html.push(`<li>
        <h3>${post.title}</h3>
        <img src="/imgs/posts/${post.image}" alt="" style="width: 100px">
        <p>${post.content}</p>
        </li>`)
       };

       html.push("</ul>");

       res.send(html.join(""));



      },
      json: () => {
        res.type("json").send({
          message: "POSTS",
        });
      },
      default: () => {
        res.status(406).send("Not Acceptable");
      },
    })
}

function show (req, res) {

    const postSlug = req.params.slug
    const post = postsDb.find(post => post.slug == postSlug)

    if(!post){
        res.status(404).send("post non trovato");
    }

    res.json(post);
}

function store (req, res) {
  console.log(req.body);

  postsDb.push({
    ...req.body,
    slug: kebabCase(req.body.title)
  });

  const json = JSON.stringify(postsDb);

  fs.writeFileSync(path.resolve(__dirname, "../db.json"), json);

  res.format({
    html: () => {
      res.type("html").send(res.redirect("/posts/create"));

    },
    default: () => {
      res.type("json").send(json);
    },
  })
}

module.exports = {
    index,
    show,
    store,
  }