const renderSocialImage = require('puppeteer-social-image')

// const {image} = require('../services/image')
const {publish} = require('../services/publish')

// image
exports.store = async (req, res) => {

    try {
        const { title, size } = req.query;

        //await {image}(title, size)

        await renderSocialImage.default({
            template: "basic",
            templateParams: {
                imageUrl:
                    "https://images.unsplash.com/photo-1557958114-3d2440207108?w=1950&q=80",
                title
            },
            output: "public/images/image.png",
            size
        })

        res.status(200).json({
            message: 'image created with success'
        });
    } catch (error) {
        console.log(error)
    }
}

// preview
exports.show = async (req, res) => {
    const wrapper = `
        <div>
            <img style="height: 480px; width: 300px; object-fit: cover" src="/images/image.png" alt="test" />
        </div>
    `
    
    res.send(wrapper)
}

// publish
exports.custom = async (req, res) => {
     
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