const Resources = require('../model/Resources')

class resourceController {

    static addResource = async(req,res) => {
        const{type,resourceName,resourceDescription,resourceLink} = req.body
        if(type && resourceName && resourceDescription){
            try{
                const resource = new Resources({
                    type: type,
                    resourceName: resourceName,
                    resourceDescription: resourceDescription,
                    resourceLink: resourceLink
                })

                await resource.save()
                res.send({message: "Resource Added Successfully!"})
            }catch (error){
                console.log(error)
                res.send({message: `Something went wrong! ${error}`});
            }
        }
    }
    static getAllResources = async(req,res) => {
        const resources = await Resources.find(req.query)
        res.json({resources})
    }
}
module.exports = resourceController