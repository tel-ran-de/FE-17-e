module.exports = (sequelize, Sequelize) => {
    const Person = sequelize.define('persons', {
        first_name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        last_name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        age: {
            type: Sequelize.INTEGER,
        },
        email: {
            type: Sequelize.STRING,
        },
        company_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue: 1,
        }
    })
    return Person
}