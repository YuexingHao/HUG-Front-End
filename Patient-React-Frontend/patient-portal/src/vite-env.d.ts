/// <reference types="vite/client" />
interface ImportMetaEnv {
    readonly VITE_COGNITO_PORTAL: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}