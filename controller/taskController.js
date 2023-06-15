const TASKS = require('../model/taskModel')

// create   C -- create
const create_task = async(req,res)=>{
    const Tasks = new TASKS({
        title:req.body.title,
        description:req.body.description,
        tags:req.body.tags,
        author:req.body.author
    })
    try{

        const createTasks = await Tasks.save()
        res.json(createTasks)
    }catch(err){
        res.status(200).json({message:err})

    }

}

// getAll   R -- read
const all_tasks = async(req,res)=>{
    try{
        const getAllTasks =await TASKS.find()
        res.json(getAllTasks)


    }catch(err){

        res.status(404).json({message:err})
    }


}

// update   U -- update
const update_task = async(req,res)=>{
    try{
        const updateTask = await TASKS.updateOne({_id:req.params.taskId},{$set:req.body})
        res.json(updateTask)

    }catch(err){
        res.status(404).json({message:err})
    }
}

// delete   D -- delete
const delete_task = async(req,res)=>{
    try{
        const deleteTask = await TASKS.findByIdAndDelete({_id:req.params.taskId})
        res.json(deleteTask)

    }catch(err){
        res.status(404).json({message:err})

    }

}

// singleTask  --Params
const specific_task =async(req,res)=>{
    try{
        const specificTask = await TASKS.findById(req.params.taskId)
        res.json(specificTask)

    }catch(err){
        res.status(404).json({message:err})
    }

}


module.exports={
    create_task,
    all_tasks,
    update_task,
    delete_task,
    specific_task
}