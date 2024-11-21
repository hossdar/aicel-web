/* eslint-disable @typescript-eslint/no-unused-vars */
namespace NodeJS {
    interface ProcessEnv {

        // Database
        DATABASE_URL: string;
        DATABASE_POOL_URL: string;

        // AUTH JS
        AUTH_URL: string;
        AUTH_SECRET: string;

        GOOGLE_CLIENT_ID: string;
        GOOGLE_CLIENT_SECRET: string;

        NEXT_PUBLIC_DEFAULT_LOGIN: string;
        NEXT_PUBLIC_DEFAULT_LOGIN_REDIRECT: string;
        WHITELIST_EMAIL_DOMAINS: string;

        // Cloudflare Turnstile
        NEXT_PUBLIC_TURNSTILE_SITE_KEY: string;
        TURNSTILE_SECRET_KEY: string;

        // Password Edge hasher / Query JWT Validation
        HASH_KEY: string;
        HASH_PHRASE: string;

        //Email Providers
        RESEND_API_KEY: string;
        MAILERSEND_API_KEY: string;
        BREVO_API_KEY: string;
        MAILJET_KEY_BASE64: string;

        EMAIL_FROM: string;
        VERIFICATION_TOKEN_TTL_MINUTES: number;
        EMAIL_FROM_NAME: string;
        EMAIL_FROM_EMAIL: string;
        EMAIL_BRAND_NAME: string;

        VERIFY_SUBJECT: string;
        VERIFY_TOKEN_URL: string;

        RESET_SUBJECT: string;
        RESET_TOKEN_URL: string; 

    }
}