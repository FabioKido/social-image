const renderSocialImage = require('puppeteer-social-image')

const {image} = require('../services/image')
const {publish} = require('../services/publish')

exports.image = async (req, res) => {

    try {
        const { template, size, title, logo, imageUrl } = req.query;

        const result = await image(template, size, ["title", title],["logo", logo],["imageUrl", imageUrl])

        res.status(200).json({
            message: 'image created with success'
        });
    } catch (error) {
        console.log(error)
    }
}

exports.preview = async (req, res) => {
    const wrapper = `
        <div>
            <img style="height: 480px; width: 300px; object-fit: cover" src="/images/image.png" alt="test" />
        </div>
    `
    
    res.send(wrapper)
}

exports.publish = async (req, res) => {
     
    try {
        const { body, styles } = req.body;

        const {template} = await publish(body, styles)

        res.status(200).json({
            message: `template created with id ${template}`
        });
    } catch (error) {
        console.log(error)
    }
}