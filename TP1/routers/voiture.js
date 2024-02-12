const express = require('express');
const router = express.Router();

let voitures = [
    { id: 1, name: "clio" },
    { id: 2, name: "egane" },
    { id: 3, name: "range" }
];

// Read all voitures
router.get('/', (req, res) => {
    res.json(voitures);
});

// Read single voiture by ID
router.get('/:id', (req, res) => {
    const voiture = voitures.find(v => v.id === parseInt(req.params.id));
    if (!voiture) {
        return res.status(404).send('Voiture not found');
    }
    res.json(voiture);
});

// Update voiture by ID
router.put('/:id', (req, res) => {
    const voitureId = parseInt(req.params.id);
    const updatedVoiture = req.body;
    const index = voitures.findIndex(v => v.id === voitureId);
    if (index === -1) {
        return res.status(404).send('Voiture not found');
    }
    voitures[index] = { ...voitures[index], ...updatedVoiture };
    res.send(`Voiture with ID ${voitureId} updated`);
});

// Delete voiture by ID
router.delete('/:id', (req, res) => {
    const voitureId = parseInt(req.params.id);
    const index = voitures.findIndex(v => v.id === voitureId);
    if (index === -1) {
        return res.status(404).send('Voiture not found');
    }
    voitures.splice(index, 1);
    res.send(`Voiture with ID ${voitureId} deleted`);
});

module.exports = router;
