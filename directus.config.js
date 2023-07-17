
module.exports = function (env) {
    return {
        // Railway inputs
        ADMIN_EMAIL: env.ADMIN_EMAIL,
        ADMIN_PASSWORD: env.ADMIN_PASSWORD,
        KEY: env.KEY,
        SECRET: env.SECRET,

        // Reference: https://docs.railway.app/deploy/exposing-your-app
        PORT: env.PORT,

        // Reference: https://docs.railway.app/develop/variables#railway-provided-variables
        PUBLIC_URL: `http://0.0.0.0:${env.PORT}`,

        // Database variables from Railway PostgreSQL Plugin
        // Reference: https://docs.railway.app/plugins/postgresql
        DB_CLIENT: 'pg',
        DB_HOST: env.PGHOST,
        DB_PORT: env.PGPORT,
        DB_DATABASE: env.PGDATABASE,
        DB_USER: env.PGUSER,
        DB_PASSWORD: env.PGPASSWORD,

        STORAGE_S3_KEY:	AKIAWJE2OQ3YDIV4VXN4,
        STORAGE_S3_SECRET: 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,
        STORAGE_S3_BUCKET: charles-cantin,
        STORAGE_S3_REGION: eu-west-3,
        STORAGE_S3_ACL: private

        CORS_ENABLED: "true",
        CORS_ORIGIN: "true"
    };
};
