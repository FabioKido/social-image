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

        const result = await image(template, size, ...params)

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

        const result = await preview(template, body, styles, size, ...params)

        const wrapper = `
            <div>
                <img src="/images/preview.jpeg" alt="preview" />
            </div>
        `
    
        res.status(200).send(wrapper)
    } catch (error) {
        console.log(error)
    }
}

exports.publish = async (req, res) => {
     
    try {
        const { body, styles } = req.body

        const {template} = await publish(body, styles)

        res.status(200).json({
            message: `template created with id ${template}`
        });
    } catch (error) {
        console.log(error)
    }
}