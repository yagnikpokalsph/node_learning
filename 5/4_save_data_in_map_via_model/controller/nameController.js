const Person = require('../model/personModel')

exports.savePersonController = (req, res) => {
    // Create a new person and save their data
    const person = new Person(req.body.name,req.body.age);
    person.set(req.body.name,req.body.age); // Save the data in the map

    res.status(200).json({
        message: `Person saved successfully with name ${person.getName()} and age ${person.getAge()}`
    });
};

// Get a person by name
exports.getPersonController = (req, res) => {


    const personData = Person.getPerson(req.body.name);

    if (!personData) {
        return res.status(404).json({ message: 'Person not found' });
    }

    res.status(200).json({ personData });
};

