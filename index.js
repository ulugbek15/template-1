const express = require("express")
const ejs = require("ejs")
const app = express()
const PORT = process.env.PORT || 4000

app.engine("ejs", ejs.renderFile)
app.set("view engine", "ejs")
app.set("views","src/views")
app.use("/assets", express.static("static"))
app.use("/images", express.static("images"))

app.get("/", (_, res) =>{
	res.render("index", {title: "Main Page"})
})

app.get("/elements", (_, res) =>{
	res.render("elements", {title: "Elements Page"})
})
app.get("/left-sidebar", (_, res) =>{
	res.render("left-sidebar", {title: "Left-Sidebar"})
})
app.get("/right-sidebar", (_, res) =>{
	res.render("right-sidebar", {title: "Right-Sidebar"})
})
app.get("/no-sidebar", (_, res) =>{
	res.render("no-sidebar", {title: "No-Sidebar"})
})


app.listen(PORT, () => {
	console.log(`* : ${PORT}`)
})