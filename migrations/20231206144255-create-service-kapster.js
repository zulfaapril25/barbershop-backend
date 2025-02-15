'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Service_Kapsters', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      kapsterId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Kapsters",
          key: "id"
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      serviceId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Services",
          key: "id"
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      price: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Service_Kapsters');
  }
};