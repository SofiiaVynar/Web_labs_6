const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');

const dbConfig = require('./db.config.js');

const app = express();
app.use(bodyParser.json());
app.use(cors());
const path = require('path');
const fotoesPath = path.join('C:', 'Users', 'Admin', 'Web', 'Lab_6', 'perfumes', 'src', 'Catalog', 'Fotoes');
app.use('/Fotoes', express.static(fotoesPath));

const connection = mysql.createConnection({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DATABASE,
});

connection.connect((error) => {
    if (error) {
        console.error('Помилка підключення до бази даних:', error);
        return;
    }
    console.log('Підключення до бази даних прошло успішно');
});

app.get('/perfumesbd', (req, res) => {
    const { filter1, filter2, filter3, searchTerm } = req.query;
    let query = 'SELECT * FROM perfumes WHERE 1';

    if (filter1) {
        if (filter1 === 'Item1') {
            query += ' AND caption4 LIKE "%₴" AND CONVERT(SUBSTRING_INDEX(caption4, " ₴", 1), UNSIGNED) <= 1000';
        } else if (filter1 === 'Item2') {
            query += ' AND caption4 LIKE "%₴" AND CONVERT(SUBSTRING_INDEX(caption4, " ₴", 1), UNSIGNED) <= 3000 AND CONVERT(SUBSTRING_INDEX(caption4, " ₴", 1), UNSIGNED) <= 3000';
        } else if (filter1 === 'Item3') {
            query += ' AND caption4 LIKE "%₴" AND CONVERT(SUBSTRING_INDEX(caption4, " ₴", 1), UNSIGNED) > 3000';
        }
    }



    if (filter2) {
        if (filter2 === 'Новинка') {
            query += ' AND title = "Новинка"';
        } else if (filter2 === 'Хіт продаж') {
            query += ' AND title = "Хіт продаж"';
        }
    }

    if (filter3) {
        if (filter3 === 'Dior') {
            query += ' AND caption2 = "Dior"';
        } else if (filter3 === 'Hugo Boss') {
            query += ' AND caption2 = "Hugo Boss"';
        } else if (filter3 === 'Helene Fischer') {
            query += ' AND caption2 = "Helene Fischer"';
        }
    }

    if (searchTerm) {
        query += ` AND caption1 LIKE '%${searchTerm}%'`;
    }

    connection.query(query, (error, results) => {
        if (error) {
            console.error('Error:', error);
            res.status(500).send('Server error');
        } else {
            const updatedResults = results.map(item => ({
                ...item,
                image: `/Fotoes/${item.image}`
            }));
            
            res.json(updatedResults);
        }
    });
});


app.get('/perfumesbd/:itemId', (req, res) => {
    const itemId = req.params.itemId;
    const query = 'SELECT * FROM perfumes WHERE id = ?';
    connection.query(query, itemId, (error, results) => {
        if (error) {
            console.error('Помилка при запиті до бази даних:', error);
            res.status(500).send('Помилка на сервері');
        } else {
            if (results.length > 0) {
                const item = results[0];
                const updatedItem = {
                    ...item,
                    image: `/Fotoes/${item.image}`
                };
                res.json(updatedItem);
            } else {
                res.status(404).send('Товар не знайдено');
            }
        }
    });
});


app.post('/perfumesbd', (req, res) => {
    const item = req.body;

    const imagePath = path.join('Fotoes', item.image);
    const query = 'INSERT INTO perfumes (title, image, caption1, caption2, caption4, caption1margin) VALUES (?, ?, ?, ?, ?, ?)';
    const values = [item.title, imagePath, item.caption1, item.caption2, item.caption4, item.caption1margin || null];


    connection.query(query, values, (error, result) => {
        if (error) {
            console.error('Помилка при додаванні парфюма:', error);
            res.status(500).send('Помилка на сервері');
        } else {
            item.id = result.insertId;
            res.status(201).json(item);
        }
    });
});


app.listen(3001, () => {
    console.log('Сервер запущено на порті 3001');
});
