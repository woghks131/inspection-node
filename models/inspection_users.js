const Sequelize = require('sequelize');

class InspectionUsers extends Sequelize.Model {
    static initiate(sequelize) {
        InspectionUsers.init({
            user_num: {
                type: Sequelize.INTEGER,
                allowNull: false,
                primaryKey: true,
                comment: '사용자 고유번호',
            },
            user_id : {
                type: Sequelize.STRING(20),
                allowNull: true,
                comment: '사용자 아이디',
            },
            user_nm : {
                type: Sequelize.STRING(30),
                allowNull: true,
                comment: '사용자 이름',
            },
            password : {
                type: Sequelize.STRING(100),
                allowNull: false,
                comment: '사용자 비밀번호',
            },
            partner_id : {
                type: Sequelize.INTEGER,
                allowNull: true,
                defaultValue: 0,
                comment: '파트너 아이디',
            },
            grade_id : {
                type: Sequelize.INTEGER,
                allowNull: true,
                defaultValue: 0,
                comment: '사용자 등급',
            },
            login_session : {
                type: Sequelize.STRING(32),
                allowNull: false,
                comment: '로그인 세션',
            },
            user_num1 : {
                type: Sequelize.INTEGER,
                allowNull: false,
                comment: '유저 고유 번호',
            },
        }, {
            sequelize,
            timestamps: true,   //createdAt, updatedAt 컬럼 생성
            underscored: false,
            modelName: 'Inspection_users',
            tableName: 'inspection_users',
            paranoid: true, //deletedAt 컬럼 생성
            charset: 'utf8',
            collate: 'utf8_general_ci',
            indexes: [
                {
                  unique: false,
                  fields: ['user_num1']  // `user_num1`에 인덱스를 생성
                }
              ],
            comment: '로그인할 수 있는 id 들을 관리하는 테이블',
        });
    }

    static associate(db) {}
};

module.exports = InspectionUsers;