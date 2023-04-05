const renderSocialImage = require('puppeteer-social-image')

const {image} = require('../services/image')
const {preview} = require('../services/preview')
const {publish} = require('../services/publish')

exports.image = async (req, res) => {

    try {
        const { template, size } = req.query

        delete req.query.template
        delete req.query.size

        const params = Object.entries(req.query)

        await image(template, size, ...params)

        res.set('Content-Type', 'image/jpeg')
        res.status(200).json({
            message: 'image created with success'
        })
    } catch (error) {
        console.log(error)
    }
}

exports.preview = async (req, res) => {
    try {
        const { template, body, styles, size } = req.query

        delete req.query.template
        delete req.query.body
        delete req.query.styles
        delete req.query.size

        const params = Object.entries(req.query)

        const {img} = await preview(template, body, styles, size, ...params)
    
        res.set('Content-Type', 'image/jpeg')
        res.status(200).json({
            data: img
        })
    } catch (error) {
        console.log(error)
    }
}

exports.publish = async (req, res) => {
     
    try {
        const { body, styles } = req.body

        const {template} = await publish(body, styles)

        res.status(200).json({
            message: `Use template ID ${template}`
        });
    } catch (error) {
        console.log(error)
    }
}