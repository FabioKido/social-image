const renderSocialImage = require('puppeteer-social-image')

exports.show = async (req, res) => {

    try {
        const { title, size } = req.query;

        await renderSocialImage.default({
            template: "basic",
            templateParams: {
                imageUrl:
                    "https://images.unsplash.com/photo-1557958114-3d2440207108?w=1950&q=80",
                title
            },
            output: "assets/image.png",
            size
        })

        res.status(200).json({
            message: 'image created with success'
        });

    } catch (error) {
        // error message
    }
}