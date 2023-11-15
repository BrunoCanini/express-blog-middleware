const express = require("express");
const fs = require("fs");
const path = require("path");

function index (req, res) {

  res.format({

    text: () => {
        res.type("text").send("Hello World!");
      },
      html: () => {
        res.type("html").send("<h1>HOME</h1>");
      },
      json: () => {
        res.type("json").send({
          message: "home",
        });
      },
      default: () => {
        res.status(406).send("Not Acceptable");
      },
    })
  }

  module.exports = {
    index,
  }