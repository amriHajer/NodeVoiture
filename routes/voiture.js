const express=require('express');
const vRouter=express.Router() ;

const voitures = [
    {id:1,name:'clio'},
    {id:2,name:'megane'},
    {id:3,name:'range'},
]




/*******************-creer un api pour ajouter une voiture au tableau voiture ********* */
vRouter.post('/add', (req, res) => {
    const voiture = req.body ;
    voitures.push(voiture);
    res.send("bien ajoutee");

});


/*****************creer un api pour lister tous les voitues ******************/
vRouter.get('/all', (req, res) => {
   res.json (voitures);
   
});


/****************************creer un api pour lister une voiture a traveres le parametre passer ***** */
vRouter.get("/:id", (req, res) => {
    const idv = req.params.id;
    const voiture = voitures.find(v => v.id === parseInt(idv));
    if (voiture) {
        res.json(voiture);
    } else {
        res.status(404).json({ message: "n'existe pas" });
    }
});



/******************** api pour modifier une voiture avec un id specifique avec une verification ***************/

vRouter.put('/update/:id',(req,res)=>{
    const idv = parseInt(req.params.id);
    const index = voitures.find(v => v.id === idv);
    if (index!=null) {
        voitures[index]=res.body;
        res.send("bien modifiee");
    } else {
        res.status(404).json({ message: "n'existe pas" });
    }
});


/*************api pour supprimer une voiture avec un id specifiue avec une verification avant le supprimer **********/
vRouter.delete('/delete/:id', (req, res) => {
    const idv = parseInt(req.params.id);
    const index = voitures.findIndex(v => v.id === idv);
    if (index !== -1) {
        voitures.splice(index, 1);
        res.send("Deleted successfully");
    } else {
        res.status(404).json({ message: "La voiture n'existe pas" });
    }
});




module.exports=vRouter ;