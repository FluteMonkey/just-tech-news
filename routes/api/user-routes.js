const router = require('express').Router();
const { User } = require('../../models');

// GET /api/user
router.get('/', (req, res) => {});

// GET /api/users/1
router.get('/:id', (req, res) => {});

//POSt /api/user
router.post('/', (req, res) => {});

//PUT /api/user/1
router.put('/:id', (req, res) => {});

//DELETE /api/users/1
router.delete('/:id', (req, res) => {});

module.exports = router;