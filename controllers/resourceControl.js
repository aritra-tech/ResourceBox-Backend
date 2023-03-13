const Resources = require('../model/Resources')

class resourceController {

    static addResource = async(req,res) => {
        const{type,resourceName,resourceDescription,resourceLink} = req.body
        const resource = await Resources.findOne({ resourceName: resourceName})
        if(resource){
            return res.status(400).json({message: "Resource already exist"})
        }
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