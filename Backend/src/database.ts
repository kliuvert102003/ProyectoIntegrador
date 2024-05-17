import { createPool } from 'mysql2/promise';

export async function connect() {
    const connection = await createPool({
        host: 'localhost',
        user: 'root',
        password: 'garcia123',
        database: 'dashboard_db',
        connectionLimit: 10
    });
    return connection;
}

