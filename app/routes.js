// External dependencies
const express = require('express')

const router = express.Router()

// Add your routes here - above the module.exports line


router.post('/answer-symptoms', function (req, res) {
  const data = req.session.data
  const symptoms = data.whatareyoursymptoms

  if (symptoms === "Fairy dust sprinkling from your fingers") {

    res.redirect('/details')

  } else if (symptoms === "Tiny wings sprouting from your back") {

    res.redirect('/details')

  } else if (symptoms === "Able to make children's wishes come true") {

    res.redirect('/details')

  } else if (symptoms === "None of the above") {

    res.redirect('/ineligible')

  } else {

    // No answer selected, return to question
    res.redirect('/symptoms')

  }
})






module.exports = router
