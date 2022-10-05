import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase("bober_jakub_4id.db");

export default class Database {
    static createTable() {
        db.transaction(tx => {
            tx.executeSql(
                "CREATE TABLE IF NOT EXISTS alarms (id integer primary key not null, hour text, minute text, selected text, days text);"
            );
        });
    }

    static add(hour, minute, on, days) {
        db.transaction(
            tx => {
                tx.executeSql(`
                INSERT
                INTO
                alarms
                (hour, minute, selected, days)
                values
                ('${hour}', '${minute}', '${on}', '${days}')`)
            }
        )
    }

    static getAll() {
        var query = "SELECT * FROM alarms";

        return new Promise((resolve, reject) => db.transaction((tx) => {
            tx.executeSql(query, [], (tx, results) => {
                resolve(JSON.stringify(results));
            }, function (tx, error) {
                reject(error);
            });
        }))
    }

    static delete(id) {
        db.transaction(
            tx => {
                tx.executeSql(`
                DELETE
                FROM
                alarms
                WHERE
                id = ${id}`)
            }
        )
    }

    static update(id, hour, minute, on, days) {
        db.transaction(
            tx => {
                tx.executeSql(`
                UPDATE
                alarms
                SET hour = ${hour}, minute = '${minute}', selected = ${on}, days = ${days}
                WHERE id = ${id}`)
            }
        )
    }
}