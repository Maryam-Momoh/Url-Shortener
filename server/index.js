const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const axios = require("axios")
require("dotenv").config();
const { customAlphabet } = require("nanoid")


let nanoid = customAlphabet("123456789abcdef", 8)

mongoose.connect(
    process.env.MONGO_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    () => console.log("DB connected....")
)

const URL = require("./models/Urls")

const PORT = process.env.PORT || 3000;

app = express()
app.use(cors())
app.use(express.json());


app.get("/", (req, res) => {
    res.json({
        message: "Home page"
    });
});

app.get("/urls", async (req, res, next) => {
    let urls = await URL.find({}).exec()
    res.json(urls);
});

app.post("/api/shorten", async (req, res, next) => {
    if (req.body.url) {
        try {
            let url = await URL.findOne({ url: req.body.url }).exec();

            if (url) {
                res.json(url);
            } else {
                const response = await axios.get(req.body.url.toString(), {
                    validatesStatus: (status) => {
                        return status < 500
                    }
                })

                if (response.status != 404) {
                    let newUrl;
                    while (true) {
                        let slug = nanoid();
                        let checkedSlug = await URL.findOne({slug: slug}).exec()
                        if (!checkedSlug) {
                            newUrl = await URL.create({
                                originalUrl: req.body.url,
                                slug: slug,
                            });
                            break;
                        }
                       
                    }
                   
                    // console.log(slug);
                    res.json({
                        short: `${process.env.URL}/${newUrl.slug}`,
                        status: response.status,
                    })
                } else {
                    res.json({
                        statusText: response.statusText,
                        status: response.status,
                    })
                }

            }
        } catch (err) {
            next(err)
        }

    } else {
        res.status(400);
        const error = new Error("URL is required");
        next(error);
    }
});

app.get("/:slug", async (req, res, next) => {
    try{
        let url = await URL.findOne({ slug: req.params.slug}).exec()

        if (url) {
            res.status(301)
            res.redirect(url.originalUrl)
        } else {
            next()
        }
    } catch (err) {
        next(err)
    }
})

function notfound(req, res, next) {
    res.status(404);
    const error = new Error("Not found .." + req.originalUrl);
    next(error)
}

function errorHandler(err, req, res, next) {
    res.status(res.statusCode || 500);
    res.json({
        message: err.message,
        error: {
            status: res.statusCode,
            stack: process.env.ENV === "development" ? err.stack : undefined,
        }
    })
}

app.use(notfound);
app.use(errorHandler);

app.listen(PORT, () => console.log(`Listening on port ${PORT}...`))