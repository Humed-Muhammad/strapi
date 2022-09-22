"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ({ env }) => ({
    connection: {
        client: 'postgres',
        connection: {
            host: env('DATABASE_HOST', 'psql.humedfables.net'),
            port: env.int('DATABASE_PORT', 5432),
            database: env('DATABASE_NAME', 'sweetfoodies'),
            user: env('DATABASE_USERNAME', 'imagezillow'),
            password: env('DATABASE_PASSWORD', 'hum.'),
            ssl: env.bool('DATABASE_SSL', false),
        },
    },
});
