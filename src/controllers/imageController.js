const renderSocialImage = require('puppeteer-social-image')

// const createImage = require('../services/image')

exports.store = async (req, res) => {

    try {
        const { title, size } = req.query;

        //await createImage(title, size)

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
        // error message
    }
}

exports.show = async (req, res) => {
    const wrapper = `
        <div>
            <img style="height: 480px; width: 300px; object-fit: cover" src="/images/image.png" alt="test" />
        </div>
    `
    
    res.send(wrapper)
}

exports.custom = async (req, res) => {
    
    
    
    res.status(200).send("custom")
}