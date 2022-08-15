const not_found = (req,res) =>{
    res.status(404).send('Route Does Not Exist');
}

module.exports = not_found;